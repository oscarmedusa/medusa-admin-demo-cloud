import {
  pricePreferencesQueryKeys
} from "./chunk-7FQQ2EGV.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/store.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
import { FetchError } from "@medusajs/js-sdk";
var STORE_QUERY_KEY = "store";
var storeQueryKeys = queryKeysFactory(STORE_QUERY_KEY);
async function retrieveActiveStore(query) {
  const response = await sdk.admin.store.list(query);
  const activeStore = response.stores?.[0];
  if (!activeStore) {
    throw new FetchError("No active store found", "Not Found", 404);
  }
  return { store: activeStore };
}
var useStore = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => retrieveActiveStore(query),
    queryKey: storeQueryKeys.details(),
    ...options
  });
  return {
    ...data,
    ...rest
  };
};
var useUpdateStore = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.store.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: pricePreferencesQueryKeys.list()
      });
      queryClient.invalidateQueries({
        queryKey: pricePreferencesQueryKeys.details()
      });
      queryClient.invalidateQueries({ queryKey: storeQueryKeys.details() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  storeQueryKeys,
  retrieveActiveStore,
  useStore,
  useUpdateStore
};
