import {
  PriceListCreateProductsSchema,
  usePriceListCurrencyData,
  usePriceListGridColumns
} from "./chunk-HLN7QMUU.mjs";
import {
  exctractPricesFromProducts,
  isProductRow
} from "./chunk-G2J2T2QU.mjs";
import "./chunk-XUQVQCAO.mjs";
import {
  useProductTableColumns
} from "./chunk-QWRBWAVK.mjs";
import "./chunk-TKCL6FA5.mjs";
import "./chunk-PHMALPVO.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-S3UCQAPU.mjs";
import {
  DataGrid
} from "./chunk-R5UFUQNC.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-6GU6IDUA.mjs";
import "./chunk-MGS2W2HU.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import {
  useBatchPriceListPrices,
  usePriceList
} from "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  useProducts
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/price-lists/price-list-prices-add/price-list-prices-add.tsx
import { useParams } from "react-router-dom";

// src/routes/price-lists/price-list-prices-add/components/price-list-prices-add-form/price-list-prices-add-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ProgressTabs, toast } from "@medusajs/ui";
import { useState as useState2 } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// src/routes/price-lists/price-list-prices-add/components/price-list-prices-add-form/price-list-prices-add-prices-form.tsx
import { useEffect } from "react";
import { useWatch } from "react-hook-form";
import { jsx } from "react/jsx-runtime";
var PriceListPricesAddPricesForm = ({
  form,
  currencies,
  regions,
  pricePreferences
}) => {
  const ids = useWatch({
    control: form.control,
    name: "product_ids"
  });
  const existingProducts = useWatch({
    control: form.control,
    name: "products"
  });
  const { products, isLoading, isError, error } = useProducts({
    id: ids.map((id) => id.id),
    limit: ids.length,
    fields: "title,thumbnail,*variants"
  });
  const { setValue } = form;
  const { setCloseOnEscape } = useRouteModal();
  useEffect(() => {
    if (!isLoading && products) {
      products.forEach((product) => {
        if (existingProducts[product.id] || !product.variants) {
          return;
        }
        setValue(`products.${product.id}.variants`, {
          ...product.variants.reduce((variants, variant) => {
            variants[variant.id] = {
              currency_prices: {},
              region_prices: {}
            };
            return variants;
          }, {})
        });
      });
    }
  }, [products, existingProducts, isLoading, setValue]);
  const columns = usePriceListGridColumns({
    currencies,
    regions,
    pricePreferences
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col divide-y overflow-hidden", children: /* @__PURE__ */ jsx(
    DataGrid,
    {
      isLoading,
      columns,
      data: products,
      getSubRows: (row) => {
        if (isProductRow(row) && row.variants) {
          return row.variants;
        }
      },
      state: form,
      onEditingChange: (editing) => setCloseOnEscape(!editing)
    }
  ) });
};

// src/routes/price-lists/price-list-prices-add/components/price-list-prices-add-form/price-list-prices-add-product-ids-form.tsx
import { Checkbox, Tooltip } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useWatch as useWatch2 } from "react-hook-form";
import { jsx as jsx2 } from "react/jsx-runtime";
var PAGE_SIZE = 50;
var PREFIX = "p";
function getInitialSelection(products) {
  return products.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {});
}
var PriceListPricesAddProductIdsForm = ({
  priceList,
  form
}) => {
  const { control, setValue } = form;
  const variantIdMap = useMemo(() => {
    return priceList.prices.reduce((acc, curr) => {
      acc[curr.variant_id] = true;
      return acc;
    }, {});
  }, [priceList.prices]);
  const selectedIds = useWatch2({
    control,
    name: "product_ids"
  });
  const productRecords = useWatch2({
    control,
    name: "products"
  });
  const [rowSelection, setRowSelection] = useState(
    getInitialSelection(selectedIds)
  );
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isLoading, isError, error } = useProducts(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    const productRecordKeys = Object.keys(productRecords);
    const updatedRecords = productRecordKeys.reduce((acc, key) => {
      if (ids.includes(key)) {
        acc[key] = productRecords[key];
      }
      return acc;
    }, {});
    const update = ids.map((id) => ({ id }));
    setValue("product_ids", update, { shouldDirty: true, shouldTouch: true });
    setValue("products", updatedRecords, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const columns = useColumns();
  const filters = useProductTableFilters();
  const { table } = useDataTable({
    data: products || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return !!row.original.variants?.length && !row.original.variants?.some((v) => variantIdMap[v.id]);
    },
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    meta: {
      variantIdMap
    }
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2("div", { className: "flex size-full flex-col", children: /* @__PURE__ */ jsx2(
    DataTable,
    {
      table,
      columns,
      filters,
      pageSize: PAGE_SIZE,
      prefix: PREFIX,
      count,
      isLoading,
      layout: "fill",
      orderBy: ["title", "status", "created_at", "updated_at"],
      pagination: true,
      search: true,
      queryObject: raw
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx2(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row, table }) => {
          const { variantIdMap } = table.options.meta;
          const isPreselected = row.original.variants?.some(
            (v) => variantIdMap[v.id]
          );
          const isDisabled = !row.getCanSelect() || isPreselected;
          const isChecked = row.getIsSelected() || isPreselected;
          const Component = /* @__PURE__ */ jsx2(
            Checkbox,
            {
              checked: isChecked,
              disabled: isDisabled,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isPreselected) {
            return /* @__PURE__ */ jsx2(Tooltip, { content: "This product is already in the price list", children: Component });
          }
          if (isDisabled) {
            return /* @__PURE__ */ jsx2(Tooltip, { content: "This product has no variants", children: Component });
          }
          return Component;
        }
      }),
      ...base
    ],
    [base]
  );
};

// src/routes/price-lists/price-list-prices-add/components/price-list-prices-add-form/schema.ts
import { z } from "zod";
var PriceListPricesAddSchema = z.object({
  product_ids: z.array(z.object({ id: z.string() })).min(1),
  products: PriceListCreateProductsSchema
});
var PriceListPricesAddProductIdsSchema = PriceListPricesAddSchema.pick(
  {
    product_ids: true
  }
);
var PriceListPricesAddProductsIdsFields = Object.keys(
  PriceListPricesAddProductIdsSchema.shape
);
var PriceListPricesAddProductsSchema = PriceListPricesAddSchema.pick({
  products: true
});
var PriceListPricesAddProductsFields = Object.keys(
  PriceListPricesAddProductsSchema.shape
);

// src/routes/price-lists/price-list-prices-add/components/price-list-prices-add-form/price-list-prices-add-form.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var tabOrder = ["product" /* PRODUCT */, "price" /* PRICE */];
var initialTabState = {
  ["product" /* PRODUCT */]: "in-progress",
  ["price" /* PRICE */]: "not-started"
};
var PriceListPricesAddForm = ({
  priceList,
  regions,
  currencies,
  pricePreferences
}) => {
  const [tab, setTab] = useState2("product" /* PRODUCT */);
  const [tabState, setTabState] = useState2(initialTabState);
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      products: {},
      product_ids: []
    },
    resolver: zodResolver(PriceListPricesAddSchema)
  });
  const { mutateAsync, isPending } = useBatchPriceListPrices(priceList.id);
  const handleSubmit = form.handleSubmit(async (values) => {
    const { products } = values;
    const prices = exctractPricesFromProducts(products, regions);
    await mutateAsync(
      {
        create: prices
      },
      {
        onSuccess: () => {
          toast.success(t("priceLists.products.add.successToast"));
          handleSuccess();
        },
        onError: (e) => toast.error(e.message)
      }
    );
  });
  const partialFormValidation = (fields, schema) => {
    form.clearErrors(fields);
    const values = fields.reduce((acc, key) => {
      acc[key] = form.getValues(key);
      return acc;
    }, {});
    const validationResult = schema.safeParse(values);
    if (!validationResult.success) {
      validationResult.error.errors.forEach(({ path, message, code }) => {
        form.setError(path.join("."), {
          type: code,
          message
        });
      });
      return false;
    }
    return true;
  };
  const isTabDirty = (tab2) => {
    switch (tab2) {
      case "product" /* PRODUCT */: {
        const fields = PriceListPricesAddProductsIdsFields;
        return fields.some((field) => {
          return form.getFieldState(field).isDirty;
        });
      }
      case "price" /* PRICE */: {
        const fields = PriceListPricesAddProductsFields;
        return fields.some((field) => {
          return form.getFieldState(field).isDirty;
        });
      }
    }
  };
  const handleChangeTab = (update) => {
    if (tab === update) {
      return;
    }
    if (tabOrder.indexOf(update) < tabOrder.indexOf(tab)) {
      const isCurrentTabDirty = isTabDirty(tab);
      setTabState((prev) => ({
        ...prev,
        [tab]: isCurrentTabDirty ? prev[tab] : "not-started",
        [update]: "in-progress"
      }));
      setTab(update);
      return;
    }
    const tabs = tabOrder.slice(0, tabOrder.indexOf(update));
    for (const tab2 of tabs) {
      if (tab2 === "product" /* PRODUCT */) {
        if (!partialFormValidation(
          PriceListPricesAddProductsIdsFields,
          PriceListPricesAddProductIdsSchema
        )) {
          setTabState((prev) => ({
            ...prev,
            [tab2]: "in-progress"
          }));
          setTab(tab2);
          return;
        }
        setTabState((prev) => ({
          ...prev,
          [tab2]: "completed"
        }));
      }
    }
    setTabState((prev) => ({
      ...prev,
      [tab]: "completed",
      [update]: "in-progress"
    }));
    setTab(update);
  };
  const handleNextTab = (tab2) => {
    if (tabOrder.indexOf(tab2) + 1 >= tabOrder.length) {
      return;
    }
    const nextTab = tabOrder[tabOrder.indexOf(tab2) + 1];
    handleChangeTab(nextTab);
  };
  return /* @__PURE__ */ jsx3(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsx3(
    ProgressTabs,
    {
      value: tab,
      onValueChange: (tab2) => handleChangeTab(tab2),
      className: "flex h-full flex-col overflow-hidden",
      children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
        /* @__PURE__ */ jsx3(RouteFocusModal.Header, { children: /* @__PURE__ */ jsx3("div", { className: "flex w-full items-center justify-between gap-x-4", children: /* @__PURE__ */ jsx3("div", { className: "-my-2 w-full max-w-[600px] border-l", children: /* @__PURE__ */ jsxs(ProgressTabs.List, { className: "grid w-full grid-cols-3", children: [
          /* @__PURE__ */ jsx3(
            ProgressTabs.Trigger,
            {
              status: tabState.product,
              value: "product" /* PRODUCT */,
              children: t("priceLists.create.tabs.products")
            }
          ),
          /* @__PURE__ */ jsx3(
            ProgressTabs.Trigger,
            {
              status: tabState.price,
              value: "price" /* PRICE */,
              children: t("priceLists.create.tabs.prices")
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsxs(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: [
          /* @__PURE__ */ jsx3(
            ProgressTabs.Content,
            {
              className: "size-full overflow-y-auto",
              value: "product" /* PRODUCT */,
              children: /* @__PURE__ */ jsx3(
                PriceListPricesAddProductIdsForm,
                {
                  form,
                  priceList
                }
              )
            }
          ),
          /* @__PURE__ */ jsx3(
            ProgressTabs.Content,
            {
              className: "size-full overflow-hidden",
              value: "price" /* PRICE */,
              children: /* @__PURE__ */ jsx3(
                PriceListPricesAddPricesForm,
                {
                  form,
                  regions,
                  currencies,
                  pricePreferences
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx3(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx3(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx3(
            PrimaryButton,
            {
              tab,
              next: handleNextTab,
              isLoading: isPending
            }
          )
        ] }) })
      ] })
    }
  ) });
};
var PrimaryButton = ({ tab, next, isLoading }) => {
  const { t } = useTranslation();
  if (tab === "price" /* PRICE */) {
    return /* @__PURE__ */ jsx3(
      Button,
      {
        type: "submit",
        variant: "primary",
        size: "small",
        isLoading,
        children: t("actions.save")
      },
      "submit-button"
    );
  }
  return /* @__PURE__ */ jsx3(
    Button,
    {
      type: "button",
      variant: "primary",
      size: "small",
      onClick: () => next(tab),
      children: t("actions.continue")
    },
    "next-button"
  );
};

// src/routes/price-lists/price-list-prices-add/price-list-prices-add.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var PriceListProductsAdd = () => {
  const { id } = useParams();
  const { price_list, isPending, isError, error } = usePriceList(id);
  const { currencies, regions, pricePreferences, isReady } = usePriceListCurrencyData();
  const ready = isReady && !isPending && !!price_list;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx4(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx4(
    PriceListPricesAddForm,
    {
      priceList: price_list,
      currencies,
      regions,
      pricePreferences
    }
  ) });
};
export {
  PriceListProductsAdd as Component
};
