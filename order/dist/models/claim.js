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
const claim_item_1 = __importDefault(require("./claim-item"));
const order_1 = __importDefault(require("./order"));
const order_shipping_method_1 = __importDefault(require("./order-shipping-method"));
const return_1 = __importDefault(require("./return"));
const transaction_1 = __importDefault(require("./transaction"));
const DisplayIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim",
    columns: "display_id",
    where: "deleted_at IS NOT NULL",
});
const OrderClaimDeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const OrderIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim",
    columns: ["order_id"],
    where: "deleted_at IS NOT NULL",
});
const ReturnIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim",
    columns: "return_id",
    where: "return_id IS NOT NULL AND deleted_at IS NOT NULL",
});
let OrderClaim = class OrderClaim {
    constructor() {
        this.return_id = null;
        this.no_notification = null;
        this.additional_items = new core_1.Collection(this);
        this.claim_items = new core_1.Collection(this);
        this.shipping_methods = new core_1.Collection(this);
        this.transactions = new core_1.Collection(this);
        this.created_by = null;
        this.metadata = null;
        this.deleted_at = null;
        this.canceled_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "claim");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "claim");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderClaim.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => order_1.default,
        mapToPk: true,
        fieldName: "order_id",
        columnType: "text",
    }),
    OrderIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderClaim.prototype, "order_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => order_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "order", void 0);
__decorate([
    (0, core_1.OneToOne)({
        entity: () => return_1.default,
        mappedBy: (ret) => ret.claim,
        fieldName: "return_id",
        nullable: true,
        owner: true,
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "return", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    ReturnIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderClaim.prototype, "return_id", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "integer",
    }),
    __metadata("design:type", Number)
], OrderClaim.prototype, "order_version", void 0);
__decorate([
    (0, core_1.Property)({ autoincrement: true, primary: false }),
    DisplayIdIndex.MikroORMIndex(),
    __metadata("design:type", Number)
], OrderClaim.prototype, "display_id", void 0);
__decorate([
    (0, core_1.Enum)({ items: () => utils_1.ClaimType }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "type", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "no_notification", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)({
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "refund_amount", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "raw_refund_amount", void 0);
__decorate([
    (0, core_1.OneToMany)(() => claim_item_1.default, (item) => item.claim, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "additional_items", void 0);
__decorate([
    (0, core_1.OneToMany)(() => claim_item_1.default, (item) => item.claim, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "claim_items", void 0);
__decorate([
    (0, core_1.OneToMany)(() => order_shipping_method_1.default, (shippingMethod) => shippingMethod.claim, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "shipping_methods", void 0);
__decorate([
    (0, core_1.OneToMany)(() => transaction_1.default, (transaction) => transaction.claim, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "transactions", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "created_by", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaim.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaim.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    OrderClaimDeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderClaim.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "canceled_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaim.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaim.prototype, "onInit", null);
OrderClaim = __decorate([
    (0, core_1.Entity)({ tableName: "order_claim" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], OrderClaim);
exports.default = OrderClaim;
//# sourceMappingURL=claim.js.map