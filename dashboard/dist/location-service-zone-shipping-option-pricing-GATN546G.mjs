import {
  useShippingOptionPriceColumns
} from "./chunk-NWJKUZS5.mjs";
import {
  DataGrid
} from "./chunk-R5UFUQNC.mjs";
import "./chunk-MWVM4TYO.mjs";
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
import "./chunk-C7RYT3S3.mjs";
import {
  useShippingOption,
  useUpdateShippingOptions
} from "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
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
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-service-zone-shipping-option-pricing/location-service-zone-shipping-option-pricing.tsx
import { json, useParams } from "react-router-dom";

// src/routes/locations/location-service-zone-shipping-option-pricing/components/create-shipping-options-form/edit-shipping-options-pricing-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { Button, toast } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var getInitialCurrencyPrices = (prices) => {
  const ret = {};
  prices.forEach((p) => {
    if (p.price_rules.length) {
      return;
    }
    ret[p.currency_code] = p.amount;
  });
  return ret;
};
var getInitialRegionPrices = (prices) => {
  const ret = {};
  prices.forEach((p) => {
    if (p.price_rules.length) {
      const regionId = p.price_rules[0].value;
      ret[regionId] = p.amount;
    }
  });
  return ret;
};
var EditShippingOptionPricingSchema = zod.object({
  region_prices: zod.record(
    zod.string(),
    zod.string().or(zod.number()).optional()
  ),
  currency_prices: zod.record(
    zod.string(),
    zod.string().or(zod.number()).optional()
  )
});
function EditShippingOptionsPricingForm({
  shippingOption
}) {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      region_prices: getInitialRegionPrices(shippingOption.prices),
      currency_prices: getInitialCurrencyPrices(shippingOption.prices)
    },
    resolver: zodResolver(EditShippingOptionPricingSchema)
  });
  const { mutateAsync, isPending } = useUpdateShippingOptions(shippingOption.id);
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
  const data = useMemo(
    () => [[...currencies || [], ...regions || []]],
    [currencies, regions]
  );
  const handleSubmit = form.handleSubmit(async (data2) => {
    const currencyPrices = Object.entries(data2.currency_prices).map(([code, value]) => {
      if (value === "" || value === void 0) {
        return void 0;
      }
      const currencyExists = currencies.some((currencyCode) => currencyCode.toLowerCase() == code.toLowerCase());
      if (!currencyExists) {
        return void 0;
      }
      const amount = castNumber(value);
      const priceRecord = {
        currency_code: code,
        amount
      };
      const price = shippingOption.prices.find(
        (p) => p.currency_code === code && !p.price_rules.length
      );
      if (price) {
        priceRecord["id"] = price.id;
      }
      return priceRecord;
    }).filter((p) => !!p);
    const regionPrices = Object.entries(data2.region_prices).map(([region_id, value]) => {
      if (value === "" || value === void 0) {
        return void 0;
      }
      const regionExists = regions?.some((region) => region.id === region_id);
      if (!regionExists) {
        return void 0;
      }
      const amount = castNumber(value);
      const priceRecord = {
        region_id,
        amount
      };
      return priceRecord;
    }).filter((p) => !!p);
    await mutateAsync(
      {
        prices: [...currencyPrices, ...regionPrices]
      },
      {
        onSuccess: () => {
          toast.success(t("general.success"));
          handleSuccess();
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  const isLoading = isStoreLoading || isRegionsLoading || !currencies || !regions;
  if (isStoreError) {
    throw storeError;
  }
  if (isRegionsError) {
    throw regionsError;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "flex h-full flex-col overflow-hidden",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, {}),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { children: /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col divide-y overflow-hidden", children: /* @__PURE__ */ jsx(
          DataGrid,
          {
            isLoading,
            data,
            columns,
            state: form,
            onEditingChange: (editing) => setCloseOnEscape(!editing)
          }
        ) }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "small",
              className: "whitespace-nowrap",
              isLoading: isPending,
              onClick: handleSubmit,
              type: "button",
              children: t("actions.save")
            }
          )
        ] }) })
      ]
    }
  ) });
}

// src/routes/locations/location-service-zone-shipping-option-pricing/location-service-zone-shipping-option-pricing.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function LocationServiceZoneShippingOptionPricing() {
  const { so_id, location_id } = useParams();
  if (!so_id) {
    throw json({
      message: "Shipping Option ID paramater is missing",
      status: 404
    });
  }
  const { shipping_option: shippingOption, isError, error } = useShippingOption(so_id, {
    fields: "*prices,*prices.price_rules"
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { prev: `/settings/locations/${location_id}`, children: shippingOption && /* @__PURE__ */ jsx2(EditShippingOptionsPricingForm, { shippingOption }) });
}
export {
  LocationServiceZoneShippingOptionPricing as Component
};
