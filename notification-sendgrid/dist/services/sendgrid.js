"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendgridNotificationService = void 0;
const utils_1 = require("@medusajs/framework/utils");
const mail_1 = __importDefault(require("@sendgrid/mail"));
class SendgridNotificationService extends utils_1.AbstractNotificationProviderService {
    constructor({ logger }, options) {
        super();
        this.config_ = {
            apiKey: options.api_key,
            from: options.from,
        };
        this.logger_ = logger;
        mail_1.default.setApiKey(this.config_.apiKey);
    }
    async send(notification) {
        if (!notification) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `No notification information provided`);
        }
        const attachments = Array.isArray(notification.attachments)
            ? notification.attachments.map((attachment) => ({
                content: attachment.content, // Base64 encoded string of the file
                filename: attachment.filename,
                content_type: attachment.content_type, // MIME type (e.g., 'application/pdf')
                disposition: attachment.disposition ?? "attachment", // Default to 'attachment'
                id: attachment.id ?? undefined, // Optional: unique identifier for inline attachments
            }))
            : undefined;
        const from = notification.from?.trim() || this.config_.from;
        const message = {
            to: notification.to,
            from: from,
            templateId: notification.template,
            dynamicTemplateData: notification.data,
            attachments: attachments,
        };
        try {
            // Unfortunately we don't get anything useful back in the response
            await mail_1.default.send(message);
            return {};
        }
        catch (error) {
            const errorCode = error.code;
            const responseError = error.response?.body?.errors?.[0];
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, `Failed to send email: ${errorCode} - ${responseError?.message ?? "unknown error"}`);
        }
    }
}
exports.SendgridNotificationService = SendgridNotificationService;
//# sourceMappingURL=sendgrid.js.map