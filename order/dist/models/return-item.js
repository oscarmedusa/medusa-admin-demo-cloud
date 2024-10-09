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
const line_item_1 = __importDefault(require("./line-item"));
const return_1 = __importDefault(require("./return"));
const return_reason_1 = __importDefault(require("./return-reason"));
const tableName = "return_item";
const ReturnIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "return_id",
    where: "deleted_at IS NOT NULL",
});
const ReturnReasonIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "reason_id",
    where: "deleted_at IS NOT NULL",
});
const ItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "item_id",
    where: "deleted_at IS NOT NULL",
});
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
let ReturnItem = class ReturnItem {
    constructor() {
        this.reason_id = null;
        this.received_quantity = 0;
        this.damaged_quantity = 0;
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "retitem");
        this.return_id ??= this.return?.id;
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "retitem");
        this.return_id ??= this.return?.id;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_reason_1.default, {
        columnType: "text",
        fieldName: "reason_id",
        mapToPk: true,
        nullable: true,
    }),
    ReturnReasonIdIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], ReturnItem.prototype, "reason_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_reason_1.default, {
        persist: false,
    }),
    __metadata("design:type", return_reason_1.default)
], ReturnItem.prototype, "reason", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Number)
], ReturnItem.prototype, "quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "raw_quantity", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Number)
], ReturnItem.prototype, "received_quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "raw_received_quantity", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Number)
], ReturnItem.prototype, "damaged_quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "raw_damaged_quantity", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_1.default, {
        columnType: "text",
        fieldName: "return_id",
        mapToPk: true,
        onDelete: "cascade",
    }),
    ReturnIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], ReturnItem.prototype, "return_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => return_1.default, {
        persist: false,
    }),
    __metadata("design:type", return_1.default)
], ReturnItem.prototype, "return", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => line_item_1.default,
        fieldName: "item_id",
        mapToPk: true,
        columnType: "text",
    }),
    ItemIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], ReturnItem.prototype, "item_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => line_item_1.default, {
        persist: false,
    }),
    __metadata("design:type", line_item_1.default)
], ReturnItem.prototype, "item", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", String)
], ReturnItem.prototype, "note", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReturnItem.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReturnItem.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], ReturnItem.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReturnItem.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReturnItem.prototype, "onInit", null);
ReturnItem = __decorate([
    (0, core_1.Entity)({ tableName })
], ReturnItem);
exports.default = ReturnItem;
//# sourceMappingURL=return-item.js.map