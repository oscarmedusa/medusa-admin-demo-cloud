"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEDUSA_PROJECT_NAME = void 0;
exports.getResolvedPlugins = getResolvedPlugins;
const utils_1 = require("@medusajs/framework/utils");
const fs_1 = __importDefault(require("fs"));
const fs_exists_cached_1 = require("fs-exists-cached");
const path_1 = __importStar(require("path"));
exports.MEDUSA_PROJECT_NAME = "project-plugin";
function createPluginId(name) {
    return name;
}
function createFileContentHash(path, files) {
    return path + files;
}
function getExtensionDirectoryPath() {
    /**
     * Grab directory for loading resources inside a starter kit from
     * the medusa-config file.
     *
     * When using ts-node we will read resources from "src" directory
     * otherwise from "dist" directory.
     */
    return process[Symbol.for("ts-node.register.instance")] ? "src" : "dist";
}
/**
 * Load plugin details from a path. Return undefined if does not contains a package.json
 * @param pluginName
 * @param path
 * @param includeExtensionDirectoryPath should include src | dist for the resolved details
 */
function loadPluginDetails({ pluginName, resolvedPath, includeExtensionDirectoryPath, }) {
    if ((0, fs_exists_cached_1.sync)(`${resolvedPath}/package.json`)) {
        const packageJSON = JSON.parse(fs_1.default.readFileSync(`${resolvedPath}/package.json`, `utf-8`));
        const name = packageJSON.name || pluginName;
        const extensionDirectoryPath = getExtensionDirectoryPath();
        const resolve = includeExtensionDirectoryPath
            ? path_1.default.join(resolvedPath, extensionDirectoryPath)
            : resolvedPath;
        return {
            resolve,
            name,
            id: createPluginId(name),
            options: {},
            version: packageJSON.version || createFileContentHash(path_1.default, `**`),
        };
    }
    // Make package.json a requirement for local plugins too
    throw new Error(`Plugin ${pluginName} requires a package.json file`);
}
/**
 * Finds the correct path for the plugin. If it is a local plugin it will be
 * found in the plugins folder. Otherwise we will look for the plugin in the
 * installed npm packages.
 * @param {string} pluginName - the name of the plugin to find. Should match
 *    the name of the folder where the plugin is contained.
 * @return {object} the plugin details
 */
function resolvePlugin(pluginName) {
    if (!(0, path_1.isAbsolute)(pluginName)) {
        let resolvedPath = path_1.default.resolve(`./plugins/${pluginName}`);
        const doesExistsInPlugin = (0, fs_exists_cached_1.sync)(resolvedPath);
        if (doesExistsInPlugin) {
            return loadPluginDetails({
                pluginName,
                resolvedPath,
            });
        }
        // Find the plugin in the file system
        resolvedPath = path_1.default.resolve(pluginName);
        const doesExistsInFileSystem = (0, fs_exists_cached_1.sync)(resolvedPath);
        if (doesExistsInFileSystem) {
            return loadPluginDetails({
                pluginName,
                resolvedPath,
                includeExtensionDirectoryPath: true,
            });
        }
        throw new Error(`Unable to find the plugin "${pluginName}".`);
    }
    try {
        // If the path is absolute, resolve the directory of the internal plugin,
        // otherwise resolve the directory containing the package.json
        const resolvedPath = require.resolve(pluginName);
        const packageJSON = JSON.parse(fs_1.default.readFileSync(`${resolvedPath}/package.json`, `utf-8`));
        const computedResolvedPath = path_1.default.join(resolvedPath, "dist");
        return {
            resolve: computedResolvedPath,
            id: createPluginId(packageJSON.name),
            name: packageJSON.name,
            options: {},
            version: packageJSON.version,
        };
    }
    catch (err) {
        throw new Error(`Unable to find plugin "${pluginName}". Perhaps you need to install its package?`);
    }
}
function getResolvedPlugins(rootDirectory, configModule, isMedusaProject = false) {
    const resolved = configModule?.plugins?.map((plugin) => {
        if ((0, utils_1.isString)(plugin)) {
            return resolvePlugin(plugin);
        }
        const details = resolvePlugin(plugin.resolve);
        details.options = plugin.options;
        return details;
    });
    if (isMedusaProject) {
        const extensionDirectoryPath = getExtensionDirectoryPath();
        const extensionDirectory = path_1.default.join(rootDirectory, extensionDirectoryPath);
        resolved.push({
            resolve: extensionDirectory,
            name: exports.MEDUSA_PROJECT_NAME,
            id: createPluginId(exports.MEDUSA_PROJECT_NAME),
            options: configModule,
            version: createFileContentHash(process.cwd(), `**`),
        });
    }
    return resolved;
}
//# sourceMappingURL=resolve-plugins.js.map