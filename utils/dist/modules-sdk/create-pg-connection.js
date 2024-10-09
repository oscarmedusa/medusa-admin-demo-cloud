"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPgConnection = createPgConnection;
const postgresql_1 = require("@mikro-orm/postgresql");
/**
 * Create a new knex (pg in the future) connection which can be reused and shared
 * @param options
 */
function createPgConnection(options) {
    const { pool, schema = "public", clientUrl, driverOptions } = options;
    const ssl = options.driverOptions?.ssl ??
        options.driverOptions?.connection?.ssl ??
        false;
    return (0, postgresql_1.knex)({
        client: "pg",
        searchPath: schema,
        connection: {
            connectionString: clientUrl,
            ssl: ssl,
            idle_in_transaction_session_timeout: driverOptions?.idle_in_transaction_session_timeout ??
                undefined, // prevent null to be passed
        },
        pool: {
            // https://knexjs.org/guide/#pool
            ...(pool ?? {}),
            min: pool?.min ?? 2,
        },
    });
}
//# sourceMappingURL=create-pg-connection.js.map