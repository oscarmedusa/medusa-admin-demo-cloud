"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = when;
const utils_1 = require("@medusajs/utils");
const ulid_1 = require("ulid");
const create_step_1 = require("./create-step");
const step_response_1 = require("./helpers/step-response");
function when(input, condition) {
    global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerCondition] = {
        input,
        condition,
        steps: [],
    };
    let thenCalled = false;
    process.nextTick(() => {
        if (!thenCalled) {
            throw new Error(`".then" is missing after "when" condition`);
        }
    });
    return {
        then: (fn) => {
            thenCalled = true;
            const ret = fn();
            let returnStep = ret;
            const applyCondition = global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerCondition].steps;
            if (ret?.__type !== utils_1.OrchestrationUtils.SymbolWorkflowStep) {
                const retStep = (0, create_step_1.createStep)("when-then-" + (0, ulid_1.ulid)(), () => new step_response_1.StepResponse(ret));
                returnStep = retStep();
            }
            for (const step of applyCondition) {
                step.if(input, condition);
            }
            delete global[utils_1.OrchestrationUtils.SymbolMedusaWorkflowComposerCondition];
            return returnStep;
        },
    };
}
//# sourceMappingURL=when.js.map