import { Context, CreateStockLocationInput, DAL, FilterableStockLocationProps, IEventBusService, InternalModuleDeclaration, IStockLocationService, ModuleJoinerConfig, ModulesSdkTypes, StockLocationAddressInput, StockLocationTypes, UpdateStockLocationInput, UpsertStockLocationInput } from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { StockLocation, StockLocationAddress } from "../models";
type InjectedDependencies = {
    [Modules.EVENT_BUS]: IEventBusService;
    baseRepository: DAL.RepositoryService;
    stockLocationService: ModulesSdkTypes.IMedusaInternalService<any>;
    stockLocationAddressService: ModulesSdkTypes.IMedusaInternalService<any>;
};
declare const StockLocationModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<{
    StockLocation: {
        dto: StockLocationTypes.StockLocationDTO;
    };
    StockLocationAddress: {
        dto: StockLocationTypes.StockLocationAddressDTO;
    };
}>;
/**
 * Service for managing stock locations.
 */
export default class StockLocationModuleService extends StockLocationModuleService_base implements IStockLocationService {
    protected readonly moduleDeclaration?: InternalModuleDeclaration | undefined;
    protected readonly eventBusModuleService_: IEventBusService;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly stockLocationService_: ModulesSdkTypes.IMedusaInternalService<StockLocation>;
    protected readonly stockLocationAddressService_: ModulesSdkTypes.IMedusaInternalService<StockLocationAddress>;
    constructor({ [Modules.EVENT_BUS]: eventBusModuleService, baseRepository, stockLocationService, stockLocationAddressService, }: InjectedDependencies, moduleDeclaration?: InternalModuleDeclaration | undefined);
    __joinerConfig(): ModuleJoinerConfig;
    createStockLocations(data: CreateStockLocationInput, context: Context): Promise<StockLocationTypes.StockLocationDTO>;
    createStockLocations(data: CreateStockLocationInput[], context: Context): Promise<StockLocationTypes.StockLocationDTO[]>;
    createStockLocations_(data: CreateStockLocationInput[], context?: Context): Promise<StockLocation[]>;
    upsertStockLocations(data: UpsertStockLocationInput, context?: Context): Promise<StockLocationTypes.StockLocationDTO>;
    upsertStockLocations(data: UpsertStockLocationInput[], context?: Context): Promise<StockLocationTypes.StockLocationDTO[]>;
    upsertStockLocations_(input: UpsertStockLocationInput[], context?: Context): Promise<StockLocation[]>;
    updateStockLocations(id: string, input: UpdateStockLocationInput, context?: Context): Promise<StockLocationTypes.StockLocationDTO>;
    updateStockLocations(selector: FilterableStockLocationProps, input: UpdateStockLocationInput, context?: Context): Promise<StockLocationTypes.StockLocationDTO[]>;
    updateStockLocations_(data: UpdateStockLocationInput[] | UpdateStockLocationInput | {
        data: any;
        selector: FilterableStockLocationProps;
    }, context?: Context): Promise<StockLocation[] | StockLocation>;
    updateStockLocationAddresses(data: StockLocationAddressInput & {
        id: string;
    }, context?: Context): Promise<StockLocationTypes.StockLocationAddressDTO>;
    updateStockLocationAddresses(data: (StockLocationAddressInput & {
        id: string;
    })[], context?: Context): Promise<StockLocationTypes.StockLocationAddressDTO[]>;
    private updateStockLocationAddresses_;
}
export {};
//# sourceMappingURL=stock-location-module.d.ts.map