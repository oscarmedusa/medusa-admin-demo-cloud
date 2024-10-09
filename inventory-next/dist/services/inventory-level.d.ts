import { Context } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { InventoryLevelRepository } from "../repositories";
import { InventoryLevel } from "../models/inventory-level";
type InjectedDependencies = {
    inventoryLevelRepository: InventoryLevelRepository;
};
declare const InventoryLevelService_base: new (container: InjectedDependencies) => import("@medusajs/framework/types").IMedusaInternalService<InventoryLevel, InjectedDependencies>;
export default class InventoryLevelService extends InventoryLevelService_base {
    protected readonly inventoryLevelRepository: InventoryLevelRepository;
    constructor(container: InjectedDependencies);
    retrieveStockedQuantity(inventoryItemId: string, locationIds: string[] | string, context?: Context): Promise<BigNumber>;
    getAvailableQuantity(inventoryItemId: string, locationIds: string[] | string, context?: Context): Promise<BigNumber>;
    getReservedQuantity(inventoryItemId: string, locationIds: string[] | string, context?: Context): Promise<BigNumber>;
}
export {};
//# sourceMappingURL=inventory-level.d.ts.map