"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTsMigrationGenerator = void 0;
exports.mikroOrmCreateConnection = mikroOrmCreateConnection;
const migrations_1 = require("@mikro-orm/migrations");
const common_1 = require("../../common");
class CustomTsMigrationGenerator extends migrations_1.TSMigrationGenerator {
    createStatement(sql, padLeft) {
        if ((0, common_1.isString)(sql)) {
            sql = sql.replace(/create table (?!if not exists)/g, "create table if not exists ");
            sql = sql.replace(/alter table (?!if exists)/g, "alter table if exists ");
            sql = sql.replace(/create index (?!if not exists)/g, "create index if not exists ");
            sql = sql.replace(/drop index (?!if exists)/g, "drop index if exists ");
            sql = sql.replace(/create unique index (?!if not exists)/g, "create unique index if not exists ");
            sql = sql.replace(/drop unique index (?!if exists)/g, "drop unique index if exists ");
            sql = sql.replace(/add column (?!if not exists)/g, "add column if not exists ");
            sql = sql.replace(/drop column (?!if exists)/g, "drop column if exists ");
            sql = sql.replace(/drop constraint (?!if exists)/g, "drop constraint if exists ");
        }
        return super.createStatement(sql, padLeft);
    }
}
exports.CustomTsMigrationGenerator = CustomTsMigrationGenerator;
async function mikroOrmCreateConnection(database, entities, pathToMigrations) {
    let schema = database.schema || "public";
    let driverOptions = database.driverOptions ?? {
        connection: { ssl: false },
    };
    let clientUrl = database.clientUrl;
    if (database.connection) {
        // Reuse already existing connection
        // It is important that the knex package version is the same as the one used by MikroORM knex package
        driverOptions = database.connection;
        clientUrl =
            database.connection.context?.client?.config?.connection?.connectionString;
        schema = database.connection.context?.client?.config?.searchPath;
    }
    const { MikroORM } = await import("@mikro-orm/postgresql");
    return await MikroORM.init({
        discovery: { disableDynamicFileAccess: true, warnWhenNoEntities: false },
        entities,
        debug: database.debug ?? process.env.NODE_ENV?.startsWith("dev") ?? false,
        baseDir: process.cwd(),
        clientUrl,
        schema,
        driverOptions,
        tsNode: process.env.APP_ENV === "development",
        type: "postgresql",
        filters: database.filters ?? {},
        migrations: {
            disableForeignKeys: false,
            path: pathToMigrations,
            generator: CustomTsMigrationGenerator,
            silent: !(database.debug ??
                process.env.NODE_ENV?.startsWith("dev") ??
                false),
        },
        schemaGenerator: {
            disableForeignKeys: false,
        },
        pool: {
            min: 2,
            ...database.pool,
        },
    });
}
//# sourceMappingURL=mikro-orm-create-connection.js.map