import { Context, DAL, FilterableOrderReturnReasonProps, FindConfig, InternalModuleDeclaration, IOrderModuleService, ModuleJoinerConfig, ModulesSdkTypes, OrderDTO, OrderReturnReasonDTO, OrderShippingMethodDTO, OrderTypes, RestoreReturn, SoftDeleteReturn, UpdateOrderReturnReasonDTO } from "@medusajs/framework/types";
import { ModulesSdkUtils } from "@medusajs/framework/utils";
import { Order, OrderAddress, OrderChange, OrderChangeAction, OrderClaim, OrderClaimItem, OrderClaimItemImage, OrderExchange, OrderExchangeItem, OrderItem, OrderLineItem, OrderLineItemAdjustment, OrderLineItemTaxLine, OrderShipping, OrderShippingMethod, OrderShippingMethodAdjustment, OrderShippingMethodTaxLine, OrderSummary, OrderTransaction, Return, ReturnItem, ReturnReason } from "../models";
import { CreateOrderChangeDTO, CreateOrderLineItemDTO, CreateOrderShippingMethodDTO } from "../types";
import OrderService from "./order-service";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    orderService: OrderService;
    orderAddressService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderLineItemService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderShippingMethodAdjustmentService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderShippingMethodService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderLineItemAdjustmentService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderLineItemTaxLineService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderShippingMethodTaxLineService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderTransactionService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderChangeService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderChangeActionService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderItemService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderSummaryService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderShippingService: ModulesSdkTypes.IMedusaInternalService<any>;
    returnReasonService: ModulesSdkTypes.IMedusaInternalService<any>;
    returnService: ModulesSdkTypes.IMedusaInternalService<any>;
    returnItemService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderClaimService: ModulesSdkTypes.IMedusaInternalService<any>;
    orderExchangeService: ModulesSdkTypes.IMedusaInternalService<any>;
};
declare const OrderModuleService_base: ModulesSdkUtils.MedusaServiceReturnType<{
    Order: {
        dto: OrderTypes.OrderDTO;
    };
    OrderAddress: {
        dto: OrderTypes.OrderAddressDTO;
    };
    OrderLineItem: {
        dto: OrderTypes.OrderLineItemDTO;
    };
    OrderLineItemAdjustment: {
        dto: OrderTypes.OrderLineItemAdjustmentDTO;
    };
    OrderLineItemTaxLine: {
        dto: OrderTypes.OrderLineItemTaxLineDTO;
    };
    OrderShippingMethod: {
        dto: OrderShippingMethodDTO;
    };
    OrderShippingMethodAdjustment: {
        dto: OrderTypes.OrderShippingMethodAdjustmentDTO;
    };
    OrderShippingMethodTaxLine: {
        dto: OrderTypes.OrderShippingMethodTaxLineDTO;
    };
    OrderShipping: {
        dto: any;
    };
    OrderChange: {
        dto: OrderTypes.OrderChangeDTO;
    };
    OrderChangeAction: {
        dto: OrderTypes.OrderChangeActionDTO;
    };
    OrderItem: {
        dto: OrderTypes.OrderItemDTO;
    };
    ReturnReason: {
        dto: OrderTypes.OrderReturnReasonDTO;
    };
    OrderSummary: {
        dto: OrderTypes.OrderSummaryDTO;
    };
    OrderTransaction: {
        dto: OrderTypes.OrderTransactionDTO;
    };
    Return: {
        dto: OrderTypes.ReturnDTO;
    };
    ReturnItem: {
        dto: OrderTypes.OrderReturnItemDTO;
    };
    OrderClaim: {
        dto: OrderTypes.OrderClaimDTO;
    };
    OrderClaimItem: {
        dto: OrderTypes.OrderClaimItemDTO;
    };
    OrderClaimItemImage: {
        dto: OrderTypes.OrderClaimItemImageDTO;
    };
    OrderExchange: {
        dto: OrderTypes.OrderExchangeDTO;
    };
    OrderExchangeItem: {
        dto: OrderTypes.OrderExchangeItemDTO;
    };
}>;
export default class OrderModuleService<TOrder extends Order = Order, TAddress extends OrderAddress = OrderAddress, TLineItem extends OrderLineItem = OrderLineItem, TLineItemAdjustment extends OrderLineItemAdjustment = OrderLineItemAdjustment, TLineItemTaxLine extends OrderLineItemTaxLine = OrderLineItemTaxLine, TOrderShippingMethodAdjustment extends OrderShippingMethodAdjustment = OrderShippingMethodAdjustment, TOrderShippingMethodTaxLine extends OrderShippingMethodTaxLine = OrderShippingMethodTaxLine, TOrderShippingMethod extends OrderShippingMethod = OrderShippingMethod, TOrderTransaction extends OrderTransaction = OrderTransaction, TOrderChange extends OrderChange = OrderChange, TOrderChangeAction extends OrderChangeAction = OrderChangeAction, TOrderItem extends OrderItem = OrderItem, TOrderSummary extends OrderSummary = OrderSummary, TOrderShipping extends OrderShipping = OrderShipping, TReturnReason extends ReturnReason = ReturnReason, TReturn extends Return = Return, TReturnItem extends ReturnItem = ReturnItem, TClaim extends OrderClaim = OrderClaim, TClaimItem extends OrderClaimItem = OrderClaimItem, TClaimItemImage extends OrderClaimItemImage = OrderClaimItemImage, TExchange extends OrderExchange = OrderExchange, TExchangeItem extends OrderExchangeItem = OrderExchangeItem> extends OrderModuleService_base implements IOrderModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected orderService_: OrderService;
    protected orderAddressService_: ModulesSdkTypes.IMedusaInternalService<TAddress>;
    protected orderLineItemService_: ModulesSdkTypes.IMedusaInternalService<TLineItem>;
    protected orderShippingMethodAdjustmentService_: ModulesSdkTypes.IMedusaInternalService<TOrderShippingMethodAdjustment>;
    protected orderShippingMethodService_: ModulesSdkTypes.IMedusaInternalService<TOrderShippingMethod>;
    protected orderLineItemAdjustmentService_: ModulesSdkTypes.IMedusaInternalService<TLineItemAdjustment>;
    protected orderLineItemTaxLineService_: ModulesSdkTypes.IMedusaInternalService<TLineItemTaxLine>;
    protected orderShippingMethodTaxLineService_: ModulesSdkTypes.IMedusaInternalService<TOrderShippingMethodTaxLine>;
    protected orderTransactionService_: ModulesSdkTypes.IMedusaInternalService<TOrderTransaction>;
    protected orderChangeService_: ModulesSdkTypes.IMedusaInternalService<TOrderChange>;
    protected orderChangeActionService_: ModulesSdkTypes.IMedusaInternalService<TOrderChangeAction>;
    protected orderItemService_: ModulesSdkTypes.IMedusaInternalService<TOrderItem>;
    protected orderSummaryService_: ModulesSdkTypes.IMedusaInternalService<TOrderSummary>;
    protected orderShippingService_: ModulesSdkTypes.IMedusaInternalService<TOrderShipping>;
    protected returnReasonService_: ModulesSdkTypes.IMedusaInternalService<TReturnReason>;
    protected returnService_: ModulesSdkTypes.IMedusaInternalService<TReturn>;
    protected returnItemService_: ModulesSdkTypes.IMedusaInternalService<TReturnItem>;
    protected orderClaimService_: ModulesSdkTypes.IMedusaInternalService<TClaim>;
    protected orderClaimItemService_: ModulesSdkTypes.IMedusaInternalService<TClaimItem>;
    protected orderClaimItemImageService_: ModulesSdkTypes.IMedusaInternalService<TClaimItemImage>;
    protected orderExchangeService_: ModulesSdkTypes.IMedusaInternalService<TExchange>;
    protected orderExchangeItemService_: ModulesSdkTypes.IMedusaInternalService<TExchangeItem>;
    constructor({ baseRepository, orderService, orderAddressService, orderLineItemService, orderShippingMethodAdjustmentService, orderShippingMethodService, orderLineItemAdjustmentService, orderShippingMethodTaxLineService, orderLineItemTaxLineService, orderTransactionService, orderChangeService, orderChangeActionService, orderItemService, orderSummaryService, orderShippingService, returnReasonService, returnService, returnItemService, orderClaimService, orderExchangeService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    private shouldIncludeTotals;
    private addRelationsToCalculateTotals;
    retrieveOrder(id: string, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderDTO>;
    listOrders(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderDTO[]>;
    listAndCountOrders(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<[OrderTypes.OrderDTO[], number]>;
    retrieveReturn(id: string, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.ReturnDTO>;
    listReturns(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.ReturnDTO[]>;
    listAndCountReturns(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<[OrderTypes.ReturnDTO[], number]>;
    retrieveOrderClaim(id: string, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderClaimDTO>;
    listOrderClaims(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderClaimDTO[]>;
    listAndCountOrderClaims(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<[OrderTypes.OrderClaimDTO[], number]>;
    retrieveOrderExchange(id: string, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderExchangeDTO>;
    listOrderExchanges(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<OrderTypes.OrderExchangeDTO[]>;
    listAndCountOrderExchanges(filters?: any, config?: FindConfig<any> | undefined, sharedContext?: Context | undefined): Promise<[OrderTypes.OrderExchangeDTO[], number]>;
    createOrders(data: OrderTypes.CreateOrderDTO[], sharedContext?: Context): Promise<OrderTypes.OrderDTO[]>;
    createOrders(data: OrderTypes.CreateOrderDTO, sharedContext?: Context): Promise<OrderTypes.OrderDTO>;
    protected createOrders_(data: OrderTypes.CreateOrderDTO[], sharedContext?: Context): Promise<Order[]>;
    updateOrders(data: OrderTypes.UpdateOrderDTO[]): Promise<OrderTypes.OrderDTO[]>;
    updateOrders(orderId: string, data: OrderTypes.UpdateOrderDTO, sharedContext?: Context): Promise<OrderTypes.OrderDTO>;
    updateOrders(selector: Partial<OrderTypes.FilterableOrderProps>, data: OrderTypes.UpdateOrderDTO, sharedContext?: Context): Promise<OrderTypes.OrderDTO[]>;
    protected updateOrders_(dataOrIdOrSelector: OrderTypes.UpdateOrderDTO[] | string | Partial<OrderTypes.FilterableOrderProps>, data?: OrderTypes.UpdateOrderDTO, sharedContext?: Context): Promise<Order[]>;
    createOrderLineItems(data: OrderTypes.CreateOrderLineItemForOrderDTO): Promise<OrderTypes.OrderLineItemDTO[]>;
    createOrderLineItems(data: OrderTypes.CreateOrderLineItemForOrderDTO[]): Promise<OrderTypes.OrderLineItemDTO[]>;
    createOrderLineItems(orderId: string, items: OrderTypes.CreateOrderLineItemDTO[], sharedContext?: Context): Promise<OrderTypes.OrderLineItemDTO[]>;
    protected createOrderLineItems_(orderId: string, items: OrderTypes.CreateOrderLineItemDTO[], sharedContext?: Context): Promise<OrderLineItem[]>;
    protected createOrderLineItemsBulk_(data: CreateOrderLineItemDTO[], sharedContext?: Context): Promise<OrderLineItem[]>;
    updateOrderLineItems(data: OrderTypes.UpdateOrderLineItemWithSelectorDTO[]): Promise<OrderTypes.OrderLineItemDTO[]>;
    updateOrderLineItems(selector: Partial<OrderTypes.FilterableOrderLineItemProps>, data: OrderTypes.UpdateOrderLineItemDTO, sharedContext?: Context): Promise<OrderTypes.OrderLineItemDTO[]>;
    updateOrderLineItems(lineItemId: string, data: Partial<OrderTypes.UpdateOrderLineItemDTO>, sharedContext?: Context): Promise<OrderTypes.OrderLineItemDTO>;
    protected updateOrderLineItem_(lineItemId: string, data: Partial<OrderTypes.UpdateOrderLineItemDTO>, sharedContext?: Context): Promise<OrderLineItem>;
    protected updateOrderLineItemsWithSelector_(updates: OrderTypes.UpdateOrderLineItemWithSelectorDTO[], sharedContext?: Context): Promise<OrderLineItem[]>;
    updateOrderItem(selector: Partial<OrderTypes.OrderItemDTO>, data: OrderTypes.UpdateOrderItemDTO, sharedContext?: Context): Promise<OrderTypes.OrderItemDTO[]>;
    updateOrderItem(orderItemId: string, data: Partial<OrderTypes.UpdateOrderItemDTO>, sharedContext?: Context): Promise<OrderTypes.OrderItemDTO>;
    protected updateOrderItem_(orderItemId: string, data: Partial<OrderTypes.UpdateOrderItemDTO>, sharedContext?: Context): Promise<OrderItem>;
    protected updateOrderItemWithSelector_(updates: OrderTypes.UpdateOrderItemWithSelectorDTO[], sharedContext?: Context): Promise<OrderItem[]>;
    createOrderShippingMethods(data: OrderTypes.CreateOrderShippingMethodDTO): Promise<OrderTypes.OrderShippingMethodDTO>;
    createOrderShippingMethods(data: OrderTypes.CreateOrderShippingMethodDTO[]): Promise<OrderTypes.OrderShippingMethodDTO[]>;
    createOrderShippingMethods(orderId: string, methods: OrderTypes.CreateOrderShippingMethodDTO[], sharedContext?: Context): Promise<OrderTypes.OrderShippingMethodDTO[]>;
    protected createOrderShippingMethods_(orderId: string, data: CreateOrderShippingMethodDTO[], sharedContext?: Context): Promise<OrderShippingMethod[]>;
    protected createOrderShippingMethodsBulk_(data: {
        shipping_method: OrderTypes.CreateOrderShippingMethodDTO;
        order_id: string;
        version: number;
    }[], sharedContext?: Context): Promise<OrderShippingMethod[]>;
    softDeleteOrderShippingMethods<TReturnableLinkableKeys extends string>(ids: string | object | string[] | object[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    restoreOrderShippingMethods<TReturnableLinkableKeys extends string>(ids: string | object | string[] | object[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    createOrderLineItemAdjustments(adjustments: OrderTypes.CreateOrderLineItemAdjustmentDTO[]): Promise<OrderTypes.OrderLineItemAdjustmentDTO[]>;
    createOrderLineItemAdjustments(adjustment: OrderTypes.CreateOrderLineItemAdjustmentDTO): Promise<OrderTypes.OrderLineItemAdjustmentDTO[]>;
    createOrderLineItemAdjustments(orderId: string, adjustments: OrderTypes.CreateOrderLineItemAdjustmentDTO[], sharedContext?: Context): Promise<OrderTypes.OrderLineItemAdjustmentDTO[]>;
    setOrderLineItemAdjustments(orderId: string, adjustments: (OrderTypes.CreateOrderLineItemAdjustmentDTO | OrderTypes.UpdateOrderLineItemAdjustmentDTO)[], sharedContext?: Context): Promise<OrderTypes.OrderLineItemAdjustmentDTO[]>;
    setOrderShippingMethodAdjustments(orderId: string, adjustments: (OrderTypes.CreateOrderShippingMethodAdjustmentDTO | OrderTypes.UpdateOrderShippingMethodAdjustmentDTO)[], sharedContext?: Context): Promise<OrderTypes.OrderShippingMethodAdjustmentDTO[]>;
    createOrderShippingMethodAdjustments(adjustments: OrderTypes.CreateOrderShippingMethodAdjustmentDTO[]): Promise<OrderTypes.OrderShippingMethodAdjustmentDTO[]>;
    createOrderShippingMethodAdjustments(adjustment: OrderTypes.CreateOrderShippingMethodAdjustmentDTO): Promise<OrderTypes.OrderShippingMethodAdjustmentDTO>;
    createOrderShippingMethodAdjustments(orderId: string, adjustments: OrderTypes.CreateOrderShippingMethodAdjustmentDTO[], sharedContext?: Context): Promise<OrderTypes.OrderShippingMethodAdjustmentDTO[]>;
    createOrderLineItemTaxLines(taxLines: OrderTypes.CreateOrderLineItemTaxLineDTO[]): Promise<OrderTypes.OrderLineItemTaxLineDTO[]>;
    createOrderLineItemTaxLines(taxLine: OrderTypes.CreateOrderLineItemTaxLineDTO): Promise<OrderTypes.OrderLineItemTaxLineDTO>;
    createOrderLineItemTaxLines(orderId: string, taxLines: OrderTypes.CreateOrderLineItemTaxLineDTO[] | OrderTypes.CreateOrderShippingMethodTaxLineDTO, sharedContext?: Context): Promise<OrderTypes.OrderLineItemTaxLineDTO[]>;
    setOrderLineItemTaxLines(orderId: string, taxLines: (OrderTypes.CreateOrderLineItemTaxLineDTO | OrderTypes.UpdateOrderLineItemTaxLineDTO)[], sharedContext?: Context): Promise<OrderTypes.OrderLineItemTaxLineDTO[]>;
    createOrderShippingMethodTaxLines(taxLines: OrderTypes.CreateOrderShippingMethodTaxLineDTO[]): Promise<OrderTypes.OrderShippingMethodTaxLineDTO[]>;
    createOrderShippingMethodTaxLines(taxLine: OrderTypes.CreateOrderShippingMethodTaxLineDTO): Promise<OrderTypes.OrderShippingMethodTaxLineDTO>;
    createOrderShippingMethodTaxLines(orderId: string, taxLines: OrderTypes.CreateOrderShippingMethodTaxLineDTO[] | OrderTypes.CreateOrderShippingMethodTaxLineDTO, sharedContext?: Context): Promise<OrderTypes.OrderShippingMethodTaxLineDTO[]>;
    setOrderShippingMethodTaxLines(orderId: string, taxLines: (OrderTypes.CreateOrderShippingMethodTaxLineDTO | OrderTypes.UpdateOrderShippingMethodTaxLineDTO)[], sharedContext?: Context): Promise<OrderTypes.OrderShippingMethodTaxLineDTO[]>;
    createReturns(data: OrderTypes.CreateOrderReturnDTO, sharedContext?: Context): Promise<OrderTypes.ReturnDTO>;
    createReturns(data: OrderTypes.CreateOrderReturnDTO[], sharedContext?: Context): Promise<OrderTypes.ReturnDTO[]>;
    createOrderClaims(data: OrderTypes.CreateOrderClaimDTO, sharedContext?: Context): Promise<OrderTypes.OrderClaimDTO>;
    createOrderClaims(data: OrderTypes.CreateOrderClaimDTO[], sharedContext?: Context): Promise<OrderTypes.OrderClaimDTO[]>;
    createOrderExchanges(data: OrderTypes.CreateOrderExchangeDTO, sharedContext?: Context): Promise<OrderTypes.OrderExchangeDTO>;
    createOrderExchanges(data: OrderTypes.CreateOrderExchangeDTO[], sharedContext?: Context): Promise<OrderTypes.OrderExchangeDTO[]>;
    private createOrderRelatedEntity_;
    createOrderChange(data: CreateOrderChangeDTO, sharedContext?: Context): Promise<OrderTypes.OrderChangeDTO>;
    createOrderChange(data: CreateOrderChangeDTO[], sharedContext?: Context): Promise<OrderTypes.OrderChangeDTO[]>;
    protected createOrderChange_(data: CreateOrderChangeDTO | CreateOrderChangeDTO[], sharedContext?: Context): Promise<OrderChange[]>;
    previewOrderChange(orderId: string, sharedContext?: Context): Promise<any>;
    cancelOrderChange(orderId: string, sharedContext?: Context): Promise<void>;
    cancelOrderChange(orderId: string[], sharedContext?: Context): Promise<void>;
    cancelOrderChange(data: OrderTypes.CancelOrderChangeDTO, sharedContext?: Context): Promise<void>;
    cancelOrderChange(data: OrderTypes.CancelOrderChangeDTO[], sharedContext?: Context): Promise<void>;
    confirmOrderChange(orderChangeId: string, sharedContext?: Context): any;
    confirmOrderChange(orderChangeId: string[], sharedContext?: Context): any;
    confirmOrderChange(data: OrderTypes.ConfirmOrderChangeDTO, sharedContext?: Context): any;
    confirmOrderChange(data: OrderTypes.ConfirmOrderChangeDTO[], sharedContext?: Context): any;
    declineOrderChange(orderChangeId: string, sharedContext?: Context): any;
    declineOrderChange(orderChangeId: string[], sharedContext?: Context): any;
    declineOrderChange(data: OrderTypes.DeclineOrderChangeDTO, sharedContext?: Context): any;
    declineOrderChange(data: OrderTypes.DeclineOrderChangeDTO[], sharedContext?: Context): any;
    applyPendingOrderActions(orderId: string | string[], sharedContext?: Context): Promise<OrderTypes.OrderChangeReturn>;
    revertLastVersion(orderId: string, sharedContext?: Context): Promise<void>;
    protected revertLastChange_(order: OrderDTO, sharedContext?: Context): Promise<void>;
    private getActiveOrderChange_;
    private getAndValidateOrderChange_;
    addOrderAction(data: OrderTypes.CreateOrderChangeActionDTO, sharedContext?: Context): Promise<OrderTypes.OrderChangeActionDTO>;
    addOrderAction(data: OrderTypes.CreateOrderChangeActionDTO[], sharedContext?: Context): Promise<OrderTypes.OrderChangeActionDTO[]>;
    private applyOrderChanges_;
    addOrderTransactions(transactionData: OrderTypes.CreateOrderTransactionDTO, sharedContext?: Context): Promise<OrderTypes.OrderTransactionDTO>;
    addOrderTransactions(transactionData: OrderTypes.CreateOrderTransactionDTO[], sharedContext?: Context): Promise<OrderTypes.OrderTransactionDTO[]>;
    deleteOrderTransactions(transactionIds: string | object | string[] | object[], sharedContext?: Context): Promise<void>;
    softDeleteOrderTransactions<TReturnableLinkableKeys extends string>(transactionIds: string | object | string[] | object[], config?: SoftDeleteReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    restoreOrderTransactions<TReturnableLinkableKeys extends string>(transactionIds: string | object | string[] | object[], config?: RestoreReturn<TReturnableLinkableKeys>, sharedContext?: Context): Promise<Record<string, string[]> | void>;
    private updateOrderPaidRefundableAmount_;
    archive(orderId: string, sharedContext?: Context): Promise<OrderTypes.OrderDTO>;
    archive(orderId: string[], sharedContext?: Context): Promise<OrderTypes.OrderDTO[]>;
    completeOrder(orderId: string, sharedContext?: Context): Promise<OrderTypes.OrderDTO>;
    completeOrder(orderId: string[], sharedContext?: Context): Promise<OrderTypes.OrderDTO[]>;
    cancel(orderId: string, sharedContext?: Context): Promise<OrderTypes.OrderDTO>;
    cancel(orderId: string[], sharedContext?: Context): Promise<OrderTypes.OrderDTO[]>;
    createReturn(data: OrderTypes.CreateOrderReturnDTO, sharedContext?: Context): Promise<OrderTypes.ReturnDTO>;
    receiveReturn(data: OrderTypes.ReceiveOrderReturnDTO, sharedContext?: Context): Promise<OrderTypes.ReturnDTO>;
    private receiveReturn_;
    cancelReturn(data: OrderTypes.CancelOrderReturnDTO, sharedContext?: Context): Promise<OrderTypes.ReturnDTO>;
    private cancelReturn_;
    createClaim(data: OrderTypes.CreateOrderClaimDTO, sharedContext?: Context): Promise<OrderTypes.OrderClaimDTO>;
    createClaim_(data: OrderTypes.CreateOrderClaimDTO, sharedContext?: Context): Promise<any>;
    cancelClaim(data: OrderTypes.CancelOrderClaimDTO, sharedContext?: Context): Promise<OrderTypes.OrderClaimDTO>;
    private cancelClaim_;
    createExchange(data: OrderTypes.CreateOrderExchangeDTO, sharedContext?: Context): Promise<OrderTypes.OrderExchangeDTO>;
    updateReturnReasons(id: string, data: UpdateOrderReturnReasonDTO, sharedContext?: Context): Promise<OrderReturnReasonDTO>;
    updateReturnReasons(selector: FilterableOrderReturnReasonProps, data: Partial<UpdateOrderReturnReasonDTO>, sharedContext?: Context): Promise<OrderReturnReasonDTO[]>;
    createExchange_(data: OrderTypes.CreateOrderExchangeDTO, sharedContext?: Context): Promise<any>;
    cancelExchange(data: OrderTypes.CancelOrderExchangeDTO, sharedContext?: Context): Promise<OrderTypes.OrderExchangeDTO>;
    private cancelExchange_;
    registerFulfillment(data: OrderTypes.RegisterOrderFulfillmentDTO, sharedContext?: Context): Promise<void>;
    cancelFulfillment(data: OrderTypes.CancelOrderFulfillmentDTO, sharedContext?: Context): Promise<void>;
    registerShipment(data: OrderTypes.RegisterOrderShipmentDTO, sharedContext?: Context): Promise<void>;
    registerDelivery(data: OrderTypes.RegisterOrderDeliveryDTO, sharedContext?: Context): Promise<void>;
}
export {};
//# sourceMappingURL=order-module-service.d.ts.map