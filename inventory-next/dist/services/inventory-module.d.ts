import { BigNumberInput, Context, DAL, IInventoryService, InternalModuleDeclaration, InventoryTypes, ModuleJoinerConfig, ModulesSdkTypes, RestoreReturn, SoftDeleteReturn } from "@medusajs/framework/types";
import { BigNumber } from "@medusajs/framework/utils";
import { InventoryItem, InventoryLevel, ReservationItem } from "../models";
import InventoryLevelService from "./inventory-level";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    inventoryItemService: ModulesSdkTypes.IMedusaInternalService<any>;
    inventoryLevelService: InventoryLevelService;
    reservationItemService: ModulesSdkTypes.IMedusaInternalService<any>;
};
declare const InventoryModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<{
    InventoryItem: {
        dto: InventoryTypes.InventoryItemDTO;
    };
    InventoryLevel: {
        dto: InventoryTypes.InventoryLevelDTO;
    };
    ReservationItem: {
        dto: InventoryTypes.ReservationItemDTO;
    };
}>;
export default class InventoryModuleService extends InventoryModuleService_base implements IInventoryService {
    protected readonly moduleDeclaration?: InternalModuleDeclaration | undefined;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly inventoryItemService_: ModulesSdkTypes.IMedusaInternalService<InventoryItem>;
    protected readonly reservationItemService_: ModulesSdkTypes.IMedusaInternalService<ReservationItem>;
    protected readonly inventoryLevelService_: InventoryLevelService;
    constructor({ baseRepository, inventoryItemService, inventoryLevelService, reservationItemService, }: InjectedDependencies, moduleDeclaration?: InternalModuleDeclaration | undefined);
    __joinerConfig(): ModuleJoinerConfig;
    private ensureInventoryLevels;
    private sanitizeInventoryLevelInput;
    private sanitizeInventoryItemInput;
    createReservationItems(input: InventoryTypes.CreateReservationItemInput[], context?: Context): Promise<InventoryTypes.ReservationItemDTO[]>;
    createReservationItems(input: InventoryTypes.CreateReservationItemInput, context?: Context): Promise<InventoryTypes.ReservationItemDTO>;
    createReservationItems_(input: InventoryTypes.CreateReservationItemInput[], context?: Context): Promise<ReservationItem[]>;
    createInventoryItems(input: InventoryTypes.CreateInventoryItemInput, context?: Context): Promise<InventoryTypes.InventoryItemDTO>;
    createInventoryItems(input: InventoryTypes.CreateInventoryItemInput[], context?: Context): Promise<InventoryTypes.InventoryItemDTO[]>;
    createInventoryItems_(input: InventoryTypes.CreateInventoryItemInput[], context?: Context): Promise<InventoryTypes.InventoryItemDTO[]>;
    createInventoryLevels(input: InventoryTypes.CreateInventoryLevelInput, context?: Context): Promise<InventoryTypes.InventoryLevelDTO>;
    createInventoryLevels(input: InventoryTypes.CreateInventoryLevelInput[], context?: Context): Promise<InventoryTypes.InventoryLevelDTO[]>;
    createInventoryLevels_(input: InventoryTypes.CreateInventoryLevelInput[], context?: Context): Promise<InventoryLevel[]>;
    updateInventoryItems(input: InventoryTypes.UpdateInventoryItemInput[], context?: Context): Promise<InventoryTypes.InventoryItemDTO[]>;
    updateInventoryItems(input: InventoryTypes.UpdateInventoryItemInput, context?: Context): Promise<InventoryTypes.InventoryItemDTO>;
    updateInventoryItems_(input: (Partial<InventoryTypes.CreateInventoryItemInput> & {
        id: string;
    })[], context?: Context): Promise<InventoryItem[]>;
    deleteInventoryItemLevelByLocationId(locationId: string | string[], context?: Context): Promise<[object[], Record<string, unknown[]>]>;
    /**
     * Deletes an inventory level
     * @param inventoryItemId - the id of the inventory item associated with the level
     * @param locationId - the id of the location associated with the level
     * @param context
     */
    deleteInventoryLevel(inventoryItemId: string, locationId: string, context?: Context): Promise<void>;
    updateInventoryLevels(updates: InventoryTypes.BulkUpdateInventoryLevelInput[], context?: Context): Promise<InventoryTypes.InventoryLevelDTO[]>;
    updateInventoryLevels(updates: InventoryTypes.BulkUpdateInventoryLevelInput, context?: Context): Promise<InventoryTypes.InventoryLevelDTO>;
    updateInventoryLevels_(updates: InventoryTypes.BulkUpdateInventoryLevelInput[], context?: Context): Promise<InventoryLevel[]>;
    /**
     * Updates a reservation item
     * @param reservationItemId
     * @param input - the input object
     * @param context
     * @param context
     * @return The updated inventory level
     */
    updateReservationItems(input: InventoryTypes.UpdateReservationItemInput[], context?: Context): Promise<InventoryTypes.ReservationItemDTO[]>;
    updateReservationItems(input: InventoryTypes.UpdateReservationItemInput, context?: Context): Promise<InventoryTypes.ReservationItemDTO>;
    updateReservationItems_(input: (InventoryTypes.UpdateReservationItemInput & {
        id: string;
    })[], context?: Context): Promise<ReservationItem[]>;
    softDeleteReservationItems(ids: string | string[], config?: SoftDeleteReturn<string>, context?: Context): Promise<void>;
    restoreReservationItems(ids: string | string[], config?: RestoreReturn<string>, context?: Context): Promise<void>;
    deleteReservationItemByLocationId(locationId: string | string[], context?: Context): Promise<void>;
    /**
     * Deletes reservation items by line item
     * @param lineItemId - the id of the line item associated with the reservation item
     * @param context
     */
    deleteReservationItemsByLineItem(lineItemId: string | string[], context?: Context): Promise<void>;
    /**
     * Deletes reservation items by line item
     * @param lineItemId - the id of the line item associated with the reservation item
     * @param context
     */
    restoreReservationItemsByLineItem(lineItemId: string | string[], context?: Context): Promise<void>;
    /**
     * Adjusts the inventory level for a given inventory item and location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationId - the id of the location
     * @param adjustment - the number to adjust the inventory by (can be positive or negative)
     * @param context
     * @return The updated inventory level
     * @throws when the inventory level is not found
     */
    adjustInventory(inventoryItemId: string, locationId: string, adjustment: BigNumberInput, context: Context): Promise<InventoryTypes.InventoryLevelDTO>;
    adjustInventory(data: {
        inventoryItemId: string;
        locationId: string;
        adjustment: BigNumberInput;
    }[], context: Context): Promise<InventoryTypes.InventoryLevelDTO[]>;
    adjustInventory_(inventoryItemId: string, locationId: string, adjustment: BigNumberInput, context?: Context): Promise<InventoryLevel>;
    retrieveInventoryLevelByItemAndLocation(inventoryItemId: string, locationId: string, context?: Context): Promise<InventoryTypes.InventoryLevelDTO>;
    /**
     * Retrieves the available quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The available quantity
     * @throws when the inventory item is not found
     */
    retrieveAvailableQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
    /**
     * Retrieves the stocked quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The stocked quantity
     * @throws when the inventory item is not found
     */
    retrieveStockedQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
    /**
     * Retrieves the reserved quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param context
     * @return The reserved quantity
     * @throws when the inventory item is not found
     */
    retrieveReservedQuantity(inventoryItemId: string, locationIds: string[], context?: Context): Promise<BigNumber>;
    /**
     * Confirms whether there is sufficient inventory for a given quantity of a given inventory item in a given location.
     * @param inventoryItemId - the id of the inventory item
     * @param locationIds - the ids of the locations to check
     * @param quantity - the quantity to check
     * @param context
     * @return Whether there is sufficient inventory
     */
    confirmInventory(inventoryItemId: string, locationIds: string[], quantity: BigNumberInput, context?: Context): Promise<boolean>;
    private adjustInventoryLevelsForReservationsDeletion;
    private adjustInventoryLevelsForReservationsRestore;
    private adjustInventoryLevelsForReservations_;
}
export {};
//# sourceMappingURL=inventory-module.d.ts.map