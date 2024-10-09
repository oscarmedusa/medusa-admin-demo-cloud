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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ApiRoutesLoader_routesMap, _ApiRoutesLoader_globalMiddlewaresDescriptor, _ApiRoutesLoader_app, _ApiRoutesLoader_router, _ApiRoutesLoader_activityId, _ApiRoutesLoader_excludes, _ApiRoutesLoader_sourceDir, _RoutesLoader_app, _RoutesLoader_activityId, _RoutesLoader_sourceDir;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesLoader = exports.ApiRoutesLoader = void 0;
const utils_1 = require("@medusajs/utils");
const cors_1 = __importDefault(require("cors"));
const express_1 = require("express");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const config_1 = require("../config");
const logger_1 = require("../logger");
const middlewares_1 = require("./middlewares");
const ensure_publishable_api_key_1 = require("./middlewares/ensure-publishable-api-key");
const types_1 = require("./types");
const log = ({ activityId, message, }) => {
    if (activityId) {
        logger_1.logger.progress(activityId, message);
        return;
    }
    logger_1.logger.debug(message);
};
/**
 * File name that is used to indicate that the file is a route file
 */
const ROUTE_NAME = "route";
/**
 * Flag that developers can export from their route files to indicate
 * whether or not the route should be authenticated or not.
 */
const AUTHTHENTICATE = "AUTHENTICATE";
/**
 * File name for the global middlewares file
 */
const MIDDLEWARES_NAME = "middlewares";
const pathSegmentReplacer = {
    "\\[\\.\\.\\.\\]": () => `*`,
    "\\[(\\w+)?": (param) => `:${param}`,
    "\\]": () => ``,
};
/**
 * @param routes - The routes to prioritize
 *
 * @return An array of sorted
 * routes based on their priority
 */
const prioritize = (routes) => {
    return routes.sort((a, b) => {
        return a.priority - b.priority;
    });
};
/**
 * The smaller the number the higher the priority with zero indicating
 * highest priority
 *
 * @param path - The path to calculate the priority for
 *
 * @return An integer ranging from `0` to `Infinity`
 */
function calculatePriority(path) {
    const depth = path.match(/\/.+?/g)?.length || 0;
    const specifity = path.match(/\/:.+?/g)?.length || 0;
    const catchall = (path.match(/\/\*/g)?.length || 0) > 0 ? Infinity : 0;
    return depth + specifity + catchall;
}
function matchMethod(method, configMethod) {
    if (!configMethod || configMethod === "USE" || configMethod === "ALL") {
        return true;
    }
    else if (Array.isArray(configMethod)) {
        return (configMethod.includes(method) ||
            configMethod.includes("ALL") ||
            configMethod.includes("USE"));
    }
    else {
        return method === configMethod;
    }
}
/**
 * Function that looks though the global middlewares and returns the first
 * complete match for the given path and method.
 *
 * @param path - The path to match
 * @param method - The method to match
 * @param routes - The routes to match against
 * @returns The first complete match or undefined if no match is found
 */
function findMatch(path, method, routes) {
    for (const route of routes) {
        const { matcher, method: configMethod } = route;
        if (matchMethod(method, configMethod)) {
            let isMatch = false;
            if (typeof matcher === "string") {
                // Convert wildcard expressions to proper regex for matching entire path
                // The '.*' will match any character sequence including '/'
                const regex = new RegExp(`^${matcher.split("*").join(".*")}$`);
                isMatch = regex.test(path);
            }
            else if (matcher instanceof RegExp) {
                // Ensure that the regex matches the entire path
                const match = path.match(matcher);
                isMatch = match !== null && match[0] === path;
            }
            if (isMatch) {
                return route; // Return the first complete match
            }
        }
    }
    return undefined; // Return undefined if no complete match is found
}
/**
 * Returns an array of body parser middlewares that are applied on routes
 * out-of-the-box.
 */
function getBodyParserMiddleware(args) {
    const sizeLimit = args?.sizeLimit;
    const preserveRawBody = args?.preserveRawBody;
    return [
        (0, express_1.json)({
            limit: sizeLimit,
            verify: preserveRawBody
                ? (req, res, buf) => {
                    req.rawBody = buf;
                }
                : undefined,
        }),
        (0, express_1.text)({ limit: sizeLimit }),
        (0, express_1.urlencoded)({ limit: sizeLimit, extended: true }),
    ];
}
// TODO this router would need a proper rework, but it is out of scope right now
class ApiRoutesLoader {
    constructor({ app, activityId, sourceDir, }) {
        /**
         * Map of router path and its descriptor
         * @private
         */
        _ApiRoutesLoader_routesMap.set(this, new Map()
        /**
         * Global middleware descriptors
         * @private
         */
        );
        /**
         * Global middleware descriptors
         * @private
         */
        _ApiRoutesLoader_globalMiddlewaresDescriptor.set(this, void 0);
        /**
         * An express instance
         * @private
         */
        _ApiRoutesLoader_app.set(this, void 0);
        /**
         * A router to assign the route to
         * @private
         */
        _ApiRoutesLoader_router.set(this, void 0);
        /**
         * An eventual activity id for information tracking
         * @private
         */
        _ApiRoutesLoader_activityId.set(this, void 0);
        /**
         * The list of file names to exclude from the routes scan
         * @private
         */
        _ApiRoutesLoader_excludes.set(this, [
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts|\.md)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ]
        /**
         * Path from where to load the routes from
         * @private
         */
        );
        /**
         * Path from where to load the routes from
         * @private
         */
        _ApiRoutesLoader_sourceDir.set(this, void 0);
        __classPrivateFieldSet(this, _ApiRoutesLoader_app, app, "f");
        __classPrivateFieldSet(this, _ApiRoutesLoader_router, (0, express_1.Router)(), "f");
        __classPrivateFieldSet(this, _ApiRoutesLoader_activityId, activityId, "f");
        __classPrivateFieldSet(this, _ApiRoutesLoader_sourceDir, sourceDir, "f");
    }
    /**
     * Validate the route config and display a log info if
     * it should be ignored or skipped.
     *
     * @param {GlobalMiddlewareDescriptor} descriptor
     * @param {MiddlewaresConfig} config
     *
     * @return {void}
     */
    validateMiddlewaresConfig({ config, }) {
        if (!config?.routes && !config?.errorHandler) {
            log({
                activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                message: `Empty middleware config. Skipping middleware application.`,
            });
            return;
        }
        for (const route of config.routes ?? []) {
            if (!route.matcher) {
                throw new Error(`Route is missing a \`matcher\` field. The 'matcher' field is required when applying middleware to this route.`);
            }
        }
    }
    /**
     * Take care of replacing the special path segments
     * to an express specific path segment
     *
     * @param route - The route to parse
     *
     * @example
     * "/admin/orders/[id]/route.ts => "/admin/orders/:id/route.ts"
     */
    parseRoute(route) {
        let route_ = route;
        for (const config of Object.entries(pathSegmentReplacer)) {
            const [searchFor, replacedByFn] = config;
            const replacer = new RegExp(searchFor, "g");
            const matches = [...route_.matchAll(replacer)];
            const parameters = new Set();
            for (const match of matches) {
                if (match?.[1] && !Number.isInteger(match?.[1])) {
                    if (parameters.has(match?.[1])) {
                        log({
                            activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                            message: `Duplicate parameters found in route ${route} (${match?.[1]})`,
                        });
                        throw new Error(`Duplicate parameters found in route ${route} (${match?.[1]}). Make sure that all parameters are unique.`);
                    }
                    parameters.add(match?.[1]);
                }
                route_ = route_.replace(match[0], replacedByFn(match?.[1]));
            }
            const extension = (0, path_1.extname)(route_);
            if (extension) {
                route_ = route_.replace(extension, "");
            }
        }
        route = route_;
        return route;
    }
    /**
     * Load the file content from a descriptor and retrieve the verbs and handlers
     * to be assigned to the descriptor
     *
     * @return {Promise<void>}
     */
    async createRoutesConfig() {
        await (0, utils_1.promiseAll)([...__classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f").values()].map(async (descriptor) => {
            const absolutePath = descriptor.absolutePath;
            const route = descriptor.route;
            return await (0, utils_1.dynamicImport)(absolutePath).then((import_) => {
                const map = __classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f");
                const config = {
                    routes: [],
                };
                /**
                 * If the developer has not exported the
                 * AUTHENTICATE flag we default to true.
                 */
                const shouldRequireAuth = import_[AUTHTHENTICATE] !== undefined
                    ? import_[AUTHTHENTICATE]
                    : true;
                config.optedOutOfAuth = !shouldRequireAuth;
                /**
                 * If the developer has not exported the
                 * CORS flag we default to true.
                 */
                const shouldAddCors = import_["CORS"] !== undefined ? import_["CORS"] : true;
                if (route.startsWith("/admin")) {
                    config.routeType = "admin";
                    if (shouldAddCors) {
                        config.shouldAppendAdminCors = true;
                    }
                }
                if (route.startsWith("/store")) {
                    config.routeType = "store";
                    if (shouldAddCors) {
                        config.shouldAppendStoreCors = true;
                    }
                }
                if (route.startsWith("/auth") && shouldAddCors) {
                    config.routeType = "auth";
                    if (shouldAddCors) {
                        config.shouldAppendAuthCors = true;
                    }
                }
                const handlers = Object.keys(import_).filter((key) => {
                    /**
                     * Filter out any export that is not a function
                     */
                    return typeof import_[key] === "function";
                });
                for (const handler of handlers) {
                    if (types_1.HTTP_METHODS.includes(handler)) {
                        config.routes?.push({
                            method: handler,
                            handler: import_[handler],
                        });
                    }
                    else {
                        log({
                            activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                            message: `Skipping handler ${handler} in ${absolutePath}. Invalid HTTP method: ${handler}.`,
                        });
                    }
                }
                if (!config.routes?.length) {
                    log({
                        activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                        message: `No valid route handlers detected in ${absolutePath}. Skipping route configuration.`,
                    });
                    map.delete(absolutePath);
                    return;
                }
                descriptor.config = config;
                map.set(absolutePath, descriptor);
            });
        }));
    }
    createRoutesDescriptor(path) {
        const descriptor = {
            absolutePath: path,
            relativePath: path,
            route: "",
            priority: Infinity,
        };
        const childPath = path.replace(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), "");
        descriptor.relativePath = childPath;
        let routeToParse = childPath;
        const pathSegments = routeToParse.split(path_1.sep);
        const lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment.startsWith("route")) {
            pathSegments.pop();
            routeToParse = pathSegments.join("/");
        }
        descriptor.route = this.parseRoute(routeToParse);
        descriptor.priority = calculatePriority(descriptor.route);
        __classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f").set(path, descriptor);
    }
    async createMiddlewaresDescriptor() {
        const filePaths = await (0, promises_1.readdir)(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"));
        const filteredFilePaths = filePaths.filter((path) => {
            const pathToCheck = path.replace(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), "");
            return !pathToCheck
                .split(path_1.sep)
                .some((segment) => __classPrivateFieldGet(this, _ApiRoutesLoader_excludes, "f").some((exclude) => exclude.test(segment)));
        });
        const middlewareFilePath = filteredFilePaths.find((file) => {
            return file.replace(/\.[^/.]+$/, "") === MIDDLEWARES_NAME;
        });
        if (!middlewareFilePath) {
            log({
                activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                message: `No middleware files found in ${__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f")}. Skipping middleware configuration.`,
            });
            return;
        }
        const absolutePath = (0, path_1.join)(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), middlewareFilePath);
        await (0, utils_1.dynamicImport)(absolutePath).then((import_) => {
            const middlewaresConfig = (0, utils_1.resolveExports)(import_).default;
            if (!middlewaresConfig) {
                log({
                    activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                    message: `No middleware configuration found in ${absolutePath}. Skipping middleware configuration.`,
                });
                return;
            }
            middlewaresConfig.routes = middlewaresConfig.routes?.map((route) => {
                return {
                    ...route,
                    method: route.method ?? "USE",
                };
            });
            const descriptor = {
                config: middlewaresConfig,
            };
            this.validateMiddlewaresConfig(descriptor);
            __classPrivateFieldSet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, descriptor, "f");
        });
    }
    async createRoutesMap() {
        await (0, utils_1.promiseAll)(await (0, promises_1.readdir)(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), {
            recursive: true,
            withFileTypes: true,
        }).then((entries) => {
            const fileEntries = entries.filter((entry) => {
                const fullPathFromSource = (0, path_1.join)(entry.path, entry.name).replace(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), "");
                const isExcluded = fullPathFromSource
                    .split(path_1.sep)
                    .some((segment) => __classPrivateFieldGet(this, _ApiRoutesLoader_excludes, "f").some((exclude) => exclude.test(segment)));
                return (!entry.isDirectory() &&
                    !isExcluded &&
                    (0, path_1.parse)(entry.name).name === ROUTE_NAME);
            });
            return fileEntries.map(async (entry) => {
                const path = (0, path_1.join)(entry.path, entry.name);
                return this.createRoutesDescriptor(path);
            });
        }));
    }
    /**
     * Apply the most specific body parser middleware to the router
     */
    applyBodyParserMiddleware(path, method) {
        const middlewareDescriptor = __classPrivateFieldGet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, "f");
        const mostSpecificConfig = findMatch(path, method, middlewareDescriptor?.config?.routes ?? []);
        if (!mostSpecificConfig || mostSpecificConfig?.bodyParser === undefined) {
            __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f")[method.toLowerCase()](path, ...getBodyParserMiddleware());
            return;
        }
        if (mostSpecificConfig?.bodyParser) {
            __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f")[method.toLowerCase()](path, ...getBodyParserMiddleware(mostSpecificConfig?.bodyParser));
            return;
        }
        return;
    }
    /**
     * Applies middleware that checks if a valid publishable key is set on store request
     */
    applyStorePublishableKeyMiddleware(route) {
        let middleware = ensure_publishable_api_key_1.ensurePublishableApiKeyMiddleware;
        if (ApiRoutesLoader.traceMiddleware) {
            middleware = ApiRoutesLoader.traceMiddleware(middleware, { route: route });
        }
        __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(route, middleware);
    }
    /**
     * Applies the route middleware on a route. Encapsulates the logic
     * needed to pass the middleware via the trace calls
     */
    applyAuthMiddleware(route, actorType, authType, options) {
        let authenticateMiddleware = (0, middlewares_1.authenticate)(actorType, authType, options);
        if (ApiRoutesLoader.traceMiddleware) {
            authenticateMiddleware = ApiRoutesLoader.traceMiddleware(authenticateMiddleware, { route: route });
        }
        __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(route, authenticateMiddleware);
    }
    /**
     * Apply the route specific middlewares to the router,
     * this includes the cors, authentication and
     * body parsing. These are applied first to ensure
     * that they are applied before any other middleware.
     */
    applyRouteSpecificMiddlewares() {
        const prioritizedRoutes = prioritize([...__classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f").values()]);
        for (const descriptor of prioritizedRoutes) {
            if (!descriptor.config?.routes?.length) {
                continue;
            }
            const config = descriptor.config;
            const routes = descriptor.config.routes;
            /**
             * Apply default store and admin middlewares if
             * not opted out of.
             */
            if (config.shouldAppendAdminCors) {
                /**
                 * Apply the admin cors
                 */
                __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(descriptor.route, (0, cors_1.default)({
                    origin: (0, utils_1.parseCorsOrigins)(config_1.configManager.config.projectConfig.http.adminCors),
                    credentials: true,
                }));
            }
            if (config.shouldAppendAuthCors) {
                /**
                 * Apply the auth cors
                 */
                __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(descriptor.route, (0, cors_1.default)({
                    origin: (0, utils_1.parseCorsOrigins)(config_1.configManager.config.projectConfig.http.authCors),
                    credentials: true,
                }));
            }
            if (config.shouldAppendStoreCors) {
                /**
                 * Apply the store cors
                 */
                __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(descriptor.route, (0, cors_1.default)({
                    origin: (0, utils_1.parseCorsOrigins)(config_1.configManager.config.projectConfig.http.storeCors),
                    credentials: true,
                }));
            }
            if (config.routeType === "store") {
                this.applyStorePublishableKeyMiddleware(descriptor.route);
            }
            // We only apply the auth middleware to store routes to populate the auth context. For actual authentication, users can just reapply the middleware.
            if (!config.optedOutOfAuth && config.routeType === "store") {
                this.applyAuthMiddleware(descriptor.route, "customer", ["bearer", "session"], {
                    allowUnauthenticated: true,
                });
            }
            if (!config.optedOutOfAuth && config.routeType === "admin") {
                this.applyAuthMiddleware(descriptor.route, "user", [
                    "bearer",
                    "session",
                    "api-key",
                ]);
            }
            for (const route of routes) {
                /**
                 * Apply the body parser middleware if the route
                 * has not opted out of it.
                 */
                this.applyBodyParserMiddleware(descriptor.route, route.method);
            }
        }
    }
    /**
     * Apply the error handler middleware to the router
     */
    applyErrorHandlerMiddleware() {
        const middlewareDescriptor = __classPrivateFieldGet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, "f");
        const errorHandlerFn = middlewareDescriptor?.config?.errorHandler;
        /**
         * If the user has opted out of the error handler then return
         */
        if (errorHandlerFn === false) {
            return;
        }
        /**
         * If the user has provided a custom error handler then use it
         */
        if (errorHandlerFn) {
            __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use(errorHandlerFn);
            return;
        }
        /**
         * If the user has not provided a custom error handler then use the
         * default one.
         */
        __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f").use((0, middlewares_1.errorHandler)());
    }
    async registerRoutes() {
        const middlewareDescriptor = __classPrivateFieldGet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, "f");
        const shouldWrapHandler = middlewareDescriptor?.config
            ? middlewareDescriptor.config.errorHandler !== false
            : true;
        const prioritizedRoutes = prioritize([...__classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f").values()]);
        for (const descriptor of prioritizedRoutes) {
            if (!descriptor.config?.routes?.length) {
                continue;
            }
            const routes = descriptor.config.routes;
            for (const route of routes) {
                log({
                    activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                    message: `Registering route [${route.method?.toUpperCase()}] - ${descriptor.route}`,
                });
                let handler = route.handler;
                /**
                 * Give handler to the trace route handler for instrumentation
                 * from outside-in.
                 */
                if (ApiRoutesLoader.traceRoute) {
                    handler = ApiRoutesLoader.traceRoute(handler, {
                        method: route.method,
                        route: descriptor.route,
                    });
                }
                /**
                 * If the user hasn't opted out of error handling then
                 * we wrap the handler in a try/catch block.
                 */
                if (shouldWrapHandler) {
                    handler = (0, utils_1.wrapHandler)(handler);
                }
                __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f")[route.method.toLowerCase()](descriptor.route, handler);
            }
        }
    }
    async registerMiddlewares() {
        const descriptor = __classPrivateFieldGet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, "f");
        if (!descriptor) {
            return;
        }
        if (!descriptor.config?.routes?.length) {
            return;
        }
        const routes = descriptor.config.routes;
        /**
         * We don't prioritize the middlewares to preserve the order
         * in which they are defined in the 'middlewares.ts'. This is to
         * maintain the same behavior as how middleware is applied
         * in Express.
         */
        for (const route of routes) {
            if (!route.middlewares || !route.middlewares.length) {
                continue;
            }
            const methods = (Array.isArray(route.method) ? route.method : [route.method]).filter(Boolean);
            for (const method of methods) {
                log({
                    activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
                    message: `Registering middleware [${method}] - ${route.matcher}`,
                });
                let middlewares = route.middlewares;
                if (ApiRoutesLoader.traceMiddleware) {
                    middlewares = middlewares.map((middleware) => ApiRoutesLoader.traceMiddleware(middleware, {
                        route: String(route.matcher),
                        method,
                    }));
                }
                __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f")[method.toLowerCase()](route.matcher, ...middlewares);
            }
        }
    }
    async load() {
        performance && performance.mark("file-base-routing-start" + __classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"));
        let apiExists = true;
        /**
         * Since the file based routing does not require a index file
         * we can't check if it exists using require. Instead we try
         * to read the directory and if it fails we know that the
         * directory does not exist.
         */
        try {
            await (0, promises_1.readdir)(__classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"));
        }
        catch (_error) {
            apiExists = false;
        }
        if (apiExists) {
            await this.createMiddlewaresDescriptor();
            await this.createRoutesMap();
            await this.createRoutesConfig();
            this.applyRouteSpecificMiddlewares();
            await this.registerMiddlewares();
            await this.registerRoutes();
            this.applyErrorHandlerMiddleware();
            /**
             * Apply the router to the app.
             *
             * This prevents middleware from a plugin from
             * bleeding into the global middleware stack.
             */
            __classPrivateFieldGet(this, _ApiRoutesLoader_app, "f").use("/", __classPrivateFieldGet(this, _ApiRoutesLoader_router, "f"));
        }
        performance && performance.mark("file-base-routing-end" + __classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"));
        const timeSpent = performance &&
            performance
                .measure("file-base-routing-measure" + __classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), "file-base-routing-start" + __classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"), "file-base-routing-end" + __classPrivateFieldGet(this, _ApiRoutesLoader_sourceDir, "f"))
                ?.duration?.toFixed(2);
        log({
            activityId: __classPrivateFieldGet(this, _ApiRoutesLoader_activityId, "f"),
            message: `Routes loaded in ${timeSpent} ms`,
        });
        __classPrivateFieldGet(this, _ApiRoutesLoader_routesMap, "f").clear();
        __classPrivateFieldSet(this, _ApiRoutesLoader_globalMiddlewaresDescriptor, undefined, "f");
    }
}
exports.ApiRoutesLoader = ApiRoutesLoader;
_ApiRoutesLoader_routesMap = new WeakMap(), _ApiRoutesLoader_globalMiddlewaresDescriptor = new WeakMap(), _ApiRoutesLoader_app = new WeakMap(), _ApiRoutesLoader_router = new WeakMap(), _ApiRoutesLoader_activityId = new WeakMap(), _ApiRoutesLoader_excludes = new WeakMap(), _ApiRoutesLoader_sourceDir = new WeakMap();
class RoutesLoader {
    constructor({ app, activityId, sourceDir, }) {
        /**
         * An express instance
         * @private
         */
        _RoutesLoader_app.set(this, void 0);
        /**
         * An eventual activity id for information tracking
         * @private
         */
        _RoutesLoader_activityId.set(this, void 0);
        /**
         * Path from where to load the routes from
         * @private
         */
        _RoutesLoader_sourceDir.set(this, void 0);
        __classPrivateFieldSet(this, _RoutesLoader_app, app, "f");
        __classPrivateFieldSet(this, _RoutesLoader_activityId, activityId, "f");
        __classPrivateFieldSet(this, _RoutesLoader_sourceDir, sourceDir, "f");
    }
    async load() {
        const normalizedSourcePath = Array.isArray(__classPrivateFieldGet(this, _RoutesLoader_sourceDir, "f"))
            ? __classPrivateFieldGet(this, _RoutesLoader_sourceDir, "f")
            : [__classPrivateFieldGet(this, _RoutesLoader_sourceDir, "f")];
        const promises = normalizedSourcePath.map(async (sourcePath) => {
            const apiRoutesLoader = new ApiRoutesLoader({
                app: __classPrivateFieldGet(this, _RoutesLoader_app, "f"),
                activityId: __classPrivateFieldGet(this, _RoutesLoader_activityId, "f"),
                sourceDir: sourcePath,
            });
            await apiRoutesLoader.load();
        });
        await (0, utils_1.promiseAll)(promises);
    }
}
exports.RoutesLoader = RoutesLoader;
_RoutesLoader_app = new WeakMap(), _RoutesLoader_activityId = new WeakMap(), _RoutesLoader_sourceDir = new WeakMap();
//# sourceMappingURL=router.js.map