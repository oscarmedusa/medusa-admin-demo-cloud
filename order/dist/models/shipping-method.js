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
const shipping_method_adjustment_1 = __importDefault(require("./shipping-method-adjustment"));
const shipping_method_tax_line_1 = __importDefault(require("./shipping-method-tax-line"));
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_shipping_method",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ShippingOptionIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_shipping_method",
    columns: "shipping_option_id",
    where: "deleted_at IS NOT NULL",
});
let OrderShippingMethod = class OrderShippingMethod {
    constructor() {
        this.description = null;
        this.is_tax_inclusive = false;
        this.is_custom_amount = false;
        this.shipping_option_id = null;
        this.data = null;
        this.metadata = null;
        this.tax_lines = new core_1.Collection(this);
        this.adjustments = new core_1.Collection(this);
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordsm");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordsm");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderShippingMethod.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderShippingMethod.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "description", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "amount", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "raw_amount", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean" }),
    __metadata("design:type", Boolean)
], OrderShippingMethod.prototype, "is_tax_inclusive", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", default: false }),
    __metadata("design:type", Boolean)
], OrderShippingMethod.prototype, "is_custom_amount", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    ShippingOptionIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "shipping_option_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "data", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "metadata", void 0);
__decorate([
    (0, core_1.OneToMany)(() => shipping_method_tax_line_1.default, (taxLine) => taxLine.shipping_method, {
        cascade: [core_1.Cascade.PERSIST, "soft-remove"],
    }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "tax_lines", void 0);
__decorate([
    (0, core_1.OneToMany)(() => shipping_method_adjustment_1.default, (adjustment) => adjustment.shipping_method, {
        cascade: [core_1.Cascade.PERSIST, "soft-remove"],
    }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "adjustments", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethod.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethod.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderShippingMethod.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderShippingMethod.prototype, "onInit", null);
OrderShippingMethod = __decorate([
    (0, core_1.Entity)({ tableName: "order_shipping_method" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], OrderShippingMethod);
exports.default = OrderShippingMethod;
//# sourceMappingURL=shipping-method.js.map