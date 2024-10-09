import { CreateRegionDTO, RegionDTO } from "../../region";
export interface CreateRegionsWorkflowInput {
    regions: (CreateRegionDTO & {
        payment_providers?: string[];
        is_tax_inclusive?: boolean;
    })[];
}
export type CreateRegionsWorkflowOutput = RegionDTO[];
//# sourceMappingURL=create-regions.d.ts.map