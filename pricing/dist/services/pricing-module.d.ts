import { AddPricesDTO, Context, DAL, FindConfig, InternalModuleDeclaration, ModuleJoinerConfig, ModulesSdkTypes, PricePreferenceDTO, PriceSetDTO, PricingContext, PricingFilters, PricingRepositoryService, PricingTypes, UpsertPricePreferenceDTO, UpsertPriceSetDTO } from "@medusajs/framework/types";
import { ModulesSdkUtils } from "@medusajs/framework/utils";
import { Price, PriceList, PriceListRule, PricePreference, PriceRule, PriceSet } from "../models";
import { ServiceTypes } from "../types";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    pricingRepository: PricingRepositoryService;
    priceSetService: ModulesSdkTypes.IMedusaInternalService<any>;
    priceRuleService: ModulesSdkTypes.IMedusaInternalService<any>;
    priceService: ModulesSdkTypes.IMedusaInternalService<any>;
    priceListService: ModulesSdkTypes.IMedusaInternalService<any>;
    pricePreferenceService: ModulesSdkTypes.IMedusaInternalService<any>;
    priceListRuleService: ModulesSdkTypes.IMedusaInternalService<any>;
};
declare const PricingModuleService_base: ModulesSdkUtils.MedusaServiceReturnType<{
    PriceSet: {
        dto: PricingTypes.PriceSetDTO;
    };
    Price: {
        dto: PricingTypes.PriceDTO;
    };
    PriceRule: {
        dto: PricingTypes.PriceRuleDTO;
        create: PricingTypes.CreatePriceRuleDTO;
        update: PricingTypes.UpdatePriceRuleDTO;
    };
    PriceList: {
        dto: PricingTypes.PriceListDTO;
    };
    PriceListRule: {
        dto: PricingTypes.PriceListRuleDTO;
    };
    PricePreference: {
        dto: any;
    };
}>;
export default class PricingModuleService extends PricingModuleService_base implements PricingTypes.IPricingModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly pricingRepository_: PricingRepositoryService;
    protected readonly priceSetService_: ModulesSdkTypes.IMedusaInternalService<PriceSet>;
    protected readonly priceRuleService_: ModulesSdkTypes.IMedusaInternalService<PriceRule>;
    protected readonly priceService_: ModulesSdkTypes.IMedusaInternalService<Price>;
    protected readonly priceListService_: ModulesSdkTypes.IMedusaInternalService<PriceList>;
    protected readonly priceListRuleService_: ModulesSdkTypes.IMedusaInternalService<PriceListRule>;
    protected readonly pricePreferenceService_: ModulesSdkTypes.IMedusaInternalService<PricePreference>;
    constructor({ baseRepository, pricingRepository, priceSetService, priceRuleService, priceService, pricePreferenceService, priceListService, priceListRuleService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    private setupCalculatedPriceConfig_;
    retrievePriceSet(id: string, config?: FindConfig<PriceSetDTO> | undefined, sharedContext?: Context | undefined): Promise<PriceSetDTO>;
    listPriceSets(filters?: PricingTypes.FilterablePriceSetProps, config?: FindConfig<PricingTypes.PriceSetDTO>, sharedContext?: Context): Promise<PriceSetDTO[]>;
    listAndCountPriceSets(filters?: PricingTypes.FilterablePriceSetProps, config?: FindConfig<PricingTypes.PriceSetDTO>, sharedContext?: Context): Promise<[PriceSetDTO[], number]>;
    calculatePrices(pricingFilters: PricingFilters, pricingContext?: PricingContext, sharedContext?: Context): Promise<PricingTypes.CalculatedPriceSet[]>;
    createPriceSets(data: PricingTypes.CreatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    createPriceSets(data: PricingTypes.CreatePriceSetDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    upsertPriceSets(data: UpsertPriceSetDTO[], sharedContext?: Context): Promise<PriceSetDTO[]>;
    upsertPriceSets(data: UpsertPriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    updatePriceSets(id: string, data: PricingTypes.UpdatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO>;
    updatePriceSets(selector: PricingTypes.FilterablePriceSetProps, data: PricingTypes.UpdatePriceSetDTO, sharedContext?: Context): Promise<PriceSetDTO[]>;
    protected updatePriceSets_(data: ServiceTypes.UpdatePriceSetInput[], sharedContext?: Context): Promise<PriceSet[]>;
    private normalizeUpdateData;
    private normalizePrices;
    addPrices(data: AddPricesDTO, sharedContext?: Context): Promise<PricingTypes.PriceSetDTO>;
    addPrices(data: AddPricesDTO[], sharedContext?: Context): Promise<PricingTypes.PriceSetDTO[]>;
    createPriceLists(data: PricingTypes.CreatePriceListDTO[], sharedContext?: Context): Promise<PricingTypes.PriceListDTO[]>;
    updatePriceLists(data: PricingTypes.UpdatePriceListDTO[], sharedContext?: Context): Promise<PricingTypes.PriceListDTO[]>;
    updatePriceListPrices(data: PricingTypes.UpdatePriceListPricesDTO[], sharedContext?: Context): Promise<PricingTypes.PriceDTO[]>;
    removePrices(ids: string[], sharedContext?: Context): Promise<void>;
    addPriceListPrices(data: PricingTypes.AddPriceListPricesDTO[], sharedContext?: Context): Promise<PricingTypes.PriceDTO[]>;
    setPriceListRules(data: PricingTypes.SetPriceListRulesDTO, sharedContext?: Context): Promise<PricingTypes.PriceListDTO>;
    removePriceListRules(data: PricingTypes.RemovePriceListRulesDTO, sharedContext?: Context): Promise<PricingTypes.PriceListDTO>;
    createPricePreferences(data: PricingTypes.CreatePricePreferenceDTO, sharedContext?: Context): Promise<PricePreferenceDTO>;
    createPricePreferences(data: PricingTypes.CreatePricePreferenceDTO[], sharedContext?: Context): Promise<PricePreferenceDTO[]>;
    upsertPricePreferences(data: UpsertPricePreferenceDTO[], sharedContext?: Context): Promise<PricePreferenceDTO[]>;
    upsertPricePreferences(data: UpsertPricePreferenceDTO, sharedContext?: Context): Promise<PricePreferenceDTO>;
    updatePricePreferences(id: string, data: PricingTypes.UpdatePricePreferenceDTO, sharedContext?: Context): Promise<PricePreferenceDTO>;
    updatePricePreferences(selector: PricingTypes.FilterablePricePreferenceProps, data: PricingTypes.UpdatePricePreferenceDTO, sharedContext?: Context): Promise<PricePreferenceDTO[]>;
    protected createPricePreferences_(data: PricingTypes.CreatePricePreferenceDTO[], sharedContext?: Context): Promise<PricePreference[]>;
    protected updatePricePreferences_(data: PricingTypes.UpdatePricePreferenceDTO[], sharedContext?: Context): Promise<PricePreference[]>;
    protected createPriceSets_(data: PricingTypes.CreatePriceSetDTO[], sharedContext?: Context): Promise<PriceSet[]>;
    protected addPrices_(input: AddPricesDTO[], sharedContext?: Context): Promise<Price[]>;
    protected createPriceLists_(data: PricingTypes.CreatePriceListDTO[], sharedContext?: Context): Promise<PriceList[]>;
    protected updatePriceLists_(data: PricingTypes.UpdatePriceListDTO[], sharedContext?: Context): Promise<PriceList[]>;
    protected updatePriceListPrices_(data: PricingTypes.UpdatePriceListPricesDTO[], sharedContext?: Context): Promise<Price[]>;
    protected removePrices_(ids: string[], sharedContext?: Context): Promise<void>;
    protected addPriceListPrices_(data: PricingTypes.AddPriceListPricesDTO[], sharedContext?: Context): Promise<Price[]>;
    protected setPriceListRules_(data: PricingTypes.SetPriceListRulesDTO[], sharedContext?: Context): Promise<PriceList[]>;
    protected removePriceListRules_(data: PricingTypes.RemovePriceListRulesDTO[], sharedContext?: Context): Promise<PriceList[]>;
    protected normalizePriceListDate(data: (ServiceTypes.UpdatePriceListDTO | ServiceTypes.CreatePriceListDTO | ServiceTypes.CreatePriceListDTO)[]): any[];
    protected normalizePriceSetConfig(config: FindConfig<PricingTypes.PriceSetDTO> | undefined): {
        select?: string[] | undefined;
        skip?: number | null | undefined;
        take?: number | null | undefined;
        relations?: string[];
        order?: {
            [K: string]: "ASC" | "DESC";
        };
        withDeleted?: boolean;
        filters?: Record<string, any>;
        options: Record<string, any>;
    };
}
export {};
//# sourceMappingURL=pricing-module.d.ts.map