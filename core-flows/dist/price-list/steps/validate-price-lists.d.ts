import { PriceListDTO, UpdatePriceListDTO } from "@medusajs/framework/types";
export declare const validatePriceListsStepId = "validate-price-lists";
/**
 * This step validates that the specified price lists exist.
 */
export declare const validatePriceListsStep: import("@medusajs/framework/workflows-sdk").StepFunction<Pick<UpdatePriceListDTO, "id">[], Record<string, PriceListDTO>>;
//# sourceMappingURL=validate-price-lists.d.ts.map