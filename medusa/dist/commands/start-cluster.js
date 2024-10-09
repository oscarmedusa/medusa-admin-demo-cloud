"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const cluster_1 = __importDefault(require("cluster"));
const express_1 = __importDefault(require("express"));
const medusa_telemetry_1 = require("medusa-telemetry");
const node_schedule_1 = require("node-schedule");
const os_1 = __importDefault(require("os"));
const logger_1 = require("@medusajs/framework/logger");
const utils_1 = require("@medusajs/framework/utils");
const loaders_1 = __importDefault(require("../loaders"));
const EVERY_SIXTH_HOUR = "0 */6 * * *";
const CRON_SCHEDULE = EVERY_SIXTH_HOUR;
let isShuttingDown = false;
async function default_1({ port, cpus, directory }) {
    if (cluster_1.default.isPrimary) {
        const killMainProccess = () => process.exit(0);
        cpus ??= os_1.default.cpus().length;
        const numCPUs = Math.min(os_1.default.cpus().length, cpus);
        for (let index = 0; index < numCPUs; index++) {
            const worker = cluster_1.default.fork();
            worker.send({ index });
        }
        cluster_1.default.on("exit", (worker) => {
            if (!isShuttingDown) {
                cluster_1.default.fork();
            }
            else if (!(0, utils_1.isPresent)(cluster_1.default.workers)) {
                setTimeout(killMainProccess, 100);
            }
        });
        const gracefulShutDown = () => {
            isShuttingDown = true;
            for (const id of Object.keys(cluster_1.default.workers ?? {})) {
                cluster_1.default.workers?.[id]?.kill("SIGTERM");
            }
        };
        (0, node_schedule_1.scheduleJob)(CRON_SCHEDULE, () => {
            (0, medusa_telemetry_1.track)("PING");
        });
        process.on("SIGTERM", gracefulShutDown);
        process.on("SIGINT", gracefulShutDown);
    }
    else {
        const start = async () => {
            (0, medusa_telemetry_1.track)("CLI_START");
            const app = (0, express_1.default)();
            const { shutdown } = await (0, loaders_1.default)({
                directory,
                expressApp: app,
            });
            const serverActivity = logger_1.logger.activity(`Creating server`);
            const server = utils_1.GracefulShutdownServer.create(app.listen(port).on("listening", () => {
                logger_1.logger.success(serverActivity, `Server is ready on port: ${port}`);
                (0, medusa_telemetry_1.track)("CLI_START_COMPLETED");
            }));
            const gracefulShutDown = () => {
                server
                    .shutdown()
                    .then(async () => {
                    await shutdown();
                    process.exit(0);
                })
                    .catch((e) => {
                    process.exit(1);
                });
            };
            process.on("SIGTERM", gracefulShutDown);
            process.on("SIGINT", gracefulShutDown);
            return { server };
        };
        process.on("message", async (msg) => {
            if (msg.index > 0) {
                process.env.PLUGIN_ADMIN_UI_SKIP_CACHE = "true";
            }
            await start();
        });
    }
}
//# sourceMappingURL=start-cluster.js.map