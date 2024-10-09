"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTimeoutError = exports.TransactionStepTimeoutError = exports.SkipStepResponse = exports.PermanentStepFailureError = void 0;
exports.serializeError = serializeError;
exports.isErrorLike = isErrorLike;
class PermanentStepFailureError extends Error {
    static isPermanentStepFailureError(error) {
        return (error instanceof PermanentStepFailureError ||
            error?.name === "PermanentStepFailure");
    }
    constructor(message) {
        super(message);
        this.name = "PermanentStepFailure";
    }
}
exports.PermanentStepFailureError = PermanentStepFailureError;
class SkipStepResponse extends Error {
    static isSkipStepResponse(error) {
        return (error instanceof SkipStepResponse || error?.name === "SkipStepResponse");
    }
    constructor(message) {
        super(message);
        this.name = "SkipStepResponse";
    }
}
exports.SkipStepResponse = SkipStepResponse;
class TransactionStepTimeoutError extends Error {
    static isTransactionStepTimeoutError(error) {
        return (error instanceof TransactionStepTimeoutError ||
            error?.name === "TransactionStepTimeoutError");
    }
    constructor(message) {
        super(message);
        this.name = "TransactionStepTimeoutError";
    }
}
exports.TransactionStepTimeoutError = TransactionStepTimeoutError;
class TransactionTimeoutError extends Error {
    static isTransactionTimeoutError(error) {
        return (error instanceof TransactionTimeoutError ||
            error?.name === "TransactionTimeoutError");
    }
    constructor(message) {
        super(message);
        this.name = "TransactionTimeoutError";
    }
}
exports.TransactionTimeoutError = TransactionTimeoutError;
function serializeError(error) {
    const serialized = {
        message: error.message,
        name: error.name,
        stack: error.stack,
    };
    Object.getOwnPropertyNames(error).forEach((key) => {
        // eslint-disable-next-line no-prototype-builtins
        if (!serialized.hasOwnProperty(key)) {
            serialized[key] = error[key];
        }
    });
    return serialized;
}
function isErrorLike(value) {
    return (!!value &&
        typeof value === "object" &&
        "name" in value &&
        "message" in value &&
        "stack" in value);
}
//# sourceMappingURL=errors.js.map