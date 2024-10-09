import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/price-preferences.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var PRICE_PREFERENCES_QUERY_KEY = "price-preferences";
var pricePreferencesQueryKeys = queryKeysFactory(
  PRICE_PREFERENCES_QUERY_KEY
);
var usePricePreferences = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.pricePreference.list(query),
    queryKey: pricePreferencesQueryKeys.list(),
    ...options
  });
  return { ...data, ...rest };
};

export {
  pricePreferencesQueryKeys,
  usePricePreferences
};
