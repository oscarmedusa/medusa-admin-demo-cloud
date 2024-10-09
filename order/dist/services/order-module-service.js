"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@medusajs/framework/types");
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const joiner_config_1 = require("../joiner-config");
const utils_2 = require("../utils");
const BundledActions = __importStar(require("./actions"));
const generateMethodForModels = {
    Order: _models_1.Order,
    OrderAddress: _models_1.OrderAddress,
    OrderLineItem: _models_1.OrderLineItem,
    OrderLineItemAdjustment: _models_1.OrderLineItemAdjustment,
    OrderLineItemTaxLine: _models_1.OrderLineItemTaxLine,
    OrderShippingMethod: _models_1.OrderShippingMethod,
    OrderShippingMethodAdjustment: _models_1.OrderShippingMethodAdjustment,
    OrderShippingMethodTaxLine: _models_1.OrderShippingMethodTaxLine,
    OrderTransaction: _models_1.OrderTransaction,
    OrderChange: _models_1.OrderChange,
    OrderChangeAction: _models_1.OrderChangeAction,
    OrderItem: _models_1.OrderItem,
    OrderSummary: _models_1.OrderSummary,
    OrderShipping: _models_1.OrderShipping,
    ReturnReason: _models_1.ReturnReason,
    Return: _models_1.Return,
    ReturnItem: _models_1.ReturnItem,
    OrderClaim: _models_1.OrderClaim,
    OrderClaimItem: _models_1.OrderClaimItem,
    OrderClaimItemImage: _models_1.OrderClaimItemImage,
    OrderExchange: _models_1.OrderExchange,
    OrderExchangeItem: _models_1.OrderExchangeItem,
};
// TODO: rm template args here, keep it for later to not collide with carlos work at least as little as possible
class OrderModuleService extends utils_1.ModulesSdkUtils.MedusaService(generateMethodForModels) {
    constructor({ baseRepository, orderService, orderAddressService, orderLineItemService, orderShippingMethodAdjustmentService, orderShippingMethodService, orderLineItemAdjustmentService, orderShippingMethodTaxLineService, orderLineItemTaxLineService, orderTransactionService, orderChangeService, orderChangeActionService, orderItemService, orderSummaryService, orderShippingService, returnReasonService, returnService, returnItemService, orderClaimService, orderExchangeService, }, moduleDeclaration) {
        // @ts-ignore
        super(...arguments);
        this.moduleDeclaration = moduleDeclaration;
        this.baseRepository_ = baseRepository;
        this.orderService_ = orderService;
        this.orderAddressService_ = orderAddressService;
        this.orderLineItemService_ = orderLineItemService;
        this.orderShippingMethodAdjustmentService_ =
            orderShippingMethodAdjustmentService;
        this.orderShippingMethodService_ = orderShippingMethodService;
        this.orderLineItemAdjustmentService_ = orderLineItemAdjustmentService;
        this.orderShippingMethodTaxLineService_ = orderShippingMethodTaxLineService;
        this.orderLineItemTaxLineService_ = orderLineItemTaxLineService;
        this.orderTransactionService_ = orderTransactionService;
        this.orderChangeService_ = orderChangeService;
        this.orderChangeActionService_ = orderChangeActionService;
        this.orderItemService_ = orderItemService;
        this.orderSummaryService_ = orderSummaryService;
        this.orderShippingService_ = orderShippingService;
        this.returnReasonService_ = returnReasonService;
        this.returnService_ = returnService;
        this.returnItemService_ = returnItemService;
        this.orderClaimService_ = orderClaimService;
        this.orderExchangeService_ = orderExchangeService;
    }
    __joinerConfig() {
        return joiner_config_1.joinerConfig;
    }
    shouldIncludeTotals(config) {
        const totalFields = [
            "total",
            "subtotal",
            "tax_total",
            "discount_total",
            "discount_tax_total",
            "original_total",
            "original_tax_total",
            "item_total",
            "item_subtotal",
            "item_tax_total",
            "original_item_total",
            "original_item_subtotal",
            "original_item_tax_total",
            "shipping_total",
            "shipping_subtotal",
            "shipping_tax_total",
            "original_shipping_tax_total",
            "original_shipping_subtotal",
            "original_shipping_total",
        ];
        const includeTotals = (config?.select ?? []).some((field) => totalFields.includes(field));
        if (includeTotals) {
            this.addRelationsToCalculateTotals(config, totalFields);
        }
        return includeTotals;
    }
    addRelationsToCalculateTotals(config, totalFields) {
        config.relations ??= [];
        config.select ??= [];
        const requiredRelationsForTotals = [
            "items",
            "items.tax_lines",
            "items.adjustments",
            "shipping_methods",
            "shipping_methods.tax_lines",
            "shipping_methods.adjustments",
        ];
        config.relations = (0, utils_1.deduplicate)([
            ...config.relations,
            ...requiredRelationsForTotals,
        ]);
        config.select = config.select.filter((field) => {
            return (!requiredRelationsForTotals.some((val) => val.startsWith(field)) && !totalFields.includes(field));
        });
    }
    // @ts-expect-error
    async retrieveOrder(id, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const order = await super.retrieveOrder(id, config, sharedContext);
        const orderChange = await this.getActiveOrderChange_(order.id, false, sharedContext);
        order.order_change = orderChange;
        return (0, utils_2.formatOrder)(order, {
            entity: _models_1.Order,
            includeTotals,
        });
    }
    // @ts-expect-error
    async listOrders(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const orders = await super.listOrders(filters, config, sharedContext);
        return (0, utils_2.formatOrder)(orders, {
            entity: _models_1.Order,
            includeTotals,
        });
    }
    // @ts-expect-error
    async listAndCountOrders(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const [orders, count] = await super.listAndCountOrders(filters, config, sharedContext);
        return [
            (0, utils_2.formatOrder)(orders, {
                entity: _models_1.Order,
                includeTotals,
            }),
            count,
        ];
    }
    // @ts-ignore
    async retrieveReturn(id, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrder = await super.retrieveReturn(id, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrder, {
            entity: _models_1.Return,
            includeTotals,
        });
    }
    // @ts-ignore
    async listReturns(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrders = await super.listReturns(filters, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrders, {
            entity: _models_1.Return,
            includeTotals,
        });
    }
    // @ts-ignore
    async listAndCountReturns(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const [returnOrders, count] = await super.listAndCountReturns(filters, config, sharedContext);
        return [
            (0, utils_2.formatOrder)(returnOrders, {
                entity: _models_1.Return,
                includeTotals,
            }),
            count,
        ];
    }
    // @ts-ignore
    async retrieveOrderClaim(id, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrder = await super.retrieveOrderClaim(id, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrder, {
            entity: _models_1.OrderClaim,
            includeTotals,
        });
    }
    // @ts-ignore
    async listOrderClaims(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrders = await super.listOrderClaims(filters, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrders, {
            entity: _models_1.OrderClaim,
            includeTotals,
        });
    }
    // @ts-ignore
    async listAndCountOrderClaims(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const [returnOrders, count] = await super.listAndCountOrderClaims(filters, config, sharedContext);
        return [
            (0, utils_2.formatOrder)(returnOrders, {
                entity: _models_1.OrderClaim,
                includeTotals,
            }),
            count,
        ];
    }
    // @ts-ignore
    async retrieveOrderExchange(id, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrder = await super.retrieveOrderExchange(id, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrder, {
            entity: _models_1.OrderExchange,
            includeTotals,
        });
    }
    // @ts-ignore
    async listOrderExchanges(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const returnOrders = await super.listOrderExchanges(filters, config, sharedContext);
        return (0, utils_2.formatOrder)(returnOrders, {
            entity: _models_1.OrderExchange,
            includeTotals,
        });
    }
    // @ts-ignore
    async listAndCountOrderExchanges(filters, config, sharedContext) {
        config ??= {};
        const includeTotals = this.shouldIncludeTotals(config);
        const [returnOrders, count] = await super.listAndCountOrderExchanges(filters, config, sharedContext);
        return [
            (0, utils_2.formatOrder)(returnOrders, {
                entity: _models_1.OrderExchange,
                includeTotals,
            }),
            count,
        ];
    }
    async createOrders(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const orders = await this.createOrders_(input, sharedContext);
        const result = await this.listOrders({
            id: orders.map((p) => p.id),
        }, {
            relations: [
                "shipping_address",
                "billing_address",
                "summary",
                "items",
                "items.tax_lines",
                "items.adjustments",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
                "transactions",
            ],
        }, sharedContext);
        return (Array.isArray(data) ? result : result[0]);
    }
    async createOrders_(data, sharedContext = {}) {
        const lineItemsToCreate = [];
        const createdOrders = [];
        for (const { items, shipping_methods, ...order } of data) {
            const ord = order;
            const shippingMethods = shipping_methods?.map((sm) => {
                return {
                    shipping_method: { ...sm },
                };
            });
            ord.shipping_methods = shippingMethods;
            const orderWithTotals = (0, utils_1.decorateCartTotals)({
                ...ord,
                shipping_methods,
                items,
            });
            const calculated = (0, utils_2.calculateOrderChange)({
                order: orderWithTotals,
                actions: [],
                transactions: order.transactions,
            });
            (0, utils_1.createRawPropertiesFromBigNumber)(calculated);
            ord.summary = {
                totals: calculated.summary,
            };
            const created = await this.orderService_.create(ord, sharedContext);
            createdOrders.push(created);
            if (items?.length) {
                const orderItems = items.map((item) => {
                    return {
                        ...item,
                        order_id: created.id,
                    };
                });
                lineItemsToCreate.push(...orderItems);
            }
        }
        if (lineItemsToCreate.length) {
            await this.createOrderLineItemsBulk_(lineItemsToCreate, sharedContext);
        }
        return createdOrders;
    }
    async updateOrders(dataOrIdOrSelector, data, sharedContext = {}) {
        const result = await this.updateOrders_(dataOrIdOrSelector, data, sharedContext);
        const serializedResult = await this.baseRepository_.serialize(result, {
            populate: true,
        });
        return (0, utils_1.isString)(dataOrIdOrSelector) ? serializedResult[0] : serializedResult;
    }
    async updateOrders_(dataOrIdOrSelector, data, sharedContext = {}) {
        let toUpdate = [];
        if ((0, utils_1.isString)(dataOrIdOrSelector)) {
            toUpdate = [
                {
                    id: dataOrIdOrSelector,
                    ...data,
                },
            ];
        }
        else if (Array.isArray(dataOrIdOrSelector)) {
            toUpdate = dataOrIdOrSelector;
        }
        else {
            const orders = await this.orderService_.list({ ...dataOrIdOrSelector }, { select: ["id"] }, sharedContext);
            toUpdate = orders.map((order) => {
                return {
                    ...data,
                    id: order.id,
                };
            });
        }
        const result = await this.orderService_.update(toUpdate, sharedContext);
        return result;
    }
    async createOrderLineItems(orderIdOrData, data, sharedContext = {}) {
        let items = [];
        if ((0, utils_1.isString)(orderIdOrData)) {
            items = await this.createOrderLineItems_(orderIdOrData, data, sharedContext);
        }
        else {
            const data = Array.isArray(orderIdOrData)
                ? orderIdOrData
                : [orderIdOrData];
            const allOrderIds = data.map((dt) => dt.order_id);
            const order = await this.listOrders({ id: allOrderIds }, { select: ["id", "version"] }, sharedContext);
            const mapOrderVersion = order.reduce((acc, curr) => {
                acc[curr.id] = curr.version;
                return acc;
            }, {});
            const lineItems = data.map((dt) => {
                return {
                    ...dt,
                    version: mapOrderVersion[dt.order_id],
                };
            });
            items = await this.createOrderLineItemsBulk_(lineItems, sharedContext);
        }
        return await this.baseRepository_.serialize(items, {
            populate: true,
        });
    }
    async createOrderLineItems_(orderId, items, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id", "version"] }, sharedContext);
        const toUpdate = items.map((item) => {
            return {
                ...item,
                order_id: order.id,
                version: order.version,
            };
        });
        return await this.createOrderLineItemsBulk_(toUpdate, sharedContext);
    }
    async createOrderLineItemsBulk_(data, sharedContext = {}) {
        const orderItemToCreate = [];
        const lineItems = await this.orderLineItemService_.create(data, sharedContext);
        for (let i = 0; i < lineItems.length; i++) {
            const item = lineItems[i];
            const toCreate = data[i];
            if (toCreate.order_id) {
                orderItemToCreate.push({
                    order_id: toCreate.order_id,
                    version: toCreate.version ?? 1,
                    item_id: item.id,
                    quantity: toCreate.quantity,
                });
            }
        }
        if (orderItemToCreate.length) {
            await this.orderItemService_.create(orderItemToCreate, sharedContext);
        }
        return lineItems;
    }
    async updateOrderLineItems(lineItemIdOrDataOrSelector, data, sharedContext = {}) {
        let items = [];
        if ((0, utils_1.isString)(lineItemIdOrDataOrSelector)) {
            const item = await this.updateOrderLineItem_(lineItemIdOrDataOrSelector, data, sharedContext);
            return await this.baseRepository_.serialize(item, {
                populate: true,
            });
        }
        const toUpdate = Array.isArray(lineItemIdOrDataOrSelector)
            ? lineItemIdOrDataOrSelector
            : [
                {
                    selector: lineItemIdOrDataOrSelector,
                    data: data,
                },
            ];
        items = await this.updateOrderLineItemsWithSelector_(toUpdate, sharedContext);
        return await this.baseRepository_.serialize(items, {
            populate: true,
        });
    }
    async updateOrderLineItem_(lineItemId, data, sharedContext = {}) {
        const [item] = await this.orderLineItemService_.update([{ id: lineItemId, ...data }], sharedContext);
        if ("quantity" in data) {
            await this.updateOrderItemWithSelector_([
                {
                    selector: { item_id: item.id },
                    data,
                },
            ], sharedContext);
        }
        return item;
    }
    async updateOrderLineItemsWithSelector_(updates, sharedContext = {}) {
        let toUpdate = [];
        const detailsToUpdate = [];
        for (const { selector, data } of updates) {
            const items = await this.listOrderLineItems({ ...selector }, {}, sharedContext);
            items.forEach((item) => {
                toUpdate.push({
                    ...data,
                    id: item.id,
                });
                if ("quantity" in data) {
                    detailsToUpdate.push({
                        selector: { item_id: item.id },
                        data,
                    });
                }
            });
        }
        if (detailsToUpdate.length) {
            await this.updateOrderItemWithSelector_(detailsToUpdate, sharedContext);
        }
        return await this.orderLineItemService_.update(toUpdate, sharedContext);
    }
    async updateOrderItem(orderItemIdOrDataOrSelector, data, sharedContext = {}) {
        let items = [];
        if ((0, utils_1.isString)(orderItemIdOrDataOrSelector)) {
            const item = await this.updateOrderItem_(orderItemIdOrDataOrSelector, data, sharedContext);
            return await this.baseRepository_.serialize(item, {
                populate: true,
            });
        }
        const toUpdate = Array.isArray(orderItemIdOrDataOrSelector)
            ? orderItemIdOrDataOrSelector
            : [
                {
                    selector: orderItemIdOrDataOrSelector,
                    data: data,
                },
            ];
        items = await this.updateOrderItemWithSelector_(toUpdate, sharedContext);
        return await this.baseRepository_.serialize(items, {
            populate: true,
        });
    }
    async updateOrderItem_(orderItemId, data, sharedContext = {}) {
        const [detail] = await this.orderItemService_.update([{ id: orderItemId, ...data }], sharedContext);
        return detail;
    }
    async updateOrderItemWithSelector_(updates, sharedContext = {}) {
        let toUpdate = [];
        for (const { selector, data } of updates) {
            const details = await this.listOrderItems({ ...selector }, {}, sharedContext);
            details.forEach((detail) => {
                toUpdate.push({
                    ...data,
                    id: detail.id,
                });
            });
        }
        return await this.orderItemService_.update(toUpdate, sharedContext);
    }
    async createOrderShippingMethods(orderIdOrData, data, sharedContext = {}) {
        let methods;
        if ((0, utils_1.isString)(orderIdOrData)) {
            methods = await this.createOrderShippingMethods_(orderIdOrData, data, sharedContext);
        }
        else {
            const data = Array.isArray(orderIdOrData)
                ? orderIdOrData
                : [orderIdOrData];
            const allOrderIds = data.map((dt) => dt.order_id);
            const order = await this.listOrders({ id: allOrderIds }, { select: ["id", "version"] }, sharedContext);
            const mapOrderVersion = order.reduce((acc, curr) => {
                acc[curr.id] = curr.version;
                return acc;
            }, {});
            const orderShippingMethodData = data.map((dt) => {
                return {
                    shipping_method: dt,
                    order_id: dt.order_id,
                    return_id: dt.return_id,
                    claim_id: dt.claim_id,
                    exchange_id: dt.exchange_id,
                    version: dt.version ?? mapOrderVersion[dt.order_id],
                };
            });
            methods = await this.createOrderShippingMethodsBulk_(orderShippingMethodData, sharedContext);
        }
        return await this.baseRepository_.serialize(methods, { populate: true });
    }
    async createOrderShippingMethods_(orderId, data, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id", "version"] }, sharedContext);
        const methods = data.map((methodData) => {
            return {
                shipping_method: methodData,
                order_id: order.id,
                return_id: methodData.return_id,
                claim_id: methodData.claim_id,
                exchange_id: methodData.exchange_id,
                version: methodData.version ?? order.version ?? 1,
            };
        });
        return await this.createOrderShippingMethodsBulk_(methods, sharedContext);
    }
    async createOrderShippingMethodsBulk_(data, sharedContext = {}) {
        const sm = await this.orderShippingService_.create(data, sharedContext);
        return sm.map((s) => s.shipping_method);
    }
    // @ts-ignore
    async softDeleteOrderShippingMethods(ids, config, sharedContext) {
        const rel = await super.listOrderShippings({
            shipping_method_id: ids,
        }, {
            select: ["id"],
        }, sharedContext);
        const orderShippingIds = rel.map((r) => r.id);
        const [returned] = await (0, utils_1.promiseAll)([
            super.softDeleteOrderShippingMethods(ids, config, sharedContext),
            super.softDeleteOrderShippings(orderShippingIds, config, sharedContext),
        ]);
        return returned;
    }
    // @ts-ignore
    async restoreOrderShippingMethods(ids, config, sharedContext) {
        const rel = await super.listOrderShippings({
            shipping_method_id: ids,
        }, {
            select: ["id"],
        }, sharedContext);
        const shippingIds = rel.map((r) => r.id);
        const [returned] = await (0, utils_1.promiseAll)([
            super.restoreOrderShippingMethods(ids, config, sharedContext),
            super.restoreOrderShippings(shippingIds, config, sharedContext),
        ]);
        return returned;
    }
    async createOrderLineItemAdjustments(orderIdOrData, adjustments, sharedContext = {}) {
        let addedAdjustments = [];
        if ((0, utils_1.isString)(orderIdOrData)) {
            const order = await this.retrieveOrder(orderIdOrData, { select: ["id"], relations: ["items.item"] }, sharedContext);
            const lineIds = order.items?.map((item) => item.id);
            for (const adj of adjustments || []) {
                if (!lineIds?.includes(adj.item_id)) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Line item with id ${adj.item_id} does not exist on order with id ${orderIdOrData}`);
                }
            }
            addedAdjustments = await this.orderLineItemAdjustmentService_.create(adjustments, sharedContext);
        }
        else {
            const data = Array.isArray(orderIdOrData)
                ? orderIdOrData
                : [orderIdOrData];
            addedAdjustments = await this.orderLineItemAdjustmentService_.create(data, sharedContext);
        }
        return await this.baseRepository_.serialize(addedAdjustments, {
            populate: true,
        });
    }
    async setOrderLineItemAdjustments(orderId, adjustments, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id"], relations: ["items.item.adjustments"] }, sharedContext);
        const existingAdjustments = (order.items ?? [])
            .map((item) => item.adjustments ?? [])
            .flat()
            .map((adjustment) => adjustment.id);
        const adjustmentsSet = new Set(adjustments
            .map((a) => a.id)
            .filter(Boolean));
        const toDelete = [];
        // From the existing adjustments, find the ones that are not passed in adjustments
        existingAdjustments.forEach((adj) => {
            if (!adjustmentsSet.has(adj)) {
                toDelete.push(adj);
            }
        });
        if (toDelete.length) {
            await this.orderLineItemAdjustmentService_.delete(toDelete, sharedContext);
        }
        let result = await this.orderLineItemAdjustmentService_.upsert(adjustments, sharedContext);
        return await this.baseRepository_.serialize(result, {
            populate: true,
        });
    }
    async setOrderShippingMethodAdjustments(orderId, adjustments, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id"], relations: ["shipping_methods.adjustments"] }, sharedContext);
        const existingAdjustments = (order.shipping_methods ?? [])
            .map((shippingMethod) => shippingMethod.adjustments ?? [])
            .flat()
            .map((adjustment) => adjustment.id);
        const adjustmentsSet = new Set(adjustments
            .map((a) => a?.id)
            .filter(Boolean));
        const toDelete = [];
        // From the existing adjustments, find the ones that are not passed in adjustments
        existingAdjustments.forEach((adj) => {
            if (!adjustmentsSet.has(adj)) {
                toDelete.push(adj);
            }
        });
        if (toDelete.length) {
            await this.orderShippingMethodAdjustmentService_.delete(toDelete, sharedContext);
        }
        const result = await this.orderShippingMethodAdjustmentService_.upsert(adjustments, sharedContext);
        return await this.baseRepository_.serialize(result, {
            populate: true,
        });
    }
    async createOrderShippingMethodAdjustments(orderIdOrData, adjustments, sharedContext = {}) {
        let addedAdjustments = [];
        if ((0, utils_1.isString)(orderIdOrData)) {
            const order = await this.retrieveOrder(orderIdOrData, { select: ["id"], relations: ["shipping_methods"] }, sharedContext);
            const methodIds = order.shipping_methods?.map((method) => method.id);
            for (const adj of adjustments || []) {
                if (!methodIds?.includes(adj.shipping_method_id)) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Shipping method with id ${adj.shipping_method_id} does not exist on order with id ${orderIdOrData}`);
                }
            }
            addedAdjustments =
                await this.orderShippingMethodAdjustmentService_.create(adjustments, sharedContext);
        }
        else {
            const data = Array.isArray(orderIdOrData)
                ? orderIdOrData
                : [orderIdOrData];
            addedAdjustments =
                await this.orderShippingMethodAdjustmentService_.create(data, sharedContext);
        }
        if ((0, utils_1.isObject)(orderIdOrData)) {
            return await this.baseRepository_.serialize(addedAdjustments[0], {
                populate: true,
            });
        }
        return await this.baseRepository_.serialize(addedAdjustments, {
            populate: true,
        });
    }
    async createOrderLineItemTaxLines(orderIdOrData, taxLines, sharedContext = {}) {
        let addedTaxLines;
        if ((0, utils_1.isString)(orderIdOrData)) {
            const lines = Array.isArray(taxLines) ? taxLines : [taxLines];
            addedTaxLines = await this.orderLineItemTaxLineService_.create(lines, sharedContext);
        }
        else {
            const data = Array.isArray(orderIdOrData)
                ? orderIdOrData
                : [orderIdOrData];
            addedTaxLines = await this.orderLineItemTaxLineService_.create(data, sharedContext);
        }
        const serialized = await this.baseRepository_.serialize(addedTaxLines, {
            populate: true,
        });
        if ((0, utils_1.isObject)(orderIdOrData)) {
            return serialized[0];
        }
        return serialized;
    }
    async setOrderLineItemTaxLines(orderId, taxLines, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id"], relations: ["items.item.tax_lines"] }, sharedContext);
        const existingTaxLines = (order.items ?? [])
            .map((item) => item.tax_lines ?? [])
            .flat()
            .map((taxLine) => taxLine.id);
        const taxLinesSet = new Set(taxLines
            .map((taxLine) => taxLine?.id)
            .filter(Boolean));
        const toDelete = [];
        existingTaxLines.forEach((taxLine) => {
            if (!taxLinesSet.has(taxLine)) {
                toDelete.push(taxLine);
            }
        });
        if (toDelete.length) {
            await this.orderLineItemTaxLineService_.delete(toDelete, sharedContext);
        }
        const result = await this.orderLineItemTaxLineService_.upsert(taxLines, sharedContext);
        return await this.baseRepository_.serialize(result, {
            populate: true,
        });
    }
    async createOrderShippingMethodTaxLines(orderIdOrData, taxLines, sharedContext = {}) {
        let addedTaxLines;
        if ((0, utils_1.isString)(orderIdOrData)) {
            const lines = Array.isArray(taxLines) ? taxLines : [taxLines];
            addedTaxLines = await this.orderShippingMethodTaxLineService_.create(lines, sharedContext);
        }
        else {
            addedTaxLines = await this.orderShippingMethodTaxLineService_.create(taxLines, sharedContext);
        }
        const serialized = await this.baseRepository_.serialize(addedTaxLines[0], {
            populate: true,
        });
        if ((0, utils_1.isObject)(orderIdOrData)) {
            return serialized[0];
        }
        return serialized;
    }
    async setOrderShippingMethodTaxLines(orderId, taxLines, sharedContext = {}) {
        const order = await this.retrieveOrder(orderId, { select: ["id"], relations: ["shipping_methods.tax_lines"] }, sharedContext);
        const existingTaxLines = (order.shipping_methods ?? [])
            .map((shippingMethod) => shippingMethod.tax_lines ?? [])
            .flat()
            .map((taxLine) => taxLine.id);
        const taxLinesSet = new Set(taxLines
            .map((taxLine) => taxLine?.id)
            .filter(Boolean));
        const toDelete = [];
        existingTaxLines.forEach((taxLine) => {
            if (!taxLinesSet.has(taxLine)) {
                toDelete.push(taxLine);
            }
        });
        if (toDelete.length) {
            await this.orderShippingMethodTaxLineService_.delete(toDelete, sharedContext);
        }
        const result = await this.orderShippingMethodTaxLineService_.upsert(taxLines, sharedContext);
        return await this.baseRepository_.serialize(result, {
            populate: true,
        });
    }
    async createReturns(data, sharedContext) {
        const created = await this.createOrderRelatedEntity_(data, this.returnService_, sharedContext);
        return await this.baseRepository_.serialize(!Array.isArray(data) ? created[0] : created, {
            populate: true,
        });
    }
    async createOrderClaims(data, sharedContext) {
        const created = await this.createOrderRelatedEntity_(data, this.orderClaimService_, sharedContext);
        return await this.baseRepository_.serialize(!Array.isArray(data) ? created[0] : created, {
            populate: true,
        });
    }
    async createOrderExchanges(data, sharedContext) {
        const created = await this.createOrderRelatedEntity_(data, this.orderExchangeService_, sharedContext);
        return await this.baseRepository_.serialize(!Array.isArray(data) ? created[0] : created, {
            populate: true,
        });
    }
    async createOrderRelatedEntity_(data, service, sharedContext) {
        const data_ = Array.isArray(data) ? data : [data];
        const inputDataMap = data_.reduce((acc, curr) => {
            acc[curr.order_id] = curr;
            return acc;
        }, {});
        const orderIds = data_.map((d) => d.order_id);
        const orders = await this.orderService_.list({ id: orderIds }, { select: ["id", "version"] }, sharedContext);
        if (orders.length !== orderIds.length) {
            const foundOrders = orders.map((o) => o.id);
            const missing = orderIds.filter((id) => !foundOrders.includes(id));
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order could not be found: ${missing.join(", ")}`);
        }
        for (const order of orders) {
            inputDataMap[order.id].order_version = order.version;
        }
        return await service.create(data_, sharedContext);
    }
    async createOrderChange(data, sharedContext) {
        const changes = await this.createOrderChange_(data, sharedContext);
        return await this.baseRepository_.serialize(Array.isArray(data) ? changes : changes[0], {
            populate: true,
        });
    }
    async createOrderChange_(data, sharedContext) {
        const dataArr = Array.isArray(data) ? data : [data];
        const orderIds = [];
        const dataMap = {};
        const orderChanges = await this.listOrderChanges({
            order_id: dataArr.map((data) => data.order_id),
            status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
        }, {}, sharedContext);
        const orderChangesMap = new Map(orderChanges.map((item) => [item.order_id, item]));
        for (const change of dataArr) {
            orderIds.push(change.order_id);
            dataMap[change.order_id] = change;
        }
        const orders = await this.orderService_.list({ id: orderIds }, { select: ["id", "version"] }, sharedContext);
        if (orders.length !== orderIds.length) {
            const foundOrders = orders.map((o) => o.id);
            const missing = orderIds.filter((id) => !foundOrders.includes(id));
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order could not be found: ${missing.join(", ")}`);
        }
        const input = orders.map((order) => {
            const existingOrderChange = orderChangesMap.get(order.id);
            if (existingOrderChange) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order (${order.id}) already has an existing active order change`);
            }
            return {
                ...dataMap[order.id],
                version: order.version + 1,
            };
        });
        return await this.orderChangeService_.create(input, sharedContext);
    }
    async previewOrderChange(orderId, sharedContext) {
        const order = await this.retrieveOrder(orderId, {
            select: ["id", "version", "items.detail", "summary", "total"],
            relations: ["transactions", "items", "shipping_methods"],
        }, sharedContext);
        if (!order.order_change) {
            return order;
        }
        const orderChange = await super.retrieveOrderChange(order.order_change.id, { relations: ["actions"] }, sharedContext);
        const { itemsToUpsert, shippingMethodsToUpsert, calculatedOrders } = (0, utils_2.applyChangesToOrder)([order], { [order.id]: orderChange.actions }, { addActionReferenceToObject: true });
        const calculated = calculatedOrders[order.id];
        const addedItems = {};
        const addedShippingMethods = {};
        for (const item of calculated.order.items) {
            const isExistingItem = item.id === item.detail?.item_id;
            if (!isExistingItem) {
                addedItems[item.id] = item;
            }
        }
        for (const sm of calculated.order.shipping_methods) {
            if (!(0, utils_1.isDefined)(sm.shipping_option_id)) {
                addedShippingMethods[sm.id] = sm;
            }
        }
        if (Object.keys(addedItems).length > 0) {
            const addedItemDetails = await this.listOrderLineItems({ id: Object.keys(addedItems) }, {
                relations: ["adjustments", "tax_lines"],
            }, sharedContext);
            calculated.order.items.forEach((item, idx) => {
                if (!addedItems[item.id]) {
                    return;
                }
                const lineItem = addedItemDetails.find((d) => d.id === item.id);
                const actions = item.actions;
                delete item.actions;
                const newItem = itemsToUpsert.find((d) => d.item_id === item.id);
                calculated.order.items[idx] = {
                    ...lineItem,
                    actions,
                    quantity: newItem.quantity,
                    detail: {
                        ...newItem,
                        ...item,
                    },
                };
            });
        }
        if (Object.keys(addedShippingMethods).length > 0) {
            const addedShippingDetails = await this.listOrderShippingMethods({ id: Object.keys(addedShippingMethods) }, {
                relations: ["adjustments", "tax_lines"],
            }, sharedContext);
            calculated.order.shipping_methods.forEach((sm, idx) => {
                if (!addedShippingMethods[sm.id]) {
                    return;
                }
                const shippingMethod = addedShippingDetails.find((d) => d.id === sm.id);
                const actions = sm.actions;
                delete sm.actions;
                const newItem = shippingMethodsToUpsert.find((d) => d.id === sm.id);
                sm.shipping_method_id = sm.id;
                delete sm.id;
                calculated.order.shipping_methods[idx] = {
                    ...shippingMethod,
                    actions,
                    detail: {
                        ...sm,
                        ...newItem,
                    },
                };
            });
        }
        const calcOrder = calculated.order;
        (0, utils_1.decorateCartTotals)(calcOrder);
        calcOrder.summary = calculated.summary;
        (0, utils_1.createRawPropertiesFromBigNumber)(calcOrder);
        return calcOrder;
    }
    async cancelOrderChange(orderChangeIdOrData, sharedContext) {
        const data = Array.isArray(orderChangeIdOrData)
            ? orderChangeIdOrData
            : [orderChangeIdOrData];
        const orderChangeIds = (0, utils_1.isString)(data[0])
            ? data
            : data.map((dt) => dt.id);
        await this.getAndValidateOrderChange_(orderChangeIds, false, sharedContext);
        const updates = data.map((dt) => {
            return {
                ...((0, utils_1.isString)(dt) ? { id: dt } : dt),
                canceled_at: new Date(),
                status: utils_1.OrderChangeStatus.CANCELED,
            };
        });
        await this.orderChangeService_.update(updates, sharedContext);
    }
    async confirmOrderChange(orderChangeIdOrData, sharedContext) {
        const data = Array.isArray(orderChangeIdOrData)
            ? orderChangeIdOrData
            : [orderChangeIdOrData];
        const orderChangeIds = (0, utils_1.isString)(data[0])
            ? data
            : data.map((dt) => dt.id);
        const orderChange = await this.getAndValidateOrderChange_(orderChangeIds, true, sharedContext);
        const updates = data.map((dt) => {
            return {
                ...((0, utils_1.isString)(dt) ? { id: dt } : dt),
                confirmed_at: new Date(),
                status: utils_1.OrderChangeStatus.CONFIRMED,
            };
        });
        await this.orderChangeService_.update(updates, sharedContext);
        const orderChanges = orderChange.map((change) => {
            return change.actions;
        });
        return await this.applyOrderChanges_(orderChanges.flat(), sharedContext);
    }
    async declineOrderChange(orderChangeIdOrData, sharedContext) {
        const data = Array.isArray(orderChangeIdOrData)
            ? orderChangeIdOrData
            : [orderChangeIdOrData];
        const orderChangeIds = (0, utils_1.isString)(data[0])
            ? data
            : data.map((dt) => dt.id);
        await this.getAndValidateOrderChange_(orderChangeIds, false, sharedContext);
        const updates = data.map((dt) => {
            return {
                ...((0, utils_1.isString)(dt) ? { id: dt } : dt),
                declined_at: new Date(),
                status: utils_1.OrderChangeStatus.DECLINED,
            };
        });
        await this.orderChangeService_.update(updates, sharedContext);
    }
    async applyPendingOrderActions(orderId, sharedContext) {
        const orderIds = Array.isArray(orderId) ? orderId : [orderId];
        const orders = await this.orderService_.list({ id: orderIds }, {
            select: ["id", "version"],
        }, sharedContext);
        const changes = await this.orderChangeActionService_.list({
            order_id: orders.map((order) => order.id),
            version: orders[0].version,
            applied: false,
        }, {
            select: [
                "id",
                "order_id",
                "return_id",
                "exchange_id",
                "claim_id",
                "ordering",
                "version",
                "applied",
                "reference",
                "reference_id",
                "action",
                "details",
                "amount",
                "raw_amount",
                "internal_note",
            ],
            order: {
                ordering: "ASC",
            },
        }, sharedContext);
        return await this.applyOrderChanges_(changes, sharedContext);
    }
    async revertLastVersion(orderId, sharedContext) {
        const order = await super.retrieveOrder(orderId, {
            select: ["id", "version"],
        }, sharedContext);
        if (order.version < 2) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order with id ${orderId} has no previous versions`);
        }
        return await this.revertLastChange_(order, sharedContext);
    }
    async revertLastChange_(order, sharedContext) {
        const currentVersion = order.version;
        // Order Changes
        const orderChanges = await this.orderChangeService_.list({
            order_id: order.id,
            version: currentVersion,
        }, { select: ["id", "version"] }, sharedContext);
        const orderChangesIds = orderChanges.map((change) => change.id);
        await this.orderChangeService_.softDelete(orderChangesIds, sharedContext);
        // Order Changes Actions
        const orderChangesActions = await this.orderChangeActionService_.list({
            order_id: order.id,
            version: currentVersion,
        }, { select: ["id", "version"] }, sharedContext);
        const orderChangeActionsIds = orderChangesActions.map((action) => action.id);
        await this.orderChangeActionService_.softDelete(orderChangeActionsIds, sharedContext);
        // Order Summary
        const orderSummary = await this.orderSummaryService_.list({
            order_id: order.id,
            version: currentVersion,
        }, { select: ["id", "version"] }, sharedContext);
        const orderSummaryIds = orderSummary.map((summary) => summary.id);
        await this.orderSummaryService_.softDelete(orderSummaryIds, sharedContext);
        // Order Items
        const orderItems = await this.orderItemService_.list({
            order_id: order.id,
            version: currentVersion,
        }, { select: ["id", "version"] }, sharedContext);
        const orderItemIds = orderItems.map((summary) => summary.id);
        await this.orderItemService_.softDelete(orderItemIds, sharedContext);
        // Order Shipping
        const orderShippings = await this.orderShippingService_.list({
            order_id: order.id,
            version: currentVersion,
        }, { select: ["id", "version"] }, sharedContext);
        const orderShippingIds = orderShippings.map((sh) => sh.id);
        await this.orderShippingService_.softDelete(orderShippingIds, sharedContext);
        // Order
        await this.orderService_.update({
            selector: {
                id: order.id,
            },
            data: {
                version: order.version - 1,
            },
        }, sharedContext);
        // Returns
        await this.returnService_.delete({
            order_id: order.id,
            order_version: currentVersion,
        }, sharedContext);
    }
    async getActiveOrderChange_(orderId, includeActions, sharedContext) {
        const options = {
            select: [
                "id",
                "change_type",
                "order_id",
                "return_id",
                "claim_id",
                "exchange_id",
                "version",
                "requested_at",
                "requested_by",
                "status",
                "description",
                "internal_note",
            ],
            relations: [],
            order: {},
        };
        if (includeActions) {
            options.select.push("actions");
            options.relations.push("actions");
            options.order = {
                actions: {
                    ordering: "ASC",
                },
            };
        }
        const [orderChange] = await this.listOrderChanges({
            order_id: orderId,
            status: [utils_1.OrderChangeStatus.PENDING, utils_1.OrderChangeStatus.REQUESTED],
        }, options, sharedContext);
        return orderChange;
    }
    async getAndValidateOrderChange_(orderChangeIds, includeActions, sharedContext) {
        orderChangeIds = (0, utils_1.deduplicate)(orderChangeIds);
        const options = {
            select: [
                "id",
                "order_id",
                "return_id",
                "claim_id",
                "exchange_id",
                "version",
                "status",
            ],
            relations: [],
            order: {},
        };
        if (includeActions) {
            options.select.push("actions");
            options.relations.push("actions");
            options.order = {
                actions: {
                    ordering: "ASC",
                },
            };
        }
        const orderChanges = await this.listOrderChanges({
            id: orderChangeIds,
        }, options, sharedContext);
        if (orderChanges.length !== orderChangeIds.length) {
            const foundOrders = orderChanges.map((o) => o.id);
            const missing = orderChangeIds.filter((id) => !foundOrders.includes(id));
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order Change could not be found: ${missing.join(", ")}`);
        }
        for (const orderChange of orderChanges) {
            const notAllowed = [];
            if (!(orderChange.status === utils_1.OrderChangeStatus.PENDING ||
                orderChange.status === utils_1.OrderChangeStatus.REQUESTED)) {
                notAllowed.push(orderChange.id);
            }
            if (notAllowed.length) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Order Change cannot be modified: ${notAllowed.join(", ")}.`);
            }
        }
        return orderChanges;
    }
    async addOrderAction(data, sharedContext) {
        let dataArr = Array.isArray(data) ? data : [data];
        const orderChangeMap = {};
        const orderChangeIds = dataArr
            .map((data, idx) => {
            if (data.order_change_id) {
                orderChangeMap[data.order_change_id] ??= [];
                orderChangeMap[data.order_change_id].push(dataArr[idx]);
            }
            return data.order_change_id;
        })
            .filter(Boolean);
        if (orderChangeIds.length) {
            const ordChanges = await this.getAndValidateOrderChange_(orderChangeIds, false, sharedContext);
            for (const ordChange of ordChanges) {
                orderChangeMap[ordChange.id].forEach((data) => {
                    if (data) {
                        data.order_id = ordChange.order_id;
                        data.version = ordChange.version;
                    }
                });
            }
        }
        const actions = (await this.orderChangeActionService_.create(dataArr, sharedContext));
        return Array.isArray(data) ? actions : actions[0];
    }
    async applyOrderChanges_(changeActions, sharedContext) {
        const actionsMap = {};
        const ordersIds = [];
        const usedActions = [];
        for (const action of changeActions) {
            if (action.applied) {
                continue;
            }
            ordersIds.push(action.order_id);
            actionsMap[action.order_id] ??= [];
            actionsMap[action.order_id].push(action);
            usedActions.push({
                selector: {
                    id: action.id,
                },
                data: {
                    applied: true,
                },
            });
        }
        if (!ordersIds.length) {
            return {
                items: [],
                shippingMethods: [],
            };
        }
        let orders = await this.listOrders({ id: (0, utils_1.deduplicate)(ordersIds) }, {
            select: ["id", "version", "items.detail", "summary", "total"],
            relations: [
                "transactions",
                "items",
                "items.detail",
                "shipping_methods",
            ],
        }
        // sharedContext
        // TODO: investigate issue while using sharedContext in receive return action
        );
        orders = (0, utils_2.formatOrder)(orders, {
            entity: _models_1.Order,
        });
        const { itemsToUpsert, shippingMethodsToUpsert, summariesToUpsert, orderToUpdate, } = (0, utils_2.applyChangesToOrder)(orders, actionsMap, {
            addActionReferenceToObject: true,
        });
        await (0, utils_1.promiseAll)([
            orderToUpdate.length
                ? this.orderService_.update(orderToUpdate, sharedContext)
                : null,
            usedActions.length
                ? this.orderChangeActionService_.update(usedActions, sharedContext)
                : null,
            itemsToUpsert.length
                ? this.orderItemService_.upsert(itemsToUpsert, sharedContext)
                : null,
            summariesToUpsert.length
                ? this.orderSummaryService_.upsert(summariesToUpsert, sharedContext)
                : null,
            shippingMethodsToUpsert.length
                ? this.orderShippingService_.upsert(shippingMethodsToUpsert, sharedContext)
                : null,
        ]);
        return {
            items: itemsToUpsert,
            shippingMethods: shippingMethodsToUpsert,
        };
    }
    async addOrderTransactions(transactionData, sharedContext) {
        const orders = await this.orderService_.list({
            id: Array.isArray(transactionData)
                ? transactionData.map((t) => t.order_id)
                : transactionData.order_id,
        }, {
            select: ["id", "version"],
        }, sharedContext);
        const data = Array.isArray(transactionData)
            ? transactionData
            : [transactionData];
        for (const order of orders) {
            const trxs = data.filter((t) => t.order_id === order.id);
            for (const trx of trxs) {
                ;
                trx.version = order.version;
            }
        }
        const created = await this.orderTransactionService_.create(data, sharedContext);
        await this.updateOrderPaidRefundableAmount_(created, false, sharedContext);
        return await this.baseRepository_.serialize(!Array.isArray(transactionData) ? created[0] : created, {
            populate: true,
        });
    }
    // @ts-ignore
    async deleteOrderTransactions(transactionIds, sharedContext) {
        const data = Array.isArray(transactionIds)
            ? transactionIds
            : [transactionIds];
        const transactions = await super.listOrderTransactions({
            id: data,
        }, {
            select: ["order_id", "version", "amount"],
        }, sharedContext);
        await this.orderTransactionService_.delete(data, sharedContext);
        await this.updateOrderPaidRefundableAmount_(transactions, true, sharedContext);
    }
    // @ts-ignore
    async softDeleteOrderTransactions(transactionIds, config, sharedContext) {
        const transactions = await super.listOrderTransactions({
            id: transactionIds,
        }, {
            select: ["order_id", "amount"],
        }, sharedContext);
        const returned = await super.softDeleteOrderTransactions(transactionIds, config, sharedContext);
        await this.updateOrderPaidRefundableAmount_(transactions, true, sharedContext);
        return returned;
    }
    // @ts-ignore
    async restoreOrderTransactions(transactionIds, config, sharedContext) {
        const transactions = await super.listOrderTransactions({
            id: transactionIds,
        }, {
            select: ["order_id", "amount"],
            withDeleted: true,
        }, sharedContext);
        const returned = await super.restoreOrderTransactions(transactionIds, config, sharedContext);
        await this.updateOrderPaidRefundableAmount_(transactions, false, sharedContext);
        return returned;
    }
    async updateOrderPaidRefundableAmount_(transactionData, isRemoved, sharedContext) {
        const summaries = await super.listOrderSummaries({
            order_id: transactionData.map((trx) => trx.order_id),
        }, {}, sharedContext);
        summaries.forEach((summary) => {
            let trxs = transactionData.filter((trx) => trx.order_id === summary.order_id);
            if (!trxs.length) {
                return;
            }
            (0, utils_1.transformPropertiesToBigNumber)(trxs);
            const op = isRemoved ? utils_1.MathBN.sub : utils_1.MathBN.add;
            for (const trx of trxs) {
                if (utils_1.MathBN.gt(trx.amount, 0)) {
                    summary.totals.paid_total = new utils_1.BigNumber(op(summary.totals.paid_total, trx.amount));
                }
                else {
                    summary.totals.refunded_total = new utils_1.BigNumber(op(summary.totals.refunded_total, utils_1.MathBN.abs(trx.amount)));
                }
                summary.totals.transaction_total = new utils_1.BigNumber(op(summary.totals.transaction_total, trx.amount));
            }
            summary.totals.pending_difference = new utils_1.BigNumber(utils_1.MathBN.sub(summary.totals.current_order_total, summary.totals.transaction_total));
        });
        (0, utils_1.createRawPropertiesFromBigNumber)(summaries);
        await this.orderSummaryService_.update(summaries, sharedContext);
    }
    async archive(orderId, sharedContext) {
        const orderIds = Array.isArray(orderId) ? orderId : [orderId];
        const orders = await this.listOrders({
            id: orderIds,
        }, {}, sharedContext);
        const notAllowed = [];
        for (const order of orders) {
            if (![
                utils_1.OrderStatus.COMPLETED,
                utils_1.OrderStatus.CANCELED,
                utils_1.OrderStatus.DRAFT,
            ].includes(order.status)) {
                notAllowed.push(order.id);
            }
            order.status = utils_1.OrderStatus.ARCHIVED;
        }
        if (notAllowed.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Orders ${notAllowed.join(", ")} are completed, canceled, or in draft and cannot be archived`);
        }
        await this.orderService_.update({
            id: orderIds,
            status: utils_1.OrderStatus.ARCHIVED,
        }, sharedContext);
        return Array.isArray(orderId) ? orders : orders[0];
    }
    async completeOrder(orderId, sharedContext) {
        const orderIds = Array.isArray(orderId) ? orderId : [orderId];
        const orders = await this.listOrders({
            id: orderIds,
        }, {}, sharedContext);
        const notAllowed = [];
        for (const order of orders) {
            if ([utils_1.OrderStatus.CANCELED].includes(order.status)) {
                notAllowed.push(order.id);
            }
            order.status = utils_1.OrderStatus.COMPLETED;
        }
        if (notAllowed.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Orders ${notAllowed.join(", ")} are canceled and cannot be completed`);
        }
        await this.orderService_.update(orderIds.map((id) => {
            return {
                id,
                status: utils_1.OrderStatus.COMPLETED,
            };
        }), sharedContext);
        return Array.isArray(orderId) ? orders : orders[0];
    }
    async cancel(orderId, sharedContext) {
        const orderIds = Array.isArray(orderId) ? orderId : [orderId];
        const orders = await this.listOrders({
            id: orderIds,
        }, {}, sharedContext);
        const canceled_at = new Date();
        for (const order of orders) {
            order.status = utils_1.OrderStatus.CANCELED;
            order.canceled_at = canceled_at;
        }
        await this.orderService_.update(orderIds.map((id) => {
            return {
                id,
                status: utils_1.OrderStatus.CANCELED,
                canceled_at,
            };
        }), sharedContext);
        return Array.isArray(orderId) ? orders : orders[0];
    }
    // ------------------- Bundled Order Actions
    async createReturn(data, sharedContext) {
        const ret = await BundledActions.createReturn.bind(this)(data, sharedContext);
        return await this.retrieveReturn(ret.id, {
            relations: [
                "items",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
            ],
        }, sharedContext);
    }
    async receiveReturn(data, sharedContext) {
        const ret = await this.receiveReturn_(data, sharedContext);
        return await this.retrieveReturn(ret.id, {
            relations: [
                "items",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
            ],
        });
    }
    async receiveReturn_(data, sharedContext) {
        return await BundledActions.receiveReturn.bind(this)(data, sharedContext);
    }
    async cancelReturn(data, sharedContext) {
        const ret = await this.cancelReturn_(data, sharedContext);
        return await this.retrieveReturn(ret.id, {
            relations: [
                "items",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
            ],
        });
    }
    async cancelReturn_(data, sharedContext) {
        return await BundledActions.cancelReturn.bind(this)(data, sharedContext);
    }
    async createClaim(data, sharedContext) {
        const ret = await this.createClaim_(data, sharedContext);
        const claim = await this.retrieveOrderClaim(ret.id, {
            relations: [
                "additional_items",
                "additional_items.item",
                "claim_items",
                "claim_items.item",
                "return",
                "return.items",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
                "transactions",
            ],
        }, sharedContext);
        return await this.baseRepository_.serialize(claim, {
            populate: true,
        });
    }
    async createClaim_(data, sharedContext) {
        return await BundledActions.createClaim.bind(this)(data, sharedContext);
    }
    async cancelClaim(data, sharedContext) {
        const ret = await this.cancelClaim_(data, sharedContext);
        return await this.retrieveOrderClaim(ret.id, {
            relations: ["additional_items", "claim_items", "return", "return.items"],
        });
    }
    async cancelClaim_(data, sharedContext) {
        return await BundledActions.cancelClaim.bind(this)(data, sharedContext);
    }
    async createExchange(data, sharedContext) {
        const ret = await this.createExchange_(data, sharedContext);
        const claim = await this.retrieveOrderExchange(ret.id, {
            relations: [
                "additional_items",
                "additional_items.item",
                "return",
                "return.items",
                "shipping_methods",
                "shipping_methods.tax_lines",
                "shipping_methods.adjustments",
                "transactions",
            ],
        }, sharedContext);
        return await this.baseRepository_.serialize(claim, {
            populate: true,
        });
    }
    async updateReturnReasons(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            // Check if the return reason exists in the first place
            await this.returnReasonService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const reasons = await this.returnReasonService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = reasons.map((reason) => ({
                id: reason.id,
                ...data,
            }));
        }
        const reasons = await this.returnReasonService_.update(normalizedInput, sharedContext);
        const updatedReturnReasons = await this.baseRepository_.serialize(reasons);
        return (0, utils_1.isString)(idOrSelector)
            ? updatedReturnReasons[0]
            : updatedReturnReasons;
    }
    async createExchange_(data, sharedContext) {
        return await BundledActions.createExchange.bind(this)(data, sharedContext);
    }
    async cancelExchange(data, sharedContext) {
        const ret = await this.cancelExchange_(data, sharedContext);
        return await this.retrieveOrderExchange(ret.id, {
            relations: ["additional_items", "return", "return.items"],
        });
    }
    async cancelExchange_(data, sharedContext) {
        return await BundledActions.cancelExchange.bind(this)(data, sharedContext);
    }
    async registerFulfillment(data, sharedContext) {
        return await BundledActions.registerFulfillment.bind(this)(data, sharedContext);
    }
    async cancelFulfillment(data, sharedContext) {
        return await BundledActions.cancelFulfillment.bind(this)(data, sharedContext);
    }
    async registerShipment(data, sharedContext) {
        return await BundledActions.registerShipment.bind(this)(data, sharedContext);
    }
    async registerDelivery(data, sharedContext) {
        return await BundledActions.registerDelivery.bind(this)(data, sharedContext);
    }
}
exports.default = OrderModuleService;
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "retrieveOrder", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listOrders", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listAndCountOrders", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "retrieveReturn", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listReturns", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listAndCountReturns", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "retrieveOrderClaim", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listOrderClaims", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listAndCountOrderClaims", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "retrieveOrderExchange", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listOrderExchanges", null);
__decorate([
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "listAndCountOrderExchanges", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrders", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrders_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrders", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrders_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderLineItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderLineItems_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderLineItemsBulk_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderLineItems", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderLineItem_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderLineItemsWithSelector_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderItem", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderItem_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderItemWithSelector_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderShippingMethods", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderShippingMethods_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderShippingMethodsBulk_", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-ignore
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "softDeleteOrderShippingMethods", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-ignore
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "restoreOrderShippingMethods", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderLineItemAdjustments", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "setOrderLineItemAdjustments", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "setOrderShippingMethodAdjustments", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderShippingMethodAdjustments", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderLineItemTaxLines", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "setOrderLineItemTaxLines", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderShippingMethodTaxLines", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "setOrderShippingMethodTaxLines", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createReturns", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderClaims", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderExchanges", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderRelatedEntity_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderChange", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createOrderChange_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "previewOrderChange", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelOrderChange", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "confirmOrderChange", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "declineOrderChange", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "applyPendingOrderActions", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "revertLastVersion", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "revertLastChange_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "addOrderAction", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "applyOrderChanges_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "addOrderTransactions", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-ignore
    ,
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "deleteOrderTransactions", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-ignore
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "softDeleteOrderTransactions", null);
__decorate([
    (0, utils_1.InjectManager)()
    // @ts-ignore
    ,
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "restoreOrderTransactions", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Boolean, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateOrderPaidRefundableAmount_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "archive", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "completeOrder", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancel", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createReturn", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "receiveReturn", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "receiveReturn_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelReturn", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelReturn_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createClaim", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createClaim_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelClaim", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelClaim_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createExchange", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "updateReturnReasons", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "createExchange_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelExchange", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelExchange_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "registerFulfillment", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "cancelFulfillment", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "registerShipment", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderModuleService.prototype, "registerDelivery", null);
//# sourceMappingURL=order-module-service.js.map