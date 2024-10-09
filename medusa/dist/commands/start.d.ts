/**
 * Imports the "instrumentation.js" file from the root of the
 * directory and invokes the register function. The existence
 * of this file is optional, hence we ignore "ENOENT"
 * errors.
 */
export declare function registerInstrumentation(directory: string): Promise<void>;
/**
 * Wrap request handler inside custom implementation to enabled
 * instrumentation.
 */
export declare var traceRequestHandler: (...args: any[]) => Promise<any>;
declare function start({ port, directory, types }: {
    port: any;
    directory: any;
    types: any;
}): Promise<void>;
export default start;
//# sourceMappingURL=start.d.ts.map