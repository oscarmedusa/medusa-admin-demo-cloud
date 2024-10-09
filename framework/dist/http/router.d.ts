import { type Express, RequestHandler } from "express";
import { AuthType } from "./middlewares";
import { MiddlewareFunction, MiddlewaresConfig, RouteHandler, RouteVerb } from "./types";
export declare class ApiRoutesLoader {
    #private;
    /**
     * Wrap the original route handler implementation for
     * instrumentation.
     */
    static traceRoute?: (handler: RouteHandler, route: {
        route: string;
        method: string;
    }) => RouteHandler;
    /**
     * Wrap the original middleware handler implementation for
     * instrumentation.
     */
    static traceMiddleware?: (handler: RequestHandler | MiddlewareFunction, route: {
        route: string;
        method?: string;
    }) => RequestHandler;
    constructor({ app, activityId, sourceDir, }: {
        app: Express;
        activityId?: string;
        sourceDir: string;
    });
    /**
     * Validate the route config and display a log info if
     * it should be ignored or skipped.
     *
     * @param {GlobalMiddlewareDescriptor} descriptor
     * @param {MiddlewaresConfig} config
     *
     * @return {void}
     */
    protected validateMiddlewaresConfig({ config, }: {
        config?: MiddlewaresConfig;
    }): void;
    /**
     * Take care of replacing the special path segments
     * to an express specific path segment
     *
     * @param route - The route to parse
     *
     * @example
     * "/admin/orders/[id]/route.ts => "/admin/orders/:id/route.ts"
     */
    protected parseRoute(route: string): string;
    /**
     * Load the file content from a descriptor and retrieve the verbs and handlers
     * to be assigned to the descriptor
     *
     * @return {Promise<void>}
     */
    protected createRoutesConfig(): Promise<void>;
    protected createRoutesDescriptor(path: string): void;
    protected createMiddlewaresDescriptor(): Promise<void>;
    protected createRoutesMap(): Promise<void>;
    /**
     * Apply the most specific body parser middleware to the router
     */
    applyBodyParserMiddleware(path: string, method: RouteVerb): void;
    /**
     * Applies middleware that checks if a valid publishable key is set on store request
     */
    applyStorePublishableKeyMiddleware(route: string): void;
    /**
     * Applies the route middleware on a route. Encapsulates the logic
     * needed to pass the middleware via the trace calls
     */
    applyAuthMiddleware(route: string, actorType: string | string[], authType: AuthType | AuthType[], options?: {
        allowUnauthenticated?: boolean;
        allowUnregistered?: boolean;
    }): void;
    /**
     * Apply the route specific middlewares to the router,
     * this includes the cors, authentication and
     * body parsing. These are applied first to ensure
     * that they are applied before any other middleware.
     */
    applyRouteSpecificMiddlewares(): void;
    /**
     * Apply the error handler middleware to the router
     */
    applyErrorHandlerMiddleware(): void;
    protected registerRoutes(): Promise<void>;
    protected registerMiddlewares(): Promise<void>;
    load(): Promise<void>;
}
export declare class RoutesLoader {
    #private;
    constructor({ app, activityId, sourceDir, }: {
        app: Express;
        activityId?: string;
        sourceDir: string | string[];
    });
    load(): Promise<void>;
}
//# sourceMappingURL=router.d.ts.map