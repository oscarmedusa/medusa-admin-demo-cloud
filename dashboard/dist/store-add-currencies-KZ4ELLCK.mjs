import {
  useCurrenciesTableColumns,
  useCurrenciesTableQuery
} from "./chunk-QPWKRRZN.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-OC7BQLYI.mjs";
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
import {
  useCurrencies
} from "./chunk-UF2BEMDJ.mjs";
import {
  useStore,
  useUpdateStore
} from "./chunk-HULOFXB4.mjs";
import {
  pricePreferencesQueryKeys,
  usePricePreferences
} from "./chunk-7FQQ2EGV.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/store/store-add-currencies/components/add-currencies-form/add-currencies-form.tsx
import { Button, Checkbox, Hint, Switch, toast, Tooltip } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { keepPreviousData } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { jsx, jsxs } from "react/jsx-runtime";
var AddCurrenciesSchema = zod.object({
  currencies: zod.array(zod.string()).min(1),
  pricePreferences: zod.record(zod.boolean())
});
var PAGE_SIZE = 50;
var PREFIX = "ac";
var AddCurrenciesForm = ({
  store,
  pricePreferences
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const { raw, searchParams } = useCurrenciesTableQuery({
    pageSize: 50,
    prefix: PREFIX
  });
  const {
    currencies,
    count,
    isPending: isLoading,
    isError,
    error
  } = useCurrencies(searchParams, {
    placeholderData: keepPreviousData
  });
  const form = useForm({
    defaultValues: {
      currencies: [],
      pricePreferences: pricePreferences?.reduce((acc, curr) => {
        if (curr.value) {
          acc[curr.value] = curr.is_tax_inclusive;
        }
        return acc;
      }, {})
    },
    resolver: zodResolver(AddCurrenciesSchema)
  });
  const [rowSelection, setRowSelection] = useState({});
  const { setValue, watch } = form;
  const pricePreferenceValues = watch("pricePreferences");
  const updater = (fn) => {
    const updated = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(updated);
    setValue("currencies", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(updated);
  };
  const preSelectedRows = store.supported_currencies?.map((c) => c.currency_code) ?? [];
  const setPricePreferences = useCallback(
    (values) => {
      setValue("pricePreferences", values);
    },
    [setValue]
  );
  const columns = useColumns(pricePreferenceValues, setPricePreferences);
  const { table } = useDataTable({
    data: currencies ?? [],
    columns,
    count,
    getRowId: (row) => row.code,
    enableRowSelection: (row) => !preSelectedRows.includes(row.original.code),
    enablePagination: true,
    pageSize: PAGE_SIZE,
    prefix: PREFIX,
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  const { mutateAsync, isPending } = useUpdateStore(store.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    const currencies2 = Array.from(
      /* @__PURE__ */ new Set([...data.currencies, ...preSelectedRows])
    );
    let defaultCurrency = store.supported_currencies?.find(
      (c) => c.is_default
    )?.currency_code;
    if (!currencies2.includes(defaultCurrency ?? "")) {
      defaultCurrency = currencies2?.[0];
    }
    await mutateAsync(
      {
        supported_currencies: currencies2.map((c) => ({
          currency_code: c,
          is_default: c === defaultCurrency,
          is_tax_inclusive: data.pricePreferences[c]
        }))
      },
      {
        onSuccess: () => {
          toast.success(t("store.toast.currenciesUpdated"));
          queryClient.invalidateQueries({
            queryKey: pricePreferencesQueryKeys.all
          });
          handleSuccess();
        },
        onError: (error2) => {
          toast.error(error2.message);
        }
      }
    );
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: form.formState.errors.currencies && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.currencies.message }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
            /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
            /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            pageSize: PAGE_SIZE,
            count,
            columns,
            layout: "fill",
            pagination: true,
            search: "autofocus",
            prefix: PREFIX,
            orderBy: ["code", "name"],
            isLoading,
            queryObject: raw
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = (pricePreferences, setPricePreferences) => {
  const { t } = useTranslation();
  const base = useCurrenciesTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          const isPreSelected = !row.getCanSelect();
          const isSelected = row.getIsSelected() || isPreSelected;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isPreSelected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isPreSelected) {
            return /* @__PURE__ */ jsx(Tooltip, { content: t("store.currencyAlreadyAdded"), side: "right", children: Component });
          }
          return Component;
        }
      }),
      ...base,
      columnHelper.display({
        id: "select",
        header: () => /* @__PURE__ */ jsx("div", { className: "whitespace-nowrap", children: t("fields.taxInclusivePricing") }),
        cell: ({ row }) => {
          const isPreSelected = !row.getCanSelect();
          const isTaxInclusive = pricePreferences[row.original.code];
          return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(
            Switch,
            {
              disabled: isPreSelected,
              checked: isTaxInclusive ?? false,
              onCheckedChange: (val) => {
                setPricePreferences({
                  ...pricePreferences,
                  [row.original.code]: val
                });
              }
            }
          ) });
        }
      })
    ],
    [t, base, pricePreferences, setPricePreferences]
  );
};

// src/routes/store/store-add-currencies/store-add-currencies.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var StoreAddCurrencies = () => {
  const { store, isPending, isError, error } = useStore();
  const {
    price_preferences: pricePreferences,
    isPending: isPricePreferencesPending,
    isError: isPricePreferencesError,
    error: pricePreferencesError
  } = usePricePreferences(
    {
      attribute: "currency_code",
      value: store?.supported_currencies?.map((c) => c.currency_code)
    },
    {
      enabled: !!store
    }
  );
  const ready = !!store && !isPending && !!pricePreferences && !isPricePreferencesPending;
  if (isError) {
    throw error;
  }
  if (isPricePreferencesError) {
    throw pricePreferencesError;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(AddCurrenciesForm, { store, pricePreferences }) });
};
export {
  StoreAddCurrencies as Component
};
