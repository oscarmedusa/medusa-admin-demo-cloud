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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const line_item_adjustment_1 = __importDefault(require("./line-item-adjustment"));
const line_item_tax_line_1 = __importDefault(require("./line-item-tax-line"));
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_line_item",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ProductIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_line_item",
    columns: "product_id",
    where: "deleted_at IS NOT NULL",
});
const VariantIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_line_item",
    columns: "variant_id",
    where: "deleted_at IS NOT NULL",
});
let OrderLineItem = class OrderLineItem {
    constructor() {
        this.subtitle = null;
        this.thumbnail = null;
        this.variant_id = null;
        this.product_id = null;
        this.product_title = null;
        this.product_description = null;
        this.product_subtitle = null;
        this.product_type = null;
        this.product_collection = null;
        this.product_handle = null;
        this.variant_sku = null;
        this.variant_barcode = null;
        this.variant_title = null;
        this.variant_option_values = null;
        this.requires_shipping = true;
        this.is_discountable = true;
        this.is_tax_inclusive = false;
        this.compare_at_unit_price = null;
        this.raw_compare_at_unit_price = null;
        this.is_custom_price = false;
        this.tax_lines = new core_1.Collection(this);
        this.adjustments = new core_1.Collection(this);
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordli");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordli");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderLineItem.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderLineItem.prototype, "title", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "subtitle", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "thumbnail", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    VariantIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variant_id", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    ProductIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_title", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_description", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_subtitle", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_type", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_collection", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "product_handle", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variant_sku", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variant_barcode", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variant_title", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variant_option_values", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "requires_shipping", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "is_discountable", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "is_tax_inclusive", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)({
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "compare_at_unit_price", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "raw_compare_at_unit_price", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)({
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "unit_price", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "raw_unit_price", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", default: false }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "is_custom_price", void 0);
__decorate([
    (0, core_1.OneToMany)(() => line_item_tax_line_1.default, (taxLine) => taxLine.item, {
        cascade: [core_1.Cascade.PERSIST, "soft-remove"],
    }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "tax_lines", void 0);
__decorate([
    (0, core_1.OneToMany)(() => line_item_adjustment_1.default, (adjustment) => adjustment.item, {
        cascade: [core_1.Cascade.PERSIST, "soft-remove"],
    }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "adjustments", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItem.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItem.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderLineItem.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderLineItem.prototype, "onInit", null);
OrderLineItem = __decorate([
    (0, core_1.Entity)({ tableName: "order_line_item" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], OrderLineItem);
exports.default = OrderLineItem;
//# sourceMappingURL=line-item.js.map