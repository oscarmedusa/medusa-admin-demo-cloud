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
const store_1 = __importDefault(require("./store"));
const StoreCurrencyDeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "store_currency",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
let StoreCurrency = class StoreCurrency {
    constructor() {
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "stocur");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "stocur");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], StoreCurrency.prototype, "id", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], StoreCurrency.prototype, "currency_code", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "boolean", default: false }),
    __metadata("design:type", Boolean)
], StoreCurrency.prototype, "is_default", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => store_1.default, {
        columnType: "text",
        fieldName: "store_id",
        mapToPk: true,
        nullable: true,
        onDelete: "cascade",
    }),
    __metadata("design:type", Object)
], StoreCurrency.prototype, "store_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => store_1.default, {
        persist: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], StoreCurrency.prototype, "store", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], StoreCurrency.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], StoreCurrency.prototype, "updated_at", void 0);
__decorate([
    StoreCurrencyDeletedAtIndex.MikroORMIndex(),
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    __metadata("design:type", Object)
], StoreCurrency.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreCurrency.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreCurrency.prototype, "onInit", null);
StoreCurrency = __decorate([
    (0, core_1.Entity)(),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], StoreCurrency);
exports.default = StoreCurrency;
//# sourceMappingURL=currency.js.map