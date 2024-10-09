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
const claim_1 = __importDefault(require("./claim"));
const exchange_1 = __importDefault(require("./exchange"));
const order_1 = __importDefault(require("./order"));
const return_1 = __importDefault(require("./return"));
const shipping_method_1 = __importDefault(require("./shipping-method"));
const tableName = "order_shipping";
const OrderIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: ["order_id"],
    where: "deleted_at IS NOT NULL",
});
const ReturnIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "return_id",
    where: "return_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const ExchangeIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: ["exchange_id"],
    where: "exchange_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const ClaimIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: ["claim_id"],
    where: "claim_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const OrderVersionIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: ["version"],
    where: "deleted_at IS NOT NULL",
});
const ItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: ["shipping_method_id"],
    where: "deleted_at IS NOT NULL",
});
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
let OrderShipping = class OrderShipping {
    constructor() {
        this.return_id = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordspmv");
        this.order_id ??= this.order?.id;
        this.return_id ??= this.return?.id;
        this.claim_id ??= this.claim?.id;
        this.exchange_id ??= this.exchange?.id;
        this.shipping_method_id ??= this.shipping_method?.id;
        this.version ??= this.order?.version;
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordspmv");
        this.order_id ??= this.order?.id;
        this.return_id ??= this.return?.id;
        this.claim_id ??= this.claim?.id;
        this.exchange_id ??= this.exchange?.id;
        this.shipping_method_id ??= this.shipping_method?.id;
        this.version ??= this.order?.version;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderShipping.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => order_1.default,
        mapToPk: true,
        fieldName: "order_id",
        columnType: "text",
    }),
    OrderIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderShipping.prototype, "order_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => order_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "order", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => return_1.default,
        mapToPk: true,
        fieldName: "return_id",
        columnType: "text",
        nullable: true,
    }),
    ReturnIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShipping.prototype, "return_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "return", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => exchange_1.default,
        mapToPk: true,
        fieldName: "exchange_id",
        columnType: "text",
        nullable: true,
    }),
    ExchangeIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShipping.prototype, "exchange_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => exchange_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "exchange", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => claim_1.default,
        mapToPk: true,
        fieldName: "claim_id",
        columnType: "text",
        nullable: true,
    }),
    ClaimIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShipping.prototype, "claim_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => claim_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "claim", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "integer" }),
    OrderVersionIndex.MikroORMIndex(),
    __metadata("design:type", Number)
], OrderShipping.prototype, "version", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => shipping_method_1.default,
        fieldName: "shipping_method_id",
        mapToPk: true,
        columnType: "text",
    }),
    ItemIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderShipping.prototype, "shipping_method_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => shipping_method_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "shipping_method", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderShipping.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderShipping.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderShipping.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderShipping.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderShipping.prototype, "onInit", null);
OrderShipping = __decorate([
    (0, core_1.Entity)({ tableName })
], OrderShipping);
exports.default = OrderShipping;
//# sourceMappingURL=order-shipping-method.js.map