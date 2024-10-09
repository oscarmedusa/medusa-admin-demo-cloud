"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = adminLoader;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function adminLoader({ app, configModule, rootDirectory, }) {
    const { admin } = configModule;
    const sources = [];
    const projectSource = path_1.default.join(rootDirectory, "src", "admin");
    // check if the projectSource exists
    if (fs_1.default.existsSync(projectSource)) {
        sources.push(projectSource);
    }
    const adminOptions = {
        disable: false,
        path: "/app",
        outDir: "./build",
        sources,
        ...admin,
    };
    if (adminOptions?.disable) {
        return app;
    }
    if (process.env.NODE_ENV === "development") {
        return initDevelopmentServer(app, adminOptions);
    }
    return serveProductionBuild(app, adminOptions);
}
async function initDevelopmentServer(app, options) {
    const { develop } = await import("@medusajs/admin-bundler");
    const adminMiddleware = await develop(options);
    app.use(options.path, adminMiddleware);
    return app;
}
async function serveProductionBuild(app, options) {
    const { serve } = await import("@medusajs/admin-bundler");
    const adminRoute = await serve(options);
    app.use(options.path, adminRoute);
    return app;
}
//# sourceMappingURL=admin.js.map