"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPaymentProvider = void 0;
exports.isPaymentProviderError = isPaymentProviderError;
class AbstractPaymentProvider {
    /**
     * Override this static method in order for the loader to validate the options provided to the module provider.
     * @param options
     */
    static validateOptions(options) { }
    /**
     * You can use the `constructor` of the provider's service to access resources in your module's container.
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * The provider can also access the module's options as a second parameter.
     *
     * @param {MedusaContainer} container - The module's container used to resolve resources.
     * @param {Record<string, unknown>} config - The options passed to the payment module provider.
     *
     * @example
     * ```ts
     * import {
     *   AbstractPaymentProvider
     * } from "@medusajs/framework/utils"
     * import { Logger } from "@medusajs/framework/types"
     *
     * type InjectedDependencies = {
     *   logger: Logger
     * }
     *
     * type Options = {
     *   apiKey: string
     * }
     *
     * class MyPaymentProviderService extends AbstractPaymentProvider<
     *   Options
     * > {
     *   protected logger_: Logger
     *   protected options_: Options
     *   // Assuming you're using a client to integrate
     *   // with a third-party service
     *   protected client
     *
     *   constructor(
     *     { logger }: InjectedDependencies,
     *     options: Options
     *   ) {
     *     // @ts-ignore
     *     super(...arguments)
     *
     *     this.logger_ = logger
     *     this.options_ = options
     *
     *     // Assuming you're initializing a client
     *     this.client = new Client(options)
     *   }
     *
     *   // ...
     * }
     *
     * export default MyPaymentProviderService
     * ```
     */
    constructor(container, config = {} // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        this.container = container;
        this.config = config;
    }
    /**
     * @ignore
     */
    static isPaymentProvider(object) {
        return object?.constructor?._isPaymentProvider;
    }
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    getIdentifier() {
        const ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error(`Missing static property "identifier".`);
        }
        return ctr.identifier;
    }
}
exports.AbstractPaymentProvider = AbstractPaymentProvider;
/**
 * @ignore
 */
AbstractPaymentProvider._isPaymentProvider = true;
/**
 * @ignore
 */
function isPaymentProviderError(obj) {
    return (obj &&
        typeof obj === "object" &&
        "error" in obj &&
        "code" in obj &&
        "detail" in obj);
}
//# sourceMappingURL=abstract-payment-provider.js.map