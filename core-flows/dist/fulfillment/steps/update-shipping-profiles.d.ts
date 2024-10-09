import { FilterableShippingProfileProps, UpdateShippingProfileDTO } from "@medusajs/framework/types";
export type UpdateShippingProfilesStepInput = {
    update: UpdateShippingProfileDTO;
    selector: FilterableShippingProfileProps;
};
export declare const updateShippingProfilesStepId = "update-shipping-profiles";
/**
 * This step updates shipping profiles matching the specified filters.
 */
export declare const updateShippingProfilesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateShippingProfilesStepInput, import("@medusajs/framework/types").ShippingProfileDTO[]>;
//# sourceMappingURL=update-shipping-profiles.d.ts.map