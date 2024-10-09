import { Context } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
declare const InventoryLevelRepository_base: new ({ manager }: {
    manager: any;
}) => import("@medusajs/framework/utils").MikroOrmBaseRepository<object>;
export declare class InventoryLevelRepository extends InventoryLevelRepository_base {
    getReservedQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
    getAvailableQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
    getStockedQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
}
export {};
//# sourceMappingURL=inventory-level.d.ts.map