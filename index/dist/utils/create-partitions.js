"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPartitions = createPartitions;
const _types_1 = require("../types");
async function createPartitions(schemaObjectRepresentation, manager) {
    const activeSchema = manager.config.get("schema")
        ? `"${manager.config.get("schema")}".`
        : "";
    const partitions = Object.keys(schemaObjectRepresentation)
        .filter((key) => !_types_1.schemaObjectRepresentationPropertiesToOmit.includes(key) &&
        schemaObjectRepresentation[key].listeners.length > 0)
        .map((key) => {
        const cName = key.toLowerCase();
        const part = [];
        part.push(`CREATE TABLE IF NOT EXISTS ${activeSchema}cat_${cName} PARTITION OF ${activeSchema}index_data FOR VALUES IN ('${key}')`);
        for (const parent of schemaObjectRepresentation[key].parents) {
            const pKey = `${parent.ref.entity}-${key}`;
            const pName = `${parent.ref.entity}${key}`.toLowerCase();
            part.push(`CREATE TABLE IF NOT EXISTS ${activeSchema}cat_pivot_${pName} PARTITION OF ${activeSchema}index_relation FOR VALUES IN ('${pKey}')`);
        }
        return part;
    })
        .flat();
    if (!partitions.length) {
        return;
    }
    partitions.push(`analyse ${activeSchema}index_data`);
    partitions.push(`analyse ${activeSchema}index_relation`);
    await manager.execute(partitions.join("; "));
}
//# sourceMappingURL=create-partitions.js.map