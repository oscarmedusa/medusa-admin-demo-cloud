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
exports.IndexRelation = void 0;
const core_1 = require("@mikro-orm/core");
const index_data_1 = require("./index-data");
let IndexRelation = class IndexRelation {
};
exports.IndexRelation = IndexRelation;
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "integer", autoincrement: true }),
    __metadata("design:type", String)
], IndexRelation.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({
        columnType: "text",
    }),
    __metadata("design:type", String)
], IndexRelation.prototype, "pivot", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], IndexRelation.prototype, "parent_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], IndexRelation.prototype, "parent_name", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], IndexRelation.prototype, "child_id", void 0);
__decorate([
    (0, core_1.Property)({ columnType: "text" }),
    __metadata("design:type", String)
], IndexRelation.prototype, "child_name", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => index_data_1.IndexData,
        onDelete: "cascade",
        persist: false,
    }),
    __metadata("design:type", Object)
], IndexRelation.prototype, "parent", void 0);
__decorate([
    (0, core_1.ManyToOne)({
        entity: () => index_data_1.IndexData,
        onDelete: "cascade",
        persist: false,
    }),
    __metadata("design:type", Object)
], IndexRelation.prototype, "child", void 0);
exports.IndexRelation = IndexRelation = __decorate([
    (0, core_1.Entity)({
        tableName: "index_relation",
    }),
    (0, core_1.Index)({
        name: "IDX_index_relation_child_id",
        properties: ["child_id"],
    })
], IndexRelation);
//# sourceMappingURL=index-relation.js.map