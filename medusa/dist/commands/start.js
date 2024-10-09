"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceRequestHandler = void 0;
exports.registerInstrumentation = registerInstrumentation;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const medusa_telemetry_1 = require("medusa-telemetry");
const node_schedule_1 = require("node-schedule");
const utils_1 = require("@medusajs/framework/utils");
const http_1 = __importDefault(require("http"));
const logger_1 = require("@medusajs/framework/logger");
const loaders_1 = __importDefault(require("../loaders"));
const modules_sdk_1 = require("@medusajs/framework/modules-sdk");
const EVERY_SIXTH_HOUR = "0 */6 * * *";
const CRON_SCHEDULE = EVERY_SIXTH_HOUR;
const INSTRUMENTATION_FILE = "instrumentation.js";
/**
 * Imports the "instrumentation.js" file from the root of the
 * directory and invokes the register function. The existence
 * of this file is optional, hence we ignore "ENOENT"
 * errors.
 */
async function registerInstrumentation(directory) {
    const fileSystem = new utils_1.FileSystem(directory);
    const exists = await fileSystem.exists(INSTRUMENTATION_FILE);
    if (!exists) {
        return;
    }
    const instrumentation = await (0, utils_1.dynamicImport)(path_1.default.join(directory, INSTRUMENTATION_FILE));
    if (typeof instrumentation.register === "function") {
        logger_1.logger.info("OTEL registered");
        instrumentation.register();
    }
    else {
        logger_1.logger.info("Skipping instrumentation registration. No register function found.");
    }
}
/**
 * Wrap request handler inside custom implementation to enabled
 * instrumentation.
 */
// eslint-disable-next-line no-var
exports.traceRequestHandler = void 0;
async function start({ port, directory, types }) {
    async function internalStart() {
        (0, medusa_telemetry_1.track)("CLI_START");
        await registerInstrumentation(directory);
        const app = (0, express_1.default)();
        const http_ = http_1.default.createServer(async (req, res) => {
            await new Promise((resolve) => {
                res.on("finish", resolve);
                if (exports.traceRequestHandler) {
                    void (0, exports.traceRequestHandler)(async () => {
                        app(req, res);
                    }, req, res);
                }
                else {
                    app(req, res);
                }
            });
        });
        try {
            const { shutdown, gqlSchema } = await (0, loaders_1.default)({
                directory,
                expressApp: app,
            });
            if (gqlSchema && types) {
                const outputDirGeneratedTypes = path_1.default.join(directory, ".medusa");
                await (0, utils_1.gqlSchemaToTypes)({
                    outputDir: outputDirGeneratedTypes,
                    filename: "remote-query-entry-points",
                    interfaceName: "RemoteQueryEntryPoints",
                    schema: gqlSchema,
                    joinerConfigs: modules_sdk_1.MedusaModule.getAllJoinerConfigs(),
                });
                logger_1.logger.info("Geneated modules types");
            }
            const serverActivity = logger_1.logger.activity(`Creating server`);
            const server = utils_1.GracefulShutdownServer.create(http_.listen(port).on("listening", () => {
                logger_1.logger.success(serverActivity, `Server is ready on port: ${port}`);
                (0, medusa_telemetry_1.track)("CLI_START_COMPLETED");
            }));
            // Handle graceful shutdown
            const gracefulShutDown = () => {
                logger_1.logger.info("Gracefully shutting down server");
                server
                    .shutdown()
                    .then(async () => {
                    await shutdown();
                    process.exit(0);
                })
                    .catch((e) => {
                    logger_1.logger.error("Error received when shutting down the server.", e);
                    process.exit(1);
                });
            };
            process.on("SIGTERM", gracefulShutDown);
            process.on("SIGINT", gracefulShutDown);
            (0, node_schedule_1.scheduleJob)(CRON_SCHEDULE, () => {
                (0, medusa_telemetry_1.track)("PING");
            });
            return { server };
        }
        catch (err) {
            logger_1.logger.error("Error starting server", err);
            process.exit(1);
        }
    }
    await internalStart();
}
exports.default = start;
//# sourceMappingURL=start.js.map