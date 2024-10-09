import { LinkDefinition } from "@medusajs/framework/types";
export type DismissRemoteLinksStepInput = LinkDefinition | LinkDefinition[];
export declare const dismissRemoteLinkStepId = "dismiss-remote-links";
/**
 * This step removes remote links between two records of linked data models.
 *
 * Learn more in the [Remote Link documentation.](https://docs.medusajs.com/v2/advanced-development/modules/remote-link#dismiss-link).
 *
 * @example
 * import {
 *   createWorkflow
 * } from "@medusajs/framework/workflows-sdk"
 * import {
 *   dismissRemoteLinkStep
 * } from "@medusajs/medusa/core-flows"
 * import {
 *   Modules
 * } from "@medusajs/framework/utils"
 *
 * const helloWorldWorkflow = createWorkflow(
 *   "hello-world",
 *   () => {
 *     dismissRemoteLinkStep([{
 *       [Modules.PRODUCT]: {
 *         product_id: "prod_123",
 *       },
 *       "helloModuleService": {
 *         my_custom_id: "mc_123",
 *       },
 *     }])
 *   }
 * )
 */
export declare const dismissRemoteLinkStep: import("@medusajs/framework/workflows-sdk").StepFunction<DismissRemoteLinksStepInput, LinkDefinition[]>;
//# sourceMappingURL=dismiss-remote-links.d.ts.map