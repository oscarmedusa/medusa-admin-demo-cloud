import { AdminOptions } from '@medusajs/types';
import * as express_serve_static_core from 'express-serve-static-core';

type BundlerOptions = Required<Pick<AdminOptions, "outDir" | "path">> & Pick<AdminOptions, "vite" | "backendUrl" | "storefrontUrl"> & {
    sources?: string[];
};

declare function build(options: BundlerOptions): Promise<void>;

declare function develop(options: BundlerOptions): Promise<express_serve_static_core.Router>;

type ServeOptions = {
    outDir: string;
};
declare function serve(options: ServeOptions): Promise<express_serve_static_core.Router>;

export { type BundlerOptions, build, develop, serve };
