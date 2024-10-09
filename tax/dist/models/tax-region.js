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
exports.taxRegionCountryTopLevelCheckName = exports.taxRegionProviderTopLevelCheckName = exports.countryCodeProvinceIndexName = exports.countryCodeNullProvinceIndexName = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const tax_provider_1 = __importDefault(require("./tax-provider"));
const tax_rate_1 = __importDefault(require("./tax-rate"));
const TABLE_NAME = "tax_region";
exports.countryCodeNullProvinceIndexName = "IDX_tax_region_unique_country_nullable_province";
exports.countryCodeProvinceIndexName = "IDX_tax_region_unique_country_province";
const countryCodeProvinceIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: exports.countryCodeProvinceIndexName,
    tableName: TABLE_NAME,
    columns: ["country_code", "province_code"],
    unique: true,
    where: "deleted_at IS NULL",
});
const deletedAtIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: TABLE_NAME,
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const countryCodeNullableProvinceIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: exports.countryCodeNullProvinceIndexName,
    tableName: TABLE_NAME,
    columns: ["country_code"],
    unique: true,
    where: "province_code IS NULL AND deleted_at IS NULL",
});
exports.taxRegionProviderTopLevelCheckName = "CK_tax_region_provider_top_level";
exports.taxRegionCountryTopLevelCheckName = "CK_tax_region_country_top_level";
let TaxRegion = class TaxRegion {
    constructor() {
        this.provider_id = null;
        this.province_code = null;
        this.parent_id = null;
        this.tax_rates = new core_1.Collection(this);
        this.children = new core_1.Collection(this);
        this.metadata = null;
        this.created_by = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "txreg");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "txreg");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], TaxRegion.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => tax_provider_1.default, {
        fieldName: "provider_id",
        mapToPk: true,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "provider_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => tax_provider_1.default, { persist: false }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "provider", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], TaxRegion.prototype, "country_code", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "province_code", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => TaxRegion, {
        index: "IDX_tax_region_parent_id",
        fieldName: "parent_id",
        onDelete: "cascade",
        mapToPk: true,
        nullable: true,
    }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "parent_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => TaxRegion, { persist: false }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "parent", void 0);
__decorate([
    (0, core_1.OneToMany)(() => tax_rate_1.default, (label) => label.tax_region, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "tax_rates", void 0);
__decorate([
    (0, core_1.OneToMany)(() => TaxRegion, (label) => label.parent, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "children", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], TaxRegion.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], TaxRegion.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "created_by", void 0);
__decorate([
    deletedAtIndexStatement.MikroORMIndex(),
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxRegion.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxRegion.prototype, "onInit", null);
TaxRegion = __decorate([
    (0, core_1.Check)({
        name: exports.taxRegionProviderTopLevelCheckName,
        expression: `parent_id IS NULL OR provider_id IS NULL`,
    }),
    (0, core_1.Check)({
        name: exports.taxRegionCountryTopLevelCheckName,
        expression: `parent_id IS NULL OR province_code IS NOT NULL`,
    }),
    countryCodeNullableProvinceIndexStatement.MikroORMIndex(),
    countryCodeProvinceIndexStatement.MikroORMIndex(),
    (0, core_1.Entity)({ tableName: TABLE_NAME }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], TaxRegion);
exports.default = TaxRegion;
//# sourceMappingURL=tax-region.js.map