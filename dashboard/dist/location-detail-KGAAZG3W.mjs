import {
  isOptionEnabledInStore,
  isReturnOption
} from "./chunk-R2O6QX4D.mjs";
import "./chunk-OUAFSZKF.mjs";
import {
  ListSummary
} from "./chunk-I3VB6NM2.mjs";
import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import {
  getFormattedAddress
} from "./chunk-OIAPXGI2.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import {
  countries
} from "./chunk-VDBOSWVE.mjs";
import {
  IconAvatar
} from "./chunk-EQTBJSBZ.mjs";
import {
  NoRecords
} from "./chunk-WX2SMNCD.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import {
  useDeleteFulfillmentServiceZone,
  useDeleteFulfillmentSet
} from "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import "./chunk-OMZRRPIN.mjs";
import {
  useDeleteShippingOption
} from "./chunk-CH64NKU5.mjs";
import {
  stockLocationsQueryKeys,
  useCreateStockLocationFulfillmentSet,
  useDeleteStockLocation,
  useFulfillmentProviders,
  useStockLocation
} from "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useSalesChannels
} from "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-detail/loader.ts
import { redirect } from "react-router-dom";

// src/routes/locations/location-detail/const.ts
var detailsFields = "name,*sales_channels,*address,fulfillment_sets.type,fulfillment_sets.name,*fulfillment_sets.service_zones.geo_zones,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options,*fulfillment_sets.service_zones.shipping_options.rules,*fulfillment_sets.service_zones.shipping_options.shipping_profile,*fulfillment_providers";

// src/routes/locations/location-detail/loader.ts
var locationQuery = (id) => ({
  queryKey: stockLocationsQueryKeys.detail(id, {
    fields: detailsFields
  }),
  queryFn: async () => {
    return await sdk.admin.stockLocation.retrieve(id, {
      fields: detailsFields
    }).catch((error) => {
      if (error.status === 401) {
        throw redirect("/login");
      }
      throw error;
    });
  }
});
var locationLoader = async ({ params }) => {
  const id = params.location_id;
  const query = locationQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/locations/location-detail/location-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/locations/location-detail/components/location-general-section/location-general-section.tsx
import {
  ArchiveBox,
  CurrencyDollar,
  Map,
  PencilSquare,
  Plus,
  Trash,
  TriangleDownMini
} from "@medusajs/icons";
import {
  Badge,
  Container,
  Heading,
  IconButton,
  StatusBadge,
  Text,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var LocationGeneralSection = ({
  location
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Container, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: location.name }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle txt-small", children: getFormattedAddress({ address: location.address }).join(", ") })
      ] }),
      /* @__PURE__ */ jsx(Actions, { location })
    ] }) }),
    /* @__PURE__ */ jsx(
      FulfillmentSet,
      {
        locationId: location.id,
        locationName: location.name,
        type: "pickup" /* Pickup */,
        fulfillmentSet: location.fulfillment_sets?.find(
          (f) => f.type === "pickup" /* Pickup */
        )
      }
    ),
    /* @__PURE__ */ jsx(
      FulfillmentSet,
      {
        locationId: location.id,
        locationName: location.name,
        type: "shipping" /* Shipping */,
        fulfillmentSet: location.fulfillment_sets?.find(
          (f) => f.type === "shipping" /* Shipping */
        )
      }
    )
  ] });
};
function ShippingOption({
  option,
  fulfillmentSetId,
  locationId
}) {
  const prompt = usePrompt();
  const { t } = useTranslation();
  const isStoreOption = isOptionEnabledInStore(option);
  const { mutateAsync } = useDeleteShippingOption(option.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("stockLocations.shippingOptions.delete.confirmation", {
        name: option.name
      }),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: option.name,
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("stockLocations.shippingOptions.delete.successToast", {
            name: option.name
          })
        );
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs(Text, { size: "small", weight: "plus", children: [
      option.name,
      " - ",
      option.shipping_profile.name,
      " (",
      formatProvider(option.provider_id),
      ")"
    ] }) }),
    /* @__PURE__ */ jsx(
      Badge,
      {
        className: "mr-4",
        color: isStoreOption ? "grey" : "purple",
        size: "2xsmall",
        rounded: "full",
        children: isStoreOption ? t("general.store") : t("general.admin")
      }
    ),
    /* @__PURE__ */ jsx(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                label: t("stockLocations.shippingOptions.edit.action"),
                to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${option.service_zone_id}/shipping-option/${option.id}/edit`
              },
              {
                label: t("stockLocations.shippingOptions.pricing.action"),
                icon: /* @__PURE__ */ jsx(CurrencyDollar, {}),
                to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${option.service_zone_id}/shipping-option/${option.id}/pricing`
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
    )
  ] });
}
function ServiceZoneOptions({
  zone,
  locationId,
  fulfillmentSetId
}) {
  const { t } = useTranslation();
  const shippingOptions = zone.shipping_options.filter(
    (o) => !isReturnOption(o)
  );
  const returnOptions = zone.shipping_options.filter((o) => isReturnOption(o));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Divider, { variant: "dashed" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4 px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "item-center flex justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle txt-small self-center font-medium", children: t("stockLocations.shippingOptions.create.shipping.label") }),
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${zone.id}/shipping-option/create`,
            children: t("stockLocations.shippingOptions.create.action")
          }
        )
      ] }),
      !!shippingOptions.length && /* @__PURE__ */ jsx("div", { className: "shadow-elevation-card-rest bg-ui-bg-subtle grid divide-y rounded-md", children: shippingOptions.map((o) => /* @__PURE__ */ jsx(
        ShippingOption,
        {
          option: o,
          locationId,
          fulfillmentSetId
        },
        o.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(Divider, { variant: "dashed" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4 px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "item-center flex justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle txt-small self-center font-medium", children: t("stockLocations.shippingOptions.create.returns.label") }),
        /* @__PURE__ */ jsx(
          LinkButton,
          {
            to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${zone.id}/shipping-option/create?is_return`,
            children: t("stockLocations.shippingOptions.create.action")
          }
        )
      ] }),
      !!returnOptions.length && /* @__PURE__ */ jsx("div", { className: "shadow-elevation-card-rest bg-ui-bg-subtle grid divide-y rounded-md", children: returnOptions.map((o) => /* @__PURE__ */ jsx(
        ShippingOption,
        {
          option: o,
          locationId,
          fulfillmentSetId
        },
        o.id
      )) })
    ] })
  ] });
}
function ServiceZone({ zone, locationId, fulfillmentSetId }) {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const [open, setOpen] = useState(true);
  const { mutateAsync: deleteZone } = useDeleteFulfillmentServiceZone(
    fulfillmentSetId,
    zone.id
  );
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("stockLocations.serviceZones.delete.confirmation", {
        name: zone.name
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await deleteZone(void 0, {
      onError: (e) => {
        toast.error(e.message);
      },
      onSuccess: () => {
        toast.success(
          t("stockLocations.serviceZones.delete.successToast", {
            name: zone.name
          })
        );
      }
    });
  };
  const countries2 = useMemo(() => {
    const countryGeoZones = zone.geo_zones.filter((g) => g.type === "country");
    const countries3 = countryGeoZones.map(
      ({ country_code }) => countries.find((c) => c.iso_2 === country_code)
    ).filter((c) => !!c);
    if (process.env.NODE_ENV === "development" && countryGeoZones.length !== countries3.length) {
      console.warn(
        "Some countries are missing in the static countries list",
        countryGeoZones.filter((g) => !countries3.find((c) => c.iso_2 === g.country_code)).map((g) => g.country_code)
      );
    }
    return countries3.sort((c1, c2) => c1.name.localeCompare(c2.name));
  }, [zone.geo_zones]);
  const [shippingOptionsCount, returnOptionsCount] = useMemo(() => {
    const options = zone.shipping_options;
    const optionsCount = options.filter((o) => !isReturnOption(o)).length;
    const returnOptionsCount2 = options.filter(isReturnOption).length;
    return [optionsCount, returnOptionsCount2];
  }, [zone.shipping_options]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between gap-x-4 px-6 py-4", children: [
      /* @__PURE__ */ jsx(IconAvatar, { children: /* @__PURE__ */ jsx(Map, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "grow-1 flex flex-1 flex-col", children: [
        /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: zone.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            ListSummary,
            {
              variant: "base",
              list: countries2.map((c) => c.display_name),
              inline: true,
              n: 1
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "\xB7" }),
          /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle txt-small", children: t("stockLocations.shippingOptions.fields.count.shipping", {
            count: shippingOptionsCount
          }) }),
          /* @__PURE__ */ jsx("span", { children: "\xB7" }),
          /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle txt-small", children: t("stockLocations.shippingOptions.fields.count.returns", {
            count: returnOptionsCount
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex grow-0 items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            size: "small",
            onClick: () => setOpen((s) => !s),
            variant: "transparent",
            children: /* @__PURE__ */ jsx(
              TriangleDownMini,
              {
                style: {
                  transform: `rotate(${!open ? 0 : 180}deg)`,
                  transition: ".2s transform ease-in-out"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                    to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${zone.id}/edit`
                  },
                  {
                    label: t("stockLocations.serviceZones.manageAreas.action"),
                    icon: /* @__PURE__ */ jsx(Map, {}),
                    to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSetId}/service-zone/${zone.id}/areas`
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
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx(
      ServiceZoneOptions,
      {
        fulfillmentSetId,
        locationId,
        zone
      }
    )
  ] });
}
function FulfillmentSet(props) {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { fulfillmentSet, locationName, locationId, type } = props;
  const fulfillmentSetExists = !!fulfillmentSet;
  const hasServiceZones = !!fulfillmentSet?.service_zones.length;
  const { mutateAsync: createFulfillmentSet } = useCreateStockLocationFulfillmentSet(locationId);
  const { mutateAsync: deleteFulfillmentSet } = useDeleteFulfillmentSet(
    fulfillmentSet?.id
  );
  const handleCreate = async () => {
    await createFulfillmentSet(
      {
        name: `${locationName} ${type === "pickup" /* Pickup */ ? "pick up" : type}`,
        type
      },
      {
        onSuccess: () => {
          toast.success(t(`stockLocations.fulfillmentSets.enable.${type}`));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t(`stockLocations.fulfillmentSets.disable.confirmation`, {
        name: fulfillmentSet?.name
      }),
      confirmText: t("actions.disable"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await deleteFulfillmentSet(void 0, {
      onSuccess: () => {
        toast.success(t(`stockLocations.fulfillmentSets.disable.${type}`));
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  const groups = fulfillmentSet ? [
    {
      actions: [
        {
          icon: /* @__PURE__ */ jsx(Plus, {}),
          label: t("stockLocations.serviceZones.create.action"),
          to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSet.id}/service-zones/create`
        }
      ]
    },
    {
      actions: [
        {
          icon: /* @__PURE__ */ jsx(Trash, {}),
          label: t("actions.disable"),
          onClick: handleDelete
        }
      ]
    }
  ] : [
    {
      actions: [
        {
          icon: /* @__PURE__ */ jsx(Plus, {}),
          label: t("actions.enable"),
          onClick: handleCreate
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsx(Container, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col divide-y", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t(`stockLocations.fulfillmentSets.${type}.header`) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(StatusBadge, { color: fulfillmentSetExists ? "green" : "grey", children: t(
          fulfillmentSetExists ? "statuses.enabled" : "statuses.disabled"
        ) }),
        /* @__PURE__ */ jsx(ActionMenu, { groups })
      ] })
    ] }),
    fulfillmentSetExists && !hasServiceZones && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-8 pt-6", children: /* @__PURE__ */ jsx(
      NoRecords,
      {
        message: t("stockLocations.serviceZones.fields.noRecords"),
        className: "h-fit",
        action: {
          to: `/settings/locations/${locationId}/fulfillment-set/${fulfillmentSet.id}/service-zones/create`,
          label: t("stockLocations.serviceZones.create.action")
        }
      }
    ) }),
    hasServiceZones && /* @__PURE__ */ jsx("div", { className: "flex flex-col divide-y", children: fulfillmentSet?.service_zones.map((zone) => /* @__PURE__ */ jsx(
      ServiceZone,
      {
        zone,
        locationId,
        fulfillmentSetId: fulfillmentSet.id
      },
      zone.id
    )) })
  ] }) });
}
var Actions = ({ location }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mutateAsync } = useDeleteStockLocation(location.id);
  const prompt = usePrompt();
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("stockLocations.delete.confirmation", {
        name: location.name
      }),
      verificationText: location.name,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("stockLocations.create.successToast", {
            name: location.name
          })
        );
        navigate("/settings/locations", { replace: true });
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `edit`
            },
            {
              icon: /* @__PURE__ */ jsx(ArchiveBox, {}),
              label: t("stockLocations.edit.viewInventory"),
              to: `/inventory?location_id=${location.id}`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};

// src/routes/locations/location-detail/components/location-sales-channels-section/locations-sales-channels-section.tsx
import { Channels, PencilSquare as PencilSquare2 } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2, Text as Text2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function LocationsSalesChannelsSection({
  location
}) {
  const { t } = useTranslation2();
  const { count } = useSalesChannels({ limit: 1, fields: "id" });
  const hasConnectedChannels = !!location.sales_channels?.length;
  return /* @__PURE__ */ jsxs2(Container2, { className: "flex flex-col px-6 py-4", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("stockLocations.salesChannels.header") }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "sales-channels",
                  icon: /* @__PURE__ */ jsx2(PencilSquare2, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    hasConnectedChannels ? /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-4 pt-4", children: [
      /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[28px_1fr] items-center gap-x-3", children: [
        /* @__PURE__ */ jsx2(IconAvatar, { children: /* @__PURE__ */ jsx2(Channels, { className: "text-ui-fg-subtle" }) }),
        /* @__PURE__ */ jsx2(
          ListSummary,
          {
            n: 3,
            className: "text-ui-fg-base",
            inline: true,
            list: location.sales_channels?.map((sc) => sc.name) ?? []
          }
        )
      ] }),
      /* @__PURE__ */ jsx2(Text2, { className: "text-ui-fg-subtle", size: "small", leading: "compact", children: t("stockLocations.salesChannels.connectedTo", {
        count: location.sales_channels?.length,
        total: count
      }) })
    ] }) : /* @__PURE__ */ jsx2(
      NoRecords,
      {
        className: "h-fit pb-2 pt-6",
        action: {
          label: t("stockLocations.salesChannels.action"),
          to: "sales-channels"
        },
        message: t("stockLocations.salesChannels.noChannels")
      }
    )
  ] });
}
var locations_sales_channels_section_default = LocationsSalesChannelsSection;

// src/routes/locations/location-detail/location-detail.tsx
import after from "virtual:medusa/widgets/location/details/after";
import before from "virtual:medusa/widgets/location/details/before";
import sideAfter from "virtual:medusa/widgets/location/details/side/after";
import sideBefore from "virtual:medusa/widgets/location/details/side/before";

// src/routes/locations/location-detail/components/location-fulfillment-providers-section/location-fulfillment-providers-section.tsx
import { HandTruck, PencilSquare as PencilSquare3 } from "@medusajs/icons";
import { Container as Container3, Heading as Heading3 } from "@medusajs/ui";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function LocationsFulfillmentProvidersSection({
  location
}) {
  const { t } = useTranslation3();
  const { fulfillment_providers } = useFulfillmentProviders({
    stock_location_id: location.id,
    fields: "id",
    is_enabled: true
  });
  return /* @__PURE__ */ jsxs3(Container3, { className: "flex flex-col px-6 py-4", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx3(Heading3, { level: "h2", children: t("stockLocations.fulfillmentProviders.header") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "fulfillment-providers",
                  icon: /* @__PURE__ */ jsx3(PencilSquare3, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    fulfillment_providers?.length ? /* @__PURE__ */ jsx3("div", { className: "flex flex-col gap-y-4 pt-4", children: /* @__PURE__ */ jsx3("div", { className: "grid grid-cols-[28px_1fr] items-center gap-x-3 gap-y-3", children: fulfillment_providers?.map((fulfillmentProvider) => {
      return /* @__PURE__ */ jsxs3(Fragment2, { children: [
        /* @__PURE__ */ jsx3(IconAvatar, { children: /* @__PURE__ */ jsx3(HandTruck, { className: "text-ui-fg-subtle" }) }),
        /* @__PURE__ */ jsx3("div", { className: "txt-compact-small", children: formatProvider(fulfillmentProvider.id) })
      ] });
    }) }) }) : /* @__PURE__ */ jsx3(
      NoRecords,
      {
        className: "h-fit pb-2 pt-6 text-center",
        action: {
          label: t("stockLocations.fulfillmentProviders.action"),
          to: "fulfillment-providers"
        },
        message: t("stockLocations.fulfillmentProviders.noProviders")
      }
    )
  ] });
}
var location_fulfillment_providers_section_default = LocationsFulfillmentProvidersSection;

// src/routes/locations/location-detail/location-detail.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var LocationDetail = () => {
  const initialData = useLoaderData();
  const { location_id } = useParams();
  const {
    stock_location: location,
    isPending: isLoading,
    isError,
    error
  } = useStockLocation(location_id, { fields: detailsFields }, { initialData });
  if (isLoading || !location) {
    return /* @__PURE__ */ jsx4("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: location }) }, i);
    }),
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-3 xl:flex-row xl:items-start xl:gap-x-4", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx4(LocationGeneralSection, { location }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: location }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: location }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: location }) }, i);
        }),
        /* @__PURE__ */ jsx4(locations_sales_channels_section_default, { location }),
        /* @__PURE__ */ jsx4(location_fulfillment_providers_section_default, { location }),
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: location }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: location }) })
      ] }),
      /* @__PURE__ */ jsx4(Outlet, {})
    ] })
  ] });
};
export {
  LocationDetail as Component,
  locationLoader as loader
};
