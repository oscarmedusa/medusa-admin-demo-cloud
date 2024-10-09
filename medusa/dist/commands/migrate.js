"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("@medusajs/framework/links");
const logger_1 = require("@medusajs/framework/logger");
const framework_1 = require("@medusajs/framework");
const loaders_1 = require("../loaders");
const utils_1 = require("@medusajs/framework/utils");
const resolve_plugins_1 = require("../loaders/helpers/resolve-plugins");
const path_1 = require("path");
const TERMINAL_SIZE = process.stdout.columns;
function validateInputArgs({ action, modules, }) {
    const actionsRequiringModules = ["revert", "generate"];
    if (modules.length && !actionsRequiringModules.includes(action)) {
        logger_1.logger.error(`<modules> cannot be specified with the "${action}" action. Please remove the <modules> argument and try again.`);
        process.exit(1);
    }
    if (!modules.length && actionsRequiringModules.includes(action)) {
        logger_1.logger.error("Please provide the modules for which you want to revert migrations");
        logger_1.logger.error(`For example: "npx medusa migration revert <moduleName>"`);
        process.exit(1);
    }
}
const main = async function ({ directory }) {
    const args = process.argv;
    args.shift();
    args.shift();
    args.shift();
    const action = args[0];
    const modules = args.splice(1);
    validateInputArgs({ action, modules });
    const container = await (0, loaders_1.initializeContainer)(directory);
    const configModule = container.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
    const medusaAppLoader = new framework_1.MedusaAppLoader();
    const plugins = (0, resolve_plugins_1.getResolvedPlugins)(directory, configModule, true) || [];
    const linksSourcePaths = plugins.map((plugin) => (0, path_1.join)(plugin.resolve, "links"));
    await new links_1.LinkLoader(linksSourcePaths).load();
    if (action === "run") {
        logger_1.logger.info("Running migrations...");
        await medusaAppLoader.runModulesMigrations({
            action: "run",
        });
        console.log(new Array(TERMINAL_SIZE).join("-"));
        logger_1.logger.info("Migrations completed");
        process.exit();
    }
    else if (action === "revert") {
        logger_1.logger.info("Reverting migrations...");
        try {
            await medusaAppLoader.runModulesMigrations({
                moduleNames: modules,
                action: "revert",
            });
            console.log(new Array(TERMINAL_SIZE).join("-"));
            logger_1.logger.info("Migrations reverted");
            process.exit();
        }
        catch (error) {
            console.log(new Array(TERMINAL_SIZE).join("-"));
            if (error.code && error.code === utils_1.MedusaError.Codes.UNKNOWN_MODULES) {
                logger_1.logger.error(error.message);
                const modulesList = error.allModules.map((name) => `          - ${name}`);
                logger_1.logger.error(`Available modules:\n${modulesList.join("\n")}`);
            }
            else {
                logger_1.logger.error(error.message, error);
            }
            process.exit(1);
        }
    }
    else if (action === "generate") {
        logger_1.logger.info("Generating migrations...");
        await medusaAppLoader.runModulesMigrations({
            moduleNames: modules,
            action: "generate",
        });
        console.log(new Array(TERMINAL_SIZE).join("-"));
        logger_1.logger.info("Migrations generated");
        process.exit();
    }
    else if (action === "show") {
        logger_1.logger.info("Action not supported yet");
        process.exit(0);
    }
};
exports.default = main;
//# sourceMappingURL=migrate.js.map