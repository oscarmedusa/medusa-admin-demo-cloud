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
const provider_identity_1 = __importDefault(require("./provider-identity"));
let AuthIdentity = class AuthIdentity {
    constructor() {
        this.provider_identities = new core_1.Collection(this);
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "authid");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], AuthIdentity.prototype, "id", void 0);
__decorate([
    (0, core_1.OneToMany)(() => provider_identity_1.default, (o) => o.auth_identity),
    __metadata("design:type", Object)
], AuthIdentity.prototype, "provider_identities", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], AuthIdentity.prototype, "app_metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], AuthIdentity.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], AuthIdentity.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthIdentity.prototype, "onCreate", null);
AuthIdentity = __decorate([
    (0, core_1.Entity)()
], AuthIdentity);
exports.default = AuthIdentity;
//# sourceMappingURL=auth-identity.js.map