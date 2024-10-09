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
const _models_1 = require(".");
const claim_1 = __importDefault(require("./claim"));
const exchange_1 = __importDefault(require("./exchange"));
const order_1 = __importDefault(require("./order"));
const order_shipping_method_1 = __importDefault(require("./order-shipping-method"));
const DisplayIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return",
    columns: "display_id",
    where: "deleted_at IS NOT NULL",
});
const ReturnDeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const OrderIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return",
    columns: ["order_id"],
    where: "deleted_at IS NOT NULL",
});
const ExchangeIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return",
    columns: ["exchange_id"],
    where: "exchange_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const ClaimIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return",
    columns: ["claim_id"],
    where: "claim_id IS NOT NULL AND deleted_at IS NOT NULL",
});
let Return = class Return {
    constructor() {
        this.exchange_id = null;
        this.claim_id = null;
        this.status = utils_1.ReturnStatus.OPEN;
        this.location_id = null;
        this.no_notification = null;
        this.items = new core_1.Collection(this);
        this.shipping_methods = new core_1.Collection(this);
        this.transactions = new core_1.Collection(this);
        this.created_by = null;
        this.metadata = null;
        this.deleted_at = null;
        this.requested_at = null;
        this.received_at = null;
        this.canceled_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "return");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "return");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], Return.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => order_1.default,
        mapToPk: true,
        fieldName: "order_id",
        columnType: "text",
    }),
    OrderIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], Return.prototype, "order_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => order_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], Return.prototype, "order", void 0);
__decorate([
    (0, core_1.OneToOne)({
        entity: () => exchange_1.default,
        fieldName: "exchange_id",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Return.prototype, "exchange", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    ExchangeIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], Return.prototype, "exchange_id", void 0);
__decorate([
    (0, core_1.OneToOne)({
        entity: () => claim_1.default,
        fieldName: "claim_id",
        nullable: true,
    }),
    __metadata("design:type", Object)
], Return.prototype, "claim", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    ClaimIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], Return.prototype, "claim_id", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "integer",
    }),
    __metadata("design:type", Number)
], Return.prototype, "order_version", void 0);
__decorate([
    (0, core_1.Property)({ autoincrement: true, primary: false }),
    DisplayIdIndex.MikroORMIndex(),
    __metadata("design:type", Number)
], Return.prototype, "display_id", void 0);
__decorate([
    (0, core_1.Enum)({ items: () => utils_1.ReturnStatus, default: utils_1.ReturnStatus.OPEN }),
    __metadata("design:type", String)
], Return.prototype, "status", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "location_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "no_notification", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)({
        nullable: true,
    }),
    __metadata("design:type", Object)
], Return.prototype, "refund_amount", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "raw_refund_amount", void 0);
__decorate([
    (0, core_1.OneToMany)(() => _models_1.ReturnItem, (itemDetail) => itemDetail.return, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], Return.prototype, "items", void 0);
__decorate([
    (0, core_1.OneToMany)(() => order_shipping_method_1.default, (shippingMethod) => shippingMethod.return, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], Return.prototype, "shipping_methods", void 0);
__decorate([
    (0, core_1.OneToMany)(() => _models_1.OrderTransaction, (transaction) => transaction.return, {
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], Return.prototype, "transactions", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "created_by", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], Return.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], Return.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    ReturnDeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], Return.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "requested_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "received_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "canceled_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Return.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Return.prototype, "onInit", null);
Return = __decorate([
    (0, core_1.Entity)({ tableName: "return" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], Return);
exports.default = Return;
//# sourceMappingURL=return.js.map