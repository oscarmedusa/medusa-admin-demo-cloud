import {
  useShippingOptionPriceColumns
} from "./chunk-NWJKUZS5.mjs";
import {
  ShippingOptionPriceType
} from "./chunk-OUAFSZKF.mjs";
import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import {
  DataGrid
} from "./chunk-R5UFUQNC.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  SwitchBox
} from "./chunk-ARXK2O3B.mjs";
import {
  useComboboxData
} from "./chunk-KKUJQ3HN.mjs";
import {
  Combobox
} from "./chunk-G4XMHIPB.mjs";
import {
  castNumber
} from "./chunk-6GU6IDUA.mjs";
import "./chunk-MGS2W2HU.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCreateShippingOptions
} from "./chunk-CH64NKU5.mjs";
import {
  useStockLocation
} from "./chunk-G3GT763I.mjs";
import {
  useStore
} from "./chunk-HULOFXB4.mjs";
import {
  useRegions
} from "./chunk-CELPQCSR.mjs";
import {
  usePricePreferences
} from "./chunk-7FQQ2EGV.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-service-zone-shipping-option-create/location-service-zone-shipping-option-create.tsx
import { json, useParams, useSearchParams } from "react-router-dom";

// src/routes/locations/location-service-zone-shipping-option-create/components/create-shipping-options-form/create-shipping-options-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ProgressTabs, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useState } from "react";

// src/routes/locations/location-service-zone-shipping-option-create/components/create-shipping-options-form/create-shipping-option-details-form.tsx
import { Heading, Input, RadioGroup, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateShippingOptionDetailsForm = ({
  form,
  isReturn = false,
  zone,
  locationId
}) => {
  const { t } = useTranslation();
  const shippingProfiles = useComboboxData({
    queryFn: (params) => sdk.admin.shippingProfile.list(params),
    queryKey: ["shipping_profiles"],
    getOptions: (data) => data.shipping_profiles.map((profile) => ({
      label: profile.name,
      value: profile.id
    }))
  });
  const fulfillmentProviders = useComboboxData({
    queryFn: (params) => sdk.admin.fulfillmentProvider.list({
      ...params,
      stock_location_id: locationId
    }),
    queryKey: ["fulfillment_providers"],
    getOptions: (data) => data.fulfillment_providers.map((provider) => ({
      label: formatProvider(provider.id),
      value: provider.id
    }))
  });
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Heading, { children: t(
        `stockLocations.shippingOptions.create.${isReturn ? "returns" : "shipping"}.header`,
        {
          zone: zone.name
        }
      ) }),
      /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t(
        `stockLocations.shippingOptions.create.${isReturn ? "returns" : "shipping"}.hint`
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      Form.Field,
      {
        control: form.control,
        name: "price_type",
        render: ({ field }) => {
          return /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(Form.Label, { children: t("stockLocations.shippingOptions.fields.priceType.label") }),
            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                ...field,
                onValueChange: field.onChange,
                children: [
                  /* @__PURE__ */ jsx(
                    RadioGroup.ChoiceBox,
                    {
                      className: "flex-1",
                      value: "flat" /* FlatRate */,
                      label: t(
                        "stockLocations.shippingOptions.fields.priceType.options.fixed.label"
                      ),
                      description: t(
                        "stockLocations.shippingOptions.fields.priceType.options.fixed.hint"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    RadioGroup.ChoiceBox,
                    {
                      className: "flex-1",
                      value: "calculated" /* Calculated */,
                      label: t(
                        "stockLocations.shippingOptions.fields.priceType.options.calculated.label"
                      ),
                      description: t(
                        "stockLocations.shippingOptions.fields.priceType.options.calculated.hint"
                      )
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(Form.ErrorMessage, {})
          ] });
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsx(
      Form.Field,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => {
          return /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
            /* @__PURE__ */ jsx(Form.ErrorMessage, {})
          ] });
        }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "shipping_profile_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("stockLocations.shippingOptions.fields.profile") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  ...field,
                  options: shippingProfiles.options,
                  searchValue: shippingProfiles.searchValue,
                  onSearchValueChange: shippingProfiles.onSearchValueChange,
                  disabled: shippingProfiles.disabled
                }
              ) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "provider_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(
                Form.Label,
                {
                  tooltip: t(
                    "stockLocations.fulfillmentProviders.shippingOptionsTooltip"
                  ),
                  children: t("stockLocations.shippingOptions.fields.provider")
                }
              ),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  ...field,
                  options: fulfillmentProviders.options,
                  searchValue: fulfillmentProviders.searchValue,
                  onSearchValueChange: fulfillmentProviders.onSearchValueChange,
                  disabled: fulfillmentProviders.disabled
                }
              ) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(
      SwitchBox,
      {
        control: form.control,
        name: "enabled_in_store",
        label: t("stockLocations.shippingOptions.fields.enableInStore.label"),
        description: t(
          "stockLocations.shippingOptions.fields.enableInStore.hint"
        )
      }
    )
  ] }) });
};

// src/routes/locations/location-service-zone-shipping-option-create/components/create-shipping-options-form/create-shipping-options-prices-form.tsx
import { useMemo } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var CreateShippingOptionsPricesForm = ({
  form
}) => {
  const {
    store,
    isLoading: isStoreLoading,
    isError: isStoreError,
    error: storeError
  } = useStore();
  const currencies = useMemo(
    () => store?.supported_currencies?.map((c) => c.currency_code) || [],
    [store]
  );
  const {
    regions,
    isLoading: isRegionsLoading,
    isError: isRegionsError,
    error: regionsError
  } = useRegions({
    fields: "id,name,currency_code",
    limit: 999
  });
  const { price_preferences: pricePreferences } = usePricePreferences({});
  const { setCloseOnEscape } = useRouteModal();
  const columns = useShippingOptionPriceColumns({
    currencies,
    regions,
    pricePreferences
  });
  const isLoading = isStoreLoading || !store || isRegionsLoading || !regions;
  const data = useMemo(
    () => [[...currencies || [], ...regions || []]],
    [currencies, regions]
  );
  if (isStoreError) {
    throw storeError;
  }
  if (isRegionsError) {
    throw regionsError;
  }
  return /* @__PURE__ */ jsx2("div", { className: "flex size-full flex-col divide-y overflow-hidden", children: /* @__PURE__ */ jsx2(
    DataGrid,
    {
      isLoading,
      data,
      columns,
      state: form,
      onEditingChange: (editing) => setCloseOnEscape(!editing)
    }
  ) });
};

// src/routes/locations/location-service-zone-shipping-option-create/components/create-shipping-options-form/schema.ts
import { z } from "zod";
var CreateShippingOptionDetailsSchema = z.object({
  name: z.string().min(1),
  price_type: z.nativeEnum(ShippingOptionPriceType),
  enabled_in_store: z.boolean(),
  shipping_profile_id: z.string().min(1),
  provider_id: z.string().min(1)
});
var CreateShippingOptionSchema = z.object({
  region_prices: z.record(z.string(), z.string().optional()),
  currency_prices: z.record(z.string(), z.string().optional())
}).merge(CreateShippingOptionDetailsSchema);

// src/routes/locations/location-service-zone-shipping-option-create/components/create-shipping-options-form/create-shipping-options-form.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function CreateShippingOptionsForm({
  zone,
  isReturn,
  locationId
}) {
  const [activeTab, setActiveTab] = useState("details" /* DETAILS */);
  const [validDetails, setValidDetails] = useState(false);
  const { t } = useTranslation2();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      name: "",
      price_type: "flat" /* FlatRate */,
      enabled_in_store: true,
      shipping_profile_id: "",
      provider_id: "",
      region_prices: {},
      currency_prices: {}
    },
    resolver: zodResolver(CreateShippingOptionSchema)
  });
  const isCalculatedPriceType = form.watch("price_type") === "calculated" /* Calculated */;
  const { mutateAsync, isPending: isLoading } = useCreateShippingOptions();
  const handleSubmit = form.handleSubmit(async (data) => {
    const currencyPrices = Object.entries(data.currency_prices).map(([code, value]) => {
      if (value === "" || value === void 0) {
        return void 0;
      }
      return {
        currency_code: code,
        amount: castNumber(value)
      };
    }).filter((o) => !!o);
    const regionPrices = Object.entries(data.region_prices).map(([region_id, value]) => {
      if (value === "" || value === void 0) {
        return void 0;
      }
      return {
        region_id,
        amount: castNumber(value)
      };
    }).filter((o) => !!o);
    await mutateAsync(
      {
        name: data.name,
        price_type: data.price_type,
        service_zone_id: zone.id,
        shipping_profile_id: data.shipping_profile_id,
        provider_id: data.provider_id,
        prices: [...currencyPrices, ...regionPrices],
        rules: [
          {
            // eslint-disable-next-line
            value: isReturn ? '"true"' : '"false"',
            // we want JSONB saved as string
            attribute: "is_return",
            operator: "eq"
          },
          {
            // eslint-disable-next-line
            value: data.enabled_in_store ? '"true"' : '"false"',
            // we want JSONB saved as string
            attribute: "enabled_in_store",
            operator: "eq"
          }
        ],
        type: {
          // TODO: FETCH TYPES
          label: "Type label",
          description: "Type description",
          code: "type-code"
        }
      },
      {
        onSuccess: ({ shipping_option }) => {
          toast.success(
            t(
              `stockLocations.shippingOptions.create.${isReturn ? "returns" : "shipping"}.successToast`,
              {
                name: shipping_option.name
              }
            )
          );
          handleSuccess(`/settings/locations/${locationId}`);
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  const onTabChange = (tab) => {
    if (tab === "pricing" /* PRICING */) {
      form.clearErrors();
      const result = CreateShippingOptionDetailsSchema.safeParse({
        ...form.getValues()
      });
      if (!result.success) {
        const [firstError, ...rest] = result.error.errors;
        for (const error of rest) {
          const _path = error.path.join(".");
          form.setError(_path, {
            message: error.message,
            type: error.code
          });
        }
        form.setError(
          firstError.path.join("."),
          {
            message: firstError.message,
            type: firstError.code
          },
          {
            shouldFocus: true
          }
        );
        setValidDetails(false);
        return;
      }
      setValidDetails(true);
    }
    setActiveTab(tab);
  };
  const pricesStatus = form.getFieldState("currency_prices")?.isDirty || form.getFieldState("region_prices")?.isDirty || activeTab === "pricing" /* PRICING */ ? "in-progress" : "not-started";
  const detailsStatus = validDetails ? "completed" : "in-progress";
  return /* @__PURE__ */ jsx3(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsx3(
    ProgressTabs,
    {
      value: activeTab,
      className: "flex h-full flex-col overflow-hidden",
      onValueChange: (tab) => onTabChange(tab),
      children: /* @__PURE__ */ jsxs2("form", { className: "flex h-full flex-col", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs2(RouteFocusModal.Header, { children: [
          /* @__PURE__ */ jsxs2(ProgressTabs.List, { className: "border-ui-border-base -my-2 ml-2 min-w-0 flex-1 border-l", children: [
            /* @__PURE__ */ jsx3(
              ProgressTabs.Trigger,
              {
                value: "details" /* DETAILS */,
                status: detailsStatus,
                className: "w-full max-w-[200px]",
                children: /* @__PURE__ */ jsx3("span", { className: "w-full cursor-auto overflow-hidden text-ellipsis whitespace-nowrap", children: t("stockLocations.shippingOptions.create.tabs.details") })
              }
            ),
            !isCalculatedPriceType && /* @__PURE__ */ jsx3(
              ProgressTabs.Trigger,
              {
                value: "pricing" /* PRICING */,
                status: pricesStatus,
                className: "w-full max-w-[200px]",
                children: /* @__PURE__ */ jsx3("span", { className: "w-full overflow-hidden text-ellipsis whitespace-nowrap", children: t("stockLocations.shippingOptions.create.tabs.prices") })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-end gap-x-2", children: [
            /* @__PURE__ */ jsx3(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
            activeTab === "pricing" /* PRICING */ || isCalculatedPriceType ? /* @__PURE__ */ jsx3(
              Button,
              {
                size: "small",
                className: "whitespace-nowrap",
                isLoading,
                type: "submit",
                children: t("actions.save")
              },
              "submit-btn"
            ) : /* @__PURE__ */ jsx3(
              Button,
              {
                size: "small",
                className: "whitespace-nowrap",
                isLoading,
                onClick: () => onTabChange("pricing" /* PRICING */),
                type: "button",
                children: t("actions.continue")
              },
              "continue-btn"
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs2(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: [
          /* @__PURE__ */ jsx3(
            ProgressTabs.Content,
            {
              value: "details" /* DETAILS */,
              className: "size-full overflow-y-auto",
              children: /* @__PURE__ */ jsx3(
                CreateShippingOptionDetailsForm,
                {
                  form,
                  zone,
                  isReturn,
                  locationId
                }
              )
            }
          ),
          /* @__PURE__ */ jsx3(ProgressTabs.Content, { value: "pricing" /* PRICING */, className: "size-full", children: /* @__PURE__ */ jsx3(CreateShippingOptionsPricesForm, { form }) })
        ] })
      ] })
    }
  ) });
}

// src/routes/locations/location-service-zone-shipping-option-create/constants.ts
var LOC_CREATE_SHIPPING_OPTION_FIELDS = "*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options";

// src/routes/locations/location-service-zone-shipping-option-create/location-service-zone-shipping-option-create.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function LocationServiceZoneShippingOptionCreate() {
  const { location_id, fset_id, zone_id } = useParams();
  const [searchParams] = useSearchParams();
  const isReturn = searchParams.has("is_return");
  const { stock_location, isPending, isFetching, isError, error } = useStockLocation(location_id, {
    fields: LOC_CREATE_SHIPPING_OPTION_FIELDS
  });
  const zone = stock_location?.fulfillment_sets?.find((f) => f.id === fset_id)?.service_zones?.find((z2) => z2.id === zone_id);
  if (!isPending && !isFetching && !zone) {
    throw json(
      { message: `Service zone with ID ${zone_id} was not found` },
      404
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx4(RouteFocusModal, { prev: `/settings/locations/${location_id}`, children: zone && /* @__PURE__ */ jsx4(
    CreateShippingOptionsForm,
    {
      zone,
      isReturn,
      locationId: location_id
    }
  ) });
}
export {
  LocationServiceZoneShippingOptionCreate as Component
};
