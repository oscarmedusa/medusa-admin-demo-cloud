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
var _WorkflowLoader_sourceDir, _WorkflowLoader_excludes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowLoader = void 0;
const utils_1 = require("@medusajs/utils");
const logger_1 = require("../logger");
const promises_1 = require("fs/promises");
const path_1 = require("path");
class WorkflowLoader {
    constructor(sourceDir) {
        /**
         * The directory from which to load the workflows
         * @private
         */
        _WorkflowLoader_sourceDir.set(this, void 0);
        /**
         * The list of file names to exclude from the subscriber scan
         * @private
         */
        _WorkflowLoader_excludes.set(this, [
            /index\.js/,
            /index\.ts/,
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts|\.md)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ]);
        __classPrivateFieldSet(this, _WorkflowLoader_sourceDir, sourceDir, "f");
    }
    /**
     * Load workflows from the source paths, workflows are registering themselves,
     * therefore we only need to import them
     */
    async load() {
        const normalizedSourcePath = Array.isArray(__classPrivateFieldGet(this, _WorkflowLoader_sourceDir, "f"))
            ? __classPrivateFieldGet(this, _WorkflowLoader_sourceDir, "f")
            : [__classPrivateFieldGet(this, _WorkflowLoader_sourceDir, "f")];
        const promises = normalizedSourcePath.map(async (sourcePath) => {
            try {
                await (0, promises_1.access)(sourcePath);
            }
            catch {
                logger_1.logger.info(`No workflow to load from ${sourcePath}. skipped.`);
                return;
            }
            return await (0, promises_1.readdir)(sourcePath, {
                recursive: true,
                withFileTypes: true,
            }).then(async (entries) => {
                const fileEntries = entries.filter((entry) => {
                    return (!entry.isDirectory() &&
                        !__classPrivateFieldGet(this, _WorkflowLoader_excludes, "f").some((exclude) => exclude.test(entry.name)));
                });
                logger_1.logger.debug(`Registering workflows from ${sourcePath}.`);
                return await (0, utils_1.promiseAll)(fileEntries.map(async (entry) => {
                    const fullPath = (0, path_1.join)(entry.path, entry.name);
                    return await (0, utils_1.dynamicImport)(fullPath);
                }));
            });
        });
        await (0, utils_1.promiseAll)(promises);
        logger_1.logger.debug(`Workflows registered.`);
    }
}
exports.WorkflowLoader = WorkflowLoader;
_WorkflowLoader_sourceDir = new WeakMap(), _WorkflowLoader_excludes = new WeakMap();
//# sourceMappingURL=workflow-loader.js.map