// src/components/common/json-view-section/json-view-section.tsx
import {
  ArrowUpRightOnBox,
  Check,
  SquareTwoStack,
  TriangleDownMini,
  XMarkMini
} from "@medusajs/icons";
import {
  Badge,
  Container,
  Drawer,
  Heading,
  IconButton,
  Kbd
} from "@medusajs/ui";
import Primitive from "@uiw/react-json-view";
import { Suspense, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var JsonViewSection = ({ data }) => {
  const { t } = useTranslation();
  const numberOfKeys = Object.keys(data).length;
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("json.header") }),
      /* @__PURE__ */ jsx(Badge, { size: "2xsmall", rounded: "full", children: t("json.numberOfKeys", {
        count: numberOfKeys
      }) })
    ] }),
    /* @__PURE__ */ jsxs(Drawer, { children: [
      /* @__PURE__ */ jsx(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(
        IconButton,
        {
          size: "small",
          variant: "transparent",
          className: "text-ui-fg-muted hover:text-ui-fg-subtle",
          children: /* @__PURE__ */ jsx(ArrowUpRightOnBox, {})
        }
      ) }),
      /* @__PURE__ */ jsxs(Drawer.Content, { className: "bg-ui-contrast-bg-base text-ui-code-fg-subtle !shadow-elevation-commandbar overflow-hidden border border-none max-md:inset-x-2 max-md:max-w-[calc(100%-16px)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-ui-code-bg-base flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
            /* @__PURE__ */ jsx(Drawer.Title, { asChild: true, children: /* @__PURE__ */ jsx(Heading, { className: "text-ui-contrast-fg-primary", children: /* @__PURE__ */ jsx(
              Trans,
              {
                i18nKey: "json.drawer.header",
                count: numberOfKeys,
                components: [
                  /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle" }, "count-span")
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsx(Drawer.Description, { className: "sr-only", children: t("json.drawer.description") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
            /* @__PURE__ */ jsx(Kbd, { className: "bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary", children: "esc" }),
            /* @__PURE__ */ jsx(Drawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(
              IconButton,
              {
                size: "small",
                variant: "transparent",
                className: "text-ui-contrast-fg-secondary hover:text-ui-contrast-fg-primary hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus-visible:bg-ui-contrast-bg-base-hover focus-visible:shadow-borders-interactive-with-active",
                children: /* @__PURE__ */ jsx(XMarkMini, {})
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Drawer.Body, { className: "flex flex-1 flex-col overflow-hidden px-[5px] py-0 pb-[5px]", children: /* @__PURE__ */ jsx("div", { className: "bg-ui-contrast-bg-subtle flex-1 overflow-auto rounded-b-[4px] rounded-t-lg p-3", children: /* @__PURE__ */ jsx(
          Suspense,
          {
            fallback: /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col" }),
            children: /* @__PURE__ */ jsxs(
              Primitive,
              {
                value: data,
                displayDataTypes: false,
                style: {
                  "--w-rjv-font-family": "Roboto Mono, monospace",
                  "--w-rjv-line-color": "var(--contrast-border-base)",
                  "--w-rjv-curlybraces-color": "var(--contrast-fg-secondary)",
                  "--w-rjv-brackets-color": "var(--contrast-fg-secondary)",
                  "--w-rjv-key-string": "var(--contrast-fg-primary)",
                  "--w-rjv-info-color": "var(--contrast-fg-secondary)",
                  "--w-rjv-type-string-color": "var(--tag-green-icon)",
                  "--w-rjv-quotes-string-color": "var(--tag-green-icon)",
                  "--w-rjv-type-boolean-color": "var(--tag-orange-icon)",
                  "--w-rjv-type-int-color": "var(--tag-orange-icon)",
                  "--w-rjv-type-float-color": "var(--tag-orange-icon)",
                  "--w-rjv-type-bigint-color": "var(--tag-orange-icon)",
                  "--w-rjv-key-number": "var(--contrast-fg-secondary)",
                  "--w-rjv-arrow-color": "var(--contrast-fg-secondary)",
                  "--w-rjv-copied-color": "var(--contrast-fg-secondary)",
                  "--w-rjv-copied-success-color": "var(--contrast-fg-primary)",
                  "--w-rjv-colon-color": "var(--contrast-fg-primary)",
                  "--w-rjv-ellipsis-color": "var(--contrast-fg-secondary)"
                },
                collapsed: 1,
                children: [
                  /* @__PURE__ */ jsx(Primitive.Quote, { render: () => /* @__PURE__ */ jsx("span", {}) }),
                  /* @__PURE__ */ jsx(
                    Primitive.Null,
                    {
                      render: () => /* @__PURE__ */ jsx("span", { className: "text-ui-tag-red-icon", children: "null" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Primitive.Undefined,
                    {
                      render: () => /* @__PURE__ */ jsx("span", { className: "text-ui-tag-blue-icon", children: "undefined" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Primitive.CountInfo,
                    {
                      render: (_props, { value }) => {
                        return /* @__PURE__ */ jsx("span", { className: "text-ui-contrast-fg-secondary ml-2", children: t("general.items", {
                          count: Object.keys(value).length
                        }) });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(Primitive.Arrow, { children: /* @__PURE__ */ jsx(TriangleDownMini, { className: "text-ui-contrast-fg-secondary -ml-[0.5px]" }) }),
                  /* @__PURE__ */ jsx(Primitive.Colon, { children: /* @__PURE__ */ jsx("span", { className: "mr-1", children: ":" }) }),
                  /* @__PURE__ */ jsx(
                    Primitive.Copied,
                    {
                      render: ({ style }, { value }) => {
                        return /* @__PURE__ */ jsx(Copied, { style, value });
                      }
                    }
                  )
                ]
              }
            )
          }
        ) }) })
      ] })
    ] })
  ] });
};
var Copied = ({ style, value }) => {
  const [copied, setCopied] = useState(false);
  const handler = (e) => {
    e.stopPropagation();
    setCopied(true);
    if (typeof value === "string") {
      navigator.clipboard.writeText(value);
    } else {
      const json = JSON.stringify(value, null, 2);
      navigator.clipboard.writeText(json);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  const styl = { whiteSpace: "nowrap", width: "20px" };
  if (copied) {
    return /* @__PURE__ */ jsx("span", { style: { ...style, ...styl }, children: /* @__PURE__ */ jsx(Check, { className: "text-ui-contrast-fg-primary" }) });
  }
  return /* @__PURE__ */ jsx("span", { style: { ...style, ...styl }, onClick: handler, children: /* @__PURE__ */ jsx(SquareTwoStack, { className: "text-ui-contrast-fg-secondary" }) });
};

export {
  JsonViewSection
};
