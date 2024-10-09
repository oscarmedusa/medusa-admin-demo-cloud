"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservationsStep = exports.createReservationsStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.createReservationsStepId = "create-reservations-step";
/**
 * This step creates one or more reservations.
 */
exports.createReservationsStep = (0, workflows_sdk_1.createStep)(exports.createReservationsStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.INVENTORY);
    const created = await service.createReservationItems(data);
    return new workflows_sdk_1.StepResponse(created, created.map((reservation) => reservation.id));
}, async (createdIds, { container }) => {
    if (!createdIds?.length) {
        return;
    }
    const service = container.resolve(utils_1.Modules.INVENTORY);
    await service.deleteReservationItems(createdIds);
});
//# sourceMappingURL=create-reservations.js.map