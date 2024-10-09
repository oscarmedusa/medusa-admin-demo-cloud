"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const joiner_config_1 = require("../joiner-config");
class InventoryModuleService extends (0, utils_1.MedusaService)({
    InventoryItem: _models_1.InventoryItem,
    InventoryLevel: _models_1.InventoryLevel,
    ReservationItem: _models_1.ReservationItem,
}) {
    constructor({ baseRepository, inventoryItemService, inventoryLevelService, reservationItemService, }, moduleDeclaration) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        super(...arguments);
        this.moduleDeclaration = moduleDeclaration;
        this.baseRepository_ = baseRepository;
        this.inventoryItemService_ = inventoryItemService;
        this.inventoryLevelService_ = inventoryLevelService;
        this.reservationItemService_ = reservationItemService;
    }
    __joinerConfig() {
        return joiner_config_1.joinerConfig;
    }
    async ensureInventoryLevels(data, options, context) {
        options ??= {};
        const validateQuantityAtLocation = options.validateQuantityAtLocation ?? false;
        const data_ = data.map((dt) => ({
            location_id: dt.location_id,
            inventory_item_id: dt.inventory_item_id,
        }));
        const [idData, itemLocationData] = (0, utils_1.partitionArray)(data_, ({ id }) => !!id);
        const inventoryLevels = await this.listInventoryLevels({
            $or: [
                { id: idData.filter(({ id }) => !!id).map((e) => e.id) },
                ...itemLocationData,
            ],
        }, {}, context);
        const inventoryLevelIdMap = new Map(inventoryLevels.map((level) => [level.id, level]));
        const inventoryLevelItemLocationMap = inventoryLevels.reduce((acc, curr) => {
            const inventoryLevelMap = acc.get(curr.inventory_item_id) ?? new Map();
            inventoryLevelMap.set(curr.location_id, curr);
            acc.set(curr.inventory_item_id, inventoryLevelMap);
            return acc;
        }, new Map());
        const missing = data.filter((item) => {
            if (item.id) {
                return !inventoryLevelIdMap.has(item.id);
            }
            return !inventoryLevelItemLocationMap
                .get(item.inventory_item_id)
                ?.has(item.location_id);
        });
        if (missing.length) {
            const error = missing
                .map((missing) => {
                if ("id" in missing) {
                    return `Inventory level with id ${missing.id} does not exist`;
                }
                return `Item ${missing.inventory_item_id} is not stocked at location ${missing.location_id}`;
            })
                .join(", ");
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, error);
        }
        if (validateQuantityAtLocation) {
            for (const item of data) {
                if (!!item.allow_backorder) {
                    continue;
                }
                const locations = inventoryLevelItemLocationMap.get(item.inventory_item_id);
                const level = locations?.get(item.location_id);
                if (utils_1.MathBN.lt(level.available_quantity, item.quantity)) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, `Not enough stock available for item ${item.inventory_item_id} at location ${item.location_id}`);
                }
            }
        }
        return inventoryLevels;
    }
    // reserved_quantity should solely be handled through creating & updating reservation items
    // We sanitize the inputs here to prevent that from being used to update it
    sanitizeInventoryLevelInput(input) {
        return input.map((input) => {
            const { reserved_quantity, ...validInput } = input;
            return validInput;
        });
    }
    sanitizeInventoryItemInput(input) {
        return input.map((input) => {
            const { location_levels, ...validInput } = input;
            return validInput;
        });
    }
    async createReservationItems(input, context = {}) {
        const toCreate = Array.isArray(input) ? input : [input];
        const created = await this.createReservationItems_(toCreate, context);
        context.messageAggregator?.saveRawMessageData(created.map((reservationItem) => ({
            eventName: utils_1.InventoryEvents.RESERVATION_ITEM_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "reservation-item",
            context,
            data: { id: reservationItem.id },
        })));
        const serializedReservations = await this.baseRepository_.serialize(created, {
            populate: true,
        });
        return Array.isArray(input)
            ? serializedReservations
            : serializedReservations[0];
    }
    async createReservationItems_(input, context = {}) {
        const inventoryLevels = await this.ensureInventoryLevels(input.map(({ location_id, inventory_item_id, quantity, allow_backorder }) => ({
            location_id,
            inventory_item_id,
            quantity,
            allow_backorder,
        })), {
            validateQuantityAtLocation: true,
        }, context);
        const created = await this.reservationItemService_.create(input, context);
        const adjustments = input.reduce((acc, curr) => {
            const locationMap = acc.get(curr.inventory_item_id) ?? new Map();
            const adjustment = locationMap.get(curr.location_id) ?? 0;
            locationMap.set(curr.location_id, utils_1.MathBN.add(adjustment, curr.quantity));
            acc.set(curr.inventory_item_id, locationMap);
            return acc;
        }, new Map());
        const levelAdjustmentUpdates = inventoryLevels.map((level) => {
            const adjustment = adjustments
                .get(level.inventory_item_id)
                ?.get(level.location_id);
            if (!adjustment) {
                return;
            }
            return {
                id: level.id,
                reserved_quantity: utils_1.MathBN.add(level.reserved_quantity, adjustment),
            };
        });
        await this.inventoryLevelService_.update(levelAdjustmentUpdates, context);
        return created;
    }
    async createInventoryItems(input, context = {}) {
        const toCreate = this.sanitizeInventoryItemInput(Array.isArray(input) ? input : [input]);
        const result = await this.createInventoryItems_(toCreate, context);
        context.messageAggregator?.saveRawMessageData(result.map((inventoryItem) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_ITEM_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "inventory-item",
            context,
            data: { id: inventoryItem.id },
        })));
        const serializedItems = await this.baseRepository_.serialize(result, {
            populate: true,
        });
        return Array.isArray(input) ? serializedItems : serializedItems[0];
    }
    async createInventoryItems_(input, context = {}) {
        return await this.inventoryItemService_.create(input);
    }
    async createInventoryLevels(input, context = {}) {
        const toCreate = this.sanitizeInventoryLevelInput(Array.isArray(input) ? input : [input]);
        const created = await this.createInventoryLevels_(toCreate, context);
        context.messageAggregator?.saveRawMessageData(created.map((inventoryLevel) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "inventory-level",
            context,
            data: { id: inventoryLevel.id },
        })));
        const serialized = await this.baseRepository_.serialize(created, {
            populate: true,
        });
        return Array.isArray(input) ? serialized : serialized[0];
    }
    async createInventoryLevels_(input, context = {}) {
        return await this.inventoryLevelService_.create(input, context);
    }
    async updateInventoryItems(input, context = {}) {
        const updates = this.sanitizeInventoryItemInput(Array.isArray(input) ? input : [input]);
        const result = await this.updateInventoryItems_(updates, context);
        context.messageAggregator?.saveRawMessageData(result.map((inventoryItem) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_ITEM_UPDATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.UPDATED,
            object: "inventory-item",
            context,
            data: { id: inventoryItem.id },
        })));
        const serializedItems = await this.baseRepository_.serialize(result, {
            populate: true,
        });
        return Array.isArray(input) ? serializedItems : serializedItems[0];
    }
    async updateInventoryItems_(input, context = {}) {
        return await this.inventoryItemService_.update(input, context);
    }
    async deleteInventoryItemLevelByLocationId(locationId, context = {}) {
        const result = await this.inventoryLevelService_.softDelete({ location_id: locationId }, context);
        context.messageAggregator?.saveRawMessageData(result[0].map((inventoryLevel) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_DELETED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.DELETED,
            object: "inventory-level",
            context,
            data: { id: inventoryLevel.id },
        })));
        return result;
    }
    /**
     * Deletes an inventory level
     * @param inventoryItemId - the id of the inventory item associated with the level
     * @param locationId - the id of the location associated with the level
     * @param context
     */
    async deleteInventoryLevel(inventoryItemId, locationId, context = {}) {
        const [inventoryLevel] = await this.inventoryLevelService_.list({ inventory_item_id: inventoryItemId, location_id: locationId }, { take: 1 }, context);
        context.messageAggregator?.saveRawMessageData({
            eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_DELETED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.DELETED,
            object: "inventory-level",
            context,
            data: { id: inventoryLevel.id },
        });
        if (!inventoryLevel) {
            return;
        }
        return await this.inventoryLevelService_.delete(inventoryLevel.id, context);
    }
    async updateInventoryLevels(updates, context = {}) {
        const input = this.sanitizeInventoryLevelInput(Array.isArray(updates) ? updates : [updates]);
        const levels = await this.updateInventoryLevels_(input, context);
        context.messageAggregator?.saveRawMessageData(levels.map((inventoryLevel) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_UPDATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.UPDATED,
            object: "inventory-level",
            context,
            data: { id: inventoryLevel.id },
        })));
        const updatedLevels = await this.baseRepository_.serialize(levels, {
            populate: true,
        });
        return Array.isArray(updates) ? updatedLevels : updatedLevels[0];
    }
    async updateInventoryLevels_(updates, context = {}) {
        const inventoryLevels = await this.ensureInventoryLevels(updates.map(({ location_id, inventory_item_id }) => ({
            location_id,
            inventory_item_id,
        })), undefined, context);
        const levelMap = inventoryLevels.reduce((acc, curr) => {
            const inventoryLevelMap = acc.get(curr.inventory_item_id) ?? new Map();
            inventoryLevelMap.set(curr.location_id, curr.id);
            acc.set(curr.inventory_item_id, inventoryLevelMap);
            return acc;
        }, new Map());
        return await this.inventoryLevelService_.update(updates.map((update) => {
            const id = levelMap
                .get(update.inventory_item_id)
                .get(update.location_id);
            return { id, ...update };
        }), context);
    }
    async updateReservationItems(input, context = {}) {
        const update = Array.isArray(input) ? input : [input];
        const result = await this.updateReservationItems_(update, context);
        context.messageAggregator?.saveRawMessageData(result.map((reservationItem) => ({
            eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_UPDATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.UPDATED,
            object: "reservation-item",
            context,
            data: { id: reservationItem.id },
        })));
        const serialized = await this.baseRepository_.serialize(result, {
            populate: true,
        });
        return Array.isArray(input) ? serialized : serialized[0];
    }
    async updateReservationItems_(input, context = {}) {
        const ids = input.map((u) => u.id);
        const reservationItems = await this.listReservationItems({ id: ids }, {}, context);
        const diff = (0, utils_1.arrayDifference)(ids, reservationItems.map((i) => i.id));
        if (diff.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Reservation item with id ${diff.join(", ")} not found`);
        }
        const reservationMap = new Map(reservationItems.map((r) => [r.id, r]));
        const adjustments = input.reduce((acc, update) => {
            const reservation = reservationMap.get(update.id);
            const locationMap = acc.get(reservation.inventory_item_id) ?? new Map();
            if ((0, utils_1.isDefined)(update.location_id) &&
                update.location_id !== reservation.location_id) {
                const reservationLocationAdjustment = locationMap.get(reservation.location_id) ?? 0;
                locationMap.set(reservation.location_id, utils_1.MathBN.sub(reservationLocationAdjustment, reservation.quantity));
                const updateLocationAdjustment = locationMap.get(update.location_id) ?? 0;
                locationMap.set(update.location_id, utils_1.MathBN.add(updateLocationAdjustment, update.quantity || reservation.quantity));
            }
            else if ((0, utils_1.isDefined)(update.quantity) &&
                !utils_1.MathBN.eq(update.quantity, reservation.quantity)) {
                const locationAdjustment = locationMap.get(reservation.location_id) ?? 0;
                locationMap.set(reservation.location_id, utils_1.MathBN.add(locationAdjustment, utils_1.MathBN.sub(update.quantity, reservation.quantity)));
            }
            acc.set(reservation.inventory_item_id, locationMap);
            return acc;
        }, new Map());
        const availabilityData = input.map((data) => {
            const reservation = reservationMap.get(data.id);
            return {
                inventory_item_id: reservation.inventory_item_id,
                location_id: data.location_id ?? reservation.location_id,
                quantity: data.quantity ?? reservation.quantity,
                allow_backorder: data.allow_backorder || reservation.allow_backorder || false,
            };
        });
        const inventoryLevels = await this.ensureInventoryLevels(availabilityData, {
            validateQuantityAtLocation: true,
        }, context);
        const result = await this.reservationItemService_.update(input, context);
        const levelAdjustmentUpdates = inventoryLevels
            .map((level) => {
            const adjustment = adjustments
                .get(level.inventory_item_id)
                ?.get(level.location_id);
            if (!adjustment) {
                return;
            }
            return {
                id: level.id,
                reserved_quantity: utils_1.MathBN.add(level.reserved_quantity, adjustment),
            };
        })
            .filter(Boolean);
        await this.inventoryLevelService_.update(levelAdjustmentUpdates, context);
        return result;
    }
    // @ts-expect-error
    async softDeleteReservationItems(ids, config, context = {}) {
        const reservations = await super.listReservationItems({ id: ids }, {}, context);
        const result = await super.softDeleteReservationItems({ id: ids }, config, context);
        await this.adjustInventoryLevelsForReservationsDeletion(reservations, context);
        result;
    }
    // @ts-expect-error
    async restoreReservationItems(ids, config, context = {}) {
        const reservations = await super.listReservationItems({ id: ids }, {}, context);
        await super.restoreReservationItems({ id: ids }, config, context);
        await this.adjustInventoryLevelsForReservationsRestore(reservations, context);
    }
    async deleteReservationItemByLocationId(locationId, context = {}) {
        const reservations = await this.listReservationItems({ location_id: locationId }, {}, context);
        await this.reservationItemService_.softDelete({ location_id: locationId }, context);
        context.messageAggregator?.saveRawMessageData(reservations.map((reservationItem) => ({
            eventName: utils_1.InventoryEvents.RESERVATION_ITEM_DELETED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.DELETED,
            object: "reservation-item",
            context,
            data: { id: reservationItem.id },
        })));
        await this.adjustInventoryLevelsForReservationsDeletion(reservations, context);
    }
    /**
     * Deletes reservation items by line item
     * @param lineItemId - the id of the line item associated with the reservation item
     * @param context
     */
    async deleteReservationItemsByLineItem(lineItemId, context = {}) {
        const reservations = await this.listReservationItems({ line_item_id: lineItemId }, {}, context);
        await this.reservationItemService_.softDelete({ line_item_id: lineItemId }, context);
        await this.adjustInventoryLevelsForReservationsDeletion(reservations, context);
        context.messageAggregator?.saveRawMessageData(reservations.map((reservationItem) => ({
            eventName: utils_1.InventoryEvents.RESERVATION_ITEM_DELETED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.DELETED,
            object: "reservation-item",
            context,
            data: { id: reservationItem.id },
        })));
    }
    /**
     * Deletes reservation items by line item
     * @param lineItemId - the id of the line item associated with the reservation item
     * @param context
     */
    async restoreReservationItemsByLineItem(lineItemId, context = {}) {
        const reservations = await this.listReservationItems({ line_item_id: lineItemId }, {}, context);
        await this.reservationItemService_.restore({ line_item_id: lineItemId }, context);
        await this.adjustInventoryLevelsForReservationsRestore(reservations, context);
        context.messageAggregator?.saveRawMessageData(reservations.map((reservationItem) => ({
            eventName: utils_1.InventoryEvents.RESERVATION_ITEM_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "reservation-item",
            context,
            data: { id: reservationItem.id },
        })));
    }
    async adjustInventory(inventoryItemIdOrData, locationId, adjustment, context = {}) {
        let all = inventoryItemIdOrData;
        if ((0, utils_1.isString)(inventoryItemIdOrData)) {
            all = [
                {
                    inventoryItemId: inventoryItemIdOrData,
                    locationId,
                    adjustment,
                },
            ];
        }
        const results = [];
        for (const data of all) {
            const result = await this.adjustInventory_(data.inventoryItemId, data.locationId, data.adjustment, context);
            results.push(result);
            context.messageAggregator?.saveRawMessageData({
                eventName: utils_1.InventoryEvents.INVENTORY_LEVEL_UPDATED,
                source: this.constructor.name,
                action: utils_1.CommonEvents.UPDATED,
                object: "inventory-level",
                context,
                data: { id: result.id },
            });
        }
        return await this.baseRepository_.serialize(Array.isArray(inventoryItemIdOrData) ? results : results[0], {
            populate: true,
        });
    }
    async adjustInventory_(inventoryItemId, locationId, adjustment, context = {}) {
        const inventoryLevel = await this.retrieveInventoryLevelByItemAndLocation(inventoryItemId, locationId, context);
        const result = await this.inventoryLevelService_.update({
            id: inventoryLevel.id,
            stocked_quantity: utils_1.MathBN.add(inventoryLevel.stocked_quantity, adjustment),
        }, context);
        return result[0];
    }
    async retrieveInventoryLevelByItemAndLocation(inventoryItemId, locationId, context = {}) {
        const [inventoryLevel] = await this.listInventoryLevels({ inventory_item_id: inventoryItemId, location_id: locationId }, {}, context);
        if (!inventoryLevel) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Inventory level for item ${inventoryItemId} and location ${locationId} not found`);
        }
        return inventoryLevel;
    }
    /**
     * Retrieves the available quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The available quantity
     * @throws when the inventory item is not found
     */
    async retrieveAvailableQuantity(inventoryItemId, locationIds, context = {}) {
        if (locationIds.length === 0) {
            return new utils_1.BigNumber(0);
        }
        await this.inventoryItemService_.retrieve(inventoryItemId, {
            select: ["id"],
        }, context);
        const availableQuantity = await this.inventoryLevelService_.getAvailableQuantity(inventoryItemId, locationIds, context);
        return availableQuantity;
    }
    /**
     * Retrieves the stocked quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The stocked quantity
     * @throws when the inventory item is not found
     */
    async retrieveStockedQuantity(inventoryItemId, locationIds, context = {}) {
        if (locationIds.length === 0) {
            return new utils_1.BigNumber(0);
        }
        // Throws if item does not exist
        await this.inventoryItemService_.retrieve(inventoryItemId, {
            select: ["id"],
        }, context);
        const stockedQuantity = await this.inventoryLevelService_.retrieveStockedQuantity(inventoryItemId, locationIds, context);
        return stockedQuantity;
    }
    /**
     * Retrieves the reserved quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The reserved quantity
     * @throws when the inventory item is not found
     */
    async retrieveReservedQuantity(inventoryItemId, locationIds, context = {}) {
        // Throws if item does not exist
        await this.inventoryItemService_.retrieve(inventoryItemId, {
            select: ["id"],
        }, context);
        if (locationIds.length === 0) {
            return new utils_1.BigNumber(0);
        }
        const reservedQuantity = await this.inventoryLevelService_.getReservedQuantity(inventoryItemId, locationIds, context);
        return reservedQuantity;
    }
    /**
     * Confirms whether there is sufficient inventory for a given quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param quantity - the quantity to check
     * @param context
     * @return Whether there is sufficient inventory
     */
    async confirmInventory(inventoryItemId, locationIds, quantity, context = {}) {
        const availableQuantity = await this.retrieveAvailableQuantity(inventoryItemId, locationIds, context);
        return utils_1.MathBN.gte(availableQuantity, quantity);
    }
    async adjustInventoryLevelsForReservationsDeletion(reservations, context) {
        await this.adjustInventoryLevelsForReservations_(reservations, true, context);
    }
    async adjustInventoryLevelsForReservationsRestore(reservations, context) {
        await this.adjustInventoryLevelsForReservations_(reservations, false, context);
    }
    async adjustInventoryLevelsForReservations_(reservations, isDelete, context) {
        const multiplier = isDelete ? -1 : 1;
        const inventoryLevels = await this.ensureInventoryLevels(reservations.map((r) => ({
            inventory_item_id: r.inventory_item_id,
            location_id: r.location_id,
        })), undefined, context);
        const inventoryLevelAdjustments = reservations.reduce((acc, curr) => {
            const inventoryLevelMap = acc.get(curr.inventory_item_id) ?? new Map();
            const adjustment = inventoryLevelMap.has(curr.location_id)
                ? utils_1.MathBN.add(inventoryLevelMap.get(curr.location_id), utils_1.MathBN.mult(curr.quantity, multiplier))
                : utils_1.MathBN.mult(curr.quantity, multiplier);
            inventoryLevelMap.set(curr.location_id, adjustment);
            acc.set(curr.inventory_item_id, inventoryLevelMap);
            return acc;
        }, new Map());
        const levelAdjustmentUpdates = inventoryLevels.map((level) => {
            const adjustment = inventoryLevelAdjustments
                .get(level.inventory_item_id)
                ?.get(level.location_id);
            if (!adjustment) {
                return;
            }
            return {
                id: level.id,
                reserved_quantity: utils_1.MathBN.add(level.reserved_quantity, adjustment),
            };
        });
        await this.inventoryLevelService_.update(levelAdjustmentUpdates, context);
    }
}
exports.default = InventoryModuleService;
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createReservationItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createReservationItems_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createInventoryItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createInventoryItems_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createInventoryLevels", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "createInventoryLevels_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateInventoryItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateInventoryItems_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "deleteInventoryItemLevelByLocationId", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "deleteInventoryLevel", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateInventoryLevels", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateInventoryLevels_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateReservationItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "updateReservationItems_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)()
    // @ts-expect-error
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "softDeleteReservationItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)()
    // @ts-expect-error
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "restoreReservationItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "deleteReservationItemByLocationId", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "deleteReservationItemsByLineItem", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "restoreReservationItemsByLineItem", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(3, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "adjustInventory", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(3, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "adjustInventory_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "retrieveInventoryLevelByItemAndLocation", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "retrieveAvailableQuantity", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "retrieveStockedQuantity", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "retrieveReservedQuantity", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(3, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object, Object]),
    __metadata("design:returntype", Promise)
], InventoryModuleService.prototype, "confirmInventory", null);
//# sourceMappingURL=inventory-module.js.map