"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderChangeProcessing = void 0;
exports.calculateOrderChange = calculateOrderChange;
const utils_1 = require("@medusajs/framework/utils");
const _types_1 = require("../types");
class OrderChangeProcessing {
    static registerActionType(key, type) {
        OrderChangeProcessing.typeDefinition[key] = type;
    }
    constructor({ order, transactions, actions, options, }) {
        this.options = {};
        this.actionsProcessed = {};
        this.groupTotal = {};
        this.order = JSON.parse(JSON.stringify(order));
        this.transactions = JSON.parse(JSON.stringify(transactions ?? []));
        this.actions = JSON.parse(JSON.stringify(actions ?? []));
        this.options = options;
        let paid = utils_1.MathBN.convert(0);
        let refunded = utils_1.MathBN.convert(0);
        let transactionTotal = utils_1.MathBN.convert(0);
        for (const tr of transactions) {
            if (utils_1.MathBN.lt(tr.amount, 0)) {
                refunded = utils_1.MathBN.add(refunded, utils_1.MathBN.abs(tr.amount));
            }
            else {
                paid = utils_1.MathBN.add(paid, tr.amount);
            }
            transactionTotal = utils_1.MathBN.add(transactionTotal, tr.amount);
        }
        (0, utils_1.transformPropertiesToBigNumber)(this.order.metadata);
        this.summary = {
            pending_difference: 0,
            difference_sum: 0,
            current_order_total: this.order.total ?? 0,
            original_order_total: this.order.total ?? 0,
            transaction_total: transactionTotal,
            paid_total: paid,
            refunded_total: refunded,
        };
    }
    isEventActive(action) {
        const status = action.status;
        return (status === undefined ||
            status === _types_1.EVENT_STATUS.PENDING ||
            status === _types_1.EVENT_STATUS.DONE);
    }
    isEventDone(action) {
        const status = action.status;
        return status === _types_1.EVENT_STATUS.DONE;
    }
    processActions() {
        for (const action of this.actions) {
            this.processAction_(action);
        }
        const summary = this.summary;
        for (const action of this.actions) {
            if (!this.isEventActive(action)) {
                continue;
            }
            const type = {
                ...OrderChangeProcessing.defaultConfig,
                ...OrderChangeProcessing.typeDefinition[action.action],
            };
            const amount = utils_1.MathBN.mult(action.amount, type.isDeduction ? -1 : 1);
            if (action.change_id) {
                this.groupTotal[action.change_id] ??= 0;
                this.groupTotal[action.change_id] = utils_1.MathBN.add(this.groupTotal[action.change_id], amount);
            }
            if (!this.isEventDone(action) && !action.change_id) {
                summary.difference_sum = utils_1.MathBN.add(summary.difference_sum, amount);
            }
            summary.current_order_total = utils_1.MathBN.add(summary.current_order_total, amount);
        }
        const groupSum = utils_1.MathBN.add(...Object.values(this.groupTotal));
        summary.difference_sum = utils_1.MathBN.add(summary.difference_sum, groupSum);
        summary.transaction_total = utils_1.MathBN.sum(...this.transactions.map((tr) => tr.amount));
        summary.pending_difference = utils_1.MathBN.sub(summary.current_order_total, summary.transaction_total);
    }
    processAction_(action, isReplay = false) {
        const definedType = OrderChangeProcessing.typeDefinition[action.action];
        if (!(0, utils_1.isPresent)(definedType)) {
            throw new Error(`Action type ${action.action} is not defined`);
        }
        const type = {
            ...OrderChangeProcessing.defaultConfig,
            ...definedType,
        };
        this.actionsProcessed[action.action] ??= [];
        if (!isReplay) {
            this.actionsProcessed[action.action].push(action);
        }
        let calculatedAmount = action.amount ?? 0;
        const params = {
            actions: this.actions,
            action,
            currentOrder: this.order,
            summary: this.summary,
            transactions: this.transactions,
            type,
            options: this.options,
        };
        if (typeof type.validate === "function") {
            type.validate(params);
        }
        if (typeof type.operation === "function") {
            calculatedAmount = type.operation(params);
            // the action.amount has priority over the calculated amount
            if (action.amount == undefined) {
                action.amount = calculatedAmount ?? 0;
            }
        }
        return calculatedAmount;
    }
    getSummary() {
        const summary = this.summary;
        const orderSummary = {
            transaction_total: new utils_1.BigNumber(summary.transaction_total),
            original_order_total: new utils_1.BigNumber(summary.original_order_total),
            current_order_total: new utils_1.BigNumber(summary.current_order_total),
            pending_difference: new utils_1.BigNumber(summary.pending_difference),
            difference_sum: new utils_1.BigNumber(summary.difference_sum),
            paid_total: new utils_1.BigNumber(summary.paid_total),
            refunded_total: new utils_1.BigNumber(summary.refunded_total),
        };
        return orderSummary;
    }
    getCurrentOrder() {
        return this.order;
    }
}
exports.OrderChangeProcessing = OrderChangeProcessing;
OrderChangeProcessing.typeDefinition = {};
OrderChangeProcessing.defaultConfig = {
    isDeduction: false,
};
function calculateOrderChange({ order, transactions = [], actions = [], options = {}, }) {
    const calc = new OrderChangeProcessing({
        order,
        transactions,
        actions,
        options,
    });
    calc.processActions();
    return {
        summary: calc.getSummary(),
        order: calc.getCurrentOrder(),
    };
}
//# sourceMappingURL=calculate-order-change.js.map