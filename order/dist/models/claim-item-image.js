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
const ClaimItemImageDeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim_item_image",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ClaimItemIdIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "order_claim_item_image",
    columns: ["claim_item_id"],
    where: "deleted_at IS NOT NULL",
});
let OrderClaimItemImage = class OrderClaimItemImage {
    constructor() {
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "climg");
        this.claim_item_id ??= this.item?.id;
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "climg");
        this.claim_item_id ??= this.item?.id;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderClaimItemImage.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => claim_item_1.default,
        mapToPk: true,
        fieldName: "claim_item_id",
        columnType: "text",
    }),
    ClaimItemIdIndex.MikroORMIndex(),
    __metadata("design:type", String)
], OrderClaimItemImage.prototype, "claim_item_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => claim_item_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], OrderClaimItemImage.prototype, "item", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], OrderClaimItemImage.prototype, "url", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItemImage.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItemImage.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItemImage.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    ClaimItemImageDeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], OrderClaimItemImage.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaimItemImage.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderClaimItemImage.prototype, "onInit", null);
OrderClaimItemImage = __decorate([
    (0, core_1.Entity)({ tableName: "order_claim_item_image" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], OrderClaimItemImage);
exports.default = OrderClaimItemImage;
//# sourceMappingURL=claim-item-image.js.map