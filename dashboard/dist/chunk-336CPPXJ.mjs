import {
  useDebouncedSearch
} from "./chunk-KKUJQ3HN.mjs";
import {
  Content2,
  Portal,
  Root2,
  Trigger
} from "./chunk-ODJSGZRJ.mjs";
import {
  TextSkeleton
} from "./chunk-XDUX5ONP.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  useProductCategories
} from "./chunk-TUUKVWGY.mjs";

// src/routes/products/common/components/category-combobox/category-combobox.tsx
import {
  ArrowUturnLeft,
  CheckMini,
  TriangleRightMini,
  TrianglesMini,
  XMarkMini
} from "@medusajs/icons";
import { Text, clx } from "@medusajs/ui";
import {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { Trans, useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var CategoryCombobox = forwardRef(({ value, onChange, className, ...props }, ref) => {
  const innerRef = useRef(null);
  useImperativeHandle(
    ref,
    () => innerRef.current,
    []
  );
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [level, setLevel] = useState([]);
  const { searchValue, onSearchValueChange, query } = useDebouncedSearch();
  const { product_categories, isPending, isError, error } = useProductCategories(
    {
      q: query,
      parent_category_id: !searchValue ? getParentId(level) : void 0,
      include_descendants_tree: !searchValue ? true : false
    },
    {
      enabled: open
    }
  );
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isPending) {
      setShowLoading(true);
    } else {
      timeoutId = setTimeout(() => {
        setShowLoading(false);
      }, 150);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPending]);
  useEffect(() => {
    if (searchValue) {
      setLevel([]);
    }
  }, [searchValue]);
  function handleLevelUp(e) {
    e.preventDefault();
    e.stopPropagation();
    setLevel(level.slice(0, level.length - 1));
    innerRef.current?.focus();
  }
  function handleLevelDown(option) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      setLevel([...level, { id: option.value, label: option.label }]);
      innerRef.current?.focus();
    };
  }
  function handleSelect(option) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isSelected(value, option.value)) {
        onChange(value.filter((v) => v !== option.value));
      } else {
        onChange([...value, option.value]);
      }
      innerRef.current?.focus();
    };
  }
  function handleOpenChange(open2) {
    if (!open2) {
      onSearchValueChange("");
      setLevel([]);
    }
    if (open2) {
      requestAnimationFrame(() => {
        innerRef.current?.focus();
      });
    }
    setOpen(open2);
  }
  const options = getOptions(product_categories || []);
  const showTag = value.length > 0 && !open;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Root2, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx(Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: clx(
          "relative flex cursor-pointer items-center gap-x-2 overflow-hidden",
          "h-8 w-full rounded-md px-2 py-0.5",
          "bg-ui-bg-field transition-fg shadow-borders-base",
          "hover:bg-ui-bg-field-hover",
          "has-[input:focus]:shadow-borders-interactive-with-active",
          "has-[:invalid]:shadow-borders-error has-[[aria-invalid=true]]:shadow-borders-error",
          "has-[:disabled]:bg-ui-bg-disabled has-[:disabled]:text-ui-fg-disabled has-[:disabled]:cursor-not-allowed",
          {
            // Fake the focus state as long as the popover is open,
            // this prevents the styling from flickering when navigating
            // between levels.
            "shadow-borders-interactive-with-active": open,
            "pl-0.5": showTag
          },
          className
        ),
        children: [
          open ? /* @__PURE__ */ jsx(
            "input",
            {
              ref: innerRef,
              value: searchValue,
              onChange: (e) => onSearchValueChange(e.target.value),
              className: clx(
                "txt-compact-small w-full appearance-none bg-transparent outline-none",
                "placeholder:text-ui-fg-muted"
              ),
              ...props
            }
          ) : showTag ? /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-fit items-center gap-x-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-ui-bg-base txt-compact-small-plus text-ui-fg-subtle focus-within:border-ui-fg-interactive relative flex h-[28px] items-center rounded-[4px] border py-[3px] pl-1.5 pr-1", children: [
              /* @__PURE__ */ jsx("span", { children: value.length }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "size-fit outline-none",
                  onClick: (e) => {
                    e.preventDefault();
                    onChange([]);
                  },
                  children: /* @__PURE__ */ jsx(XMarkMini, { className: "text-ui-fg-muted" })
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: t("general.selected") })
          ] }) : /* @__PURE__ */ jsx("div", { className: "w-full" }),
          /* @__PURE__ */ jsx("div", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ jsx(TrianglesMini, { className: "text-ui-fg-muted" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsxs(
      Content2,
      {
        sideOffset: 8,
        role: "listbox",
        className: clx(
          "shadow-elevation-flyout bg-ui-bg-base -left-2 z-50 w-[var(--radix-popper-anchor-width)] rounded-[8px]",
          "max-h-[200px] overflow-y-auto",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        ),
        onOpenAutoFocus: (e) => {
          e.preventDefault();
        },
        children: [
          !searchValue && level.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "p-1", children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: clx(
                  "transition-fg grid w-full appearance-none grid-cols-[20px_1fr] items-center justify-center gap-2 rounded-md px-2 py-1.5 text-left outline-none",
                  "hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed"
                ),
                type: "button",
                onClick: handleLevelUp,
                children: [
                  /* @__PURE__ */ jsx(ArrowUturnLeft, { className: "text-ui-fg-muted" }),
                  /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: getParentLabel(level) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Divider, {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
            options.length > 0 && !showLoading && options.map((option) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: clx(
                  "transition-fg bg-ui-bg-base grid cursor-pointer grid-cols-1 items-center gap-2 overflow-hidden",
                  {
                    "grid-cols-[1fr_32px]": option.has_children && !searchValue
                  }
                ),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      className: clx(
                        "grid h-full w-full appearance-none grid-cols-[20px_1fr] items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-left",
                        "hover:bg-ui-bg-base-hover"
                      ),
                      onClick: handleSelect(option),
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "flex size-5 items-center justify-center", children: isSelected(value, option.value) && /* @__PURE__ */ jsx(CheckMini, {}) }),
                        /* @__PURE__ */ jsx(
                          Text,
                          {
                            as: "span",
                            size: "small",
                            leading: "compact",
                            className: "w-full truncate",
                            children: option.label
                          }
                        )
                      ]
                    }
                  ),
                  option.has_children && !searchValue && /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: clx(
                        "text-ui-fg-muted flex size-8 appearance-none items-center justify-center rounded-md outline-none",
                        "hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed"
                      ),
                      type: "button",
                      onClick: handleLevelDown(option),
                      children: /* @__PURE__ */ jsx(TriangleRightMini, {})
                    }
                  )
                ]
              },
              option.value
            )),
            showLoading && Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "grid grid-cols-[20px_1fr_20px] gap-2 px-2 py-1.5",
                children: [
                  /* @__PURE__ */ jsx("div", {}),
                  /* @__PURE__ */ jsx(TextSkeleton, { size: "small", leading: "compact" }),
                  /* @__PURE__ */ jsx("div", {})
                ]
              },
              index
            )),
            options.length === 0 && !showLoading && /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: query ? /* @__PURE__ */ jsx(
              Trans,
              {
                i18n,
                i18nKey: "general.noResultsTitle",
                tOptions: {
                  query
                },
                components: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium" }, "query")
                ]
              }
            ) : t("general.noResultsTitle") }) })
          ] })
        ]
      }
    ) })
  ] });
});
CategoryCombobox.displayName = "CategoryCombobox";
function getParentId(level) {
  if (!level.length) {
    return "null";
  }
  return level[level.length - 1].id;
}
function getParentLabel(level) {
  if (!level.length) {
    return null;
  }
  return level[level.length - 1].label;
}
function getOptions(categories) {
  return categories.map((cat) => {
    return {
      value: cat.id,
      label: cat.name,
      has_children: cat.category_children?.length > 0
    };
  });
}
function isSelected(values, value) {
  return values.includes(value);
}

export {
  CategoryCombobox
};
