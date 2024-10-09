// src/components/common/inline-tip/inline-tip.tsx
import { clx } from "@medusajs/ui";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var InlineTip = forwardRef(
  ({ variant = "tip", label, className, children, ...props }, ref) => {
    const { t } = useTranslation();
    const labelValue = label || (variant === "warning" ? t("general.warning") : t("general.tip"));
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: clx(
          "bg-ui-bg-component txt-small text-ui-fg-subtle grid grid-cols-[4px_1fr] items-start gap-3 rounded-lg border p-3",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              role: "presentation",
              className: clx("w-4px bg-ui-tag-neutral-icon h-full rounded-full", {
                "bg-ui-tag-orange-icon": variant === "warning"
              })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ jsxs("strong", { className: "txt-small-plus text-ui-fg-base", children: [
              labelValue,
              ":"
            ] }),
            " ",
            children
          ] })
        ]
      }
    );
  }
);
InlineTip.displayName = "InlineTip";

export {
  InlineTip
};
