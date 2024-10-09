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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationItem = void 0;
const core_1 = require("@mikro-orm/core");
const utils_1 = require("@medusajs/framework/utils");
const inventory_item_1 = require("./inventory-item");
const ReservationItemDeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "reservation_item",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ReservationItemLineItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "reservation_item",
    columns: "line_item_id",
    where: "deleted_at IS NULL",
});
const ReservationItemInventoryItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "reservation_item",
    columns: "inventory_item_id",
    where: "deleted_at IS NULL",
});
const ReservationItemLocationIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "reservation_item",
    columns: "location_id",
    where: "deleted_at IS NULL",
});
let ReservationItem = class ReservationItem {
    constructor() {
        this.deleted_at = null;
        this.line_item_id = null;
        this.allow_backorder = false;
        this.external_id = null;
        this.description = null;
        this.created_by = null;
        this.metadata = null;
    }
    beforeCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "resitem");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "resitem");
    }
};
exports.ReservationItem = ReservationItem;
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReservationItem.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReservationItem.prototype, "updated_at", void 0);
__decorate([
    ReservationItemDeletedAtIndex.MikroORMIndex(),
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "deleted_at", void 0);
__decorate([
    ReservationItemLineItemIdIndex.MikroORMIndex(),
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "line_item_id", void 0);
__decorate([
    (0, core_1.Property)({ type: "boolean" }),
    __metadata("design:type", Boolean)
], ReservationItem.prototype, "allow_backorder", void 0);
__decorate([
    ReservationItemLocationIdIndex.MikroORMIndex(),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "location_id", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Object)
], ReservationItem.prototype, "quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "raw_quantity", void 0);
__decorate([
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "external_id", void 0);
__decorate([
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "description", void 0);
__decorate([
    (0, core_1.Property)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "created_by", void 0);
__decorate([
    (0, core_1.Property)({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "metadata", void 0);
__decorate([
    ReservationItemInventoryItemIdIndex.MikroORMIndex(),
    (0, core_1.ManyToOne)(() => inventory_item_1.InventoryItem, {
        fieldName: "inventory_item_id",
        type: "text",
        mapToPk: true,
        onDelete: "cascade",
    }),
    __metadata("design:type", String)
], ReservationItem.prototype, "inventory_item_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => inventory_item_1.InventoryItem, {
        persist: false,
    }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "inventory_item", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationItem.prototype, "beforeCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationItem.prototype, "onInit", null);
exports.ReservationItem = ReservationItem = __decorate([
    (0, core_1.Entity)(),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], ReservationItem);
//# sourceMappingURL=reservation-item.js.map