"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionWorkflowEvents = exports.InviteWorkflowEvents = exports.ProductOptionWorkflowEvents = exports.ProductTagWorkflowEvents = exports.ProductTypeWorkflowEvents = exports.ProductWorkflowEvents = exports.ProductVariantWorkflowEvents = exports.ProductCollectionWorkflowEvents = exports.ProductCategoryWorkflowEvents = exports.SalesChannelWorkflowEvents = exports.AuthWorkflowEvents = exports.UserWorkflowEvents = exports.OrderWorkflowEvents = exports.CustomerWorkflowEvents = void 0;
exports.CustomerWorkflowEvents = {
    CREATED: "customer.created",
    UPDATED: "customer.updated",
    DELETED: "customer.deleted",
};
exports.OrderWorkflowEvents = {
    PLACED: "order.placed",
    CANCELED: "order.canceled",
    COMPLETED: "order.completed",
};
exports.UserWorkflowEvents = {
    CREATED: "user.created",
    UPDATED: "user.updated",
    DELETED: "user.deleted",
};
exports.AuthWorkflowEvents = {
    PASSWORD_RESET: "auth.password_reset",
};
exports.SalesChannelWorkflowEvents = {
    CREATED: "sales-channel.created",
    UPDATED: "sales-channel.updated",
    DELETED: "sales-channel.deleted",
};
exports.ProductCategoryWorkflowEvents = {
    CREATED: "product-category.created",
    UPDATED: "product-category.updated",
    DELETED: "product-category.deleted",
};
exports.ProductCollectionWorkflowEvents = {
    CREATED: "product-collection.created",
    UPDATED: "product-collection.updated",
    DELETED: "product-collection.deleted",
};
exports.ProductVariantWorkflowEvents = {
    UPDATED: "product-variant.updated",
    CREATED: "product-variant.created",
    DELETED: "product-variant.deleted",
};
exports.ProductWorkflowEvents = {
    UPDATED: "product.updated",
    CREATED: "product.created",
    DELETED: "product.deleted",
};
exports.ProductTypeWorkflowEvents = {
    UPDATED: "product-type.updated",
    CREATED: "product-type.created",
    DELETED: "product-type.deleted",
};
exports.ProductTagWorkflowEvents = {
    UPDATED: "product-tag.updated",
    CREATED: "product-tag.created",
    DELETED: "product-tag.deleted",
};
exports.ProductOptionWorkflowEvents = {
    UPDATED: "product-option.updated",
    CREATED: "product-option.created",
    DELETED: "product-option.deleted",
};
exports.InviteWorkflowEvents = {
    ACCEPTED: "invite.accepted",
    CREATED: "invite.created",
    DELETED: "invite.deleted",
    RESENT: "invite.resent",
};
exports.RegionWorkflowEvents = {
    UPDATED: "region.updated",
    CREATED: "region.created",
    DELETED: "region.deleted",
};
//# sourceMappingURL=events.js.map