import {
  taxRegionLoader
} from "./chunk-G7KWKSLF.mjs";
import {
  getProvinceByIso2,
  isProvinceInCountry
} from "./chunk-VFWVYIBV.mjs";
import {
  productLoader
} from "./chunk-HCP7DWCN.mjs";
import {
  getCountryByIso2
} from "./chunk-VDBOSWVE.mjs";
import "./chunk-SWMQZ55N.mjs";
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title
} from "./chunk-MGS2W2HU.mjs";
import {
  ConditionalTooltip
} from "./chunk-OC7BQLYI.mjs";
import {
  I18n
} from "./chunk-NL4BBOUC.mjs";
import {
  isFetchError
} from "./chunk-ONB3JEHR.mjs";
import {
  languages
} from "./chunk-GQ6DSXIJ.mjs";
import {
  Skeleton
} from "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  FilePreview
} from "./chunk-QRA6HQU2.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  notificationQueryKeys,
  useNotifications
} from "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import {
  useMe
} from "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import {
  useStore
} from "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-WRXTMI2J.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  useLogout
} from "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/app.tsx
import { Toaster, TooltipProvider } from "@medusajs/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// src/providers/i18n-provider/i18n-provider.tsx
import { I18nProvider as Provider } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var I18nProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const locale = languages.find((lan) => lan.code === i18n.language)?.code || languages[0].code;
  return /* @__PURE__ */ jsx(Provider, { locale, children });
};

// src/providers/router-provider/router-provider.tsx
import {
  RouterProvider as Provider2,
  createBrowserRouter
} from "react-router-dom";

// src/providers/router-provider/route-map.tsx
import { Outlet as Outlet3 } from "react-router-dom";

// src/components/authentication/protected-route/protected-route.tsx
import { Spinner } from "@medusajs/icons";
import { Navigate, Outlet, useLocation as useLocation3 } from "react-router-dom";

// src/providers/search-provider/search-provider.tsx
import { useEffect as useEffect4, useState as useState3 } from "react";

// src/components/search/search.tsx
import { Badge, Kbd, Text, clx } from "@medusajs/ui";
import { Command } from "cmdk";
import {
  forwardRef,
  useEffect as useEffect2,
  useMemo
} from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { useLocation, useNavigate as useNavigate2 } from "react-router-dom";

// src/providers/keybind-provider/hooks.tsx
import debounceFn from "lodash/debounce";
import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";

// src/providers/keybind-provider/keybind-context.tsx
import { createContext } from "react";
var KeybindContext = createContext(null);

// src/providers/keybind-provider/utils.ts
var findFirstPlatformMatch = (keys) => {
  const match = Object.entries(keys).filter(
    ([, value]) => value.length > 0
  )[0] ?? [];
  return match.length ? {
    platform: match[0],
    keys: match[1]
  } : null;
};
var getShortcutKeys = (shortcut) => {
  const platform = "Mac";
  const keys = shortcut.keys[platform];
  if (!keys) {
    const defaultPlatform = findFirstPlatformMatch(shortcut.keys);
    console.warn(
      `No keys found for platform "${platform}" in "${shortcut.label}" ${defaultPlatform ? `using keys for platform "${defaultPlatform.platform}"` : ""}`
    );
    return defaultPlatform ? defaultPlatform.keys : [];
  }
  return keys;
};
var keysMatch = (keys1, keys2) => {
  return keys1.length === keys2.length && keys1.every(
    (key, index) => key.toLowerCase() === keys2[index].toLowerCase()
  );
};
var findShortcutIndex = (shortcuts, keys) => {
  if (!keys.length) {
    return -1;
  }
  let index = 0;
  for (const shortcut of shortcuts) {
    const shortcutKeys = getShortcutKeys(shortcut);
    if (keysMatch(shortcutKeys, keys)) {
      return index;
    }
    index++;
  }
  return -1;
};
var findShortcut = (shortcuts, keys) => {
  const shortcutIndex = findShortcutIndex(shortcuts, keys);
  return shortcutIndex > -1 ? shortcuts[shortcutIndex] : null;
};
var getShortcutWithDefaultValues = (shortcut, platform = "Mac") => {
  const platforms = ["Mac", "Windows", "Linux"];
  const defaultKeys = Object.values(shortcut.keys)[0] ?? shortcut.keys[platform];
  const keys = platforms.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: shortcut.keys[curr] ?? defaultKeys
    };
  }, {});
  return {
    ...shortcut,
    keys,
    _defaultKeys: shortcut.keys
  };
};

// src/providers/keybind-provider/hooks.tsx
var useShortcuts = ({
  shortcuts = [],
  debounce
}) => {
  const [keys, setKeys] = useState([]);
  const navigate = useNavigate();
  const removeKeys = useCallback(
    debounceFn(() => setKeys([]), debounce),
    []
  );
  const invokeShortcut = useCallback(
    debounceFn((shortcut) => {
      if (shortcut && shortcut.callback) {
        shortcut.callback();
        setKeys([]);
        return;
      }
      if (shortcut && shortcut.to) {
        navigate(shortcut.to);
        setKeys([]);
        return;
      }
    }, debounce / 2),
    []
  );
  useEffect(() => {
    if (keys.length > 0 && shortcuts.length > 0) {
      const shortcut = findShortcut(shortcuts, keys);
      invokeShortcut(shortcut);
    }
    return () => invokeShortcut.cancel();
  }, [keys, shortcuts, invokeShortcut]);
  useEffect(() => {
    const listener = (event) => {
      const target = event.target;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.contentEditable === "true") {
        removeKeys();
        return;
      }
      setKeys((oldKeys) => [...oldKeys, event.key]);
      removeKeys();
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [removeKeys]);
};
var useGlobalShortcuts = () => {
  const { t } = useTranslation2();
  const navigate = useNavigate();
  const { mutateAsync } = useLogout();
  const handleLogout = async () => {
    await mutateAsync(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  const globalShortcuts = [
    // Pages
    {
      keys: {
        Mac: ["G", "O"]
      },
      label: t("app.keyboardShortcuts.navigation.goToOrders"),
      type: "pageShortcut",
      to: "/orders"
    },
    {
      keys: {
        Mac: ["G", "P"]
      },
      label: t("app.keyboardShortcuts.navigation.goToProducts"),
      type: "pageShortcut",
      to: "/products"
    },
    {
      keys: {
        Mac: ["G", "C"]
      },
      label: t("app.keyboardShortcuts.navigation.goToCollections"),
      type: "pageShortcut",
      to: "/collections"
    },
    {
      keys: {
        Mac: ["G", "A"]
      },
      label: t("app.keyboardShortcuts.navigation.goToCategories"),
      type: "pageShortcut",
      to: "/categories"
    },
    {
      keys: {
        Mac: ["G", "U"]
      },
      label: t("app.keyboardShortcuts.navigation.goToCustomers"),
      type: "pageShortcut",
      to: "/customers"
    },
    {
      keys: {
        Mac: ["G", "G"]
      },
      label: t("app.keyboardShortcuts.navigation.goToCustomerGroups"),
      type: "pageShortcut",
      to: "/customer-groups"
    },
    {
      keys: {
        Mac: ["G", "I"]
      },
      label: t("app.keyboardShortcuts.navigation.goToInventory"),
      type: "pageShortcut",
      to: "/inventory"
    },
    {
      keys: {
        Mac: ["G", "R"]
      },
      label: t("app.keyboardShortcuts.navigation.goToReservations"),
      type: "pageShortcut",
      to: "/reservations"
    },
    {
      keys: {
        Mac: ["G", "L"]
      },
      label: t("app.keyboardShortcuts.navigation.goToPriceLists"),
      type: "pageShortcut",
      to: "/price-lists"
    },
    {
      keys: {
        Mac: ["G", "M"]
      },
      label: t("app.keyboardShortcuts.navigation.goToPromotions"),
      type: "pageShortcut",
      to: "/promotions"
    },
    {
      keys: {
        Mac: ["G", "K"]
      },
      label: t("app.keyboardShortcuts.navigation.goToCampaigns"),
      type: "pageShortcut",
      to: "/campaigns"
    },
    // Settings
    {
      keys: {
        Mac: ["G", ","]
      },
      label: t("app.keyboardShortcuts.settings.goToSettings"),
      type: "settingShortcut",
      to: "/settings"
    },
    {
      keys: {
        Mac: ["G", ",", "S"]
      },
      label: t("app.keyboardShortcuts.settings.goToStore"),
      type: "settingShortcut",
      to: "/settings/store"
    },
    {
      keys: {
        Mac: ["G", ",", "U"]
      },
      label: t("app.keyboardShortcuts.settings.goToUsers"),
      type: "settingShortcut",
      to: "/settings/users"
    },
    {
      keys: {
        Mac: ["G", ",", "R"]
      },
      label: t("app.keyboardShortcuts.settings.goToRegions"),
      type: "settingShortcut",
      to: "/settings/regions"
    },
    {
      keys: {
        Mac: ["G", ",", "T"]
      },
      label: t("app.keyboardShortcuts.settings.goToTaxRegions"),
      type: "settingShortcut",
      to: "/settings/tax-regions"
    },
    {
      keys: {
        Mac: ["G", ",", "A"]
      },
      label: t("app.keyboardShortcuts.settings.goToSalesChannels"),
      type: "settingShortcut",
      to: "/settings/sales-channels"
    },
    {
      keys: {
        Mac: ["G", ",", "P"]
      },
      label: t("app.keyboardShortcuts.settings.goToProductTypes"),
      type: "settingShortcut",
      to: "/settings/product-types"
    },
    {
      keys: {
        Mac: ["G", ",", "L"]
      },
      label: t("app.keyboardShortcuts.settings.goToLocations"),
      type: "settingShortcut",
      to: "/settings/locations"
    },
    {
      keys: {
        Mac: ["G", ",", "M"]
      },
      label: t("app.keyboardShortcuts.settings.goToReturnReasons"),
      type: "settingShortcut",
      to: "/settings/return-reasons"
    },
    {
      keys: {
        Mac: ["G", ",", "J"]
      },
      label: t("app.keyboardShortcuts.settings.goToPublishableApiKeys"),
      type: "settingShortcut",
      to: "/settings/publishable-api-keys"
    },
    {
      keys: {
        Mac: ["G", ",", "K"]
      },
      label: t("app.keyboardShortcuts.settings.goToSecretApiKeys"),
      type: "settingShortcut",
      to: "/settings/secret-api-keys"
    },
    {
      keys: {
        Mac: ["G", ",", "W"]
      },
      label: t("app.keyboardShortcuts.settings.goToWorkflows"),
      type: "settingShortcut",
      to: "/settings/workflows"
    },
    {
      keys: {
        Mac: ["G", ",", "M"]
      },
      label: t("app.keyboardShortcuts.settings.goToProfile"),
      type: "settingShortcut",
      to: "/settings/profile"
    },
    // Commands
    {
      keys: {
        Mac: ["B", "Y", "E"]
      },
      label: t("actions.logout"),
      type: "commandShortcut",
      callback: () => handleLogout()
    }
  ];
  return globalShortcuts;
};

// src/components/search/search.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Search = () => {
  const { open, onOpenChange } = useSearch();
  const globalCommands = useGlobalShortcuts();
  const location = useLocation();
  const { t } = useTranslation3();
  const navigate = useNavigate2();
  useEffect2(() => {
    onOpenChange(false);
  }, [location.pathname, onOpenChange]);
  const links = useMemo(() => {
    const groups = /* @__PURE__ */ new Map();
    globalCommands.forEach((command) => {
      const group = groups.get(command.type) || [];
      group.push(command);
      groups.set(command.type, group);
    });
    return Array.from(groups).map(([title, items]) => ({
      title,
      items
    }));
  }, [globalCommands]);
  const handleSelect = (shortcut) => {
    onOpenChange(false);
    if (shortcut.to) {
      navigate(shortcut.to);
      return;
    }
    if (shortcut.callback) {
      shortcut.callback();
      return;
    }
  };
  return /* @__PURE__ */ jsxs(CommandDialog, { open, onOpenChange, children: [
    /* @__PURE__ */ jsx2(CommandInput, { placeholder: t("app.search.placeholder") }),
    /* @__PURE__ */ jsxs(CommandList, { children: [
      /* @__PURE__ */ jsx2(CommandEmpty, { children: t("general.noResultsTitle") }),
      links.map((group) => {
        return /* @__PURE__ */ jsx2(
          CommandGroup,
          {
            heading: t(`app.keyboardShortcuts.${group.title}`),
            children: group.items.map((item) => {
              return /* @__PURE__ */ jsxs(
                CommandItem,
                {
                  onSelect: () => handleSelect(item),
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsx2("span", { children: item.label }),
                    /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-x-1.5", children: item.keys.Mac?.map((key, index) => {
                      return /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "flex items-center gap-x-1",
                          children: [
                            /* @__PURE__ */ jsx2(Kbd, { children: key }),
                            index < (item.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx2("span", { className: "txt-compact-xsmall text-ui-fg-subtle", children: t("app.keyboardShortcuts.then") })
                          ]
                        },
                        index
                      );
                    }) })
                  ]
                },
                item.label
              );
            })
          },
          group.title
        );
      })
    ] })
  ] });
};
var CommandPalette = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  Command,
  {
    ref,
    className: clx(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    ),
    ...props
  }
));
CommandPalette.displayName = Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  const { t } = useTranslation3();
  return /* @__PURE__ */ jsx2(Root, { ...props, children: /* @__PURE__ */ jsxs(Portal, { children: [
    /* @__PURE__ */ jsx2(Overlay, { className: "bg-ui-bg-overlay fixed inset-0" }),
    /* @__PURE__ */ jsxs(Content, { className: "bg-ui-bg-base shadow-elevation-modal fixed left-[50%] top-[50%] flex max-h-[calc(100%-16px)] w-[calc(100%-16px)] min-w-0 max-w-2xl translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden rounded-xl p-0", children: [
      /* @__PURE__ */ jsx2(CommandPalette, { className: "[&_[cmdk-group-heading]]:text-muted-foreground flex h-full flex-col overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input]]:h-[52px]", children }),
      /* @__PURE__ */ jsx2("div", { className: "bg-ui-bg-field text-ui-fg-subtle flex items-center justify-end border-t px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx2(Text, { size: "xsmall", leading: "compact", children: t("app.search.navigation") }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ jsx2(Kbd, { className: "bg-ui-bg-field-component", children: "\u2193" }),
            /* @__PURE__ */ jsx2(Kbd, { className: "bg-ui-bg-field-component", children: "\u2191" })
          ] })
        ] }),
        /* @__PURE__ */ jsx2("div", { className: "bg-ui-border-strong h-3 w-px" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx2(Text, { size: "xsmall", leading: "compact", children: t("app.search.openResult") }),
          /* @__PURE__ */ jsx2(Kbd, { className: "bg-ui-bg-field-component", children: "\u21B5" })
        ] })
      ] }) })
    ] })
  ] }) });
};
var CommandInput = forwardRef(({ className, ...props }, ref) => {
  const { t } = useTranslation3();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-b", children: [
    /* @__PURE__ */ jsx2("div", { className: "px-4 pt-4", children: /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", children: t("app.search.allAreas") }) }),
    /* @__PURE__ */ jsx2(
      Command.Input,
      {
        ref,
        className: clx(
          "placeholder:text-ui-fg-muted flex h-10 w-full rounded-md bg-transparent p-4 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )
  ] });
});
CommandInput.displayName = Command.Input.displayName;
var CommandList = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  Command.List,
  {
    ref,
    className: clx(
      "max-h-[300px] flex-1 overflow-y-auto overflow-x-hidden px-2 pb-4",
      className
    ),
    ...props
  }
));
CommandList.displayName = Command.List.displayName;
var CommandEmpty = forwardRef((props, ref) => /* @__PURE__ */ jsx2(Command.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command.Empty.displayName;
var CommandGroup = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  Command.Group,
  {
    ref,
    className: clx(
      "text-ui-fg-base [&_[cmdk-group-heading]]:text-ui-fg-muted [&_[cmdk-group-heading]]:txt-compact-xsmall-plus overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-4 [&_[cmdk-item]]:py-2",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command.Group.displayName;
var CommandSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  Command.Separator,
  {
    ref,
    className: clx("bg-border -mx-1 h-px", className),
    ...props
  }
));
CommandSeparator.displayName = Command.Separator.displayName;
var CommandItem = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  Command.Item,
  {
    ref,
    className: clx(
      "aria-selected:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-hover txt-compact-small [&>svg]:text-ui-fg-subtle relative flex cursor-pointer select-none items-center gap-x-3 rounded-md p-2 outline-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command.Item.displayName;

// src/providers/sidebar-provider/sidebar-provider.tsx
import { useEffect as useEffect3, useState as useState2 } from "react";
import { useLocation as useLocation2 } from "react-router-dom";

// src/providers/sidebar-provider/sidebar-context.tsx
import { createContext as createContext2 } from "react";
var SidebarContext = createContext2(null);

// src/providers/sidebar-provider/sidebar-provider.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var SidebarProvider = ({ children }) => {
  const [desktop, setDesktop] = useState2(true);
  const [mobile, setMobile] = useState2(false);
  const { pathname } = useLocation2();
  const toggle = (view) => {
    if (view === "desktop") {
      setDesktop(!desktop);
    } else {
      setMobile(!mobile);
    }
  };
  useEffect3(() => {
    setMobile(false);
  }, [pathname]);
  return /* @__PURE__ */ jsx3(SidebarContext.Provider, { value: { desktop, mobile, toggle }, children });
};

// src/providers/sidebar-provider/use-sidebar.tsx
import { useContext as useContext2 } from "react";
var useSidebar = () => {
  const context = useContext2(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// src/providers/search-provider/search-context.tsx
import { createContext as createContext3 } from "react";
var SearchContext = createContext3(null);

// src/providers/search-provider/search-provider.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var SearchProvider = ({ children }) => {
  const [open, setOpen] = useState3(false);
  const { mobile, toggle } = useSidebar();
  const toggleSearch = () => {
    const update = !open;
    if (update && mobile) {
      toggle("mobile");
    }
    setOpen(update);
  };
  useEffect4(() => {
    const onKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return /* @__PURE__ */ jsxs2(
    SearchContext.Provider,
    {
      value: {
        open,
        onOpenChange: setOpen,
        toggleSearch
      },
      children: [
        children,
        /* @__PURE__ */ jsx4(Search, {})
      ]
    }
  );
};

// src/providers/search-provider/use-search.tsx
import { useContext as useContext3 } from "react";
var useSearch = () => {
  const context = useContext3(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

// src/components/authentication/protected-route/protected-route.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ProtectedRoute = () => {
  const { user, isLoading } = useMe();
  const location = useLocation3();
  if (isLoading) {
    return /* @__PURE__ */ jsx5("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsx5(Spinner, { className: "text-ui-fg-interactive animate-spin" }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsx5(Navigate, { to: "/login", state: { from: location }, replace: true });
  }
  return /* @__PURE__ */ jsx5(SidebarProvider, { children: /* @__PURE__ */ jsx5(SearchProvider, { children: /* @__PURE__ */ jsx5(Outlet, {}) }) });
};

// src/components/layout/main-layout/main-layout.tsx
import {
  BuildingStorefront,
  Buildings,
  ChevronDownMini,
  CogSixTooth,
  CurrencyDollar,
  EllipsisHorizontal as EllipsisHorizontal2,
  MagnifyingGlass,
  MinusMini,
  OpenRectArrowOut as OpenRectArrowOut2,
  ReceiptPercent,
  ShoppingCart,
  SquaresPlus,
  Tag,
  Users
} from "@medusajs/icons";
import { Avatar as Avatar2, DropdownMenu as DropdownMenu2, Text as Text6, clx as clx6 } from "@medusajs/ui";
import * as Collapsible2 from "@radix-ui/react-collapsible";
import { useTranslation as useTranslation9 } from "react-i18next";

// src/components/utilities/error-boundary/error-boundary.tsx
import { ExclamationCircle } from "@medusajs/icons";
import { Text as Text2 } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";
import { Navigate as Navigate2, useLocation as useLocation4, useRouteError } from "react-router-dom";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var ErrorBoundary = () => {
  const error = useRouteError();
  const location = useLocation4();
  const { t } = useTranslation4();
  let code = null;
  if (isFetchError(error)) {
    if (error.status === 401) {
      return /* @__PURE__ */ jsx6(Navigate2, { to: "/login", state: { from: location }, replace: true });
    }
    code = error.status ?? null;
  }
  let title;
  let message;
  switch (code) {
    case 400:
      title = t("errorBoundary.badRequestTitle");
      message = t("errorBoundary.badRequestMessage");
      break;
    case 404:
      title = t("errorBoundary.notFoundTitle");
      message = t("errorBoundary.notFoundMessage");
      break;
    case 500:
      title = t("errorBoundary.internalServerErrorTitle");
      message = t("errorBoundary.internalServerErrorMessage");
      break;
    default:
      title = t("errorBoundary.defaultTitle");
      message = t("errorBoundary.defaultMessage");
      break;
  }
  return /* @__PURE__ */ jsx6("div", { className: "flex size-full min-h-[calc(100vh-57px-24px)] items-center justify-center", children: /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-y-6", children: /* @__PURE__ */ jsxs3("div", { className: "text-ui-fg-subtle flex flex-col items-center gap-y-3", children: [
    /* @__PURE__ */ jsx6(ExclamationCircle, {}),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-center justify-center gap-y-1", children: [
      /* @__PURE__ */ jsx6(Text2, { size: "small", leading: "compact", weight: "plus", children: title }),
      /* @__PURE__ */ jsx6(
        Text2,
        {
          size: "small",
          className: "text-ui-fg-muted text-balance text-center",
          children: message
        }
      )
    ] })
  ] }) }) });
};

// src/lib/extension-helpers.ts
var settingsRouteRegex = /^\/settings\//;
var createRouteMap = (routes5, ignore) => {
  const root = [];
  const addRoute = (pathSegments, Component, currentLevel) => {
    if (!pathSegments.length) {
      return;
    }
    const [currentSegment, ...remainingSegments] = pathSegments;
    let route = currentLevel.find((r) => r.path === currentSegment);
    if (!route) {
      route = { path: currentSegment, children: [] };
      currentLevel.push(route);
    }
    if (remainingSegments.length === 0) {
      route.children || (route.children = []);
      route.children.push({
        path: "",
        ErrorBoundary,
        async lazy() {
          return { Component };
        }
      });
    } else {
      route.children || (route.children = []);
      addRoute(remainingSegments, Component, route.children);
    }
  };
  routes5.forEach(({ path, Component }) => {
    const cleanedPath = ignore ? path.replace(ignore, "").replace(/^\/+/, "") : path.replace(/^\/+/, "");
    const pathSegments = cleanedPath.split("/").filter(Boolean);
    addRoute(pathSegments, Component, root);
  });
  return root;
};

// src/components/layout/nav-item/nav-item.tsx
import { Kbd as Kbd2, Text as Text3, clx as clx2 } from "@medusajs/ui";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  useCallback as useCallback2,
  useEffect as useEffect5,
  useState as useState4
} from "react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { NavLink, useLocation as useLocation5 } from "react-router-dom";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var BASE_NAV_LINK_CLASSES = "text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-1 pl-0.5 pr-2 outline-none [&>svg]:text-ui-fg-subtle focus-visible:shadow-borders-focus";
var ACTIVE_NAV_LINK_CLASSES = "bg-ui-bg-base shadow-elevation-card-rest text-ui-fg-base hover:bg-ui-bg-base";
var NESTED_NAV_LINK_CLASSES = "pl-[34px] pr-2 w-full text-ui-fg-muted";
var SETTING_NAV_LINK_CLASSES = "pl-2";
var getIsOpen = (to, items, pathname) => {
  return [to, ...items?.map((i) => i.to) ?? []].some(
    (p) => pathname.startsWith(p)
  );
};
var NavItemTooltip = ({
  to,
  children
}) => {
  const { t } = useTranslation5();
  const globalShortcuts = useGlobalShortcuts();
  const shortcut = globalShortcuts.find((s) => s.to === to);
  return /* @__PURE__ */ jsx7(
    ConditionalTooltip,
    {
      showTooltip: !!shortcut,
      maxWidth: 9999,
      content: /* @__PURE__ */ jsxs4("div", { className: "txt-compact-xsmall flex h-5 items-center justify-between gap-x-2 whitespace-nowrap", children: [
        /* @__PURE__ */ jsx7("span", { children: shortcut?.label }),
        /* @__PURE__ */ jsx7("div", { className: "flex items-center gap-x-1", children: shortcut?.keys.Mac?.map((key, index) => /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx7(Kbd2, { children: key }, key),
          index < (shortcut.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx7("span", { className: "text-ui-fg-muted txt-compact-xsmall", children: t("app.keyboardShortcuts.then") })
        ] }, index)) })
      ] }),
      side: "right",
      delayDuration: 1500,
      children: /* @__PURE__ */ jsx7("div", { className: "w-full", children })
    }
  );
};
var NavItem = ({
  icon,
  label,
  to,
  items,
  type = "core",
  from
}) => {
  const { pathname } = useLocation5();
  const [open, setOpen] = useState4(getIsOpen(to, items, pathname));
  useEffect5(() => {
    setOpen(getIsOpen(to, items, pathname));
  }, [pathname, to, items]);
  const navLinkClassNames = useCallback2(
    ({
      isActive,
      isNested = false,
      isSetting: isSetting2 = false
    }) => clx2(BASE_NAV_LINK_CLASSES, {
      [NESTED_NAV_LINK_CLASSES]: isNested,
      [ACTIVE_NAV_LINK_CLASSES]: isActive,
      [SETTING_NAV_LINK_CLASSES]: isSetting2
    }),
    []
  );
  const isSetting = type === "setting";
  return /* @__PURE__ */ jsxs4("div", { className: "px-3", children: [
    /* @__PURE__ */ jsx7(NavItemTooltip, { to, children: /* @__PURE__ */ jsxs4(
      NavLink,
      {
        to,
        state: from ? {
          from
        } : void 0,
        className: (props) => clx2(navLinkClassNames({ ...props, isSetting }), {
          "max-lg:hidden": !!items?.length
        }),
        children: [
          type !== "setting" && /* @__PURE__ */ jsx7("div", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ jsx7(Icon, { icon, type }) }),
          /* @__PURE__ */ jsx7(Text3, { size: "small", weight: "plus", leading: "compact", children: label })
        ]
      }
    ) }),
    items && items.length > 0 && /* @__PURE__ */ jsxs4(Collapsible.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs4(
        Collapsible.Trigger,
        {
          className: clx2(
            "text-ui-fg-subtle hover:text-ui-fg-base transition-fg hover:bg-ui-bg-subtle-hover flex w-full items-center gap-x-2 rounded-md py-1 pl-0.5 pr-2 outline-none lg:hidden",
            { "pl-2": isSetting }
          ),
          children: [
            /* @__PURE__ */ jsx7("div", { className: "flex size-6 items-center justify-center", children: /* @__PURE__ */ jsx7(Icon, { icon, type }) }),
            /* @__PURE__ */ jsx7(Text3, { size: "small", weight: "plus", leading: "compact", children: label })
          ]
        }
      ),
      /* @__PURE__ */ jsx7(Collapsible.Content, { children: /* @__PURE__ */ jsx7("div", { className: "flex flex-col gap-y-0.5 pb-2 pt-0.5", children: /* @__PURE__ */ jsxs4("ul", { className: "flex flex-col gap-y-0.5", children: [
        /* @__PURE__ */ jsx7("li", { className: "flex w-full items-center gap-x-1 lg:hidden", children: /* @__PURE__ */ jsx7(NavItemTooltip, { to, children: /* @__PURE__ */ jsx7(
          NavLink,
          {
            to,
            className: (props) => clx2(
              navLinkClassNames({
                ...props,
                isNested: true,
                isSetting
              })
            ),
            children: /* @__PURE__ */ jsx7(Text3, { size: "small", weight: "plus", leading: "compact", children: label })
          }
        ) }) }),
        items.map((item) => {
          return /* @__PURE__ */ jsx7("li", { className: "flex h-7 items-center", children: /* @__PURE__ */ jsx7(NavItemTooltip, { to: item.to, children: /* @__PURE__ */ jsx7(
            NavLink,
            {
              to: item.to,
              className: (props) => clx2(
                navLinkClassNames({
                  ...props,
                  isNested: true,
                  isSetting
                })
              ),
              children: /* @__PURE__ */ jsx7(Text3, { size: "small", weight: "plus", leading: "compact", children: item.label })
            }
          ) }) }, item.to);
        })
      ] }) }) })
    ] })
  ] });
};
var Icon = ({ icon, type }) => {
  if (!icon) {
    return null;
  }
  return type === "extension" ? /* @__PURE__ */ jsx7("div", { className: "shadow-borders-base bg-ui-bg-base flex h-5 w-5 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx7("div", { className: "h-[15px] w-[15px] overflow-hidden rounded-sm", children: icon }) }) : icon;
};

// src/components/layout/shell/shell.tsx
import { SidebarLeft, TriangleRightMini, XMark } from "@medusajs/icons";
import { IconButton as IconButton2, clx as clx4 } from "@medusajs/ui";
import { useTranslation as useTranslation7 } from "react-i18next";
import { Link, Outlet as Outlet2, useMatches } from "react-router-dom";

// src/providers/keybind-provider/keybind-provider.tsx
import { useCallback as useCallback3, useMemo as useMemo2, useState as useState5 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var KeybindProvider = ({
  shortcuts,
  debounce = 500,
  children
}) => {
  const [storeShortcuts, setStoreCommands] = useState5(
    shortcuts.map((shr) => getShortcutWithDefaultValues(shr))
  );
  const registerShortcut = useCallback3(
    (shortcut) => {
      setStoreCommands((prevShortcuts) => {
        const idx = findShortcutIndex(shortcuts, getShortcutKeys(shortcut));
        const newShortcuts = [...prevShortcuts];
        if (idx > -1) {
          newShortcuts[idx] = getShortcutWithDefaultValues(shortcut);
          return prevShortcuts;
        }
        return [...prevShortcuts, getShortcutWithDefaultValues(shortcut)];
      });
    },
    [shortcuts]
  );
  const getKeysByPlatform = useCallback3((command) => {
    return findFirstPlatformMatch(command.keys);
  }, []);
  useShortcuts({ shortcuts: storeShortcuts, debounce });
  const commandsContext = useMemo2(
    () => ({
      shortcuts: storeShortcuts,
      registerShortcut,
      getKeysByPlatform
    }),
    [storeShortcuts, registerShortcut, getKeysByPlatform]
  );
  return /* @__PURE__ */ jsx8(KeybindContext.Provider, { value: commandsContext, children });
};

// src/components/layout/notifications/notifications.tsx
import {
  BellAlert,
  BellAlertDone,
  InformationCircleSolid
} from "@medusajs/icons";
import { clx as clx3, Drawer, Heading, IconButton, Text as Text4 } from "@medusajs/ui";
import { formatDistance } from "date-fns";
import { useEffect as useEffect7, useState as useState6 } from "react";
import { useTranslation as useTranslation6 } from "react-i18next";

// src/components/common/infinite-list/infinite-list.tsx
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect as useEffect6, useMemo as useMemo3, useRef } from "react";
import { toast } from "@medusajs/ui";
import { Spinner as Spinner2 } from "@medusajs/icons";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var InfiniteList = ({
  queryKey,
  queryFn,
  queryOptions,
  renderItem,
  renderEmpty,
  responseKey,
  pageSize = 20
}) => {
  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    hasNextPage,
    isFetching,
    isPending
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      return await queryFn({
        limit: pageSize,
        offset: pageParam
      });
    },
    initialPageParam: 0,
    maxPages: 5,
    getNextPageParam: (lastPage) => {
      const moreItemsExist = lastPage.count > lastPage.offset + lastPage.limit;
      return moreItemsExist ? lastPage.offset + lastPage.limit : void 0;
    },
    getPreviousPageParam: (firstPage) => {
      const moreItemsExist = firstPage.offset !== 0;
      return moreItemsExist ? Math.max(firstPage.offset - firstPage.limit, 0) : void 0;
    },
    ...queryOptions
  });
  const items = useMemo3(() => {
    return data?.pages.flatMap((p) => p[responseKey]) ?? [];
  }, [data, responseKey]);
  const parentRef = useRef(null);
  const startObserver = useRef();
  const endObserver = useRef();
  useEffect6(() => {
    if (isPending) {
      return;
    }
    if (!isFetching) {
      startObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasPreviousPage) {
          fetchPreviousPage();
        }
      });
      endObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      startObserver.current?.observe(parentRef.current.firstChild);
      endObserver.current?.observe(parentRef.current.lastChild);
    }
    return () => {
      startObserver.current?.disconnect();
      endObserver.current?.disconnect();
    };
  }, [
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isPending
  ]);
  useEffect6(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  if (isPending) {
    return /* @__PURE__ */ jsx9("div", { className: "flex h-full flex-col items-center justify-center", children: /* @__PURE__ */ jsx9(Spinner2, { className: "animate-spin" }) });
  }
  return /* @__PURE__ */ jsxs5("div", { ref: parentRef, className: "h-full", children: [
    items?.length ? items.map((item) => /* @__PURE__ */ jsx9("div", { children: renderItem(item) }, item.id)) : renderEmpty(),
    isFetching && /* @__PURE__ */ jsx9("div", { className: "flex flex-col items-center justify-center py-4", children: /* @__PURE__ */ jsx9(Spinner2, { className: "animate-spin" }) })
  ] });
};

// src/components/layout/notifications/notifications.tsx
import { Fragment, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var LAST_READ_NOTIFICATION_KEY = "notificationsLastReadAt";
var Notifications = () => {
  const { t } = useTranslation6();
  const [open, setOpen] = useState6(false);
  const [hasUnread, setHasUnread] = useUnreadNotifications();
  const [lastReadAt, setLastReadAt] = useState6(
    localStorage.getItem(LAST_READ_NOTIFICATION_KEY)
  );
  useEffect7(() => {
    const onKeyDown = (e) => {
      if (e.key === "n" && (e.metaKey || e.ctrlKey)) {
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const handleOnOpen = (shouldOpen) => {
    if (shouldOpen) {
      setHasUnread(false);
      setOpen(true);
      localStorage.setItem(LAST_READ_NOTIFICATION_KEY, (/* @__PURE__ */ new Date()).toISOString());
    } else {
      setOpen(false);
      setLastReadAt(localStorage.getItem(LAST_READ_NOTIFICATION_KEY));
    }
  };
  return /* @__PURE__ */ jsxs6(Drawer, { open, onOpenChange: handleOnOpen, children: [
    /* @__PURE__ */ jsx10(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx10(
      IconButton,
      {
        variant: "transparent",
        className: "text-ui-fg-muted hover:text-ui-fg-subtle",
        children: hasUnread ? /* @__PURE__ */ jsx10(BellAlertDone, {}) : /* @__PURE__ */ jsx10(BellAlert, {})
      }
    ) }),
    /* @__PURE__ */ jsxs6(Drawer.Content, { children: [
      /* @__PURE__ */ jsxs6(Drawer.Header, { children: [
        /* @__PURE__ */ jsx10(Drawer.Title, { asChild: true, children: /* @__PURE__ */ jsx10(Heading, { children: t("notifications.domain") }) }),
        /* @__PURE__ */ jsx10(Drawer.Description, { className: "sr-only", children: t("notifications.accessibility.description") })
      ] }),
      /* @__PURE__ */ jsx10(Drawer.Body, { className: "overflow-y-auto px-0", children: /* @__PURE__ */ jsx10(
        InfiniteList,
        {
          responseKey: "notifications",
          queryKey: notificationQueryKeys.all,
          queryFn: (params) => sdk.admin.notification.list(params),
          queryOptions: { enabled: open },
          renderEmpty: () => /* @__PURE__ */ jsx10(NotificationsEmptyState, { t }),
          renderItem: (notification) => {
            return /* @__PURE__ */ jsx10(
              Notification,
              {
                notification,
                unread: Date.parse(notification.created_at) > (lastReadAt ? Date.parse(lastReadAt) : 0)
              },
              notification.id
            );
          }
        }
      ) })
    ] })
  ] });
};
var Notification = ({
  notification,
  unread
}) => {
  const data = notification.data;
  if (!data?.title) {
    return null;
  }
  return /* @__PURE__ */ jsx10(Fragment, { children: /* @__PURE__ */ jsxs6("div", { className: "flex items-start justify-center gap-3 border-b p-6 relative", children: [
    /* @__PURE__ */ jsx10("div", { className: "text-ui-fg-muted flex size-5 items-center justify-center", children: /* @__PURE__ */ jsx10(InformationCircleSolid, {}) }),
    /* @__PURE__ */ jsxs6("div", { className: "flex w-full flex-col gap-y-3", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs6("div", { className: "items-center flex justify-between", children: [
          /* @__PURE__ */ jsx10(Text4, { size: "small", leading: "compact", weight: "plus", children: data.title }),
          /* @__PURE__ */ jsxs6("div", { className: "items-center flex justify-center align-center gap-2", children: [
            /* @__PURE__ */ jsx10(
              Text4,
              {
                as: "span",
                className: clx3("text-ui-fg-subtle", {
                  "text-ui-fg-base": unread
                }),
                size: "small",
                leading: "compact",
                weight: "plus",
                children: formatDistance(notification.created_at, /* @__PURE__ */ new Date(), {
                  addSuffix: true
                })
              }
            ),
            unread && /* @__PURE__ */ jsx10(
              "div",
              {
                className: "h-2 w-2 rounded bg-ui-bg-interactive",
                role: "status"
              }
            )
          ] })
        ] }),
        !!data.description && /* @__PURE__ */ jsx10(
          Text4,
          {
            className: "text-ui-fg-subtle whitespace-pre-line",
            size: "small",
            children: data.description
          }
        )
      ] }),
      !!data?.file?.url && /* @__PURE__ */ jsx10(
        FilePreview,
        {
          filename: data.file.filename ?? "",
          url: data.file.url,
          hideThumbnail: true
        }
      )
    ] })
  ] }) });
};
var NotificationsEmptyState = ({ t }) => {
  return /* @__PURE__ */ jsxs6("div", { className: "flex h-full flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx10(BellAlertDone, {}),
    /* @__PURE__ */ jsx10(Text4, { size: "small", leading: "compact", weight: "plus", className: "mt-3", children: t("notifications.emptyState.title") }),
    /* @__PURE__ */ jsx10(
      Text4,
      {
        size: "small",
        className: "text-ui-fg-muted mt-1 max-w-[294px] text-center",
        children: t("notifications.emptyState.description")
      }
    )
  ] });
};
var useUnreadNotifications = () => {
  const [hasUnread, setHasUnread] = useState6(false);
  const { notifications } = useNotifications(
    { limit: 1, offset: 0, fields: "created_at" },
    { refetchInterval: 3e3 }
  );
  const lastNotification = notifications?.[0];
  useEffect7(() => {
    if (!lastNotification) {
      return;
    }
    const lastNotificationAsTimestamp = Date.parse(lastNotification.created_at);
    const lastReadDatetime = localStorage.getItem(LAST_READ_NOTIFICATION_KEY);
    const lastReadAsTimestamp = lastReadDatetime ? Date.parse(lastReadDatetime) : 0;
    if (lastNotificationAsTimestamp > lastReadAsTimestamp) {
      setHasUnread(true);
    }
  }, [lastNotification]);
  return [hasUnread, setHasUnread];
};

// src/components/layout/shell/shell.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var Shell = ({ children }) => {
  const globalShortcuts = useGlobalShortcuts();
  return /* @__PURE__ */ jsx11(KeybindProvider, { shortcuts: globalShortcuts, children: /* @__PURE__ */ jsxs7("div", { className: "flex h-screen flex-col items-start overflow-hidden lg:flex-row", children: [
    /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsx11(MobileSidebarContainer, { children }),
      /* @__PURE__ */ jsx11(DesktopSidebarContainer, { children })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "flex h-screen w-full flex-col overflow-auto", children: [
      /* @__PURE__ */ jsx11(Topbar, {}),
      /* @__PURE__ */ jsx11("main", { className: "flex h-full w-full flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsx11(Gutter, { children: /* @__PURE__ */ jsx11(Outlet2, {}) }) })
    ] })
  ] }) });
};
var Gutter = ({ children }) => {
  return /* @__PURE__ */ jsx11("div", { className: "flex w-full max-w-[1600px] flex-col gap-y-2 p-3", children });
};
var Breadcrumbs = () => {
  const matches = useMatches();
  const crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => {
    const handle = match.handle;
    let label = null;
    try {
      label = handle.crumb(match.data);
    } catch (error) {
    }
    if (!label) {
      return null;
    }
    return {
      label,
      path: match.pathname
    };
  }).filter(Boolean);
  return /* @__PURE__ */ jsx11(
    "ol",
    {
      className: clx4(
        "text-ui-fg-muted txt-compact-small-plus flex select-none items-center"
      ),
      children: crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        const isSingle = crumbs.length === 1;
        return /* @__PURE__ */ jsxs7("li", { className: clx4("flex items-center"), children: [
          !isLast ? /* @__PURE__ */ jsx11(
            Link,
            {
              className: "transition-fg hover:text-ui-fg-subtle",
              to: crumb.path,
              children: crumb.label
            }
          ) : /* @__PURE__ */ jsxs7("div", { children: [
            !isSingle && /* @__PURE__ */ jsx11("span", { className: "block lg:hidden", children: "..." }),
            /* @__PURE__ */ jsx11(
              "span",
              {
                className: clx4({
                  "hidden lg:block": !isSingle
                }),
                children: crumb.label
              },
              index
            )
          ] }),
          !isLast && /* @__PURE__ */ jsx11("span", { className: "mx-2", children: /* @__PURE__ */ jsx11(TriangleRightMini, {}) })
        ] }, index);
      })
    }
  );
};
var ToggleSidebar = () => {
  const { toggle } = useSidebar();
  return /* @__PURE__ */ jsxs7("div", { children: [
    /* @__PURE__ */ jsx11(
      IconButton2,
      {
        className: "hidden lg:flex",
        variant: "transparent",
        onClick: () => toggle("desktop"),
        size: "small",
        children: /* @__PURE__ */ jsx11(SidebarLeft, { className: "text-ui-fg-muted" })
      }
    ),
    /* @__PURE__ */ jsx11(
      IconButton2,
      {
        className: "hidden max-lg:flex",
        variant: "transparent",
        onClick: () => toggle("mobile"),
        size: "small",
        children: /* @__PURE__ */ jsx11(SidebarLeft, { className: "text-ui-fg-muted" })
      }
    )
  ] });
};
var Topbar = () => {
  return /* @__PURE__ */ jsxs7("div", { className: "grid w-full grid-cols-2 border-b p-3", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx11(ToggleSidebar, {}),
      /* @__PURE__ */ jsx11(Breadcrumbs, {})
    ] }),
    /* @__PURE__ */ jsx11("div", { className: "flex items-center justify-end gap-x-3", children: /* @__PURE__ */ jsx11(Notifications, {}) })
  ] });
};
var DesktopSidebarContainer = ({ children }) => {
  const { desktop } = useSidebar();
  return /* @__PURE__ */ jsx11(
    "div",
    {
      className: clx4("hidden h-screen w-[220px] border-r", {
        "lg:flex": desktop
      }),
      children
    }
  );
};
var MobileSidebarContainer = ({ children }) => {
  const { t } = useTranslation7();
  const { mobile, toggle } = useSidebar();
  return /* @__PURE__ */ jsx11(Root, { open: mobile, onOpenChange: () => toggle("mobile"), children: /* @__PURE__ */ jsxs7(Portal, { children: [
    /* @__PURE__ */ jsx11(
      Overlay,
      {
        className: clx4(
          "bg-ui-bg-overlay fixed inset-0",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )
      }
    ),
    /* @__PURE__ */ jsxs7(
      Content,
      {
        className: clx4(
          "bg-ui-bg-subtle shadow-elevation-modal fixed inset-y-2 left-2 flex w-full max-w-[304px] flex-col overflow-hidden rounded-lg border-r",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 duration-200"
        ),
        children: [
          /* @__PURE__ */ jsxs7("div", { className: "p-3", children: [
            /* @__PURE__ */ jsx11(Close, { asChild: true, children: /* @__PURE__ */ jsx11(
              IconButton2,
              {
                size: "small",
                variant: "transparent",
                className: "text-ui-fg-subtle",
                children: /* @__PURE__ */ jsx11(XMark, {})
              }
            ) }),
            /* @__PURE__ */ jsx11(Title, { className: "sr-only", children: t("app.nav.accessibility.title") }),
            /* @__PURE__ */ jsx11(Description, { className: "sr-only", children: t("app.nav.accessibility.description") })
          ] }),
          children
        ]
      }
    )
  ] }) });
};

// src/components/layout/main-layout/main-layout.tsx
import { Link as Link3, useLocation as useLocation7, useNavigate as useNavigate4 } from "react-router-dom";
import routes from "virtual:medusa/routes/links";

// src/components/layout/user-menu/user-menu.tsx
import {
  BookOpen,
  CircleHalfSolid,
  EllipsisHorizontal,
  Keyboard,
  OpenRectArrowOut,
  TimelineVertical,
  User as UserIcon,
  XMark as XMark2
} from "@medusajs/icons";
import {
  Avatar,
  DropdownMenu,
  Heading as Heading2,
  IconButton as IconButton3,
  Input,
  Kbd as Kbd3,
  Text as Text5,
  clx as clx5
} from "@medusajs/ui";
import { useTranslation as useTranslation8 } from "react-i18next";
import { useState as useState8 } from "react";
import { Link as Link2, useLocation as useLocation6, useNavigate as useNavigate3 } from "react-router-dom";

// src/providers/theme-provider/theme-provider.tsx
import { useEffect as useEffect8, useState as useState7 } from "react";

// src/providers/theme-provider/theme-context.tsx
import { createContext as createContext4 } from "react";
var ThemeContext = createContext4(null);

// src/providers/theme-provider/theme-provider.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var THEME_KEY = "medusa_admin_theme";
function getDefaultValue() {
  const persisted = localStorage?.getItem(THEME_KEY);
  if (persisted) {
    return persisted;
  }
  return "system";
}
function getThemeValue(selected) {
  if (selected === "system") {
    if (window !== void 0) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }
  return selected;
}
var ThemeProvider = ({ children }) => {
  const [state, setState] = useState7(getDefaultValue());
  const [value, setValue] = useState7(getThemeValue(state));
  const setTheme = (theme) => {
    localStorage.setItem(THEME_KEY, theme);
    const themeValue = getThemeValue(theme);
    setState(theme);
    setValue(themeValue);
  };
  useEffect8(() => {
    const html = document.querySelector("html");
    if (html) {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }`
        )
      );
      document.head.appendChild(css);
      html.classList.remove(value === "light" ? "dark" : "light");
      html.classList.add(value);
      window.getComputedStyle(css).opacity;
      document.head.removeChild(css);
    }
  }, [value]);
  return /* @__PURE__ */ jsx12(ThemeContext.Provider, { value: { theme: state, setTheme }, children });
};

// src/providers/theme-provider/use-theme.tsx
import { useContext as useContext4 } from "react";
var useTheme = () => {
  const context = useContext4(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// src/components/layout/user-menu/user-menu.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var UserMenu = () => {
  const { t } = useTranslation8();
  const location = useLocation6();
  const [openMenu, setOpenMenu] = useState8(false);
  const [openModal, setOpenModal] = useState8(false);
  const toggleModal = () => {
    setOpenMenu(false);
    setOpenModal(!openModal);
  };
  return /* @__PURE__ */ jsxs8("div", { children: [
    /* @__PURE__ */ jsxs8(DropdownMenu, { open: openMenu, onOpenChange: setOpenMenu, children: [
      /* @__PURE__ */ jsx13(UserBadge, {}),
      /* @__PURE__ */ jsxs8(DropdownMenu.Content, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)]", children: [
        /* @__PURE__ */ jsx13(UserItem, {}),
        /* @__PURE__ */ jsx13(DropdownMenu.Separator, {}),
        /* @__PURE__ */ jsx13(DropdownMenu.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "/settings/profile", state: { from: location.pathname }, children: [
          /* @__PURE__ */ jsx13(UserIcon, { className: "text-ui-fg-subtle mr-2" }),
          t("app.menus.user.profileSettings")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu.Separator, {}),
        /* @__PURE__ */ jsx13(DropdownMenu.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "https://docs.medusajs.com/v2", target: "_blank", children: [
          /* @__PURE__ */ jsx13(BookOpen, { className: "text-ui-fg-subtle mr-2" }),
          t("app.menus.user.documentation")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu.Item, { asChild: true, children: /* @__PURE__ */ jsxs8(Link2, { to: "https://medusajs.com/changelog/", target: "_blank", children: [
          /* @__PURE__ */ jsx13(TimelineVertical, { className: "text-ui-fg-subtle mr-2" }),
          t("app.menus.user.changelog")
        ] }) }),
        /* @__PURE__ */ jsx13(DropdownMenu.Separator, {}),
        /* @__PURE__ */ jsxs8(DropdownMenu.Item, { onClick: toggleModal, children: [
          /* @__PURE__ */ jsx13(Keyboard, { className: "text-ui-fg-subtle mr-2" }),
          t("app.menus.user.shortcuts")
        ] }),
        /* @__PURE__ */ jsx13(ThemeToggle, {}),
        /* @__PURE__ */ jsx13(DropdownMenu.Separator, {}),
        /* @__PURE__ */ jsx13(Logout, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx13(GlobalKeybindsModal, { open: openModal, onOpenChange: setOpenModal })
  ] });
};
var UserBadge = () => {
  const { user, isPending, isError, error } = useMe();
  const name = [user?.first_name, user?.last_name].filter(Boolean).join(" ");
  const displayName = name || user?.email;
  const fallback = displayName ? displayName[0].toUpperCase() : null;
  if (isPending) {
    return /* @__PURE__ */ jsxs8("button", { className: "shadow-borders-base flex max-w-[192px] select-none items-center gap-x-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-full py-1 pl-1 pr-2.5", children: [
      /* @__PURE__ */ jsx13(Skeleton, { className: "h-5 w-5 rounded-full" }),
      /* @__PURE__ */ jsx13(Skeleton, { className: "h-[9px] w-[70px]" })
    ] });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx13("div", { className: "p-3", children: /* @__PURE__ */ jsxs8(
    DropdownMenu.Trigger,
    {
      disabled: !user,
      className: clx5(
        "bg-ui-bg-subtle grid w-full cursor-pointer grid-cols-[24px_1fr_15px] items-center gap-2 rounded-md py-1 pl-0.5 pr-2 outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "data-[state=open]:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: [
        /* @__PURE__ */ jsx13("div", { className: "flex size-6 items-center justify-center", children: fallback ? /* @__PURE__ */ jsx13(Avatar, { size: "xsmall", fallback }) : /* @__PURE__ */ jsx13(Skeleton, { className: "h-6 w-6 rounded-full" }) }),
        /* @__PURE__ */ jsx13("div", { className: "flex items-center overflow-hidden", children: displayName ? /* @__PURE__ */ jsx13(
          Text5,
          {
            size: "xsmall",
            weight: "plus",
            leading: "compact",
            className: "truncate",
            children: displayName
          }
        ) : /* @__PURE__ */ jsx13(Skeleton, { className: "h-[9px] w-[70px]" }) }),
        /* @__PURE__ */ jsx13(EllipsisHorizontal, { className: "text-ui-fg-muted" })
      ]
    }
  ) });
};
var ThemeToggle = () => {
  const { t } = useTranslation8();
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs8(DropdownMenu.SubMenu, { children: [
    /* @__PURE__ */ jsxs8(DropdownMenu.SubMenuTrigger, { className: "rounded-md", children: [
      /* @__PURE__ */ jsx13(CircleHalfSolid, { className: "text-ui-fg-subtle mr-2" }),
      t("app.menus.user.theme.label")
    ] }),
    /* @__PURE__ */ jsx13(DropdownMenu.SubMenuContent, { children: /* @__PURE__ */ jsxs8(DropdownMenu.RadioGroup, { value: theme, children: [
      /* @__PURE__ */ jsx13(
        DropdownMenu.RadioItem,
        {
          value: "system",
          onClick: (e) => {
            e.preventDefault();
            setTheme("system");
          },
          children: t("app.menus.user.theme.system")
        }
      ),
      /* @__PURE__ */ jsx13(
        DropdownMenu.RadioItem,
        {
          value: "light",
          onClick: (e) => {
            e.preventDefault();
            setTheme("light");
          },
          children: t("app.menus.user.theme.light")
        }
      ),
      /* @__PURE__ */ jsx13(
        DropdownMenu.RadioItem,
        {
          value: "dark",
          onClick: (e) => {
            e.preventDefault();
            setTheme("dark");
          },
          children: t("app.menus.user.theme.dark")
        }
      )
    ] }) })
  ] });
};
var Logout = () => {
  const { t } = useTranslation8();
  const navigate = useNavigate3();
  const { mutateAsync: logoutMutation } = useLogout();
  const handleLogout = async () => {
    await logoutMutation(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  return /* @__PURE__ */ jsx13(DropdownMenu.Item, { onClick: handleLogout, children: /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsx13(OpenRectArrowOut, { className: "text-ui-fg-subtle" }),
    /* @__PURE__ */ jsx13("span", { children: t("app.menus.actions.logout") })
  ] }) });
};
var GlobalKeybindsModal = (props) => {
  const { t } = useTranslation8();
  const globalShortcuts = useGlobalShortcuts();
  const [searchValue, onSearchValueChange] = useState8("");
  const searchResults = searchValue ? globalShortcuts.filter((shortcut) => {
    return shortcut.label.toLowerCase().includes(searchValue?.toLowerCase());
  }) : globalShortcuts;
  return /* @__PURE__ */ jsx13(Root, { ...props, children: /* @__PURE__ */ jsxs8(Portal, { children: [
    /* @__PURE__ */ jsx13(Overlay, { className: "bg-ui-bg-overlay fixed inset-0" }),
    /* @__PURE__ */ jsxs8(Content, { className: "bg-ui-bg-subtle shadow-elevation-modal fixed left-[50%] top-[50%] flex h-full max-h-[612px] w-full max-w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col divide-y overflow-hidden rounded-lg", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-y-3 px-6 py-4", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx13(Title, { asChild: true, children: /* @__PURE__ */ jsx13(Heading2, { children: t("app.menus.user.shortcuts") }) }),
            /* @__PURE__ */ jsx13(Description, { className: "sr-only" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-2", children: [
            /* @__PURE__ */ jsx13(Kbd3, { children: "esc" }),
            /* @__PURE__ */ jsx13(Close, { asChild: true, children: /* @__PURE__ */ jsx13(IconButton3, { variant: "transparent", size: "small", children: /* @__PURE__ */ jsx13(XMark2, {}) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13(
          Input,
          {
            type: "search",
            value: searchValue,
            onChange: (e) => onSearchValueChange(e.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx13("div", { className: "flex flex-col divide-y overflow-y-auto", children: searchResults.map((shortcut, index) => {
        return /* @__PURE__ */ jsxs8(
          "div",
          {
            className: "text-ui-fg-subtle flex items-center justify-between px-6 py-3",
            children: [
              /* @__PURE__ */ jsx13(Text5, { size: "small", children: shortcut.label }),
              /* @__PURE__ */ jsx13("div", { className: "flex items-center gap-x-1", children: shortcut.keys.Mac?.map((key, index2) => {
                return /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-1", children: [
                  /* @__PURE__ */ jsx13(Kbd3, { children: key }),
                  index2 < (shortcut.keys.Mac?.length || 0) - 1 && /* @__PURE__ */ jsx13("span", { className: "txt-compact-xsmall text-ui-fg-subtle", children: t("app.keyboardShortcuts.then") })
                ] }, index2);
              }) })
            ]
          },
          index
        );
      }) })
    ] })
  ] }) });
};
var UserItem = () => {
  const { user, isPending, isError, error } = useMe();
  const loaded = !isPending && !!user;
  if (!loaded) {
    return /* @__PURE__ */ jsx13("div", {});
  }
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ");
  const email = user.email;
  const fallback = name ? name[0].toUpperCase() : email[0].toUpperCase();
  const avatar = user.avatar_url;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-3 overflow-hidden px-2 py-1", children: [
    /* @__PURE__ */ jsx13(
      Avatar,
      {
        size: "small",
        variant: "rounded",
        src: avatar || void 0,
        fallback
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "block w-full min-w-0 max-w-[187px] overflow-hidden whitespace-nowrap", children: [
      /* @__PURE__ */ jsx13(
        Text5,
        {
          size: "small",
          weight: "plus",
          leading: "compact",
          className: "overflow-hidden text-ellipsis whitespace-nowrap",
          children: name || email
        }
      ),
      !!name && /* @__PURE__ */ jsx13(
        Text5,
        {
          size: "xsmall",
          leading: "compact",
          className: "text-ui-fg-subtle overflow-hidden text-ellipsis whitespace-nowrap",
          children: email
        }
      )
    ] })
  ] });
};

// src/components/layout/main-layout/main-layout.tsx
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var MainLayout = () => {
  return /* @__PURE__ */ jsx14(Shell, { children: /* @__PURE__ */ jsx14(MainSidebar, {}) });
};
var MainSidebar = () => {
  return /* @__PURE__ */ jsx14("aside", { className: "flex flex-1 flex-col justify-between overflow-y-auto", children: /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxs9("div", { className: "bg-ui-bg-subtle sticky top-0", children: [
      /* @__PURE__ */ jsx14(Header, {}),
      /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col justify-between", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsx14(CoreRouteSection, {}),
        /* @__PURE__ */ jsx14(ExtensionRouteSection, {})
      ] }),
      /* @__PURE__ */ jsx14(UtilitySection, {})
    ] }),
    /* @__PURE__ */ jsx14("div", { className: "bg-ui-bg-subtle sticky bottom-0", children: /* @__PURE__ */ jsx14(UserSection, {}) })
  ] }) });
};
var Logout2 = () => {
  const { t } = useTranslation9();
  const navigate = useNavigate4();
  const { mutateAsync: logoutMutation } = useLogout();
  const handleLogout = async () => {
    await logoutMutation(void 0, {
      onSuccess: () => {
        queryClient.clear();
        navigate("/login");
      }
    });
  };
  return /* @__PURE__ */ jsx14(DropdownMenu2.Item, { onClick: handleLogout, children: /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsx14(OpenRectArrowOut2, { className: "text-ui-fg-subtle" }),
    /* @__PURE__ */ jsx14("span", { children: t("app.menus.actions.logout") })
  ] }) });
};
var Header = () => {
  const { t } = useTranslation9();
  const { store, isPending, isError, error } = useStore();
  const name = store?.name;
  const fallback = store?.name?.slice(0, 1).toUpperCase();
  const isLoaded = !isPending && !!store && !!name && !!fallback;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx14("div", { className: "w-full p-3", children: /* @__PURE__ */ jsxs9(DropdownMenu2, { children: [
    /* @__PURE__ */ jsxs9(
      DropdownMenu2.Trigger,
      {
        disabled: !isLoaded,
        className: clx6(
          "bg-ui-bg-subtle transition-fg grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none",
          "hover:bg-ui-bg-subtle-hover",
          "data-[state=open]:bg-ui-bg-subtle-hover",
          "focus-visible:shadow-borders-focus"
        ),
        children: [
          fallback ? /* @__PURE__ */ jsx14(Avatar2, { variant: "squared", size: "xsmall", fallback }) : /* @__PURE__ */ jsx14(Skeleton, { className: "h-6 w-6 rounded-md" }),
          /* @__PURE__ */ jsx14("div", { className: "block overflow-hidden text-left", children: name ? /* @__PURE__ */ jsx14(
            Text6,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "truncate",
              children: store.name
            }
          ) : /* @__PURE__ */ jsx14(Skeleton, { className: "h-[9px] w-[120px]" }) }),
          /* @__PURE__ */ jsx14(EllipsisHorizontal2, { className: "text-ui-fg-muted" })
        ]
      }
    ),
    isLoaded && /* @__PURE__ */ jsxs9(DropdownMenu2.Content, { className: "w-[var(--radix-dropdown-menu-trigger-width)] min-w-0", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-x-3 px-2 py-1", children: [
        /* @__PURE__ */ jsx14(Avatar2, { variant: "squared", size: "small", fallback }),
        /* @__PURE__ */ jsxs9("div", { className: "flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsx14(
            Text6,
            {
              size: "small",
              weight: "plus",
              leading: "compact",
              className: "truncate",
              children: name
            }
          ),
          /* @__PURE__ */ jsx14(
            Text6,
            {
              size: "xsmall",
              leading: "compact",
              className: "text-ui-fg-subtle",
              children: t("app.nav.main.store")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx14(DropdownMenu2.Separator, {}),
      /* @__PURE__ */ jsx14(DropdownMenu2.Item, { className: "gap-x-2", asChild: true, children: /* @__PURE__ */ jsxs9(Link3, { to: "/settings/store", children: [
        /* @__PURE__ */ jsx14(BuildingStorefront, { className: "text-ui-fg-subtle" }),
        t("app.nav.main.storeSettings")
      ] }) }),
      /* @__PURE__ */ jsx14(DropdownMenu2.Separator, {}),
      /* @__PURE__ */ jsx14(Logout2, {})
    ] })
  ] }) });
};
var useCoreRoutes = () => {
  const { t } = useTranslation9();
  return [
    {
      icon: /* @__PURE__ */ jsx14(ShoppingCart, {}),
      label: t("orders.domain"),
      to: "/orders",
      items: [
        // TODO: Enable when domin is introduced
        // {
        //   label: t("draftOrders.domain"),
        //   to: "/draft-orders",
        // },
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Tag, {}),
      label: t("products.domain"),
      to: "/products",
      items: [
        {
          label: t("collections.domain"),
          to: "/collections"
        },
        {
          label: t("categories.domain"),
          to: "/categories"
        }
        // TODO: Enable when domin is introduced
        // {
        //   label: t("giftCards.domain"),
        //   to: "/gift-cards",
        // },
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Buildings, {}),
      label: t("inventory.domain"),
      to: "/inventory",
      items: [
        {
          label: t("reservations.domain"),
          to: "/reservations"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(Users, {}),
      label: t("customers.domain"),
      to: "/customers",
      items: [
        {
          label: t("customerGroups.domain"),
          to: "/customer-groups"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(ReceiptPercent, {}),
      label: t("promotions.domain"),
      to: "/promotions",
      items: [
        {
          label: t("campaigns.domain"),
          to: "/campaigns"
        }
      ]
    },
    {
      icon: /* @__PURE__ */ jsx14(CurrencyDollar, {}),
      label: t("priceLists.domain"),
      to: "/price-lists"
    }
  ];
};
var Searchbar = () => {
  const { t } = useTranslation9();
  const { toggleSearch } = useSearch();
  return /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsxs9(
    "button",
    {
      onClick: toggleSearch,
      className: clx6(
        "bg-ui-bg-subtle text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: [
        /* @__PURE__ */ jsx14(MagnifyingGlass, {}),
        /* @__PURE__ */ jsx14("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsx14(Text6, { size: "small", leading: "compact", weight: "plus", children: t("app.search.label") }) }),
        /* @__PURE__ */ jsx14(Text6, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: "\u2318K" })
      ]
    }
  ) });
};
var CoreRouteSection = () => {
  const coreRoutes = useCoreRoutes();
  return /* @__PURE__ */ jsxs9("nav", { className: "flex flex-col gap-y-1 py-3", children: [
    /* @__PURE__ */ jsx14(Searchbar, {}),
    coreRoutes.map((route) => {
      return /* @__PURE__ */ jsx14(NavItem, { ...route }, route.to);
    })
  ] });
};
var ExtensionRouteSection = () => {
  const { t } = useTranslation9();
  const links = routes.links;
  const extensionLinks = links.filter((link) => !settingsRouteRegex.test(link.path)).sort((a, b) => a.label.localeCompare(b.label));
  if (!extensionLinks.length) {
    return null;
  }
  return /* @__PURE__ */ jsxs9("div", { children: [
    /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-y-1 py-3", children: /* @__PURE__ */ jsxs9(Collapsible2.Root, { defaultOpen: true, children: [
      /* @__PURE__ */ jsx14("div", { className: "px-4", children: /* @__PURE__ */ jsx14(Collapsible2.Trigger, { asChild: true, className: "group/trigger", children: /* @__PURE__ */ jsxs9("button", { className: "text-ui-fg-subtle flex w-full items-center justify-between px-2", children: [
        /* @__PURE__ */ jsx14(Text6, { size: "xsmall", weight: "plus", leading: "compact", children: t("app.nav.common.extensions") }),
        /* @__PURE__ */ jsxs9("div", { className: "text-ui-fg-muted", children: [
          /* @__PURE__ */ jsx14(ChevronDownMini, { className: "group-data-[state=open]/trigger:hidden" }),
          /* @__PURE__ */ jsx14(MinusMini, { className: "group-data-[state=closed]/trigger:hidden" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx14(Collapsible2.Content, { children: /* @__PURE__ */ jsx14("nav", { className: "flex flex-col gap-y-0.5 py-1 pb-4", children: extensionLinks.map((link) => {
        return /* @__PURE__ */ jsx14(
          NavItem,
          {
            to: link.path,
            label: link.label,
            icon: link.icon ? /* @__PURE__ */ jsx14(link.icon, {}) : /* @__PURE__ */ jsx14(SquaresPlus, {}),
            type: "extension"
          },
          link.path
        );
      }) }) })
    ] }) })
  ] });
};
var UtilitySection = () => {
  const location = useLocation7();
  const { t } = useTranslation9();
  return /* @__PURE__ */ jsx14("div", { className: "flex flex-col gap-y-0.5 py-3", children: /* @__PURE__ */ jsx14(
    NavItem,
    {
      label: t("app.nav.settings.header"),
      to: "/settings",
      from: location.pathname,
      icon: /* @__PURE__ */ jsx14(CogSixTooth, {})
    }
  ) });
};
var UserSection = () => {
  return /* @__PURE__ */ jsxs9("div", { children: [
    /* @__PURE__ */ jsx14("div", { className: "px-3", children: /* @__PURE__ */ jsx14(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx14(UserMenu, {})
  ] });
};

// src/components/layout/settings-layout/settings-layout.tsx
import { ArrowUturnLeft, MinusMini as MinusMini2 } from "@medusajs/icons";
import { IconButton as IconButton4, Text as Text7, clx as clx7 } from "@medusajs/ui";
import * as Collapsible3 from "@radix-ui/react-collapsible";
import { Fragment as Fragment2, useEffect as useEffect9, useMemo as useMemo4, useState as useState9 } from "react";
import { useTranslation as useTranslation10 } from "react-i18next";
import { Link as Link4, useLocation as useLocation8 } from "react-router-dom";
import routes2 from "virtual:medusa/routes/links";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var SettingsLayout = () => {
  return /* @__PURE__ */ jsx15(Shell, { children: /* @__PURE__ */ jsx15(SettingsSidebar, {}) });
};
var useSettingRoutes = () => {
  const { t } = useTranslation10();
  return useMemo4(
    () => [
      {
        label: t("store.domain"),
        to: "/settings/store"
      },
      {
        label: t("users.domain"),
        to: "/settings/users"
      },
      {
        label: t("regions.domain"),
        to: "/settings/regions"
      },
      {
        label: t("taxRegions.domain"),
        to: "/settings/tax-regions"
      },
      {
        label: t("returnReasons.domain"),
        to: "/settings/return-reasons"
      },
      {
        label: t("salesChannels.domain"),
        to: "/settings/sales-channels"
      },
      {
        label: t("productTypes.domain"),
        to: "/settings/product-types"
      },
      {
        label: t("productTags.domain"),
        to: "/settings/product-tags"
      },
      {
        label: t("stockLocations.domain"),
        to: "/settings/locations"
      }
    ],
    [t]
  );
};
var useDeveloperRoutes = () => {
  const { t } = useTranslation10();
  return useMemo4(
    () => [
      {
        label: t("apiKeyManagement.domain.publishable"),
        to: "/settings/publishable-api-keys"
      },
      {
        label: t("apiKeyManagement.domain.secret"),
        to: "/settings/secret-api-keys"
      },
      {
        label: t("workflowExecutions.domain"),
        to: "/settings/workflows"
      }
    ],
    [t]
  );
};
var useMyAccountRoutes = () => {
  const { t } = useTranslation10();
  return useMemo4(
    () => [
      {
        label: t("profile.domain"),
        to: "/settings/profile"
      }
    ],
    [t]
  );
};
var useExtensionRoutes = () => {
  const links = routes2.links;
  return useMemo4(() => {
    const settingsLinks = links.filter(
      (link) => settingsRouteRegex.test(link.path)
    );
    return settingsLinks.map((link) => ({
      label: link.label,
      to: link.path
    }));
  }, [links]);
};
var getSafeFromValue = (from) => {
  if (from.startsWith("/settings")) {
    return "/orders";
  }
  return from;
};
var SettingsSidebar = () => {
  const routes5 = useSettingRoutes();
  const developerRoutes = useDeveloperRoutes();
  const extensionRoutes = useExtensionRoutes();
  const myAccountRoutes = useMyAccountRoutes();
  const { t } = useTranslation10();
  return /* @__PURE__ */ jsxs10("aside", { className: "relative flex flex-1 flex-col justify-between overflow-y-auto", children: [
    /* @__PURE__ */ jsxs10("div", { className: "bg-ui-bg-subtle sticky top-0", children: [
      /* @__PURE__ */ jsx15(Header2, {}),
      /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx15(Divider, { variant: "dashed" }) })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs10("div", { className: "flex flex-1 flex-col overflow-y-auto", children: [
        /* @__PURE__ */ jsx15(
          CollapsibleSection,
          {
            label: t("app.nav.settings.general"),
            items: routes5
          }
        ),
        /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx15(Divider, { variant: "dashed" }) }),
        /* @__PURE__ */ jsx15(
          CollapsibleSection,
          {
            label: t("app.nav.settings.developer"),
            items: developerRoutes
          }
        ),
        /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx15(Divider, { variant: "dashed" }) }),
        /* @__PURE__ */ jsx15(
          CollapsibleSection,
          {
            label: t("app.nav.settings.myAccount"),
            items: myAccountRoutes
          }
        ),
        extensionRoutes.length > 0 && /* @__PURE__ */ jsxs10(Fragment2, { children: [
          /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center px-3", children: /* @__PURE__ */ jsx15(Divider, { variant: "dashed" }) }),
          /* @__PURE__ */ jsx15(
            CollapsibleSection,
            {
              label: t("app.nav.common.extensions"),
              items: extensionRoutes
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "bg-ui-bg-subtle sticky bottom-0", children: /* @__PURE__ */ jsx15(UserSection2, {}) })
    ] })
  ] });
};
var Header2 = () => {
  const [from, setFrom] = useState9("/orders");
  const { t } = useTranslation10();
  const location = useLocation8();
  useEffect9(() => {
    if (location.state?.from) {
      setFrom(getSafeFromValue(location.state.from));
    }
  }, [location]);
  return /* @__PURE__ */ jsx15("div", { className: "bg-ui-bg-subtle p-3", children: /* @__PURE__ */ jsx15(
    Link4,
    {
      to: from,
      replace: true,
      className: clx7(
        "bg-ui-bg-subtle transition-fg flex items-center rounded-md outline-none",
        "hover:bg-ui-bg-subtle-hover",
        "focus-visible:shadow-borders-focus"
      ),
      children: /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-x-2.5 px-2 py-1", children: [
        /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx15(ArrowUturnLeft, { className: "text-ui-fg-subtle" }) }),
        /* @__PURE__ */ jsx15(Text7, { leading: "compact", weight: "plus", size: "small", children: t("app.nav.settings.header") })
      ] })
    }
  ) });
};
var CollapsibleSection = ({
  label,
  items
}) => {
  return /* @__PURE__ */ jsxs10(Collapsible3.Root, { defaultOpen: true, className: "py-3", children: [
    /* @__PURE__ */ jsx15("div", { className: "px-3", children: /* @__PURE__ */ jsxs10("div", { className: "text-ui-fg-muted flex h-7 items-center justify-between px-2", children: [
      /* @__PURE__ */ jsx15(Text7, { size: "small", leading: "compact", children: label }),
      /* @__PURE__ */ jsx15(Collapsible3.Trigger, { asChild: true, children: /* @__PURE__ */ jsx15(IconButton4, { size: "2xsmall", variant: "transparent", className: "static", children: /* @__PURE__ */ jsx15(MinusMini2, { className: "text-ui-fg-muted" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx15(Collapsible3.Content, { children: /* @__PURE__ */ jsx15("div", { className: "pt-0.5", children: /* @__PURE__ */ jsx15("nav", { className: "flex flex-col gap-y-0.5", children: items.map((setting) => /* @__PURE__ */ jsx15(NavItem, { type: "setting", ...setting }, setting.to)) }) }) })
  ] });
};
var UserSection2 = () => {
  return /* @__PURE__ */ jsxs10("div", { children: [
    /* @__PURE__ */ jsx15("div", { className: "px-3", children: /* @__PURE__ */ jsx15(Divider, { variant: "dashed" }) }),
    /* @__PURE__ */ jsx15(UserMenu, {})
  ] });
};

// src/providers/router-provider/route-extensions.tsx
import routes3 from "virtual:medusa/routes/pages";
var pages = routes3.pages.filter((ext) => !settingsRouteRegex.test(ext.path)).map((ext) => ext);
var RouteExtensions = createRouteMap(pages);

// src/providers/router-provider/settings-extensions.tsx
import routes4 from "virtual:medusa/routes/pages";
var pages2 = routes4.pages.filter((ext) => settingsRouteRegex.test(ext.path)).map((ext) => ext);
var SettingsExtensions = createRouteMap(pages2, "/settings");

// src/providers/router-provider/route-map.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var RouteMap = [
  {
    path: "/login",
    lazy: () => import("./login-66OAVR6W.mjs")
  },
  {
    path: "*",
    lazy: () => import("./no-match-YRNHGOT3.mjs")
  },
  {
    path: "/invite",
    lazy: () => import("./invite-SFHYKYZ2.mjs")
  },
  {
    element: /* @__PURE__ */ jsx16(ProtectedRoute, {}),
    errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
    children: [
      {
        path: "/",
        element: /* @__PURE__ */ jsx16(MainLayout, {}),
        children: [
          {
            index: true,
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            lazy: () => import("./home-KSB2J7CS.mjs")
          },
          {
            path: "/products",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Products"
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-list-OBX3PJVN.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-create-ZZF6M52P.mjs")
                  },
                  {
                    path: "import",
                    lazy: () => import("./product-import-BL2P5RLL.mjs")
                  },
                  {
                    path: "export",
                    lazy: () => import("./product-export-4PKLIDDI.mjs")
                  }
                ]
              },
              {
                path: ":id",
                errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
                Component: Outlet3,
                loader: productLoader,
                handle: {
                  crumb: (data) => data.product.title
                },
                children: [
                  {
                    path: "",
                    lazy: () => import("./product-detail-NU2GHR6S.mjs"),
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./product-edit-VZGCBJOZ.mjs")
                      },
                      {
                        path: "edit-variant",
                        lazy: () => import("./product-variant-edit-C5Z6G7PE.mjs")
                      },
                      {
                        path: "sales-channels",
                        lazy: () => import("./product-sales-channels-7TOWEYKN.mjs")
                      },
                      {
                        path: "attributes",
                        lazy: () => import("./product-attributes-ZMOK4R3Y.mjs")
                      },
                      {
                        path: "organization",
                        lazy: () => import("./product-organization-633MUSYD.mjs")
                      },
                      {
                        path: "media",
                        lazy: () => import("./product-media-NV7MPTFA.mjs")
                      },
                      {
                        path: "prices",
                        lazy: () => import("./product-prices-3EDHU64N.mjs")
                      },
                      {
                        path: "options/create",
                        lazy: () => import("./product-create-option-TMPXWVZT.mjs")
                      },
                      {
                        path: "options/:option_id/edit",
                        lazy: () => import("./product-edit-option-N7AWNJTC.mjs")
                      },
                      {
                        path: "variants/create",
                        lazy: () => import("./product-create-variant-LSLMEXNI.mjs")
                      },
                      {
                        path: "metadata/edit",
                        lazy: () => import("./product-metadata-2EFTNO6G.mjs")
                      }
                    ]
                  },
                  {
                    path: "variants/:variant_id",
                    lazy: () => import("./product-variant-detail-DFQGUUCX.mjs"),
                    handle: {
                      crumb: (data) => data.variant.title
                    },
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./product-variant-edit-C5Z6G7PE.mjs")
                      },
                      {
                        path: "prices",
                        lazy: () => import("./product-prices-3EDHU64N.mjs")
                      },
                      {
                        path: "manage-items",
                        lazy: () => import("./product-variant-manage-inventory-items-HXZU6HYY.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "/categories",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Categories"
            },
            children: [
              {
                path: "",
                lazy: () => import("./category-list-AMLMLIGZ.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./category-create-UHAFTLCM.mjs")
                  },
                  {
                    path: "organize",
                    lazy: () => import("./category-organize-FQ3UX54P.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./category-detail-YD4UZKSW.mjs"),
                handle: {
                  crumb: (data) => data.product_category.name
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./category-edit-6Z73EFNK.mjs")
                  },
                  {
                    path: "products",
                    lazy: () => import("./category-products-WCLKSHSB.mjs")
                  },
                  {
                    path: "organize",
                    lazy: () => import("./category-organize-FQ3UX54P.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/orders",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Orders"
            },
            children: [
              {
                path: "",
                lazy: () => import("./order-list-RIHDU2RP.mjs")
              },
              {
                path: ":id",
                lazy: () => import("./order-detail-4PSYTHXY.mjs"),
                children: [
                  {
                    path: "fulfillment",
                    lazy: () => import("./order-create-fulfillment-SDJZW6UF.mjs")
                  },
                  {
                    path: "returns/:return_id/receive",
                    lazy: () => import("./order-receive-return-ERTUMF5H.mjs")
                  },
                  {
                    path: "allocate-items",
                    lazy: () => import("./order-allocate-items-DHQANWZQ.mjs")
                  },
                  {
                    path: ":f_id/create-shipment",
                    lazy: () => import("./order-create-shipment-TZQASEZT.mjs")
                  },
                  {
                    path: "returns",
                    lazy: () => import("./order-create-return-MCYRGOPK.mjs")
                  },
                  {
                    path: "claims",
                    lazy: () => import("./order-create-claim-GIGG2ALO.mjs")
                  },
                  {
                    path: "exchanges",
                    lazy: () => import("./order-create-exchange-TB6KKK6U.mjs")
                  },
                  {
                    path: "edits",
                    lazy: () => import("./order-create-edit-GINMM7A7.mjs")
                  },
                  {
                    path: "refund",
                    lazy: () => import("./order-create-refund-NQURUXNE.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/promotions",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Promotions"
            },
            children: [
              {
                path: "",
                lazy: () => import("./promotion-list-BM5UG4WE.mjs")
              },
              {
                path: "create",
                lazy: () => import("./promotion-create-M6CANPQG.mjs")
              },
              {
                path: ":id",
                lazy: () => import("./promotion-detail-J4GXYIRZ.mjs"),
                handle: {
                  // TODO: Re-add type when it's available again
                  crumb: (data) => data.promotion?.code
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./promotion-edit-details-WEBXZPEF.mjs")
                  },
                  {
                    path: "add-to-campaign",
                    lazy: () => import("./promotion-add-campaign-EIQR53VG.mjs")
                  },
                  {
                    path: ":ruleType/edit",
                    lazy: () => import("./edit-rules-C5HS4OIQ.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/campaigns",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: { crumb: () => "Campaigns" },
            children: [
              {
                path: "",
                lazy: () => import("./campaign-list-XHC7EBKR.mjs"),
                children: []
              },
              {
                path: "create",
                lazy: () => import("./campaign-create-BY3FYVMD.mjs")
              },
              {
                path: ":id",
                lazy: () => import("./campaign-detail-AG7QV74F.mjs"),
                handle: { crumb: (data) => data.campaign.name },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./campaign-edit-CNEXZ3LO.mjs")
                  },
                  {
                    path: "configuration",
                    lazy: () => import("./campaign-configuration-QZCQFDGK.mjs")
                  },
                  {
                    path: "edit-budget",
                    lazy: () => import("./campaign-budget-edit-VOVQMO4N.mjs")
                  },
                  {
                    path: "add-promotions",
                    lazy: () => import("./add-campaign-promotions-JZFIMVPP.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/collections",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Collections"
            },
            children: [
              {
                path: "",
                lazy: () => import("./collection-list-IRDCNK4J.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./collection-create-LNBBJ4TH.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./collection-detail-V2CRLKYN.mjs"),
                handle: {
                  crumb: (data) => data.collection.title
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./collection-edit-HZIVYZZN.mjs")
                  },
                  {
                    path: "products",
                    lazy: () => import("./collection-add-products-FL7HLLYQ.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/price-lists",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Price Lists"
            },
            children: [
              {
                path: "",
                lazy: () => import("./price-list-list-BNKQMWJP.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./price-list-create-RFC5CVYW.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./price-list-detail-DVUBB6WC.mjs"),
                handle: {
                  crumb: (data) => data.price_list.title
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./price-list-edit-XADEJ3H7.mjs")
                  },
                  {
                    path: "configuration",
                    lazy: () => import("./price-list-configuration-LZAVU2YP.mjs")
                  },
                  {
                    path: "products/add",
                    lazy: () => import("./price-list-prices-add-BOHWZU3U.mjs")
                  },
                  {
                    path: "products/edit",
                    lazy: () => import("./price-list-prices-edit-Z4KYRKIW.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/customers",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Customers"
            },
            children: [
              {
                path: "",
                lazy: () => import("./customer-list-CCP4CH5D.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./customer-create-M7567P7U.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./customer-detail-DTVXSW24.mjs"),
                handle: {
                  // Re-add type when it's available again
                  crumb: (data) => data.customer.email
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./customer-edit-OIR6XOU2.mjs")
                  },
                  {
                    path: "add-customer-groups",
                    lazy: () => import("./customers-add-customer-group-ZAL2ANBM.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./customer-metadata-5AZXD4KB.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/customer-groups",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Customer Groups"
            },
            children: [
              {
                path: "",
                lazy: () => import("./customer-group-list-CPZ6Y4BS.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./customer-group-create-CHEPINUZ.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./customer-group-detail-6ZJ5M4ON.mjs"),
                handle: {
                  crumb: (data) => data.customer_group.name
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./customer-group-edit-STKCDUCV.mjs")
                  },
                  {
                    path: "add-customers",
                    lazy: () => import("./customer-group-add-customers-SRTNBN5T.mjs")
                  },
                  {
                    path: "metadata/edit",
                    lazy: () => import("./customer-group-metadata-TZ76XFUN.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/reservations",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Reservations"
            },
            children: [
              {
                path: "",
                lazy: () => import("./reservation-list-K3GSIF74.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./reservation-create-2KXQPJEG.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./reservation-detail-EE5WFTMG.mjs"),
                handle: {
                  crumb: ({ reservation }) => {
                    return reservation?.inventory_item?.title ?? reservation?.inventory_item?.sku ?? reservation?.id;
                  }
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./edit-reservation-64CPBLHP.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "/inventory",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            handle: {
              crumb: () => "Inventory"
            },
            children: [
              {
                path: "",
                lazy: () => import("./inventory-list-G3KC33WX.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./inventory-create-OPOX3OOP.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./inventory-detail-REBHGR7T.mjs"),
                handle: {
                  crumb: (data) => data.inventory_item.title ?? data.inventory_item.sku
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./edit-inventory-item-RIHBW5Y7.mjs")
                  },
                  {
                    path: "attributes",
                    lazy: () => import("./edit-inventory-item-attributes-PPJRKVVK.mjs")
                  },
                  {
                    path: "locations",
                    lazy: () => import("./manage-locations-UWBO5EH5.mjs")
                  },
                  {
                    path: "locations/:location_id",
                    lazy: () => import("./adjust-inventory-UYUBWTAS.mjs")
                  },
                  {
                    // TODO: create reservation
                    path: "reservations",
                    lazy: () => import("./customer-edit-OIR6XOU2.mjs")
                  },
                  {
                    // TODO: edit reservation
                    path: "reservations/:reservation_id",
                    lazy: () => import("./customer-edit-OIR6XOU2.mjs")
                  }
                ]
              }
            ]
          },
          ...RouteExtensions
        ]
      }
    ]
  },
  {
    element: /* @__PURE__ */ jsx16(ProtectedRoute, {}),
    errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
    children: [
      {
        path: "/settings",
        handle: {
          crumb: () => "Settings"
        },
        element: /* @__PURE__ */ jsx16(SettingsLayout, {}),
        children: [
          {
            index: true,
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            lazy: () => import("./settings-FQUPXMWF.mjs")
          },
          {
            path: "profile",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            lazy: () => import("./profile-detail-KAYSNSBM.mjs"),
            handle: {
              crumb: () => "Profile"
            },
            children: [
              {
                path: "edit",
                lazy: () => import("./profile-edit-SORW2ZPG.mjs")
              }
            ]
          },
          {
            path: "regions",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Regions"
            },
            children: [
              {
                path: "",
                lazy: () => import("./region-list-KFE6BSOP.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./region-create-FLBHOXF3.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./region-detail-4C3WKMA5.mjs"),
                handle: {
                  crumb: (data) => data.region.name
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./region-edit-TLBDVX5V.mjs")
                  },
                  {
                    path: "countries/add",
                    lazy: () => import("./region-add-countries-ESNXU7XQ.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "store",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            lazy: () => import("./store-detail-XH3JB43A.mjs"),
            handle: {
              crumb: () => "Store"
            },
            children: [
              {
                path: "edit",
                lazy: () => import("./store-edit-Q35YLGGN.mjs")
              },
              {
                path: "currencies",
                lazy: () => import("./store-add-currencies-KZ4ELLCK.mjs")
              },
              {
                path: "metadata/edit",
                lazy: () => import("./store-metadata-GAVC3ANW.mjs")
              }
            ]
          },
          {
            path: "users",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Users"
            },
            children: [
              {
                path: "",
                lazy: () => import("./user-list-QJHLOGJT.mjs"),
                children: [
                  {
                    path: "invite",
                    lazy: () => import("./user-invite-ZHTM6PEF.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./user-detail-TY7LR6K3.mjs"),
                handle: {
                  crumb: (data) => data.user.email
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./user-edit-UQDGSJ3A.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "sales-channels",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Sales Channels"
            },
            children: [
              {
                path: "",
                lazy: () => import("./sales-channel-list-XN6DATJV.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./sales-channel-create-E4EKXXAG.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./sales-channel-detail-VSDHCGA4.mjs"),
                handle: {
                  crumb: (data) => data.sales_channel.name
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./sales-channel-edit-IDK4WU6Y.mjs")
                  },
                  {
                    path: "add-products",
                    lazy: () => import("./sales-channel-add-products-CIAGE7RX.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "locations",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Locations & Shipping"
            },
            children: [
              {
                path: "",
                lazy: () => import("./location-list-4GXGRIGI.mjs")
              },
              {
                path: "create",
                lazy: () => import("./location-create-56TFACFX.mjs")
              },
              {
                path: "shipping-profiles",
                element: /* @__PURE__ */ jsx16(Outlet3, {}),
                handle: {
                  crumb: () => "Shipping Profiles"
                },
                children: [
                  {
                    path: "",
                    lazy: () => import("./shipping-profiles-list-LTGVOZXQ.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./shipping-profile-create-VQOZOCD3.mjs")
                      }
                    ]
                  },
                  {
                    path: ":id",
                    handle: {
                      crumb: (data) => data.shipping_profile.name
                    },
                    lazy: () => import("./shipping-profile-detail-M76VUWCQ.mjs")
                  }
                ]
              },
              {
                path: "shipping-option-types",
                errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
                element: /* @__PURE__ */ jsx16(Outlet3, {}),
                handle: {
                  crumb: () => "Shipping Option Types"
                }
              },
              {
                path: ":location_id",
                lazy: () => import("./location-detail-KGAAZG3W.mjs"),
                handle: {
                  crumb: (data) => data.stock_location.name
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./location-edit-64Z47DVY.mjs")
                  },
                  {
                    path: "sales-channels",
                    lazy: () => import("./location-sales-channels-YTH3L2QV.mjs")
                  },
                  {
                    path: "fulfillment-providers",
                    lazy: () => import("./location-fulfillment-providers-HBWT35ID.mjs")
                  },
                  {
                    path: "fulfillment-set/:fset_id",
                    children: [
                      {
                        path: "service-zones/create",
                        lazy: () => import("./location-service-zone-create-VOKX6RHZ.mjs")
                      },
                      {
                        path: "service-zone/:zone_id",
                        children: [
                          {
                            path: "edit",
                            lazy: () => import("./location-service-zone-edit-JVAZUFJ4.mjs")
                          },
                          {
                            path: "areas",
                            lazy: () => import("./location-service-zone-manage-areas-4LWK2S62.mjs")
                          },
                          {
                            path: "shipping-option",
                            children: [
                              {
                                path: "create",
                                lazy: () => import("./location-service-zone-shipping-option-create-T6Q7NWEI.mjs")
                              },
                              {
                                path: ":so_id",
                                children: [
                                  {
                                    path: "edit",
                                    lazy: () => import("./location-service-zone-shipping-option-edit-JYQ72XU3.mjs")
                                  },
                                  {
                                    path: "pricing",
                                    lazy: () => import("./location-service-zone-shipping-option-pricing-GATN546G.mjs")
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "product-tags",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Product Tags"
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-tag-list-4KHU7LFM.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-tag-create-EEGMEV2X.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./product-tag-detail-MKFBRM7Z.mjs"),
                handle: {
                  crumb: (data) => data.product_tag.value
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./product-tag-edit-AGJAF4HU.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "workflows",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Workflows"
            },
            children: [
              {
                path: "",
                lazy: () => import("./workflow-execution-list-XMVS6WKZ.mjs")
              },
              {
                path: ":id",
                lazy: () => import("./workflow-execution-detail-EPNVOO2Q.mjs"),
                handle: {
                  crumb: (data) => {
                    if (!data) {
                      return "";
                    }
                    return data.workflow.name;
                  }
                }
              }
            ]
          },
          {
            path: "product-types",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Product Types"
            },
            children: [
              {
                path: "",
                lazy: () => import("./product-type-list-O4VO3QAQ.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./product-type-create-2J4FWJX2.mjs")
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./product-type-detail-M7JDLF4X.mjs"),
                handle: {
                  crumb: (data) => data.product_type.value
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./product-type-edit-7M6QIHB7.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "publishable-api-keys",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Publishable API Keys"
            },
            children: [
              {
                path: "",
                element: /* @__PURE__ */ jsx16(Outlet3, {}),
                children: [
                  {
                    path: "",
                    lazy: () => import("./api-key-management-list-B45Q4THV.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./api-key-management-create-4LU2GPN3.mjs")
                      }
                    ]
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./api-key-management-detail-U4SQ4TQ5.mjs"),
                handle: {
                  crumb: (data) => {
                    return data.api_key.title;
                  }
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./api-key-management-edit-TTHWCNBU.mjs")
                  },
                  {
                    path: "sales-channels",
                    lazy: () => import("./api-key-management-sales-channels-WVAOPOJT.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "secret-api-keys",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Secret API Keys"
            },
            children: [
              {
                path: "",
                element: /* @__PURE__ */ jsx16(Outlet3, {}),
                children: [
                  {
                    path: "",
                    lazy: () => import("./api-key-management-list-B45Q4THV.mjs"),
                    children: [
                      {
                        path: "create",
                        lazy: () => import("./api-key-management-create-4LU2GPN3.mjs")
                      }
                    ]
                  }
                ]
              },
              {
                path: ":id",
                lazy: () => import("./api-key-management-detail-U4SQ4TQ5.mjs"),
                handle: {
                  crumb: (data) => {
                    return data.api_key.title;
                  }
                },
                children: [
                  {
                    path: "edit",
                    lazy: () => import("./api-key-management-edit-TTHWCNBU.mjs")
                  }
                ]
              }
            ]
          },
          {
            path: "tax-regions",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Tax Regions"
            },
            children: [
              {
                path: "",
                lazy: () => import("./tax-region-list-XFOXYK4H.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./tax-region-create-GSMVM7XZ.mjs")
                  }
                ]
              },
              {
                path: ":id",
                Component: Outlet3,
                loader: taxRegionLoader,
                handle: {
                  crumb: (data) => {
                    return getCountryByIso2(data.tax_region.country_code)?.display_name || data.tax_region.country_code?.toUpperCase();
                  }
                },
                children: [
                  {
                    path: "",
                    lazy: () => import("./tax-region-detail-Y3WBSKKS.mjs"),
                    children: [
                      {
                        path: "provinces/create",
                        lazy: () => import("./tax-region-province-create-NSHGFAJS.mjs")
                      },
                      {
                        path: "overrides/create",
                        lazy: () => import("./tax-region-tax-override-create-SQHSJF6X.mjs")
                      },
                      {
                        path: "overrides/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-override-edit-VNY7MZLX.mjs")
                      },
                      {
                        path: "tax-rates/create",
                        lazy: () => import("./tax-region-tax-rate-create-WGVRXBBY.mjs")
                      },
                      {
                        path: "tax-rates/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-rate-edit-I5D5GXOJ.mjs")
                      }
                    ]
                  },
                  {
                    path: "provinces/:province_id",
                    lazy: () => import("./tax-region-province-detail-HJJ3RSGN.mjs"),
                    handle: {
                      crumb: (data) => {
                        const countryCode = data.tax_region.country_code?.toUpperCase();
                        const provinceCode = data.tax_region.province_code?.toUpperCase();
                        const isValid = isProvinceInCountry(
                          countryCode,
                          provinceCode
                        );
                        return isValid ? getProvinceByIso2(provinceCode) : provinceCode;
                      }
                    },
                    children: [
                      {
                        path: "tax-rates/create",
                        lazy: () => import("./tax-region-tax-rate-create-WGVRXBBY.mjs")
                      },
                      {
                        path: "tax-rates/:tax_rate_id/edit",
                        lazy: () => import("./tax-region-tax-rate-edit-I5D5GXOJ.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "return-reasons",
            errorElement: /* @__PURE__ */ jsx16(ErrorBoundary, {}),
            element: /* @__PURE__ */ jsx16(Outlet3, {}),
            handle: {
              crumb: () => "Return Reasons"
            },
            children: [
              {
                path: "",
                lazy: () => import("./return-reason-list-VDWGKFYC.mjs"),
                children: [
                  {
                    path: "create",
                    lazy: () => import("./return-reason-create-ZRWM6YPV.mjs")
                  },
                  {
                    path: ":id",
                    children: [
                      {
                        path: "edit",
                        lazy: () => import("./return-reason-edit-JL4T6NVQ.mjs")
                      }
                    ]
                  }
                ]
              }
            ]
          },
          ...SettingsExtensions
        ]
      }
    ]
  }
];

// src/providers/router-provider/router-provider.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var router = createBrowserRouter(RouteMap, {
  basename: __BASE__ || "/"
});
var RouterProvider = () => {
  return /* @__PURE__ */ jsx17(Provider2, { router });
};

// src/app.tsx
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx18(HelmetProvider, { children: /* @__PURE__ */ jsx18(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs11(ThemeProvider, { children: [
    /* @__PURE__ */ jsx18(I18n, {}),
    /* @__PURE__ */ jsx18(TooltipProvider, { children: /* @__PURE__ */ jsx18(I18nProvider, { children: /* @__PURE__ */ jsx18(RouterProvider, {}) }) }),
    /* @__PURE__ */ jsx18(Toaster, {})
  ] }) }) });
}
var app_default = App;
export {
  app_default as default
};
