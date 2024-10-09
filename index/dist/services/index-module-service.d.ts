import { Constructor, IEventBusModuleService, IndexTypes, InternalModuleDeclaration, RemoteQueryFunction } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, MikroOrmBaseRepository as BaseRepository, Modules } from "@medusajs/framework/utils";
type InjectedDependencies = {
    [Modules.EVENT_BUS]: IEventBusModuleService;
    storageProviderCtr: Constructor<IndexTypes.StorageProvider>;
    [ContainerRegistrationKeys.QUERY]: RemoteQueryFunction;
    storageProviderCtrOptions: unknown;
    baseRepository: BaseRepository;
};
export default class IndexModuleService implements IndexTypes.IIndexService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    private readonly container_;
    private readonly moduleOptions_;
    protected readonly eventBusModuleService_: IEventBusModuleService;
    protected schemaObjectRepresentation_: IndexTypes.SchemaObjectRepresentation;
    protected schemaEntitiesMap_: Record<string, any>;
    protected readonly storageProviderCtr_: Constructor<IndexTypes.StorageProvider>;
    protected readonly storageProviderCtrOptions_: unknown;
    protected storageProvider_: IndexTypes.StorageProvider;
    constructor(container: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __hooks: {
        onApplicationStart(this: IndexModuleService): Promise<void>;
    };
    protected onApplicationStart_(): Promise<void>;
    query<const TEntry extends string>(config: IndexTypes.IndexQueryConfig<TEntry>): Promise<IndexTypes.QueryResultSet<TEntry>>;
    protected registerListeners(): void;
    private buildSchemaObjectRepresentation_;
}
export {};
//# sourceMappingURL=index-module-service.d.ts.map