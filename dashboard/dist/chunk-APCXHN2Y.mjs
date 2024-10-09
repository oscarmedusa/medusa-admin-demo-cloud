import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/tags.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var TAGS_QUERY_KEY = "tags";
var productTagsQueryKeys = queryKeysFactory(TAGS_QUERY_KEY);
var useProductTag = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: productTagsQueryKeys.detail(id, query),
    queryFn: async () => sdk.admin.productTag.retrieve(id),
    ...options
  });
  return { ...data, ...rest };
};
var useProductTags = (query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: productTagsQueryKeys.list(query),
    queryFn: async () => sdk.admin.productTag.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateProductTag = (query, options) => {
  return useMutation({
    mutationFn: async (data) => sdk.admin.productTag.create(data, query),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: productTagsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateProductTag = (id, query, options) => {
  return useMutation({
    mutationFn: async (data) => sdk.admin.productTag.update(id, data, query),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: productTagsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: productTagsQueryKeys.detail(data.product_tag.id, query)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteProductTag = (id, options) => {
  return useMutation({
    mutationFn: async () => sdk.admin.productTag.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: productTagsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: productTagsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  productTagsQueryKeys,
  useProductTag,
  useProductTags,
  useCreateProductTag,
  useUpdateProductTag,
  useDeleteProductTag
};
