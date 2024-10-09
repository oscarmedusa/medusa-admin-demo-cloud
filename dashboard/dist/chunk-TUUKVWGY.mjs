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

// src/hooks/api/categories.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var CATEGORIES_QUERY_KEY = "categories";
var categoriesQueryKeys = queryKeysFactory(CATEGORIES_QUERY_KEY);
var useProductCategory = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: categoriesQueryKeys.detail(id, query),
    queryFn: () => sdk.admin.productCategory.retrieve(id, query),
    ...options
  });
  return { ...data, ...rest };
};
var useProductCategories = (query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: categoriesQueryKeys.list(query),
    queryFn: () => sdk.admin.productCategory.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateProductCategory = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCategory.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: categoriesQueryKeys.lists() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateProductCategory = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCategory.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: categoriesQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: categoriesQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteProductCategory = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.productCategory.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: categoriesQueryKeys.detail(id)
      });
      queryClient.invalidateQueries({ queryKey: categoriesQueryKeys.lists() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateProductCategoryProducts = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.productCategory.updateProducts(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: categoriesQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: categoriesQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: productsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  categoriesQueryKeys,
  useProductCategory,
  useProductCategories,
  useCreateProductCategory,
  useUpdateProductCategory,
  useDeleteProductCategory,
  useUpdateProductCategoryProducts
};
