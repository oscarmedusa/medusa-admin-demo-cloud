import {
  useSelectedParams
} from "./chunk-M3VFKDXJ.mjs";
import {
  useDate
} from "./chunk-QAF7PVQE.mjs";
import {
  Content2,
  Portal,
  Root2,
  Trigger,
  useSize
} from "./chunk-ODJSGZRJ.mjs";
import {
  Presence,
  Primitive,
  composeEventHandlers,
  createContextScope,
  useCallbackRef,
  useControllableState,
  useId
} from "./chunk-ZHSZGFLW.mjs";
import {
  Slot,
  useComposedRefs
} from "./chunk-GPBQTNZI.mjs";

// src/components/table/data-table/data-table-filter/data-table-filter.tsx
import { Button, clx as clx5 } from "@medusajs/ui";
import { useCallback as useCallback4, useEffect as useEffect6, useMemo as useMemo3, useRef as useRef5, useState as useState7 } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation as useTranslation5 } from "react-i18next";

// src/components/table/data-table/data-table-filter/context.tsx
import { createContext, useContext } from "react";
var DataTableFilterContext = createContext(null);
var useDataTableFilterContext = () => {
  const ctx = useContext(DataTableFilterContext);
  if (!ctx) {
    throw new Error(
      "useDataTableFacetedFilterContext must be used within a DataTableFacetedFilter"
    );
  }
  return ctx;
};

// src/components/table/data-table/data-table-filter/date-filter.tsx
import { EllipseMiniSolid, XMarkMini } from "@medusajs/icons";
import { DatePicker, Text, clx } from "@medusajs/ui";
import isEqual from "lodash/isEqual";
import { useMemo, useState } from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var DateFilter = ({
  filter,
  prefix,
  readonly,
  openOnMount
}) => {
  const [open, setOpen] = useState(openOnMount);
  const [showCustom, setShowCustom] = useState(false);
  const { getFullDate } = useDate();
  const { key, label } = filter;
  const { removeFilter } = useDataTableFilterContext();
  const selectedParams = useSelectedParams({ param: key, prefix });
  const presets = usePresets();
  const handleSelectPreset = (value) => {
    selectedParams.add(JSON.stringify(value));
    setShowCustom(false);
  };
  const handleSelectCustom = () => {
    selectedParams.delete();
    setShowCustom((prev) => !prev);
  };
  const currentValue = selectedParams.get();
  const currentDateComparison = parseDateComparison(currentValue);
  const customStartValue = getDateFromComparison(currentDateComparison, "$gte");
  const customEndValue = getDateFromComparison(currentDateComparison, "$lte");
  const handleCustomDateChange = (value, pos) => {
    const key2 = pos === "start" ? "$gte" : "$lte";
    const dateValue = value ? value.toISOString() : void 0;
    selectedParams.add(
      JSON.stringify({
        ...currentDateComparison || {},
        [key2]: dateValue
      })
    );
  };
  const getDisplayValueFromPresets = () => {
    const preset = presets.find((p) => isEqual(p.value, currentDateComparison));
    return preset?.label;
  };
  const formatCustomDate = (date) => {
    return date ? getFullDate({ date }) : void 0;
  };
  const getCustomDisplayValue = () => {
    const formattedDates = [customStartValue, customEndValue].map(
      formatCustomDate
    );
    return formattedDates.filter(Boolean).join(" - ");
  };
  const displayValue = getDisplayValueFromPresets() || getCustomDisplayValue();
  const handleRemove = () => {
    selectedParams.delete();
    removeFilter(key);
  };
  let timeoutId = null;
  const handleOpenChange = (open2) => {
    setOpen(open2);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!open2 && !currentValue.length) {
      timeoutId = setTimeout(() => {
        removeFilter(key);
      }, 200);
    }
  };
  return /* @__PURE__ */ jsxs(Root2, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx(
      DateDisplay,
      {
        label,
        value: displayValue,
        onRemove: handleRemove,
        readonly
      }
    ),
    !readonly && /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsxs(
      Content2,
      {
        "data-name": "date_filter_content",
        align: "start",
        sideOffset: 8,
        collisionPadding: 24,
        className: clx(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout h-full max-h-[var(--radix-popper-available-height)] w-[300px] overflow-auto rounded-lg"
        ),
        onInteractOutside: (e) => {
          if (e.target instanceof HTMLElement) {
            if (e.target.attributes.getNamedItem("data-name")?.value === "filters_menu_content") {
              e.preventDefault();
            }
          }
        },
        children: [
          /* @__PURE__ */ jsxs("ul", { className: "w-full p-1", children: [
            presets.map((preset) => {
              const isSelected = selectedParams.get().includes(JSON.stringify(preset.value));
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",
                  type: "button",
                  onClick: () => {
                    handleSelectPreset(preset.value);
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: clx(
                          "transition-fg flex h-5 w-5 items-center justify-center",
                          {
                            "[&_svg]:invisible": !isSelected
                          }
                        ),
                        children: /* @__PURE__ */ jsx(EllipseMiniSolid, {})
                      }
                    ),
                    preset.label
                  ]
                }
              ) }, preset.label);
            }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: "bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",
                type: "button",
                onClick: handleSelectCustom,
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: clx(
                        "transition-fg flex h-5 w-5 items-center justify-center",
                        {
                          "[&_svg]:invisible": !showCustom
                        }
                      ),
                      children: /* @__PURE__ */ jsx(EllipseMiniSolid, {})
                    }
                  ),
                  t("filters.date.custom")
                ]
              }
            ) })
          ] }),
          showCustom && /* @__PURE__ */ jsxs("div", { className: "border-t px-1 pb-3 pt-1", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1", children: /* @__PURE__ */ jsx(Text, { size: "xsmall", leading: "compact", weight: "plus", children: t("filters.date.from") }) }),
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1", children: /* @__PURE__ */ jsx(
                DatePicker,
                {
                  maxValue: customEndValue,
                  value: customStartValue,
                  onChange: (d) => handleCustomDateChange(d, "start")
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1", children: /* @__PURE__ */ jsx(Text, { size: "xsmall", leading: "compact", weight: "plus", children: t("filters.date.to") }) }),
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1", children: /* @__PURE__ */ jsx(
                DatePicker,
                {
                  minValue: customStartValue,
                  value: customEndValue || void 0,
                  onChange: (d) => {
                    handleCustomDateChange(d, "end");
                  }
                }
              ) })
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
var DateDisplay = ({
  label,
  value,
  readonly,
  onRemove
}) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  };
  return /* @__PURE__ */ jsx(
    Trigger,
    {
      asChild: true,
      className: clx(
        "bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-pointer select-none items-center rounded-md",
        {
          "hover:bg-ui-bg-field-hover": !readonly,
          "data-[state=open]:bg-ui-bg-field-hover": !readonly
        }
      ),
      children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clx("flex items-center justify-center px-2 py-1", {
              "border-r": !!value
            }),
            children: /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ),
        value && /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "border-r p-1 px-2", children: /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: value }) }, value) }),
        !readonly && value && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRemove,
            className: clx(
              "text-ui-fg-muted transition-fg flex items-center justify-center p-1",
              "hover:bg-ui-bg-subtle-hover",
              "active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"
            ),
            children: /* @__PURE__ */ jsx(XMarkMini, {})
          }
        ) })
      ] })
    }
  );
};
var today = /* @__PURE__ */ new Date();
today.setHours(0, 0, 0, 0);
var usePresets = () => {
  const { t: t2 } = useTranslation();
  return useMemo(
    () => [
      {
        label: t2("filters.date.today"),
        value: {
          $gte: today.toISOString()
        }
      },
      {
        label: t2("filters.date.lastSevenDays"),
        value: {
          $gte: new Date(
            today.getTime() - 7 * 24 * 60 * 60 * 1e3
          ).toISOString()
          // 7 days ago
        }
      },
      {
        label: t2("filters.date.lastThirtyDays"),
        value: {
          $gte: new Date(
            today.getTime() - 30 * 24 * 60 * 60 * 1e3
          ).toISOString()
          // 30 days ago
        }
      },
      {
        label: t2("filters.date.lastNinetyDays"),
        value: {
          $gte: new Date(
            today.getTime() - 90 * 24 * 60 * 60 * 1e3
          ).toISOString()
          // 90 days ago
        }
      },
      {
        label: t2("filters.date.lastTwelveMonths"),
        value: {
          $gte: new Date(
            today.getTime() - 365 * 24 * 60 * 60 * 1e3
          ).toISOString()
          // 365 days ago
        }
      }
    ],
    [t2]
  );
};
var parseDateComparison = (value) => {
  return value?.length ? JSON.parse(value.join(",")) : null;
};
var getDateFromComparison = (comparison, key) => {
  return comparison?.[key] ? new Date(comparison[key]) : void 0;
};

// src/components/table/data-table/data-table-filter/number-filter.tsx
import { EllipseMiniSolid as EllipseMiniSolid2, XMarkMini as XMarkMini2 } from "@medusajs/icons";
import { Input, Label, Text as Text2, clx as clx2 } from "@medusajs/ui";

// ../../../node_modules/@radix-ui/react-radio-group/dist/index.mjs
import * as React22 from "react";

// ../../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import * as React3 from "react";

// ../../../node_modules/@radix-ui/react-collection/dist/index.mjs
import React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React.useRef(null);
    const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsx2(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsx2(Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = React.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsx2(Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}

// ../../../node_modules/@radix-ui/react-direction/dist/index.mjs
import * as React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var DirectionContext = React2.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React2.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// ../../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import { jsx as jsx4 } from "react/jsx-runtime";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React3.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsx4(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx4(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx4(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React3.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React3.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React3.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React3.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React3.useState(0);
  React3.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx4(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React3.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React3.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React3.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React3.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsx4(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React3.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React3.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsx4(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsx4(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable)
                event.preventDefault();
              else
                context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget)
                return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
                  return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last")
                  candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev")
                    candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;

// ../../../node_modules/@radix-ui/react-radio-group/dist/index.mjs
import * as React5 from "react";

// ../../../node_modules/@radix-ui/react-use-previous/dist/index.mjs
import * as React4 from "react";
function usePrevious(value) {
  const ref = React4.useRef({ value, previous: value });
  return React4.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

// ../../../node_modules/@radix-ui/react-radio-group/dist/index.mjs
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
import { jsx as jsx22 } from "react/jsx-runtime";
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = React5.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      ...radioProps
    } = props;
    const [button, setButton] = React5.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React5.useRef(false);
    const isFormControl = button ? Boolean(button.closest("form")) : true;
    return /* @__PURE__ */ jsxs2(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ jsx5(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked)
              onCheck?.();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current)
                event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsx5(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = React5.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsx5(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsx5(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React5.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React5.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ jsx5(
    "input",
    {
      type: "radio",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = React22.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    return /* @__PURE__ */ jsx22(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsx22(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsx22(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup.displayName = RADIO_GROUP_NAME;
var ITEM_NAME2 = "RadioGroupItem";
var RadioGroupItem = React22.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME2, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = React22.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = React22.useRef(false);
    React22.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return /* @__PURE__ */ jsx22(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ jsx22(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter")
                event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              if (isArrowKeyPressedRef.current)
                ref.current?.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem.displayName = ITEM_NAME2;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = React22.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsx22(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root22 = RadioGroup;
var Item2 = RadioGroupItem;
var Indicator = RadioGroupIndicator;

// src/components/table/data-table/data-table-filter/number-filter.tsx
import { debounce } from "lodash";
import {
  useCallback as useCallback2,
  useEffect as useEffect4,
  useState as useState4
} from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var NumberFilter = ({
  filter,
  prefix,
  readonly,
  openOnMount
}) => {
  const { t: t2 } = useTranslation2();
  const [open, setOpen] = useState4(openOnMount);
  const { key, label } = filter;
  const { removeFilter } = useDataTableFilterContext();
  const selectedParams = useSelectedParams({
    param: key,
    prefix,
    multiple: false
  });
  const currentValue = selectedParams.get();
  const [operator, setOperator] = useState4(
    getOperator(currentValue)
  );
  const debouncedOnChange = useCallback2(
    debounce((e, operator2) => {
      const value = e.target.value;
      const curr = JSON.parse(currentValue?.join(",") || "{}");
      const isCurrentNumber = !isNaN(Number(curr));
      const handleValue = (operator3) => {
        if (!value && isCurrentNumber) {
          selectedParams.delete();
          return;
        }
        if (curr && !value) {
          delete curr[operator3];
          selectedParams.add(JSON.stringify(curr));
          return;
        }
        if (!curr) {
          selectedParams.add(JSON.stringify({ [operator3]: value }));
          return;
        }
        selectedParams.add(JSON.stringify({ ...curr, [operator3]: value }));
      };
      switch (operator2) {
        case "eq":
          if (!value) {
            selectedParams.delete();
          } else {
            selectedParams.add(value);
          }
          break;
        case "lt":
        case "gt":
          handleValue(operator2);
          break;
      }
    }, 500),
    [selectedParams, currentValue]
  );
  useEffect4(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);
  let timeoutId = null;
  const handleOpenChange = (open2) => {
    setOpen(open2);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!open2 && !currentValue.length) {
      timeoutId = setTimeout(() => {
        removeFilter(key);
      }, 200);
    }
  };
  const handleRemove = () => {
    selectedParams.delete();
    removeFilter(key);
  };
  const operators = [
    {
      operator: "exact",
      label: t2("filters.compare.exact")
    },
    {
      operator: "range",
      label: t2("filters.compare.range")
    }
  ];
  const GT_KEY = `${key}-gt`;
  const LT_KEY = `${key}-lt`;
  const EQ_KEY = key;
  return /* @__PURE__ */ jsxs3(Root2, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx6(
      NumberDisplay,
      {
        label,
        value: currentValue,
        onRemove: handleRemove,
        readonly
      }
    ),
    !readonly && /* @__PURE__ */ jsx6(Portal, { children: /* @__PURE__ */ jsxs3(
      Content2,
      {
        "data-name": "number_filter_content",
        align: "start",
        sideOffset: 8,
        collisionPadding: 24,
        className: clx2(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] w-[300px] divide-y overflow-y-auto rounded-lg outline-none"
        ),
        onInteractOutside: (e) => {
          if (e.target instanceof HTMLElement) {
            if (e.target.attributes.getNamedItem("data-name")?.value === "filters_menu_content") {
              e.preventDefault();
            }
          }
        },
        children: [
          /* @__PURE__ */ jsx6("div", { className: "p-1", children: /* @__PURE__ */ jsx6(
            Root22,
            {
              value: operator,
              onValueChange: (val) => setOperator(val),
              className: "flex flex-col items-start",
              orientation: "vertical",
              autoFocus: true,
              children: operators.map((o) => /* @__PURE__ */ jsxs3(
                Item2,
                {
                  value: o.operator,
                  className: "txt-compact-small hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed transition-fg grid w-full grid-cols-[20px_1fr] gap-2 rounded-[4px] px-2 py-1.5 text-left outline-none",
                  children: [
                    /* @__PURE__ */ jsx6("div", { className: "size-5", children: /* @__PURE__ */ jsx6(Indicator, { children: /* @__PURE__ */ jsx6(EllipseMiniSolid2, {}) }) }),
                    /* @__PURE__ */ jsx6("span", { className: "w-full", children: o.label })
                  ]
                },
                o.operator
              ))
            }
          ) }),
          /* @__PURE__ */ jsx6("div", { children: operator === "range" ? /* @__PURE__ */ jsxs3("div", { className: "px-1 pb-3 pt-1", children: [
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsx6(Label, { size: "xsmall", weight: "plus", htmlFor: GT_KEY, children: t2("filters.compare.greaterThan") }) }),
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-0.5", children: /* @__PURE__ */ jsx6(
              Input,
              {
                name: GT_KEY,
                size: "small",
                type: "number",
                defaultValue: getValue(currentValue, "gt"),
                onChange: (e) => debouncedOnChange(e, "gt")
              }
            ) }),
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsx6(Label, { size: "xsmall", weight: "plus", htmlFor: LT_KEY, children: t2("filters.compare.lessThan") }) }),
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-0.5", children: /* @__PURE__ */ jsx6(
              Input,
              {
                name: LT_KEY,
                size: "small",
                type: "number",
                defaultValue: getValue(currentValue, "lt"),
                onChange: (e) => debouncedOnChange(e, "lt")
              }
            ) })
          ] }, "range") : /* @__PURE__ */ jsxs3("div", { className: "px-1 pb-3 pt-1", children: [
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsx6(Label, { size: "xsmall", weight: "plus", htmlFor: EQ_KEY, children: label }) }),
            /* @__PURE__ */ jsx6("div", { className: "px-2 py-0.5", children: /* @__PURE__ */ jsx6(
              Input,
              {
                name: EQ_KEY,
                size: "small",
                type: "number",
                defaultValue: getValue(currentValue, "eq"),
                onChange: (e) => debouncedOnChange(e, "eq")
              }
            ) })
          ] }, "exact") })
        ]
      }
    ) })
  ] });
};
var NumberDisplay = ({
  label,
  value,
  readonly,
  onRemove
}) => {
  const { t: t2 } = useTranslation2();
  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  };
  const parsed = JSON.parse(value?.join(",") || "{}");
  let displayValue = "";
  if (typeof parsed === "object") {
    const parts = [];
    if (parsed.gt) {
      parts.push(t2("filters.compare.greaterThanLabel", { value: parsed.gt }));
    }
    if (parsed.lt) {
      parts.push(
        t2("filters.compare.lessThanLabel", {
          value: parsed.lt
        })
      );
    }
    displayValue = parts.join(` ${t2("filters.compare.andLabel")} `);
  }
  if (typeof parsed === "number") {
    displayValue = parsed.toString();
  }
  return /* @__PURE__ */ jsx6(
    Trigger,
    {
      asChild: true,
      className: clx2(
        "bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-pointer select-none items-center rounded-md",
        {
          "hover:bg-ui-bg-field-hover": !readonly,
          "data-[state=open]:bg-ui-bg-field-hover": !readonly
        }
      ),
      children: /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx6(
          "div",
          {
            className: clx2("flex items-center justify-center px-2 py-1", {
              "border-r": !!value
            }),
            children: /* @__PURE__ */ jsx6(Text2, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ),
        !!value && /* @__PURE__ */ jsx6("div", { className: "border-r p-1 px-2", children: /* @__PURE__ */ jsx6(
          Text2,
          {
            size: "small",
            weight: "plus",
            leading: "compact",
            className: "text-ui-fg-muted",
            children: t2("general.is")
          }
        ) }),
        value && /* @__PURE__ */ jsx6("div", { className: "flex items-center", children: /* @__PURE__ */ jsx6("div", { className: "border-r p-1 px-2", children: /* @__PURE__ */ jsx6(Text2, { size: "small", weight: "plus", leading: "compact", children: displayValue }) }) }),
        !readonly && value && /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: handleRemove,
            className: clx2(
              "text-ui-fg-muted transition-fg flex items-center justify-center p-1",
              "hover:bg-ui-bg-subtle-hover",
              "active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"
            ),
            children: /* @__PURE__ */ jsx6(XMarkMini2, {})
          }
        ) })
      ] })
    }
  );
};
var parseValue = (value) => {
  if (!value) {
    return void 0;
  }
  const val = value.join(",");
  if (!val) {
    return void 0;
  }
  return JSON.parse(val);
};
var getValue = (value, key) => {
  const parsed = parseValue(value);
  if (typeof parsed === "object") {
    return parsed[key];
  }
  if (typeof parsed === "number" && key === "eq") {
    return parsed;
  }
  return void 0;
};
var getOperator = (value) => {
  const parsed = parseValue(value);
  return typeof parsed === "object" ? "range" : "exact";
};

// src/components/table/data-table/data-table-filter/select-filter.tsx
import { CheckMini, EllipseMiniSolid as EllipseMiniSolid3, XMarkMini as XMarkMini3 } from "@medusajs/icons";
import { Text as Text3, clx as clx3 } from "@medusajs/ui";
import { Command } from "cmdk";
import { useState as useState5 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var SelectFilter = ({
  filter,
  prefix,
  readonly,
  multiple,
  searchable,
  options,
  openOnMount
}) => {
  const [open, setOpen] = useState5(openOnMount);
  const [search, setSearch] = useState5("");
  const [searchRef, setSearchRef] = useState5(null);
  const { t: t2 } = useTranslation3();
  const { removeFilter } = useDataTableFilterContext();
  const { key, label } = filter;
  const selectedParams = useSelectedParams({ param: key, prefix, multiple });
  const currentValue = selectedParams.get();
  const labelValues = currentValue.map((v) => options.find((o) => o.value === v)?.label).filter(Boolean);
  const handleRemove = () => {
    selectedParams.delete();
    removeFilter(key);
  };
  let timeoutId = null;
  const handleOpenChange = (open2) => {
    setOpen(open2);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!open2 && !currentValue.length) {
      timeoutId = setTimeout(() => {
        removeFilter(key);
      }, 200);
    }
  };
  const handleClearSearch = () => {
    setSearch("");
    if (searchRef) {
      searchRef.focus();
    }
  };
  const handleSelect = (value) => {
    const isSelected = selectedParams.get().includes(String(value));
    if (isSelected) {
      selectedParams.delete(String(value));
    } else {
      selectedParams.add(String(value));
    }
  };
  return /* @__PURE__ */ jsxs4(Root2, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx7(
      SelectDisplay,
      {
        readonly,
        label,
        value: labelValues,
        onRemove: handleRemove
      }
    ),
    !readonly && /* @__PURE__ */ jsx7(Portal, { children: /* @__PURE__ */ jsx7(
      Content2,
      {
        hideWhenDetached: true,
        align: "start",
        sideOffset: 8,
        collisionPadding: 8,
        className: clx3(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"
        ),
        onInteractOutside: (e) => {
          if (e.target instanceof HTMLElement) {
            if (e.target.attributes.getNamedItem("data-name")?.value === "filters_menu_content") {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        },
        children: /* @__PURE__ */ jsxs4(Command, { className: "h-full", children: [
          searchable && /* @__PURE__ */ jsx7("div", { className: "border-b p-1", children: /* @__PURE__ */ jsxs4("div", { className: "grid grid-cols-[1fr_20px] gap-x-2 rounded-md px-2 py-1", children: [
            /* @__PURE__ */ jsx7(
              Command.Input,
              {
                ref: setSearchRef,
                value: search,
                onValueChange: setSearch,
                className: "txt-compact-small placeholder:text-ui-fg-muted bg-transparent outline-none",
                placeholder: "Search"
              }
            ),
            /* @__PURE__ */ jsx7("div", { className: "flex h-5 w-5 items-center justify-center", children: /* @__PURE__ */ jsx7(
              "button",
              {
                disabled: !search,
                onClick: handleClearSearch,
                className: clx3(
                  "transition-fg text-ui-fg-muted focus-visible:bg-ui-bg-base-pressed rounded-md outline-none",
                  {
                    invisible: !search
                  }
                ),
                children: /* @__PURE__ */ jsx7(XMarkMini3, {})
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx7(Command.Empty, { className: "txt-compact-small flex items-center justify-center p-1", children: /* @__PURE__ */ jsx7("span", { className: "w-full px-2 py-1 text-center", children: t2("general.noResultsTitle") }) }),
          /* @__PURE__ */ jsx7(Command.List, { className: "h-full max-h-[163px] min-h-[0] overflow-auto p-1 outline-none", children: options.map((option) => {
            const isSelected = selectedParams.get().includes(String(option.value));
            return /* @__PURE__ */ jsxs4(
              Command.Item,
              {
                className: "bg-ui-bg-base hover:bg-ui-bg-base-hover aria-selected:bg-ui-bg-base-pressed focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center gap-x-2 rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",
                value: option.label,
                onSelect: () => {
                  handleSelect(option.value);
                },
                children: [
                  /* @__PURE__ */ jsx7(
                    "div",
                    {
                      className: clx3(
                        "transition-fg flex h-5 w-5 items-center justify-center",
                        {
                          "[&_svg]:invisible": !isSelected
                        }
                      ),
                      children: multiple ? /* @__PURE__ */ jsx7(CheckMini, {}) : /* @__PURE__ */ jsx7(EllipseMiniSolid3, {})
                    }
                  ),
                  option.label
                ]
              },
              String(option.value)
            );
          }) })
        ] })
      }
    ) })
  ] });
};
var SelectDisplay = ({
  label,
  value,
  onRemove,
  readonly
}) => {
  const { t: t2 } = useTranslation3();
  const v = value ? Array.isArray(value) ? value : [value] : null;
  const count = v?.length || 0;
  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  };
  return /* @__PURE__ */ jsx7(Trigger, { asChild: true, children: /* @__PURE__ */ jsxs4(
    "div",
    {
      className: clx3(
        "bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-pointer select-none items-center overflow-hidden rounded-md",
        {
          "hover:bg-ui-bg-field-hover": !readonly,
          "data-[state=open]:bg-ui-bg-field-hover": !readonly
        }
      ),
      children: [
        /* @__PURE__ */ jsx7(
          "div",
          {
            className: clx3(
              "flex items-center justify-center whitespace-nowrap px-2 py-1",
              {
                "border-r": count > 0
              }
            ),
            children: /* @__PURE__ */ jsx7(Text3, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ),
        /* @__PURE__ */ jsxs4("div", { className: "flex w-full items-center overflow-hidden", children: [
          count > 0 && /* @__PURE__ */ jsx7("div", { className: "border-r p-1 px-2", children: /* @__PURE__ */ jsx7(
            Text3,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "text-ui-fg-muted",
              children: t2("general.is")
            }
          ) }),
          count > 0 && /* @__PURE__ */ jsx7("div", { className: "flex-1 overflow-hidden border-r p-1 px-2", children: /* @__PURE__ */ jsx7(
            Text3,
            {
              size: "small",
              leading: "compact",
              weight: "plus",
              className: "truncate text-nowrap",
              children: v?.join(", ")
            }
          ) })
        ] }),
        !readonly && v && v.length > 0 && /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7(
          "button",
          {
            onClick: handleRemove,
            className: clx3(
              "text-ui-fg-muted transition-fg flex items-center justify-center p-1",
              "hover:bg-ui-bg-subtle-hover",
              "active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"
            ),
            children: /* @__PURE__ */ jsx7(XMarkMini3, {})
          }
        ) })
      ]
    }
  ) });
};

// src/components/table/data-table/data-table-filter/string-filter.tsx
import { XMarkMini as XMarkMini4 } from "@medusajs/icons";
import { Input as Input2, Label as Label2, Text as Text4, clx as clx4 } from "@medusajs/ui";
import { debounce as debounce2 } from "lodash";
import { useCallback as useCallback3, useEffect as useEffect5, useState as useState6 } from "react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var StringFilter = ({
  filter,
  prefix,
  readonly,
  openOnMount
}) => {
  const [open, setOpen] = useState6(openOnMount);
  const { key, label } = filter;
  const { removeFilter } = useDataTableFilterContext();
  const selectedParams = useSelectedParams({ param: key, prefix });
  const query = selectedParams.get();
  const debouncedOnChange = useCallback3(
    debounce2((e) => {
      const value = e.target.value;
      if (!value) {
        selectedParams.delete();
      } else {
        selectedParams.add(value);
      }
    }, 500),
    [selectedParams]
  );
  useEffect5(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);
  let timeoutId = null;
  const handleOpenChange = (open2) => {
    setOpen(open2);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!open2 && !query.length) {
      timeoutId = setTimeout(() => {
        removeFilter(key);
      }, 200);
    }
  };
  const handleRemove = () => {
    selectedParams.delete();
    removeFilter(key);
  };
  return /* @__PURE__ */ jsxs5(Root2, { modal: true, open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx8(
      StringDisplay,
      {
        label,
        value: query?.[0],
        onRemove: handleRemove,
        readonly
      }
    ),
    !readonly && /* @__PURE__ */ jsx8(Portal, { children: /* @__PURE__ */ jsx8(
      Content2,
      {
        hideWhenDetached: true,
        align: "start",
        sideOffset: 8,
        collisionPadding: 8,
        className: clx4(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-hidden rounded-lg outline-none"
        ),
        onInteractOutside: (e) => {
          if (e.target instanceof HTMLElement) {
            if (e.target.attributes.getNamedItem("data-name")?.value === "filters_menu_content") {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        },
        children: /* @__PURE__ */ jsxs5("div", { className: "px-1 pb-3 pt-1", children: [
          /* @__PURE__ */ jsx8("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsx8(Label2, { size: "xsmall", weight: "plus", htmlFor: key, children: label }) }),
          /* @__PURE__ */ jsx8("div", { className: "px-2 py-0.5", children: /* @__PURE__ */ jsx8(
            Input2,
            {
              name: key,
              size: "small",
              defaultValue: query?.[0] || void 0,
              onChange: debouncedOnChange
            }
          ) })
        ] })
      }
    ) })
  ] });
};
var StringDisplay = ({
  label,
  value,
  readonly,
  onRemove
}) => {
  const { t: t2 } = useTranslation4();
  return /* @__PURE__ */ jsx8(Trigger, { asChild: true, children: /* @__PURE__ */ jsxs5(
    "div",
    {
      className: clx4(
        "bg-ui-bg-field transition-fg shadow-borders-base text-ui-fg-subtle flex cursor-pointer select-none items-center overflow-hidden rounded-md",
        {
          "hover:bg-ui-bg-field-hover": !readonly,
          "data-[state=open]:bg-ui-bg-field-hover": !readonly
        }
      ),
      children: [
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: clx4(
              "flex items-center justify-center whitespace-nowrap px-2 py-1",
              {
                "border-r": !!value
              }
            ),
            children: /* @__PURE__ */ jsx8(Text4, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ),
        /* @__PURE__ */ jsxs5("div", { className: "flex w-full items-center overflow-hidden", children: [
          !!value && /* @__PURE__ */ jsx8("div", { className: "border-r p-1 px-2", children: /* @__PURE__ */ jsx8(
            Text4,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "text-ui-fg-muted",
              children: t2("general.is")
            }
          ) }),
          !!value && /* @__PURE__ */ jsx8("div", { className: "flex-1 overflow-hidden border-r p-1 px-2", children: /* @__PURE__ */ jsx8(
            Text4,
            {
              size: "small",
              leading: "compact",
              weight: "plus",
              className: "truncate text-nowrap",
              children: value
            }
          ) })
        ] }),
        !readonly && !!value && /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8(
          "button",
          {
            onClick: onRemove,
            className: clx4(
              "text-ui-fg-muted transition-fg flex items-center justify-center p-1",
              "hover:bg-ui-bg-subtle-hover",
              "active:bg-ui-bg-subtle-pressed active:text-ui-fg-base"
            ),
            children: /* @__PURE__ */ jsx8(XMarkMini4, {})
          }
        ) })
      ]
    }
  ) });
};

// src/components/table/data-table/data-table-filter/data-table-filter.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var DataTableFilter = ({
  filters,
  readonly,
  prefix
}) => {
  const { t: t2 } = useTranslation5();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState7(false);
  const [activeFilters, setActiveFilters] = useState7(
    getInitialFilters({ searchParams, filters, prefix })
  );
  const availableFilters = filters.filter(
    (f) => !activeFilters.find((af) => af.key === f.key)
  );
  const initialMount = useRef5(true);
  useEffect6(() => {
    if (initialMount.current) {
      const params = new URLSearchParams(searchParams);
      filters.forEach((filter) => {
        const key = prefix ? `${prefix}_${filter.key}` : filter.key;
        const value = params.get(key);
        if (value && !activeFilters.find((af) => af.key === filter.key)) {
          if (filter.type === "select") {
            setActiveFilters((prev) => [
              ...prev,
              {
                ...filter,
                multiple: filter.multiple,
                options: filter.options,
                openOnMount: false
              }
            ]);
          } else {
            setActiveFilters((prev) => [
              ...prev,
              { ...filter, openOnMount: false }
            ]);
          }
        }
      });
    }
    initialMount.current = false;
  }, [activeFilters, filters, prefix, searchParams]);
  const addFilter = (filter) => {
    setOpen(false);
    setActiveFilters((prev) => [...prev, { ...filter, openOnMount: true }]);
  };
  const removeFilter = useCallback4((key) => {
    setActiveFilters((prev) => prev.filter((f) => f.key !== key));
  }, []);
  const removeAllFilters = useCallback4(() => {
    setActiveFilters([]);
  }, []);
  return /* @__PURE__ */ jsx9(
    DataTableFilterContext.Provider,
    {
      value: useMemo3(
        () => ({
          removeFilter,
          removeAllFilters
        }),
        [removeAllFilters, removeFilter]
      ),
      children: /* @__PURE__ */ jsxs6("div", { className: "max-w-2/3 flex flex-wrap items-center gap-2", children: [
        activeFilters.map((filter) => {
          switch (filter.type) {
            case "select":
              return /* @__PURE__ */ jsx9(
                SelectFilter,
                {
                  filter,
                  prefix,
                  readonly,
                  options: filter.options,
                  multiple: filter.multiple,
                  searchable: filter.searchable,
                  openOnMount: filter.openOnMount
                },
                filter.key
              );
            case "date":
              return /* @__PURE__ */ jsx9(
                DateFilter,
                {
                  filter,
                  prefix,
                  readonly,
                  openOnMount: filter.openOnMount
                },
                filter.key
              );
            case "string":
              return /* @__PURE__ */ jsx9(
                StringFilter,
                {
                  filter,
                  prefix,
                  readonly,
                  openOnMount: filter.openOnMount
                },
                filter.key
              );
            case "number":
              return /* @__PURE__ */ jsx9(
                NumberFilter,
                {
                  filter,
                  prefix,
                  readonly,
                  openOnMount: filter.openOnMount
                },
                filter.key
              );
            default:
              break;
          }
        }),
        !readonly && availableFilters.length > 0 && /* @__PURE__ */ jsxs6(Root2, { modal: true, open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx9(Trigger, { asChild: true, id: "filters_menu_trigger", children: /* @__PURE__ */ jsx9(Button, { size: "small", variant: "secondary", children: t2("filters.addFilter") }) }),
          /* @__PURE__ */ jsx9(Portal, { children: /* @__PURE__ */ jsx9(
            Content2,
            {
              className: clx5(
                "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout z-[1] h-full max-h-[200px] w-[300px] overflow-auto rounded-lg p-1 outline-none"
              ),
              "data-name": "filters_menu_content",
              align: "start",
              sideOffset: 8,
              collisionPadding: 8,
              onCloseAutoFocus: (e) => {
                const hasOpenFilter = activeFilters.find(
                  (filter) => filter.openOnMount
                );
                if (hasOpenFilter) {
                  e.preventDefault();
                }
              },
              children: availableFilters.map((filter) => {
                return /* @__PURE__ */ jsx9(
                  "div",
                  {
                    className: "bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors data-[disabled]:pointer-events-none",
                    role: "menuitem",
                    onClick: () => {
                      addFilter(filter);
                    },
                    children: filter.label
                  },
                  filter.key
                );
              })
            }
          ) })
        ] }),
        !readonly && activeFilters.length > 0 && /* @__PURE__ */ jsx9(ClearAllFilters, { filters, prefix })
      ] })
    }
  );
};
var ClearAllFilters = ({ filters, prefix }) => {
  const { removeAllFilters } = useDataTableFilterContext();
  const [_, setSearchParams] = useSearchParams();
  const handleRemoveAll = () => {
    setSearchParams((prev) => {
      const newValues = new URLSearchParams(prev);
      filters.forEach((filter) => {
        newValues.delete(prefix ? `${prefix}_${filter.key}` : filter.key);
      });
      return newValues;
    });
    removeAllFilters();
  };
  return /* @__PURE__ */ jsx9(
    "button",
    {
      type: "button",
      onClick: handleRemoveAll,
      className: clx5(
        "text-ui-fg-muted transition-fg txt-compact-small-plus rounded-md px-2 py-1",
        "hover:text-ui-fg-subtle",
        "focus-visible:shadow-borders-focus"
      ),
      children: "Clear all"
    }
  );
};
var getInitialFilters = ({
  searchParams,
  filters,
  prefix
}) => {
  const params = new URLSearchParams(searchParams);
  const activeFilters = [];
  filters.forEach((filter) => {
    const key = prefix ? `${prefix}_${filter.key}` : filter.key;
    const value = params.get(key);
    if (value) {
      if (filter.type === "select") {
        activeFilters.push({
          ...filter,
          multiple: filter.multiple,
          options: filter.options,
          openOnMount: false
        });
      } else {
        activeFilters.push({ ...filter, openOnMount: false });
      }
    }
  });
  return activeFilters;
};

export {
  DataTableFilter
};
