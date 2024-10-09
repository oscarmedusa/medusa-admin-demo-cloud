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
const claim_item_image_1 = __importDefault(require("./claim-item-image"));
const line_item_1 = __importDefault(require("./line-item"));
const tableName = "order_claim_item";
const ClaimIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName,
    columns: "claim_id",
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
let OrderClaimItem = class OrderClaimItem {
    constructor() {
        this.images = new core_1.Collection(this);
        this.reason = null;
        this.is_additional_item = false;
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "claitem");
        this.claim_id ??= this.claim?.id;
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "claitem");
        this.claim_id ??= this.claim?.id;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "id", void 0);
__decorate([
    (0, core_1.OneToMany)(() => claim_item_image_1.default, (ci) => ci.item, {
        cascade: [core_1.Cascade.PERSIST, core_1.Cascade.REMOVE],
    }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "images", void 0);
__decorate([
    (0, core_1.Enum)({ items: () => utils_1.ClaimReason, nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "reason", void 0);
__decorate([
    (0, utils_1.MikroOrmBigNumberProperty)(),
    __metadata("design:type", Number)
], OrderClaimItem.prototype, "quantity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb" }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "raw_quantity", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => claim_1.default, {
        columnType: "text",
        fieldName: "claim_id",
        mapToPk: true,
        onDelete: "cascade",
    }),
    ClaimIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "claim_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => claim_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "claim", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => line_item_1.default,
        fieldName: "item_id",
        mapToPk: true,
        columnType: "text",
    }),
    ItemIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "item_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => line_item_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "item", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", default: false }),
    __metadata("design:type", Boolean)
], OrderClaimItem.prototype, "is_additional_item", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "note", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItem.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItem.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaimItem.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaimItem.prototype, "onInit", null);
OrderClaimItem = __decorate([
    (0, core_1.Entity)({ tableName })
], OrderClaimItem);
exports.default = OrderClaimItem;
//# sourceMappingURL=claim-item.js.map