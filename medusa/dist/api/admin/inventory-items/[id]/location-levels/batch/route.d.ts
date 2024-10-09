import { AdminCreateInventoryLocationLevelType, AdminUpdateInventoryLocationLevelType } from "../../../validators";
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { BatchMethodRequest } from "@medusajs/framework/types";
export declare const POST: (req: MedusaRequest<BatchMethodRequest<AdminCreateInventoryLocationLevelType, AdminUpdateInventoryLocationLevelType>>, res: MedusaResponse<{
    inventory_item: {};
}>) => Promise<void>;
//# sourceMappingURL=route.d.ts.map