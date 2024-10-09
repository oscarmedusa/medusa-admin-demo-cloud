"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = migrate;
const path_1 = require("path");
const utils_1 = require("@medusajs/framework/utils");
const links_1 = require("@medusajs/framework/links");
const logger_1 = require("@medusajs/framework/logger");
const framework_1 = require("@medusajs/framework");
const sync_links_1 = require("./sync-links");
const utils_2 = require("../utils");
const loaders_1 = require("../../loaders");
const resolve_plugins_1 = require("../../loaders/helpers/resolve-plugins");
const TERMINAL_SIZE = process.stdout.columns;
/**
 * A low-level utility to migrate the database. This util should
 * never exit the process implicitly.
 */
async function migrate({ directory, skipLinks, executeAllLinks, executeSafeLinks, }) {
    /**
     * Setup
     */
    const container = await (0, loaders_1.initializeContainer)(directory);
    await (0, utils_2.ensureDbExists)(container);
    const medusaAppLoader = new framework_1.MedusaAppLoader();
    const configModule = container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
    const plugins = (0, resolve_plugins_1.getResolvedPlugins)(directory, configModule, true) || [];
    const linksSourcePaths = plugins.map((plugin) => (0, path_1.join)(plugin.resolve, "links"));
    await new links_1.LinkLoader(linksSourcePaths).load();
    /**
     * Run migrations
     */
    logger_1.logger.info("Running migrations...");
    await medusaAppLoader.runModulesMigrations({
        action: "run",
    });
    console.log(new Array(TERMINAL_SIZE).join("-"));
    logger_1.logger.info("Migrations completed");
    /**
     * Sync links
     */
    if (!skipLinks) {
        console.log(new Array(TERMINAL_SIZE).join("-"));
        await (0, sync_links_1.syncLinks)(medusaAppLoader, {
            executeAll: executeAllLinks,
            executeSafe: executeSafeLinks,
        });
    }
    return true;
}
const main = async function ({ directory, skipLinks, executeAllLinks, executeSafeLinks, }) {
    try {
        const migrated = await migrate({
            directory,
            skipLinks,
            executeAllLinks,
            executeSafeLinks,
        });
        process.exit(migrated ? 0 : 1);
    }
    catch (error) {
        logger_1.logger.error(error);
        process.exit(1);
    }
};
exports.default = main;
//# sourceMappingURL=migrate.js.map