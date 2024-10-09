"use client";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { RenderPrompt } from "./render-prompt";
const usePrompt = () => {
    const prompt = async (props) => {
        return new Promise((resolve) => {
            let open = true;
            const mountRoot = createRoot(document.createElement("div"));
            const onCancel = () => {
                open = false;
                mountRoot.unmount();
                resolve(false);
                // TEMP FIX for Radix issue with dropdowns persisting pointer-events: none on body after closing
                document.body.style.pointerEvents = "auto";
            };
            const onConfirm = () => {
                open = false;
                resolve(true);
                mountRoot.unmount();
                // TEMP FIX for Radix issue with dropdowns persisting pointer-events: none on body after closing
                document.body.style.pointerEvents = "auto";
            };
            const render = () => {
                mountRoot.render(React.createElement(RenderPrompt, { open: open, onConfirm: onConfirm, onCancel: onCancel, ...props }));
            };
            render();
        });
    };
    return prompt;
};
export { usePrompt };
//# sourceMappingURL=use-prompt.js.map