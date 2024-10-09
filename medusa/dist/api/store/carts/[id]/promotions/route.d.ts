import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { StoreAddCartPromotionsType, StoreRemoveCartPromotionsType } from "../../validators";
import { HttpTypes } from "@medusajs/framework/types";
export declare const POST: (req: MedusaRequest<StoreAddCartPromotionsType>, res: MedusaResponse<HttpTypes.StoreCartResponse>) => Promise<void>;
export declare const DELETE: (req: MedusaRequest<StoreRemoveCartPromotionsType>, res: MedusaResponse<{
    cart: HttpTypes.StoreCart;
}>) => Promise<void>;
//# sourceMappingURL=route.d.ts.map