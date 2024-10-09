import { Constructor, InternalModuleDeclaration, LoaderOptions, Logger, MedusaContainer, ModuleExports, ModuleLoaderFunction, ModuleResolution } from "@medusajs/types";
type ModuleResource = {
    services: Function[];
    models: Function[];
    repositories: Function[];
    loaders: ModuleLoaderFunction[];
    moduleService: Constructor<any>;
    normalizedPath: string;
};
type MigrationFunction = (options: LoaderOptions<any>, moduleDeclaration?: InternalModuleDeclaration) => Promise<void>;
export declare function resolveModuleExports({ resolution, }: {
    resolution: ModuleResolution;
}): Promise<(ModuleExports & {
    discoveryPath: string;
}) | {
    error: any;
}>;
export declare function loadInternalModule(container: MedusaContainer, resolution: ModuleResolution, logger: Logger, migrationOnly?: boolean, loaderOnly?: boolean): Promise<{
    error?: Error;
} | void>;
export declare function loadModuleMigrations(resolution: ModuleResolution, moduleExports?: ModuleExports): Promise<{
    runMigrations?: MigrationFunction;
    revertMigration?: MigrationFunction;
    generateMigration?: MigrationFunction;
}>;
export declare function loadResources({ moduleResolution, discoveryPath, logger, loadedModuleLoaders, }: {
    moduleResolution: ModuleResolution;
    discoveryPath: string;
    logger?: Logger;
    loadedModuleLoaders?: ModuleLoaderFunction[];
}): Promise<ModuleResource>;
export {};
//# sourceMappingURL=load-internal.d.ts.map