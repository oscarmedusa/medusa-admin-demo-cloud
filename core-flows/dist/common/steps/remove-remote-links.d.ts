import { DeleteEntityInput } from "@medusajs/framework/modules-sdk";
type RemoveRemoteLinksStepInput = DeleteEntityInput | DeleteEntityInput[];
export declare const removeRemoteLinkStepId = "remove-remote-links";
/**
 * This step deletes linked records of a record.
 *
 * Learn more in the [Remote Link documentation](https://docs.medusajs.com/v2/advanced-development/modules/remote-link#cascade-delete-linked-records)
 *
 * @example
 * import {
 *   createWorkflow
 * } from "@medusajs/framework/workflows-sdk"
 * import {
 *   removeRemoteLinkStep
 * } from "@medusajs/medusa/core-flows"
 * import {
 *   Modules
 * } from "@medusajs/framework/utils"
 *
 * const helloWorldWorkflow = createWorkflow(
 *   "hello-world",
 *   () => {
 *     removeRemoteLinkStep([{
 *       [Modules.PRODUCT]: {
 *         product_id: "prod_123",
 *       },
 *     }])
 *   }
 * )
 */
export declare const removeRemoteLinkStep: import("@medusajs/framework/workflows-sdk").StepFunction<RemoveRemoteLinksStepInput, DeleteEntityInput | undefined>;
export {};
//# sourceMappingURL=remove-remote-links.d.ts.map