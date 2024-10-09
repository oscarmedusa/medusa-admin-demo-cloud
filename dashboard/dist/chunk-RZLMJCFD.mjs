import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/inventory.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var INVENTORY_ITEMS_QUERY_KEY = "inventory_items";
var inventoryItemsQueryKeys = queryKeysFactory(
  INVENTORY_ITEMS_QUERY_KEY
);
var INVENTORY_ITEM_LEVELS_QUERY_KEY = "inventory_item_levels";
var inventoryItemLevelsQueryKeys = queryKeysFactory(
  INVENTORY_ITEM_LEVELS_QUERY_KEY
);
var useInventoryItems = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.inventoryItem.list(query),
    queryKey: inventoryItemsQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useInventoryItem = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.inventoryItem.retrieve(id, query),
    queryKey: inventoryItemsQueryKeys.detail(id),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateInventoryItem = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.inventoryItem.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateInventoryItem = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.inventoryItem.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteInventoryItem = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.inventoryItem.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteInventoryItemLevel = (inventoryItemId, locationId, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.inventoryItem.deleteLevel(inventoryItemId, locationId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.detail(inventoryItemId)
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useInventoryItemLevels = (inventoryItemId, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.inventoryItem.listLevels(inventoryItemId, query),
    queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId),
    ...options
  });
  return { ...data, ...rest };
};
var useUpdateInventoryLevel = (inventoryItemId, locationId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.inventoryItem.updateLevel(inventoryItemId, locationId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.detail(inventoryItemId)
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useBatchUpdateInventoryLevels = (inventoryItemId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.inventoryItem.batchUpdateLevels(inventoryItemId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemsQueryKeys.detail(inventoryItemId)
      });
      queryClient.invalidateQueries({
        queryKey: inventoryItemLevelsQueryKeys.detail(inventoryItemId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  inventoryItemsQueryKeys,
  inventoryItemLevelsQueryKeys,
  useInventoryItems,
  useInventoryItem,
  useCreateInventoryItem,
  useUpdateInventoryItem,
  useDeleteInventoryItem,
  useDeleteInventoryItemLevel,
  useInventoryItemLevels,
  useUpdateInventoryLevel,
  useBatchUpdateInventoryLevels
};
