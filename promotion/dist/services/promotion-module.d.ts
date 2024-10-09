import { CampaignBudgetTypeValues, Context, DAL, InternalModuleDeclaration, ModuleJoinerConfig, ModulesSdkTypes, PromotionTypes } from "@medusajs/framework/types";
import { ApplicationMethod, Campaign, CampaignBudget, Promotion, PromotionRule, PromotionRuleValue } from "../models";
import { ApplicationMethodRuleTypes } from "../types";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    promotionService: ModulesSdkTypes.IMedusaInternalService<any>;
    applicationMethodService: ModulesSdkTypes.IMedusaInternalService<any>;
    promotionRuleService: ModulesSdkTypes.IMedusaInternalService<any>;
    promotionRuleValueService: ModulesSdkTypes.IMedusaInternalService<any>;
    campaignService: ModulesSdkTypes.IMedusaInternalService<any>;
    campaignBudgetService: ModulesSdkTypes.IMedusaInternalService<any>;
};
declare const PromotionModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<{
    Promotion: {
        dto: PromotionTypes.PromotionDTO;
    };
    ApplicationMethod: {
        dto: PromotionTypes.ApplicationMethodDTO;
    };
    Campaign: {
        dto: PromotionTypes.CampaignDTO;
    };
    CampaignBudget: {
        dto: PromotionTypes.CampaignBudgetDTO;
    };
    PromotionRule: {
        dto: PromotionTypes.PromotionRuleDTO;
    };
    PromotionRuleValue: {
        dto: PromotionTypes.PromotionRuleValueDTO;
    };
}>;
export default class PromotionModuleService extends PromotionModuleService_base implements PromotionTypes.IPromotionModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected promotionService_: ModulesSdkTypes.IMedusaInternalService<Promotion>;
    protected applicationMethodService_: ModulesSdkTypes.IMedusaInternalService<ApplicationMethod>;
    protected promotionRuleService_: ModulesSdkTypes.IMedusaInternalService<PromotionRule>;
    protected promotionRuleValueService_: ModulesSdkTypes.IMedusaInternalService<PromotionRuleValue>;
    protected campaignService_: ModulesSdkTypes.IMedusaInternalService<Campaign>;
    protected campaignBudgetService_: ModulesSdkTypes.IMedusaInternalService<CampaignBudget>;
    constructor({ baseRepository, promotionService, applicationMethodService, promotionRuleService, promotionRuleValueService, campaignService, campaignBudgetService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    registerUsage(computedActions: PromotionTypes.UsageComputedActions[], sharedContext?: Context): Promise<void>;
    revertUsage(computedActions: PromotionTypes.UsageComputedActions[], sharedContext?: Context): Promise<void>;
    computeActions(promotionCodes: string[], applicationContext: PromotionTypes.ComputeActionContext, options?: PromotionTypes.ComputeActionOptions, sharedContext?: Context): Promise<PromotionTypes.ComputeActions[]>;
    createPromotions(data: PromotionTypes.CreatePromotionDTO, sharedContext?: Context): Promise<PromotionTypes.PromotionDTO>;
    createPromotions(data: PromotionTypes.CreatePromotionDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionDTO[]>;
    protected createPromotions_(data: PromotionTypes.CreatePromotionDTO[], sharedContext?: Context): Promise<Promotion[]>;
    updatePromotions(data: PromotionTypes.UpdatePromotionDTO, sharedContext?: Context): Promise<PromotionTypes.PromotionDTO>;
    updatePromotions(data: PromotionTypes.UpdatePromotionDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionDTO[]>;
    protected updatePromotions_(data: PromotionTypes.UpdatePromotionDTO[], sharedContext?: Context): Promise<Promotion[]>;
    updatePromotionRules(data: PromotionTypes.UpdatePromotionRuleDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionRuleDTO[]>;
    protected updatePromotionRules_(data: PromotionTypes.UpdatePromotionRuleDTO[], sharedContext?: Context): Promise<PromotionRule[]>;
    addPromotionRules(promotionId: string, rulesData: PromotionTypes.CreatePromotionRuleDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionRuleDTO[]>;
    addPromotionTargetRules(promotionId: string, rulesData: PromotionTypes.CreatePromotionRuleDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionRuleDTO[]>;
    addPromotionBuyRules(promotionId: string, rulesData: PromotionTypes.CreatePromotionRuleDTO[], sharedContext?: Context): Promise<PromotionTypes.PromotionRuleDTO[]>;
    protected createPromotionRulesAndValues_(rulesData: PromotionTypes.CreatePromotionRuleDTO[], relationName: "promotions" | "method_target_rules" | "method_buy_rules", relation: Promotion | ApplicationMethod, sharedContext?: Context): Promise<PromotionRule[]>;
    removePromotionRules(promotionId: string, ruleIds: string[], sharedContext?: Context): Promise<void>;
    protected removePromotionRules_(promotionId: string, ruleIds: string[], sharedContext?: Context): Promise<void>;
    removePromotionTargetRules(promotionId: string, ruleIds: string[], sharedContext?: Context): Promise<void>;
    removePromotionBuyRules(promotionId: string, ruleIds: string[], sharedContext?: Context): Promise<void>;
    protected removeApplicationMethodRules_(promotionId: string, ruleIds: string[], relation: ApplicationMethodRuleTypes.TARGET_RULES | ApplicationMethodRuleTypes.BUY_RULES, sharedContext?: Context): Promise<void>;
    createCampaigns(data: PromotionTypes.CreateCampaignDTO, sharedContext?: Context): Promise<PromotionTypes.CampaignDTO>;
    createCampaigns(data: PromotionTypes.CreateCampaignDTO[], sharedContext?: Context): Promise<PromotionTypes.CampaignDTO[]>;
    protected createCampaigns_(data: PromotionTypes.CreateCampaignDTO[], sharedContext?: Context): Promise<Campaign[]>;
    protected validateCampaignBudgetData(data: {
        type?: CampaignBudgetTypeValues;
        currency_code?: string | null;
    }): void;
    updateCampaigns(data: PromotionTypes.UpdateCampaignDTO, sharedContext?: Context): Promise<PromotionTypes.CampaignDTO>;
    updateCampaigns(data: PromotionTypes.UpdateCampaignDTO[], sharedContext?: Context): Promise<PromotionTypes.CampaignDTO[]>;
    protected updateCampaigns_(data: PromotionTypes.UpdateCampaignDTO[], sharedContext?: Context): Promise<Campaign[]>;
    addPromotionsToCampaign(data: PromotionTypes.AddPromotionsToCampaignDTO, sharedContext?: Context): Promise<{
        ids: string[];
    }>;
    protected addPromotionsToCampaign_(data: PromotionTypes.AddPromotionsToCampaignDTO, sharedContext?: Context): Promise<string[]>;
    removePromotionsFromCampaign(data: PromotionTypes.AddPromotionsToCampaignDTO, sharedContext?: Context): Promise<{
        ids: string[];
    }>;
    protected removePromotionsFromCampaign_(data: PromotionTypes.AddPromotionsToCampaignDTO, sharedContext?: Context): Promise<string[]>;
}
export {};
//# sourceMappingURL=promotion-module.d.ts.map