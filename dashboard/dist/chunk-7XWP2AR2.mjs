// src/components/common/divider/divider.tsx
import { clx } from "@medusajs/ui";
import { jsx } from "react/jsx-runtime";
var Divider = ({
  orientation = "horizontal",
  variant = "solid",
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-orientation": orientation,
      role: "separator",
      className: clx(
        "border-ui-border-base",
        {
          "w-full border-t": orientation === "horizontal" && variant === "solid",
          "h-full border-l": orientation === "vertical" && variant === "solid",
          "bg-transparent": variant === "dashed",
          "h-px w-full bg-[linear-gradient(90deg,var(--border-strong)_1px,transparent_1px)] bg-[length:4px_1px]": variant === "dashed" && orientation === "horizontal",
          "h-full w-px bg-[linear-gradient(0deg,var(--border-strong)_1px,transparent_1px)] bg-[length:1px_4px]": variant === "dashed" && orientation === "vertical"
        },
        className
      ),
      ...props
    }
  );
};

export {
  Divider
};
