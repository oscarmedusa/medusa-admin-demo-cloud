"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const utils_1 = require("@medusajs/framework/utils");
const core_1 = require("@swc/core");
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const path_1 = __importDefault(require("path"));
const INPUT_DIR = "./src";
const OUTPUT_DIR = "./dist";
const COMPILE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
const IGNORE_EXTENSIONS = [".md"];
async function clean(path) {
    await (0, promises_1.rm)(path, { recursive: true }).catch(() => { });
}
async function findFiles(dir) {
    try {
        const files = await (0, promises_1.readdir)(dir, { withFileTypes: true });
        const paths = await Promise.all(files.map(async (file) => {
            const res = path_1.default.join(dir, file.name);
            return file.isDirectory() ? findFiles(res) : res;
        }));
        return paths.flat();
    }
    catch (e) {
        console.error(`Failed to read directory ${dir}`);
        console.error(e);
        throw e;
    }
}
const getOutputPath = (file, config) => {
    const { inputDir, outputDir, targetExtension } = config;
    const inputDirName = path_1.default.basename(inputDir);
    const outputDirName = path_1.default.basename(outputDir);
    const relativePath = file.replace(inputDirName, outputDirName);
    let outputPath = relativePath;
    if (targetExtension) {
        const currentExtension = path_1.default.extname(outputPath);
        outputPath = outputPath.replace(currentExtension, targetExtension);
    }
    return outputPath.replaceAll(path_1.default.sep, "/");
};
const writeToOut = async (file, content, config) => {
    const outputPath = getOutputPath(file, config);
    await (0, promises_1.mkdir)(outputPath.replace(/\/[^/]+$/, ""), { recursive: true });
    await (0, promises_1.writeFile)(outputPath, content);
};
async function copyToOut(file, config) {
    const outputPath = getOutputPath(file, config);
    await (0, promises_1.mkdir)(outputPath.replace(/\/[^/]+$/, ""), { recursive: true });
    await (0, promises_1.copyFile)(file, outputPath);
}
const medusaTransform = async (file) => {
    if (COMPILE_EXTENSIONS.some((ext) => file.endsWith(ext))) {
        const outputPath = getOutputPath(file, {
            inputDir: INPUT_DIR,
            outputDir: OUTPUT_DIR,
        });
        const output = await (0, core_1.transformFile)(file, {
            sourceFileName: path_1.default.relative(path_1.default.dirname(outputPath), file),
            sourceMaps: "inline",
            module: {
                type: "commonjs",
            },
            jsc: {
                parser: {
                    syntax: "typescript",
                    decorators: true,
                },
                transform: {
                    decoratorMetadata: true,
                },
                target: "es2021",
                externalHelpers: true,
            },
        });
        await writeToOut(file, output.code, {
            inputDir: INPUT_DIR,
            outputDir: OUTPUT_DIR,
            targetExtension: ".js",
        });
    }
    else if (!IGNORE_EXTENSIONS.some((ext) => file.endsWith(ext))) {
        // Copy non-ts files
        await copyToOut(file, { inputDir: INPUT_DIR, outputDir: OUTPUT_DIR });
    }
};
async function default_1({ directory }) {
    const started = Date.now();
    const { configModule, error } = (0, utils_1.getConfigFile)(directory, "medusa-config");
    if (error) {
        console.error(`Failed to load medusa-config.js`);
        console.error(error);
        process.exit(1);
    }
    const input = path_1.default.join(directory, INPUT_DIR);
    const dist = path_1.default.join(directory, OUTPUT_DIR);
    await clean(dist);
    const files = await findFiles(input);
    await Promise.all(files.map(medusaTransform));
    const sources = [];
    const projectSource = path_1.default.join(directory, "src", "admin");
    if ((0, node_fs_1.existsSync)(projectSource)) {
        sources.push(projectSource);
    }
    const adminOptions = {
        disable: false,
        path: "/app",
        outDir: "./build",
        sources,
        ...configModule.admin,
    };
    if (!adminOptions.disable) {
        try {
            const { build: buildProductionBuild } = await import("@medusajs/admin-bundler");
            await buildProductionBuild(adminOptions);
        }
        catch (error) {
            console.error("Failed to build admin");
            console.error(error);
        }
    }
    const time = Date.now() - started;
    console.log(`Build completed in ${time}ms`);
}
//# sourceMappingURL=build.js.map