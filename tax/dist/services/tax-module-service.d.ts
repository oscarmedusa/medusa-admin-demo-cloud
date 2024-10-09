import { Context, DAL, InternalModuleDeclaration, ITaxModuleService, ITaxProvider, ModulesSdkTypes, TaxRegionDTO, TaxTypes } from "@medusajs/framework/types";
import { ModulesSdkUtils } from "@medusajs/framework/utils";
import { TaxProvider, TaxRate, TaxRateRule, TaxRegion } from "../models";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    taxRateService: ModulesSdkTypes.IMedusaInternalService<any>;
    taxRegionService: ModulesSdkTypes.IMedusaInternalService<any>;
    taxRateRuleService: ModulesSdkTypes.IMedusaInternalService<any>;
    taxProviderService: ModulesSdkTypes.IMedusaInternalService<any>;
    [key: `tp_${string}`]: ITaxProvider;
};
declare const TaxModuleService_base: ModulesSdkUtils.MedusaServiceReturnType<{
    TaxRate: {
        dto: TaxTypes.TaxRateDTO;
    };
    TaxRegion: {
        dto: TaxTypes.TaxRegionDTO;
    };
    TaxRateRule: {
        dto: TaxTypes.TaxRateRuleDTO;
    };
    TaxProvider: {
        dto: TaxTypes.TaxProviderDTO;
    };
}>;
export default class TaxModuleService extends TaxModuleService_base implements ITaxModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected readonly container_: InjectedDependencies;
    protected baseRepository_: DAL.RepositoryService;
    protected taxRateService_: ModulesSdkTypes.IMedusaInternalService<TaxRate>;
    protected taxRegionService_: ModulesSdkTypes.IMedusaInternalService<TaxRegion>;
    protected taxRateRuleService_: ModulesSdkTypes.IMedusaInternalService<TaxRateRule>;
    protected taxProviderService_: ModulesSdkTypes.IMedusaInternalService<TaxProvider>;
    constructor({ baseRepository, taxRateService, taxRegionService, taxRateRuleService, taxProviderService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    createTaxRates(data: TaxTypes.CreateTaxRateDTO[], sharedContext?: Context): Promise<TaxTypes.TaxRateDTO[]>;
    createTaxRates(data: TaxTypes.CreateTaxRateDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateDTO>;
    protected createTaxRates_(data: TaxTypes.CreateTaxRateDTO[], sharedContext?: Context): Promise<TaxTypes.TaxRateDTO[]>;
    updateTaxRates(id: string, data: TaxTypes.UpdateTaxRateDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateDTO>;
    updateTaxRates(ids: string[], data: TaxTypes.UpdateTaxRateDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateDTO[]>;
    updateTaxRates(selector: TaxTypes.FilterableTaxRateProps, data: TaxTypes.UpdateTaxRateDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateDTO[]>;
    protected updateTaxRates_(idOrSelector: string | string[] | TaxTypes.FilterableTaxRateProps, data: TaxTypes.UpdateTaxRateDTO, sharedContext?: Context): Promise<TaxRate>;
    private setTaxRateRulesForTaxRates;
    private getTaxRateIdsFromSelector;
    upsertTaxRates(data: TaxTypes.UpsertTaxRateDTO[], sharedContext?: Context): Promise<TaxTypes.TaxRateDTO[]>;
    upsertTaxRates(data: TaxTypes.UpsertTaxRateDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateDTO>;
    createTaxRegions(data: TaxTypes.CreateTaxRegionDTO, sharedContext?: Context): Promise<TaxRegionDTO>;
    createTaxRegions(data: TaxTypes.CreateTaxRegionDTO[], sharedContext?: Context): Promise<TaxRegionDTO[]>;
    createTaxRegions_(data: TaxTypes.CreateTaxRegionDTO[], sharedContext?: Context): Promise<TaxRegionDTO[]>;
    createTaxRateRules(data: TaxTypes.CreateTaxRateRuleDTO, sharedContext?: Context): Promise<TaxTypes.TaxRateRuleDTO>;
    createTaxRateRules(data: TaxTypes.CreateTaxRateRuleDTO[], sharedContext?: Context): Promise<TaxTypes.TaxRateRuleDTO[]>;
    createTaxRateRules_(data: TaxTypes.CreateTaxRateRuleDTO[], sharedContext?: Context): Promise<TaxTypes.TaxRateRuleDTO[]>;
    getTaxLines(items: (TaxTypes.TaxableItemDTO | TaxTypes.TaxableShippingDTO)[], calculationContext: TaxTypes.TaxCalculationContext, sharedContext?: Context): Promise<(TaxTypes.ItemTaxLineDTO | TaxTypes.ShippingTaxLineDTO)[]>;
    private getTaxLinesFromProvider;
    private normalizeTaxCalculationContext;
    private prepareTaxRegionInputForCreate;
    private verifyProvinceToCountryMatch;
    private geTaxRatesForItem;
    private geTaxRateQueryForItem;
    private checkRuleMatches;
    private prioritizeRates;
    private normalizeRegionCodes;
}
export {};
//# sourceMappingURL=tax-module-service.d.ts.map