/**
 * All virtual modules that are used in the admin panel. Virtual modules are used
 * to inject custom widgets, routes and settings. A virtual module is imported using
 * a string that corresponds to the id of the virtual module.
 *
 * @example
 * ```ts
 * import ProductDetailsBefore from "virtual:medusa/widgets/product/details/before"
 * ```
 */
declare const VIRTUAL_MODULES: string[];
/**
 * Reolved paths to all virtual widget modules.
 */
declare const RESOLVED_WIDGET_MODULES: string[];
/**
 * Reolved paths to all virtual route modules.
 */
declare const RESOLVED_ROUTE_MODULES: string[];

/**
 * All valid injection zones in the admin panel. An injection zone is a specific place
 * in the admin panel where a plugin can inject custom widgets.
 */
declare const INJECTION_ZONES: readonly ["order.details.before", "order.details.after", "order.details.side.before", "order.details.side.after", "order.list.before", "order.list.after", "draft_order.list.before", "draft_order.list.after", "draft_order.details.side.before", "draft_order.details.side.after", "draft_order.details.before", "draft_order.details.after", "customer.details.before", "customer.details.after", "customer.list.before", "customer.list.after", "customer_group.details.before", "customer_group.details.after", "customer_group.list.before", "customer_group.list.after", "product.details.before", "product.details.after", "product.list.before", "product.list.after", "product.details.side.before", "product.details.side.after", "product_collection.details.before", "product_collection.details.after", "product_collection.list.before", "product_collection.list.after", "product_category.details.before", "product_category.details.after", "product_category.details.side.before", "product_category.details.side.after", "product_category.list.before", "product_category.list.after", "price_list.details.before", "price_list.details.after", "price_list.details.side.before", "price_list.details.side.after", "price_list.list.before", "price_list.list.after", "promotion.details.before", "promotion.details.after", "promotion.details.side.before", "promotion.details.side.after", "promotion.list.before", "promotion.list.after", "gift_card.details.before", "gift_card.details.after", "gift_card.list.before", "gift_card.list.after", "custom_gift_card.before", "custom_gift_card.after", "user.details.before", "user.details.after", "user.list.before", "user.list.after", "store.details.before", "store.details.after", "profile.details.before", "profile.details.after", "region.details.before", "region.details.after", "region.list.before", "region.list.after", "shipping_profile.details.before", "shipping_profile.details.after", "shipping_profile.list.before", "shipping_profile.list.after", "location.details.before", "location.details.after", "location.details.side.before", "location.details.side.after", "location.list.before", "location.list.after", "login.before", "login.after", "sales_channel.details.before", "sales_channel.details.after", "sales_channel.list.before", "sales_channel.list.after", "reservation.details.before", "reservation.details.after", "reservation.details.side.before", "reservation.details.side.after", "reservation.list.before", "reservation.list.after", "api_key.details.before", "api_key.details.after", "api_key.list.before", "api_key.list.after", "workflow.details.before", "workflow.details.after", "workflow.list.before", "workflow.list.after", "campaign.details.before", "campaign.details.after", "campaign.details.side.before", "campaign.details.side.after", "campaign.list.before", "campaign.list.after", "tax.details.before", "tax.details.after", "tax.list.before", "tax.list.after", "product_type.details.before", "product_type.details.after", "product_type.list.before", "product_type.list.after", "product_tag.details.before", "product_tag.details.after", "product_tag.list.before", "product_tag.list.after", "return_reason.list.before", "return_reason.list.after", "inventory_item.details.before", "inventory_item.details.after", "inventory_item.details.side.before", "inventory_item.details.side.after", "inventory_item.list.before", "inventory_item.list.after"];

type InjectionZone = (typeof INJECTION_ZONES)[number];

/**
 * Validates that the provided zone is a valid injection zone for a widget.
 */
declare function isValidInjectionZone(zone: any): zone is InjectionZone;

declare const getVirtualId: (name: string) => string;
declare const resolveVirtualId: (id: string) => string;
declare const getWidgetImport: (zone: InjectionZone) => string;
declare const getWidgetZone: (resolvedId: string) => InjectionZone;

export { INJECTION_ZONES, type InjectionZone, RESOLVED_ROUTE_MODULES, RESOLVED_WIDGET_MODULES, VIRTUAL_MODULES, getVirtualId, getWidgetImport, getWidgetZone, isValidInjectionZone, resolveVirtualId };
