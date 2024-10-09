"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JobLoader_sourceDir, _JobLoader_excludes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobLoader = void 0;
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const logger_1 = require("../logger");
class JobLoader {
    constructor(sourceDir) {
        /**
         * The directory from which to load the jobs
         * @private
         */
        _JobLoader_sourceDir.set(this, void 0);
        /**
         * The list of file names to exclude from the subscriber scan
         * @private
         */
        _JobLoader_excludes.set(this, [
            /index\.js/,
            /index\.ts/,
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts|\.md)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ]);
        __classPrivateFieldSet(this, _JobLoader_sourceDir, sourceDir, "f");
    }
    /**
     * Validate cron job configuration
     * @param config
     * @protected
     */
    validateConfig(config) {
        if (!config) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Config is required for scheduled jobs.");
        }
        if (!config.schedule) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Cron schedule definition is required for scheduled jobs.");
        }
        if (!config.name) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Job name is required for scheduled jobs.");
        }
    }
    /**
     * Create a workflow to register a new cron job
     * @param config
     * @param handler
     * @protected
     */
    registerJob({ config, handler, }) {
        const workflowName = `job-${config.name}`;
        const step = (0, workflows_sdk_1.createStep)(`${config.name}-as-step`, async (_, stepContext) => {
            const { container } = stepContext;
            try {
                const res = await handler(container);
                return new workflows_sdk_1.StepResponse(res, res);
            }
            catch (error) {
                logger_1.logger.error(`Scheduled job ${config.name} failed with error: ${error.message}`);
                throw error;
            }
        });
        const workflowConfig = {
            name: workflowName,
            schedule: (0, utils_1.isObject)(config.schedule)
                ? config.schedule
                : {
                    cron: config.schedule,
                    numberOfExecutions: config.numberOfExecutions,
                },
        };
        (0, workflows_sdk_1.createWorkflow)(workflowConfig, () => {
            step();
        });
    }
    /**
     * Load cron jobs from one or multiple source paths
     */
    async load() {
        const normalizedSourcePath = Array.isArray(__classPrivateFieldGet(this, _JobLoader_sourceDir, "f"))
            ? __classPrivateFieldGet(this, _JobLoader_sourceDir, "f")
            : [__classPrivateFieldGet(this, _JobLoader_sourceDir, "f")];
        const promises = normalizedSourcePath.map(async (sourcePath) => {
            try {
                await (0, promises_1.access)(sourcePath);
            }
            catch {
                logger_1.logger.info(`No job to load from ${sourcePath}. skipped.`);
                return;
            }
            return await (0, promises_1.readdir)(sourcePath, {
                recursive: true,
                withFileTypes: true,
            }).then(async (entries) => {
                const fileEntries = entries.filter((entry) => {
                    return (!entry.isDirectory() &&
                        !__classPrivateFieldGet(this, _JobLoader_excludes, "f").some((exclude) => exclude.test(entry.name)));
                });
                logger_1.logger.debug(`Registering jobs from ${sourcePath}.`);
                return await (0, utils_1.promiseAll)(fileEntries.map(async (entry) => {
                    const fullPath = (0, path_1.join)(entry.path, entry.name);
                    const module_ = await (0, utils_1.dynamicImport)(fullPath);
                    const input = {
                        config: module_.config,
                        handler: module_.default,
                    };
                    this.validateConfig(input.config);
                    return input;
                }));
            });
        });
        const jobsInputs = await (0, utils_1.promiseAll)(promises);
        const flatJobsInput = jobsInputs.flat(1).filter((job) => !!job);
        flatJobsInput.map(this.registerJob);
        logger_1.logger.debug(`Job registered.`);
    }
}
exports.JobLoader = JobLoader;
_JobLoader_sourceDir = new WeakMap(), _JobLoader_excludes = new WeakMap();
//# sourceMappingURL=job-loader.js.map