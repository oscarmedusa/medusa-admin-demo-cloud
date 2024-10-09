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
import "./chunk-D6JOCXZR.mjs";
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
import {
  useSalesChannel,
  useSalesChannelAddProducts
} from "./chunk-TID2KHW6.mjs";
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

// src/routes/sales-channels/sales-channel-add-products/sales-channel-add-products.tsx
import { useParams } from "react-router-dom";

// src/routes/sales-channels/sales-channel-add-products/components/add-products-to-sales-channel-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddProductsToSalesChannelSchema = zod.object({
  product_ids: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var AddProductsToSalesChannelForm = ({
  salesChannel
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      product_ids: []
    },
    resolver: zodResolver(AddProductsToSalesChannelSchema)
  });
  const { setValue } = form;
  const { mutateAsync, isPending } = useSalesChannelAddProducts(salesChannel.id);
  const [rowSelection, setRowSelection] = useState({});
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("product_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const {
    products,
    count,
    isPending: isLoading,
    isError,
    error
  } = useProducts(
    {
      fields: "*variants,*sales_channels",
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["sales_channel_id"]);
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    enableRowSelection: (row) => {
      return !row.original.sales_channels?.map((sc) => sc.id).includes(salesChannel.id);
    },
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    count,
    rowSelection: {
      state: rowSelection,
      updater
    },
    meta: {
      salesChannelId: salesChannel.id
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(values.product_ids, {
      onSuccess: () => {
        toast.success(t("salesChannels.toast.update"));
        handleSuccess();
      },
      onError: (error2) => toast.error(error2.message)
    });
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
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          form.formState.errors.product_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.product_ids.message }),
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex size-full flex-col overflow-y-auto", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            count,
            columns,
            pageSize: PAGE_SIZE,
            isLoading,
            filters,
            orderBy: ["title", "status", "created_at", "updated_at"],
            queryObject: raw,
            layout: "fill",
            pagination: true,
            search: "autofocus",
            noRecords: {
              message: t("salesChannels.products.add.list.noRecordsMessage")
            }
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  const { t } = useTranslation();
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
        cell: ({ row, table }) => {
          const { salesChannelId } = table.options.meta;
          const isAdded = row.original.sales_channels?.map((sc) => sc.id).includes(salesChannelId);
          const isSelected = row.getIsSelected() || isAdded;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isAdded,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isAdded) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("salesChannels.productAlreadyAdded"),
                side: "right",
                children: Component
              }
            );
          }
          return Component;
        }
      }),
      ...base
    ],
    [t, base]
  );
};

// src/routes/sales-channels/sales-channel-add-products/sales-channel-add-products.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var SalesChannelAddProducts = () => {
  const { id } = useParams();
  const {
    sales_channel,
    isPending: isLoading,
    isError,
    error
  } = useSalesChannel(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && sales_channel && /* @__PURE__ */ jsx2(AddProductsToSalesChannelForm, { salesChannel: sales_channel }) });
};
export {
  SalesChannelAddProducts as Component
};
