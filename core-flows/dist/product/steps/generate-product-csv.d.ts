import { HttpTypes } from "@medusajs/framework/types";
export declare const generateProductCsvStepId = "generate-product-csv";
/**
 * This step generates a CSV file to be exported.
 */
export declare const generateProductCsvStep: import("@medusajs/framework/workflows-sdk").StepFunction<HttpTypes.AdminProduct[], {
    id: string;
    filename: string;
}>;
//# sourceMappingURL=generate-product-csv.d.ts.map