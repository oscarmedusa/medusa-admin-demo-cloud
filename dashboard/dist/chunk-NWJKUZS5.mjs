import {
  createDataGridPriceColumns
} from "./chunk-R5UFUQNC.mjs";

// src/routes/locations/common/hooks/use-shipping-option-price-columns.tsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
var useShippingOptionPriceColumns = ({
  currencies = [],
  regions = [],
  pricePreferences = []
}) => {
  const { t } = useTranslation();
  return useMemo(() => {
    return createDataGridPriceColumns({
      currencies,
      regions,
      pricePreferences,
      getFieldName: (context, value) => {
        if (context.column.id.startsWith("currency_prices")) {
          return `currency_prices.${value}`;
        }
        return `region_prices.${value}`;
      },
      t
    });
  }, [t, currencies, regions, pricePreferences]);
};

export {
  useShippingOptionPriceColumns
};
