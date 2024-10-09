import {
  useSalesChannelTableColumns
} from "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import {
  useSalesChannelTableQuery
} from "./chunk-GSM3OOMB.mjs";
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
import {
  useApiKey,
  useBatchAddSalesChannelsToApiKey
} from "./chunk-JJJMSDYK.mjs";
import {
  useSalesChannels
} from "./chunk-TID2KHW6.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/api-key-management/api-key-management-sales-channels/api-key-management-sales-channels.tsx
import { useParams } from "react-router-dom";

// src/routes/api-key-management/api-key-management-sales-channels/components/api-key-sales-channels-form/api-key-sales-channels-form.tsx
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
var AddSalesChannelsToApiKeySchema = zod.object({
  sales_channel_ids: zod.array(zod.string())
});
var PAGE_SIZE = 50;
var ApiKeySalesChannelsForm = ({
  apiKey,
  preSelected = []
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      sales_channel_ids: []
    },
    resolver: zodResolver(AddSalesChannelsToApiKeySchema)
  });
  const { setValue } = form;
  const [rowSelection, setRowSelection] = useState({});
  const { mutateAsync, isPending } = useBatchAddSalesChannelsToApiKey(apiKey);
  const { raw, searchParams } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE
  });
  const columns = useColumns();
  const { sales_channels, count, isLoading } = useSalesChannels(
    { ...searchParams },
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("sales_channel_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return !preSelected.includes(row.original.id);
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(values.sales_channel_ids, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.salesChannels.successToast", {
            count: values.sales_channel_ids.length
          })
        );
        handleSuccess();
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          form.formState.errors.sales_channel_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.sales_channel_ids.message }),
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            count,
            pageSize: PAGE_SIZE,
            pagination: true,
            search: "autofocus",
            isLoading,
            queryObject: raw,
            orderBy: ["name", "created_at", "updated_at"],
            layout: "fill",
            noRecords: {
              message: t(
                "apiKeyManagement.addSalesChannels.list.noRecordsMessage"
              )
            }
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useSalesChannelTableColumns();
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
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t(
                  "apiKeyManagement.salesChannels.alreadyAddedTooltip"
                ),
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

// src/routes/api-key-management/api-key-management-sales-channels/api-key-management-sales-channels.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ApiKeyManagementAddSalesChannels = () => {
  const { id } = useParams();
  const { api_key, isLoading, isError, error } = useApiKey(id);
  const preSelected = api_key?.sales_channels?.map((sc) => sc.id);
  const ready = !isLoading && api_key;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(ApiKeySalesChannelsForm, { apiKey: id, preSelected }) });
};
export {
  ApiKeyManagementAddSalesChannels as Component
};
