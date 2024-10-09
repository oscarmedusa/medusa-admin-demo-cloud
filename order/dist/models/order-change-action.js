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
const order_change_1 = __importDefault(require("./order-change"));
const return_1 = __importDefault(require("./return"));
const OrderChangeIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "order_change_id",
    where: "deleted_at IS NOT NULL",
});
const OrderIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "order_id",
    where: "deleted_at IS NOT NULL",
});
const ReturnIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "return_id",
    where: "return_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const OrderClaimIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "claim_id",
    where: "claim_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const OrderExchangeIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "exchange_id",
    where: "exchange_id IS NOT NULL AND deleted_at IS NOT NULL",
});
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ActionOrderingIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_change_action",
    columns: "ordering",
    where: "deleted_at IS NOT NULL",
});
let OrderChangeAction = class OrderChangeAction {
    constructor() {
        this.order_id = null;
        this.order = null;
        this.return_id = null;
        this.claim_id = null;
        this.exchange_id = null;
        this.version = null;
        this.order_change = null;
        this.reference = null;
        this.reference_id = null;
        this.details = {};
        this.amount = null;
        this.raw_amount = null;
        this.internal_note = null;
        this.applied = false;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordchact");
        this.order_id ??= this.order?.id ?? this.order_change?.order_id ?? null;
        this.claim_id ??= this.claim?.id ?? this.order_change?.claim_id ?? null;
        this.exchange_id ??=
            this.exchange?.id ?? this.order_change?.exchange_id ?? null;
        this.order_change_id ??= this.order_change?.id ?? null;
        this.version ??= this.order_change?.version ?? null;
        if (!this.claim_id && !this.exchange_id) {
            this.return_id ??= this.return?.id ?? this.order_change?.return_id ?? null;
        }
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "ordchact");
        this.order_id ??= this.order?.id ?? this.order_change?.order_id ?? null;
        this.claim_id ??= this.claim?.id ?? this.order_change?.claim_id ?? null;
        this.exchange_id ??=
            this.exchange?.id ?? this.order_change?.exchange_id ?? null;
        this.order_change_id ??= this.order_change?.id ?? null;
        this.version ??= this.order_change?.version ?? null;
        if (!this.claim_id && !this.exchange_id) {
            this.return_id ??= this.return?.id ?? this.order_change?.return_id ?? null;
        }
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderChangeAction.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "integer", autoincrement: true }),
    ActionOrderingIndex.MikroORMIndex(),
    __metadata("design:type", Number)
], OrderChangeAction.prototype, "ordering", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => order_1.default,
        columnType: "text",
        fieldName: "order_id",
        onDelete: "cascade",
        mapToPk: true,
        nullable: true,
    }),
    OrderIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "order_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => order_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "order", void 0);
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
], OrderChangeAction.prototype, "return_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", return_1.default)
], OrderChangeAction.prototype, "return", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => claim_1.default,
        mapToPk: true,
        fieldName: "claim_id",
        columnType: "text",
        nullable: true,
    }),
    OrderClaimIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "claim_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => claim_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", claim_1.default)
], OrderChangeAction.prototype, "claim", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => exchange_1.default,
        mapToPk: true,
        fieldName: "exchange_id",
        columnType: "text",
        nullable: true,
    }),
    OrderExchangeIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "exchange_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => exchange_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", exchange_1.default)
], OrderChangeAction.prototype, "exchange", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "integer", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "version", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => order_change_1.default,
        columnType: "text",
        fieldName: "order_change_id",
        onDelete: "cascade",
        mapToPk: true,
        nullable: true,
    }),
    OrderChangeIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "order_change_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => order_change_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "order_change", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "reference", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "reference_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderChangeAction.prototype, "action", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "details", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)({ nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "amount", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "raw_amount", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
        nullable: true,
    }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "internal_note", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "boolean",
        defaultRaw: "false",
    }),
    __metadata("design:type", Boolean)
], OrderChangeAction.prototype, "applied", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderChangeAction.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderChangeAction.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderChangeAction.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderChangeAction.prototype, "onInit", null);
OrderChangeAction = __decorate([
    (0, core_1.Entity)({ tableName: "order_change_action" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], OrderChangeAction);
exports.default = OrderChangeAction;
//# sourceMappingURL=order-change-action.js.map