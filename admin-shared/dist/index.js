"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  INJECTION_ZONES: () => INJECTION_ZONES,
  RESOLVED_ROUTE_MODULES: () => RESOLVED_ROUTE_MODULES,
  RESOLVED_WIDGET_MODULES: () => RESOLVED_WIDGET_MODULES,
  VIRTUAL_MODULES: () => VIRTUAL_MODULES,
  getVirtualId: () => getVirtualId,
  getWidgetImport: () => getWidgetImport,
  getWidgetZone: () => getWidgetZone,
  isValidInjectionZone: () => isValidInjectionZone,
  resolveVirtualId: () => resolveVirtualId
});
module.exports = __toCommonJS(src_exports);

// src/extensions/routes/constants.ts
var ROUTE_IMPORTS = ["routes/pages", "routes/links"];

// src/extensions/widgets/constants.ts
var ORDER_INJECTION_ZONES = [
  "order.details.before",
  "order.details.after",
  "order.details.side.before",
  "order.details.side.after",
  "order.list.before",
  "order.list.after"
];
var DRAFT_ORDER_INJECTION_ZONES = [
  "draft_order.list.before",
  "draft_order.list.after",
  "draft_order.details.side.before",
  "draft_order.details.side.after",
  "draft_order.details.before",
  "draft_order.details.after"
];
var CUSTOMER_INJECTION_ZONES = [
  "customer.details.before",
  "customer.details.after",
  "customer.list.before",
  "customer.list.after"
];
var CUSTOMER_GROUP_INJECTION_ZONES = [
  "customer_group.details.before",
  "customer_group.details.after",
  "customer_group.list.before",
  "customer_group.list.after"
];
var PRODUCT_INJECTION_ZONES = [
  "product.details.before",
  "product.details.after",
  "product.list.before",
  "product.list.after",
  "product.details.side.before",
  "product.details.side.after"
];
var PRODUCT_COLLECTION_INJECTION_ZONES = [
  "product_collection.details.before",
  "product_collection.details.after",
  "product_collection.list.before",
  "product_collection.list.after"
];
var PRODUCT_CATEGORY_INJECTION_ZONES = [
  "product_category.details.before",
  "product_category.details.after",
  "product_category.details.side.before",
  "product_category.details.side.after",
  "product_category.list.before",
  "product_category.list.after"
];
var PRODUCT_TYPE_INJECTION_ZONES = [
  "product_type.details.before",
  "product_type.details.after",
  "product_type.list.before",
  "product_type.list.after"
];
var PRODUCT_TAG_INJECTION_ZONES = [
  "product_tag.details.before",
  "product_tag.details.after",
  "product_tag.list.before",
  "product_tag.list.after"
];
var PRICE_LIST_INJECTION_ZONES = [
  "price_list.details.before",
  "price_list.details.after",
  "price_list.details.side.before",
  "price_list.details.side.after",
  "price_list.list.before",
  "price_list.list.after"
];
var PROMOTION_INJECTION_ZONES = [
  "promotion.details.before",
  "promotion.details.after",
  "promotion.details.side.before",
  "promotion.details.side.after",
  "promotion.list.before",
  "promotion.list.after"
];
var CAMPAIGN_INJECTION_ZONES = [
  "campaign.details.before",
  "campaign.details.after",
  "campaign.details.side.before",
  "campaign.details.side.after",
  "campaign.list.before",
  "campaign.list.after"
];
var GIFT_CARD_INJECTION_ZONES = [
  "gift_card.details.before",
  "gift_card.details.after",
  "gift_card.list.before",
  "gift_card.list.after",
  "custom_gift_card.before",
  "custom_gift_card.after"
];
var USER_INJECTION_ZONES = [
  "user.details.before",
  "user.details.after",
  "user.list.before",
  "user.list.after"
];
var STORE_INJECTION_ZONES = [
  "store.details.before",
  "store.details.after"
];
var PROFILE_INJECTION_ZONES = [
  "profile.details.before",
  "profile.details.after"
];
var REGION_INJECTION_ZONES = [
  "region.details.before",
  "region.details.after",
  "region.list.before",
  "region.list.after"
];
var SHIPPING_PROFILE_INJECTION_ZONES = [
  "shipping_profile.details.before",
  "shipping_profile.details.after",
  "shipping_profile.list.before",
  "shipping_profile.list.after"
];
var LOCATION_INJECTION_ZONES = [
  "location.details.before",
  "location.details.after",
  "location.details.side.before",
  "location.details.side.after",
  "location.list.before",
  "location.list.after"
];
var LOGIN_INJECTION_ZONES = ["login.before", "login.after"];
var SALES_CHANNEL_INJECTION_ZONES = [
  "sales_channel.details.before",
  "sales_channel.details.after",
  "sales_channel.list.before",
  "sales_channel.list.after"
];
var RESERVATION_INJECTION_ZONES = [
  "reservation.details.before",
  "reservation.details.after",
  "reservation.details.side.before",
  "reservation.details.side.after",
  "reservation.list.before",
  "reservation.list.after"
];
var API_KEY_INJECTION_ZONES = [
  "api_key.details.before",
  "api_key.details.after",
  "api_key.list.before",
  "api_key.list.after"
];
var WORKFLOW_INJECTION_ZONES = [
  "workflow.details.before",
  "workflow.details.after",
  "workflow.list.before",
  "workflow.list.after"
];
var TAX_INJECTION_ZONES = [
  "tax.details.before",
  "tax.details.after",
  "tax.list.before",
  "tax.list.after"
];
var RETURN_REASON_INJECTION_ZONES = [
  "return_reason.list.before",
  "return_reason.list.after"
];
var INVENTORY_ITEM_INJECTION_ZONES = [
  "inventory_item.details.before",
  "inventory_item.details.after",
  "inventory_item.details.side.before",
  "inventory_item.details.side.after",
  "inventory_item.list.before",
  "inventory_item.list.after"
];
var INJECTION_ZONES = [
  ...ORDER_INJECTION_ZONES,
  ...DRAFT_ORDER_INJECTION_ZONES,
  ...CUSTOMER_INJECTION_ZONES,
  ...CUSTOMER_GROUP_INJECTION_ZONES,
  ...PRODUCT_INJECTION_ZONES,
  ...PRODUCT_COLLECTION_INJECTION_ZONES,
  ...PRODUCT_CATEGORY_INJECTION_ZONES,
  ...PRICE_LIST_INJECTION_ZONES,
  ...PROMOTION_INJECTION_ZONES,
  ...GIFT_CARD_INJECTION_ZONES,
  ...USER_INJECTION_ZONES,
  ...STORE_INJECTION_ZONES,
  ...PROFILE_INJECTION_ZONES,
  ...REGION_INJECTION_ZONES,
  ...SHIPPING_PROFILE_INJECTION_ZONES,
  ...LOCATION_INJECTION_ZONES,
  ...LOGIN_INJECTION_ZONES,
  ...SALES_CHANNEL_INJECTION_ZONES,
  ...RESERVATION_INJECTION_ZONES,
  ...API_KEY_INJECTION_ZONES,
  ...WORKFLOW_INJECTION_ZONES,
  ...CAMPAIGN_INJECTION_ZONES,
  ...TAX_INJECTION_ZONES,
  ...PRODUCT_TYPE_INJECTION_ZONES,
  ...PRODUCT_TAG_INJECTION_ZONES,
  ...RETURN_REASON_INJECTION_ZONES,
  ...INVENTORY_ITEM_INJECTION_ZONES
];

// src/extensions/widgets/utils.ts
function isValidInjectionZone(zone) {
  return INJECTION_ZONES.includes(zone);
}

// src/extensions/virtual/utils.ts
var PREFIX = "virtual:medusa/";
var getVirtualId = (name) => {
  return `${PREFIX}${name}`;
};
var resolveVirtualId = (id) => {
  return `\0${id}`;
};
var getWidgetImport = (zone) => {
  return `widgets/${zone.replace(/\./g, "/")}`;
};
var getWidgetZone = (resolvedId) => {
  const virtualPrefix = `\0${PREFIX}widgets/`;
  const zone = resolvedId.replace(virtualPrefix, "").replace(/\//g, ".");
  return zone;
};

// src/extensions/virtual/constants.ts
var VIRTUAL_WIDGET_MODULES = INJECTION_ZONES.map((zone) => {
  return getVirtualId(getWidgetImport(zone));
});
var VIRTUAL_ROUTE_MODULES = ROUTE_IMPORTS.map((route) => {
  return getVirtualId(route);
});
var VIRTUAL_MODULES = [
  ...VIRTUAL_WIDGET_MODULES,
  ...VIRTUAL_ROUTE_MODULES
];
var RESOLVED_WIDGET_MODULES = VIRTUAL_WIDGET_MODULES.map((id) => {
  return resolveVirtualId(id);
});
var RESOLVED_ROUTE_MODULES = VIRTUAL_ROUTE_MODULES.map((id) => {
  return resolveVirtualId(id);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  INJECTION_ZONES,
  RESOLVED_ROUTE_MODULES,
  RESOLVED_WIDGET_MODULES,
  VIRTUAL_MODULES,
  getVirtualId,
  getWidgetImport,
  getWidgetZone,
  isValidInjectionZone,
  resolveVirtualId
});
