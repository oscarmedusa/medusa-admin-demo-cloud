import { LinkDefinition } from "@medusajs/framework/types";
export declare const createLinksStepId = "create-remote-links";
/**
 * This step creates remote links between two records of linked data models.
 *
 * Learn more in the [Remote Link documentation.](https://docs.medusajs.com/v2/advanced-development/modules/remote-link#create-link).
 *
 * @example
 * import {
 *   createWorkflow
 * } from "@medusajs/framework/workflows-sdk"
 * import {
 *   createRemoteLinkStep
 * } from "@medusajs/medusa/core-flows"
 * import {
 *   Modules
 * } from "@medusajs/framework/utils"
 *
 * const helloWorldWorkflow = createWorkflow(
 *   "hello-world",
 *   () => {
 *     createRemoteLinkStep([{
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
export declare const createRemoteLinkStep: import("@medusajs/framework/workflows-sdk").StepFunction<LinkDefinition[], LinkDefinition[]>;
//# sourceMappingURL=create-remote-links.d.ts.map