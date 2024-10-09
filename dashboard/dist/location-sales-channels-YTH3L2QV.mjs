import {
  useSalesChannelTableColumns
} from "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import {
  useSalesChannelTableQuery
} from "./chunk-GSM3OOMB.mjs";
import {
  useSalesChannelTableFilters
} from "./chunk-VELNOPU6.mjs";
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
  useStockLocation,
  useUpdateStockLocationSalesChannels
} from "./chunk-G3GT763I.mjs";
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

// src/routes/locations/location-sales-channels/location-sales-channels.tsx
import { useParams } from "react-router-dom";

// src/routes/locations/location-sales-channels/components/edit-sales-channels-form/edit-sales-channels-form.tsx
import { Button, Checkbox, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jsx, jsxs } from "react/jsx-runtime";
var EditSalesChannelsSchema = zod.object({
  sales_channels: zod.array(zod.string()).optional()
});
var PAGE_SIZE = 50;
var LocationEditSalesChannelsForm = ({
  location
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      sales_channels: location.sales_channels?.map((sc) => sc.id) ?? []
    },
    resolver: zodResolver(EditSalesChannelsSchema)
  });
  const { setValue } = form;
  const initialState = location.sales_channels?.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {}) ?? {};
  const [rowSelection, setRowSelection] = useState(initialState);
  useEffect(() => {
    const ids = Object.keys(rowSelection);
    setValue("sales_channels", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE
  });
  const { sales_channels, count, isLoading, isError, error } = useSalesChannels(
    {
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useSalesChannelTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  const { mutateAsync, isPending: isMutating } = useUpdateStockLocationSalesChannels(location.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    const originalIds = location.sales_channels?.map((sc) => sc.id);
    const arr = data.sales_channels ?? [];
    await mutateAsync(
      {
        add: arr.filter((i) => !originalIds?.includes(i)),
        remove: originalIds?.filter((i) => !arr.includes(i))
      },
      {
        onSuccess: () => {
          toast.success(t("stockLocations.salesChannels.successToast"));
          handleSuccess(`/settings/locations/${location.id}`);
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", isLoading: isMutating, onClick: handleSubmit, children: t("actions.save") })
    ] }) }),
    /* @__PURE__ */ jsx(RouteFocusModal.Body, { children: /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        filters,
        search: "autofocus",
        pagination: true,
        orderBy: ["name", "created_at", "updated_at"],
        queryObject: raw,
        layout: "fill"
      }
    ) })
  ] }) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useSalesChannelTableColumns();
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
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...columns
    ],
    [columns]
  );
};

// src/routes/locations/location-sales-channels/location-sales-channels.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var LocationSalesChannels = () => {
  const { location_id } = useParams();
  const { stock_location, isPending, isError, error } = useStockLocation(
    location_id,
    {
      fields: "id,*sales_channels"
    }
  );
  const ready = !isPending && !!stock_location;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(LocationEditSalesChannelsForm, { location: stock_location }) });
};
export {
  LocationSalesChannels as Component
};
