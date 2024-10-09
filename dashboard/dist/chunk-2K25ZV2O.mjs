import {
  productsQueryKeys
} from "./chunk-K3ZYJA7Z.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/collections.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var COLLECTION_QUERY_KEY = "collections";
var collectionsQueryKeys = queryKeysFactory(COLLECTION_QUERY_KEY);
var useCollection = (id, options) => {
  const { data, ...rest } = useQuery({
    queryKey: collectionsQueryKeys.detail(id),
    queryFn: async () => sdk.admin.productCollection.retrieve(id),
    ...options
  });
  return { ...data, ...rest };
};
var useCollections = (query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: collectionsQueryKeys.list(query),
    queryFn: async () => sdk.admin.productCollection.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useUpdateCollection = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCollection.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: collectionsQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: collectionsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateCollectionProducts = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCollection.updateProducts(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: collectionsQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: collectionsQueryKeys.detail(id)
      });
      queryClient.invalidateQueries({
        queryKey: productsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCreateCollection = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCollection.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: collectionsQueryKeys.lists() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteCollection = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.productCollection.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: collectionsQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: collectionsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  collectionsQueryKeys,
  useCollection,
  useCollections,
  useUpdateCollection,
  useUpdateCollectionProducts,
  useCreateCollection,
  useDeleteCollection
};
