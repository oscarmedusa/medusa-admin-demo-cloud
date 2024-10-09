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
exports.singleDefaultRegionIndexName = void 0;
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const tax_rate_rule_1 = __importDefault(require("./tax-rate-rule"));
const tax_region_1 = __importDefault(require("./tax-region"));
const TABLE_NAME = "tax_rate";
exports.singleDefaultRegionIndexName = "IDX_single_default_region";
const singleDefaultRegionIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: exports.singleDefaultRegionIndexName,
    tableName: TABLE_NAME,
    columns: "tax_region_id",
    unique: true,
    where: "is_default = true AND deleted_at IS NULL",
});
const taxRegionIdIndexName = "IDX_tax_rate_tax_region_id";
const taxRegionIdIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: taxRegionIdIndexName,
    tableName: TABLE_NAME,
    columns: "tax_region_id",
    where: "deleted_at IS NULL",
});
const deletedAtIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: TABLE_NAME,
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
let TaxRate = class TaxRate {
    constructor() {
        this.rate = null;
        this.is_default = false;
        this.is_combinable = false;
        this.rules = new core_1.Collection(this);
        this.metadata = null;
        this.created_by = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "txr");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "txr");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], TaxRate.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "real", nullable: true }),
    __metadata("design:type", Object)
], TaxRate.prototype, "rate", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], TaxRate.prototype, "code", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], TaxRate.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "bool", default: false }),
    __metadata("design:type", Boolean)
], TaxRate.prototype, "is_default", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "bool", default: false }),
    __metadata("design:type", Boolean)
], TaxRate.prototype, "is_combinable", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => tax_region_1.default, {
        columnType: "text",
        fieldName: "tax_region_id",
        mapToPk: true,
        onDelete: "cascade",
    }),
    taxRegionIdIndexStatement.MikroORMIndex(),
    __metadata("design:type", String)
], TaxRate.prototype, "tax_region_id", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => tax_region_1.default, persist: false }),
    __metadata("design:type", Object)
], TaxRate.prototype, "tax_region", void 0);
__decorate([
    (0, core_1.OneToMany)(() => tax_rate_rule_1.default, (rule) => rule.tax_rate, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], TaxRate.prototype, "rules", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], TaxRate.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], TaxRate.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], TaxRate.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], TaxRate.prototype, "created_by", void 0);
__decorate([
    deletedAtIndexStatement.MikroORMIndex(),
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], TaxRate.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxRate.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxRate.prototype, "onInit", null);
TaxRate = __decorate([
    singleDefaultRegionIndexStatement.MikroORMIndex(),
    (0, core_1.Entity)({ tableName: TABLE_NAME }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], TaxRate);
exports.default = TaxRate;
//# sourceMappingURL=tax-rate.js.map