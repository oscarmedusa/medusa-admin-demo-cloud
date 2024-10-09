// src/components/common/action-menu/action-menu.tsx
import { DropdownMenu, IconButton, clx } from "@medusajs/ui";
import { EllipsisHorizontal } from "@medusajs/icons";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var ActionMenu = ({ groups }) => {
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(IconButton, { size: "small", variant: "transparent", children: /* @__PURE__ */ jsx(EllipsisHorizontal, {}) }) }),
    /* @__PURE__ */ jsx(DropdownMenu.Content, { children: groups.map((group, index) => {
      if (!group.actions.length) {
        return null;
      }
      const isLast = index === groups.length - 1;
      return /* @__PURE__ */ jsxs(DropdownMenu.Group, { children: [
        group.actions.map((action, index2) => {
          if (action.onClick) {
            return /* @__PURE__ */ jsxs(
              DropdownMenu.Item,
              {
                disabled: action.disabled,
                onClick: (e) => {
                  e.stopPropagation();
                  action.onClick();
                },
                className: clx(
                  "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                  {
                    "[&_svg]:text-ui-fg-disabled": action.disabled
                  }
                ),
                children: [
                  action.icon,
                  /* @__PURE__ */ jsx("span", { children: action.label })
                ]
              },
              index2
            );
          }
          return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            DropdownMenu.Item,
            {
              className: clx(
                "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                {
                  "[&_svg]:text-ui-fg-disabled": action.disabled
                }
              ),
              asChild: true,
              disabled: action.disabled,
              children: /* @__PURE__ */ jsxs(Link, { to: action.to, onClick: (e) => e.stopPropagation(), children: [
                action.icon,
                /* @__PURE__ */ jsx("span", { children: action.label })
              ] })
            }
          ) }, index2);
        }),
        !isLast && /* @__PURE__ */ jsx(DropdownMenu.Separator, {})
      ] }, index);
    }) })
  ] });
};

export {
  ActionMenu
};
