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
const exchange_1 = __importDefault(require("./exchange"));
const line_item_1 = __importDefault(require("./line-item"));
const ExchangeIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_exchange_item",
    columns: "exchange_id",
    where: "deleted_at IS NOT NULL",
});
const ItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_exchange_item",
    columns: "item_id",
    where: "deleted_at IS NOT NULL",
});
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim_item_image",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
let OrderExchangeItem = class OrderExchangeItem {
    constructor() {
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "oexcitem");
        this.exchange_id ??= this.exchange?.id;
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "oexcitem");
        this.exchange_id ??= this.exchange?.id;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderExchangeItem.prototype, "id", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Number)
], OrderExchangeItem.prototype, "quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], OrderExchangeItem.prototype, "raw_quantity", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => exchange_1.default, {
        columnType: "text",
        fieldName: "exchange_id",
        mapToPk: true,
        onDelete: "cascade",
    }),
    ExchangeIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderExchangeItem.prototype, "exchange_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => exchange_1.default, {
        persist: false,
    }),
    __metadata("design:type", exchange_1.default)
], OrderExchangeItem.prototype, "exchange", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => line_item_1.default,
        fieldName: "item_id",
        mapToPk: true,
        columnType: "text",
    }),
    ItemIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderExchangeItem.prototype, "item_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => line_item_1.default, {
        persist: false,
    }),
    __metadata("design:type", line_item_1.default)
], OrderExchangeItem.prototype, "item", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", String)
], OrderExchangeItem.prototype, "note", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderExchangeItem.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderExchangeItem.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderExchangeItem.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderExchangeItem.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderExchangeItem.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderExchangeItem.prototype, "onInit", null);
OrderExchangeItem = __decorate([
    (0, core_1.Entity)({ tableName: "order_exchange_item" })
], OrderExchangeItem);
exports.default = OrderExchangeItem;
//# sourceMappingURL=exchange-item.js.map