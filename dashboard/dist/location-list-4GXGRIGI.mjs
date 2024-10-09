import "./chunk-OUAFSZKF.mjs";
import {
  BadgeListSummary
} from "./chunk-BKJC5BGQ.mjs";
import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import {
  getFormattedAddress
} from "./chunk-OIAPXGI2.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  IconAvatar
} from "./chunk-EQTBJSBZ.mjs";
import {
  stockLocationsQueryKeys,
  useDeleteStockLocation,
  useStockLocations
} from "./chunk-G3GT763I.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-list/loader.ts
import { redirect } from "react-router-dom";

// src/routes/locations/location-list/constants.ts
var LOCATION_LIST_FIELDS = "name,*sales_channels,*address,*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options,*fulfillment_sets.service_zones.shipping_options.shipping_profile";

// src/routes/locations/location-list/loader.ts
var shippingListQuery = () => ({
  queryKey: stockLocationsQueryKeys.lists(),
  queryFn: async () => {
    return await sdk.admin.stockLocation.list({
      // TODO: change this when RQ is fixed
      fields: LOCATION_LIST_FIELDS
    }).catch((error) => {
      if (error.status === 401) {
        throw redirect("/login");
      }
      throw error;
    });
  }
});
var shippingListLoader = async (_) => {
  const query = shippingListQuery();
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/locations/location-list/location-list.tsx
import { ArrowUpRightOnBox, Buildings as Buildings2, ShoppingBag } from "@medusajs/icons";
import { Container as Container3, Heading as Heading2, Text as Text3 } from "@medusajs/ui";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Link as Link2, Outlet, useLoaderData } from "react-router-dom";

// src/routes/locations/location-list/components/location-list-item/location-list-item.tsx
import { Buildings, PencilSquare, Trash } from "@medusajs/icons";
import { Container, StatusBadge, Text, toast, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
function SalesChannels(props) {
  const { t } = useTranslation();
  const { salesChannels } = props;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(
      Text,
      {
        size: "small",
        weight: "plus",
        className: "text-ui-fg-subtle flex-1",
        as: "div",
        children: t(`stockLocations.salesChannels.label`)
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex-1 text-left", children: salesChannels?.length ? /* @__PURE__ */ jsx(
      BadgeListSummary,
      {
        rounded: true,
        inline: true,
        n: 3,
        list: salesChannels.map((s) => s.name)
      }
    ) : "-" })
  ] }) });
}
function FulfillmentSet(props) {
  const { t } = useTranslation();
  const { fulfillmentSet, type } = props;
  const fulfillmentSetExists = !!fulfillmentSet;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(
      Text,
      {
        size: "small",
        weight: "plus",
        className: "text-ui-fg-subtle flex-1",
        as: "div",
        children: t(`stockLocations.fulfillmentSets.${type}.header`)
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex-1 text-left", children: /* @__PURE__ */ jsx(StatusBadge, { color: fulfillmentSetExists ? "green" : "grey", children: t(fulfillmentSetExists ? "statuses.enabled" : "statuses.disabled") }) })
  ] }) });
}
function LocationListItem(props) {
  const { location } = props;
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync: deleteLocation } = useDeleteStockLocation(location.id);
  const handleDelete = async () => {
    const result = await prompt({
      title: t("general.areYouSure"),
      description: t("stockLocations.delete.confirmation", {
        name: location.name
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!result) {
      return;
    }
    await deleteLocation(void 0, {
      onSuccess: () => {
        toast.success(
          t("shippingProfile.delete.successToast", {
            name: location.name
          })
        );
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "flex flex-col divide-y p-0", children: [
    /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between gap-x-4", children: [
      /* @__PURE__ */ jsx("div", { className: "shadow-borders-base flex size-7 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-field flex size-6 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx(Buildings, { className: "text-ui-fg-subtle" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grow-1 flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsx(Text, { weight: "plus", children: location.name }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle txt-small", children: getFormattedAddress({ address: location.address }).join(", ") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex grow-0 items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                    to: `/settings/locations/${location.id}/edit`
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t("actions.delete"),
                    icon: /* @__PURE__ */ jsx(Trash, {}),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "bg-ui-border-strong h-[12px] w-[1px]" }),
        /* @__PURE__ */ jsx(LinkButton, { to: `/settings/locations/${location.id}`, children: t("actions.viewDetails") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(SalesChannels, { salesChannels: location.sales_channels }),
    /* @__PURE__ */ jsx(
      FulfillmentSet,
      {
        type: "pickup" /* Pickup */,
        fulfillmentSet: location.fulfillment_sets?.find(
          (f) => f.type === "pickup" /* Pickup */
        )
      }
    ),
    /* @__PURE__ */ jsx(
      FulfillmentSet,
      {
        type: "shipping" /* Shipping */,
        fulfillmentSet: location.fulfillment_sets?.find(
          (f) => f.type === "shipping" /* Shipping */
        )
      }
    )
  ] });
}
var location_list_item_default = LocationListItem;

// src/routes/locations/location-list/location-list.tsx
import after from "virtual:medusa/widgets/location/list/after";
import before from "virtual:medusa/widgets/location/list/before";

// src/routes/locations/location-list/components/location-list-header/location-list-header.tsx
import { Button, Container as Container2, Heading, Text as Text2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var LocationListHeader = () => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(Container2, { className: "flex h-fit items-center justify-between gap-x-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2(Heading, { children: t("stockLocations.domain") }),
      /* @__PURE__ */ jsx2(Text2, { className: "text-ui-fg-subtle txt-small", children: t("stockLocations.list.description") })
    ] }),
    /* @__PURE__ */ jsx2(Button, { size: "small", className: "shrink-0", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx2(Link, { to: "create", children: t("actions.create") }) })
  ] });
};

// src/routes/locations/location-list/location-list.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function LocationList() {
  const initialData = useLoaderData();
  const {
    stock_locations: stockLocations = [],
    isError,
    error
  } = useStockLocations(
    {
      fields: LOCATION_LIST_FIELDS
    },
    { initialData }
  );
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-2", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex w-full flex-col gap-y-3", children: [
        before.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
        }),
        /* @__PURE__ */ jsx3(LocationListHeader, {}),
        /* @__PURE__ */ jsx3("div", { className: "flex flex-col gap-3 lg:col-span-2", children: stockLocations.map((location) => /* @__PURE__ */ jsx3(location_list_item_default, { location }, location.id)) }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
        })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]", children: /* @__PURE__ */ jsx3(LinksSection, {}) })
    ] }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
}
var SidebarLink = ({
  to,
  labelKey,
  descriptionKey,
  icon
}) => {
  return /* @__PURE__ */ jsx3(Link2, { to, className: "group outline-none", children: /* @__PURE__ */ jsx3("div", { className: "flex flex-col gap-2 px-2 pb-2", children: /* @__PURE__ */ jsx3("div", { className: "shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed group-focus-visible:shadow-borders-interactive-with-active rounded-md px-4 py-2", children: /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx3(IconAvatar, { children: icon }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsx3(Text3, { size: "small", leading: "compact", weight: "plus", children: labelKey }),
      /* @__PURE__ */ jsx3(
        Text3,
        {
          size: "small",
          leading: "compact",
          className: "text-ui-fg-subtle",
          children: descriptionKey
        }
      )
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "flex size-7 items-center justify-center", children: /* @__PURE__ */ jsx3(ArrowUpRightOnBox, { className: "text-ui-fg-muted" }) })
  ] }) }) }) });
};
var LinksSection = () => {
  const { t } = useTranslation3();
  return /* @__PURE__ */ jsxs3(Container3, { className: "p-0", children: [
    /* @__PURE__ */ jsx3("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx3(Heading2, { level: "h2", children: t("stockLocations.sidebar.header") }) }),
    /* @__PURE__ */ jsx3(
      SidebarLink,
      {
        to: "/settings/locations/shipping-profiles",
        labelKey: t("stockLocations.sidebar.shippingProfiles.label"),
        descriptionKey: t(
          "stockLocations.sidebar.shippingProfiles.description"
        ),
        icon: /* @__PURE__ */ jsx3(ShoppingBag, {})
      }
    ),
    /* @__PURE__ */ jsx3(
      SidebarLink,
      {
        to: "/settings/locations/shipping-option-types",
        labelKey: t("stockLocations.sidebar.shippingOptionTypes.label"),
        descriptionKey: t(
          "stockLocations.sidebar.shippingOptionTypes.description"
        ),
        icon: /* @__PURE__ */ jsx3(Buildings2, {})
      }
    )
  ] });
};
export {
  LocationList as Component,
  shippingListLoader as loader
};
