import { MedusaNextFunction, MedusaRequest } from "../types";
export declare function maybeApplyLinkFilter({ entryPoint, resourceId, filterableField, filterByField, }: {
    entryPoint: any;
    resourceId: any;
    filterableField: any;
    filterByField?: string | undefined;
}): (req: MedusaRequest, _: any, next: MedusaNextFunction) => Promise<void>;
//# sourceMappingURL=maybe-apply-link-filter.d.ts.map