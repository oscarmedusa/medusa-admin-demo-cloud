"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = paymentWebhookhandler;
const utils_1 = require("@medusajs/framework/utils");
async function paymentWebhookhandler({ event, container, }) {
    const paymentService = container.resolve(utils_1.Modules.PAYMENT);
    const input = event.data;
    if (input.payload.rawData.type === "Buffer") {
        input.payload.rawData = Buffer.from(input.payload.rawData.data);
    }
    await paymentService.processEvent(input);
}
exports.config = {
    event: utils_1.PaymentWebhookEvents.WebhookReceived,
    context: {
        subscriberId: "payment-webhook-handler",
    },
};
//# sourceMappingURL=payment-webhook.js.map