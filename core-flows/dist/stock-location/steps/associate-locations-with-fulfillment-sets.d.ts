export interface AssociateFulfillmentSetsWithLocationStepInput {
    input: {
        location_id: string;
        fulfillment_set_ids: string[];
    }[];
}
export declare const associateFulfillmentSetsWithLocationStepId = "associate-fulfillment-sets-with-location-step";
/**
 * This step creates links between location and fulfillment set records.
 */
export declare const associateFulfillmentSetsWithLocationStep: import("@medusajs/framework/workflows-sdk").StepFunction<AssociateFulfillmentSetsWithLocationStepInput, unknown[]>;
//# sourceMappingURL=associate-locations-with-fulfillment-sets.d.ts.map