import { Constructor, DAL, FulfillmentTypes, IFulfillmentProvider } from "@medusajs/framework/types";
type InjectedDependencies = {
    fulfillmentProviderRepository: DAL.RepositoryService;
    [key: `fp_${string}`]: FulfillmentTypes.IFulfillmentProvider;
};
declare const FulfillmentProviderService_base: new (container: InjectedDependencies) => import("@medusajs/framework/types").IMedusaInternalService<any, InjectedDependencies>;
export default class FulfillmentProviderService extends FulfillmentProviderService_base {
    protected readonly fulfillmentProviderRepository_: DAL.RepositoryService;
    constructor(container: InjectedDependencies);
    static getRegistrationIdentifier(providerClass: Constructor<IFulfillmentProvider>, optionName?: string): string;
    protected retrieveProviderRegistration(providerId: string): FulfillmentTypes.IFulfillmentProvider;
    listFulfillmentOptions(providerIds: string[]): Promise<any[]>;
    getFulfillmentOptions(providerId: string): Promise<Record<string, unknown>[]>;
    validateFulfillmentData(providerId: string, optionData: Record<string, unknown>, data: Record<string, unknown>, context: Record<string, unknown>): Promise<any>;
    validateOption(providerId: string, data: Record<string, unknown>): Promise<boolean>;
    createFulfillment(providerId: string, data: object, items: object[], order: object | undefined, fulfillment: Record<string, unknown>): Promise<Record<string, unknown>>;
    cancelFulfillment(providerId: string, fulfillment: Record<string, unknown>): Promise<any>;
    createReturn(providerId: string, fulfillment: Record<string, unknown>): Promise<any>;
}
export {};
//# sourceMappingURL=fulfillment-provider.d.ts.map