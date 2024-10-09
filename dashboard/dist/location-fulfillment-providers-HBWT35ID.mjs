import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-WJAYXTY4.mjs";
import {
  useDateTableFilters
} from "./chunk-W7625H47.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-J3QLEX6O.mjs";
import "./chunk-S3UCQAPU.mjs";
import {
  TextCell,
  TextHeader
} from "./chunk-OI7BBNYW.mjs";
import "./chunk-VELNOPU6.mjs";
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
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
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
import {
  useFulfillmentProviders,
  useStockLocation,
  useUpdateStockLocationFulfillmentProviders
} from "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-fulfillment-providers/location-fulfillment-providers.tsx
import { useParams } from "react-router-dom";

// src/routes/locations/location-fulfillment-providers/components/edit-fulfillment-providers-form/edit-fulfillment-providers-form.tsx
import { Button, Checkbox, toast } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper as createColumnHelper2 } from "@tanstack/react-table";
import { useEffect, useMemo as useMemo2, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// src/hooks/table/columns/use-fulfillment-provider-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useFulfillmentProviderTableColumns = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => /* @__PURE__ */ jsx(TextHeader, { text: "Provider" }),
        cell: ({ getValue }) => /* @__PURE__ */ jsx(TextCell, { text: formatProvider(getValue()) })
      })
    ],
    [t]
  );
};

// src/hooks/table/query/use-fulfillment-providers-table-query.tsx
var useFulfillmentProvidersTableQuery = ({
  prefix,
  pageSize = 20
}) => {
  const queryObject = useQueryParams(
    ["offset", "q", "stock_location_id"],
    prefix
  );
  const { offset, q, stock_location_id } = queryObject;
  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    stock_location_id,
    q
  };
  return {
    searchParams,
    raw: queryObject
  };
};

// src/routes/locations/location-fulfillment-providers/components/edit-fulfillment-providers-form/edit-fulfillment-providers-form.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var EditFulfillmentProvidersFormSchema = zod.object({
  fulfillment_providers: zod.array(zod.string()).optional()
});
var PAGE_SIZE = 50;
var LocationEditFulfillmentProvidersForm = ({
  location
}) => {
  const { t } = useTranslation2();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      fulfillment_providers: location.fulfillment_providers?.map((fp) => fp.id) ?? []
    },
    resolver: zodResolver(EditFulfillmentProvidersFormSchema)
  });
  const { setValue } = form;
  const initialState = location.fulfillment_providers?.reduce((acc, curr) => {
    acc[curr.id] = true;
    return acc;
  }, {}) ?? {};
  const [rowSelection, setRowSelection] = useState(initialState);
  useEffect(() => {
    const ids = Object.keys(rowSelection);
    setValue("fulfillment_providers", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useFulfillmentProvidersTableQuery({
    pageSize: PAGE_SIZE
  });
  const { fulfillment_providers, count, isLoading, isError, error } = useFulfillmentProviders(
    { ...searchParams, is_enabled: true },
    { placeholderData: keepPreviousData }
  );
  const filters = useDateTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: fulfillment_providers ?? [],
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
  const { mutateAsync, isPending: isMutating } = useUpdateStockLocationFulfillmentProviders(location.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    const originalIds = location.fulfillment_providers?.map((sc) => sc.id);
    const arr = data.fulfillment_providers ?? [];
    await mutateAsync(
      {
        add: arr.filter((i) => !originalIds?.includes(i)),
        remove: originalIds?.filter((i) => !arr.includes(i))
      },
      {
        onSuccess: () => {
          toast.success(t("stockLocations.fulfillmentProviders.successToast"));
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
  return /* @__PURE__ */ jsx2(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx2(RouteFocusModal.Body, { children: /* @__PURE__ */ jsx2(
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
        orderBy: ["id", "created_at", "updated_at"],
        queryObject: raw,
        layout: "fill"
      }
    ) }),
    /* @__PURE__ */ jsx2(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx2(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx2(Button, { size: "small", isLoading: isMutating, onClick: handleSubmit, children: t("actions.save") })
    ] }) })
  ] }) });
};
var columnHelper2 = createColumnHelper2();
var useColumns = () => {
  const columns = useFulfillmentProviderTableColumns();
  return useMemo2(
    () => [
      columnHelper2.display({
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
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx2(
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

// src/routes/locations/location-fulfillment-providers/location-fulfillment-providers.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var LocationFulfillmentProviders = () => {
  const { location_id } = useParams();
  const { stock_location, isPending, isFetching, isError, error } = useStockLocation(location_id, { fields: "id,*fulfillment_providers" });
  const ready = !isPending && !isFetching && !!stock_location;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx3(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx3(LocationEditFulfillmentProvidersForm, { location: stock_location }) });
};
export {
  LocationFulfillmentProviders as Component
};
