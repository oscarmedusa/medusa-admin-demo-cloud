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
exports.IndexData = void 0;
const core_1 = require("@mikro-orm/core");
const index_relation_1 = require("./index-relation");
let IndexData = class IndexData {
    constructor() {
        this.parents = new core_1.Collection(this);
    }
};
exports.IndexData = IndexData;
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    (0, core_1.Index)({ name: "IDX_index_data_id" }),
    __metadata("design:type", String)
], IndexData.prototype, "id", void 0);
__decorate([
    (0, core_1.PrimaryKey)({ columnType: "text" }),
    (0, core_1.Index)({ name: "IDX_index_data_name" }),
    __metadata("design:type", String)
], IndexData.prototype, "name", void 0);
__decorate([
    (0, core_1.Index)({ name: "IDX_index_data_gin", type: "GIN" }),
    (0, core_1.Property)({ columnType: "jsonb", default: "{}" }),
    __metadata("design:type", Object)
], IndexData.prototype, "data", void 0);
__decorate([
    (0, core_1.ManyToMany)({
        owner: true,
        entity: () => IndexData,
        pivotEntity: () => index_relation_1.IndexRelation,
        cascade: [core_1.Cascade.REMOVE],
        inverseJoinColumns: ["parent_id", "parent_name"],
        joinColumns: ["child_id", "child_name"],
    }),
    __metadata("design:type", Object)
], IndexData.prototype, "parents", void 0);
exports.IndexData = IndexData = __decorate([
    (0, core_1.Entity)({
        tableName: "index_data",
    })
], IndexData);
//# sourceMappingURL=index-data.js.map