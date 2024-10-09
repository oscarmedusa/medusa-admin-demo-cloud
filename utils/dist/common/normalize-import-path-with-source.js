"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeImportPathWithSource = normalizeImportPathWithSource;
const path_1 = require("path");
/**
 * Normalize the import path based on the project running on ts-node or not.
 * @param path
 */
function normalizeImportPathWithSource(path) {
    let normalizePath = path;
    /**
     * If the project is running on ts-node all relative module resolution
     * will target the src directory and otherwise the dist directory.
     * If the path is not relative, then we can safely import from it and let the resolution
     * happen under the hood.
     */
    if (normalizePath?.startsWith("./")) {
        const sourceDir = process[Symbol.for("ts-node.register.instance")]
            ? "src"
            : "dist";
        normalizePath = (0, path_1.join)(process.cwd(), sourceDir, normalizePath);
    }
    return normalizePath ?? "";
}
//# sourceMappingURL=normalize-import-path-with-source.js.map