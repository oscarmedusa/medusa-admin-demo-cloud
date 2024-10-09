"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySearchable = applySearchable;
const dal_1 = require("../../../dal");
/**
 * Apply the searchable decorator to the property marked as searchable to enable the free text search
 */
function applySearchable(MikroORMEntity, field) {
    if (!field.dataType.options?.searchable) {
        return;
    }
    (0, dal_1.Searchable)()(MikroORMEntity.prototype, field.fieldName);
}
//# sourceMappingURL=apply-searchable.js.map