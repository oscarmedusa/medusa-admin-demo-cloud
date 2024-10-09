"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineMikroOrmCliConfig = defineMikroOrmCliConfig;
const dml_1 = require("../dml");
const dal_1 = require("../dal");
const common_1 = require("../common");
/**
 * Defines a MikroORM CLI config based on the provided options.
 * Convert any DML entities to MikroORM entities to be consumed
 * by mikro orm cli.
 *
 * @param moduleName
 * @param options
 */
function defineMikroOrmCliConfig(moduleName, options) {
    if (!options.entities?.length) {
        throw new Error("defineMikroOrmCliConfig failed with: entities is required");
    }
    const dmlEntities = options.entities.filter(dml_1.DmlEntity.isDmlEntity);
    const nonDmlEntities = options.entities.filter((entity) => !dml_1.DmlEntity.isDmlEntity(entity));
    const entities = nonDmlEntities.concat((0, dml_1.toMikroOrmEntities)(dmlEntities));
    const normalizedModuleName = (0, common_1.kebabCase)(moduleName.replace("Service", ""));
    const databaseName = `medusa-${normalizedModuleName}`;
    return {
        type: "postgresql",
        dbName: databaseName,
        host: "127.0.0.1",
        user: "postgres",
        password: "",
        ...options,
        entities,
        migrations: {
            generator: dal_1.CustomTsMigrationGenerator,
            ...options.migrations,
        },
    };
}
//# sourceMappingURL=mikro-orm-cli-config-builder.js.map