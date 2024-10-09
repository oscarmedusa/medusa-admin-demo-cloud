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
const core_1 = require("@mikro-orm/core");
const utils_1 = require("@medusajs/framework/utils");
const auth_identity_1 = __importDefault(require("./auth-identity"));
const providerEntityIdIndexName = "IDX_provider_identity_provider_entity_id";
const providerEntityIdIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: providerEntityIdIndexName,
    tableName: "provider_identity",
    columns: ["entity_id", "provider"],
    unique: true,
});
const authIdentityIndexName = "IDX_provider_identity_auth_identity_id";
const authIdentityIndexStatement = (0, utils_1.createPsqlIndexStatementHelper)({
    name: authIdentityIndexName,
    tableName: "provider_identity",
    columns: ["auth_identity_id"],
});
let ProviderIdentity = class ProviderIdentity {
    constructor() {
        this.provider_metadata = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "provid");
        this.auth_identity_id ??= this.auth_identity?.id ?? null;
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "entity_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "provider", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => auth_identity_1.default, {
        columnType: "text",
        fieldName: "auth_identity_id",
        mapToPk: true,
        onDelete: "cascade",
    }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "auth_identity_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => auth_identity_1.default, {
        persist: false,
    }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "auth_identity", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "user_metadata", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "provider_metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ProviderIdentity.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ProviderIdentity.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProviderIdentity.prototype, "onCreate", null);
ProviderIdentity = __decorate([
    (0, core_1.Entity)(),
    providerEntityIdIndexStatement.MikroORMIndex(),
    authIdentityIndexStatement.MikroORMIndex()
], ProviderIdentity);
exports.default = ProviderIdentity;
//# sourceMappingURL=provider-identity.js.map