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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@mikro-orm/core");
const DeletedAtIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return_reason",
    columns: "deleted_at",
    where: "deleted_at IS NOT NULL",
});
const ValueIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return_reason",
    columns: "value",
    where: "deleted_at IS NOT NULL",
});
const ParentIndex = (0, utils_1.createPsqlIndexStatementHelper)({
    tableName: "return_reason",
    columns: "parent_return_reason_id",
    where: "deleted_at IS NOT NULL",
});
let ReturnReason = class ReturnReason {
    constructor() {
        this.description = null;
        this.metadata = null;
        this.deleted_at = null;
    }
    onCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "rr");
    }
    onInit() {
        this.id = (0, utils_1.generateEntityId)(this.id, "rr");
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    __metadata("design:type", String)
], ReturnReason.prototype, "id", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    ValueIndex.MikroORMIndex(),
    __metadata("design:type", String)
], ReturnReason.prototype, "value", void 0);
__decorate([
    (0, utils_1.Searchable)(),
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], ReturnReason.prototype, "label", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "description", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text", nullable: true }),
    ParentIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], ReturnReason.prototype, "parent_return_reason_id", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => ReturnReason,
        fieldName: "parent_return_reason_id",
        nullable: true,
        cascade: [core_1.Cascade.PERSIST],
    }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "parent_return_reason", void 0);
__decorate([
    (0, core_1.OneToMany)(() => ReturnReason, (return_reason) => return_reason.parent_return_reason, { cascade: [core_1.Cascade.PERSIST] }),
    __metadata("design:type", Array)
], ReturnReason.prototype, "return_reason_children", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "metadata", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReturnReason.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        columnType: "timestamptz",
        defaultRaw: "now()",
    }),
    __metadata("design:type", Date)
], ReturnReason.prototype, "updated_at", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "timestamptz", nullable: true }),
    DeletedAtIndex.MikroORMIndex(),
    __metadata("design:type", Object)
], ReturnReason.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReturnReason.prototype, "onCreate", null);
__decorate([
    (0, core_1.OnInit)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReturnReason.prototype, "onInit", null);
ReturnReason = __decorate([
    (0, core_1.Entity)({ tableName: "return_reason" }),
    (0, core_1.Filter)(utils_1.DALUtils.mikroOrmSoftDeletableFilterOptions)
], ReturnReason);
exports.default = ReturnReason;
//# sourceMappingURL=return-reason.js.map