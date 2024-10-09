import {
  useCountries,
  useCountryTableColumns,
  useCountryTableQuery
} from "./chunk-NOAFLTPV.mjs";
import {
  countries
} from "./chunk-VDBOSWVE.mjs";
import "./chunk-LQTHYS2Z.mjs";
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
  useRegion,
  useUpdateRegion
} from "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/regions/region-add-countries/region-add-countries.tsx
import { useParams } from "react-router-dom";

// src/routes/regions/region-add-countries/components/add-countries-form/add-countries-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { Button, Checkbox, toast } from "@medusajs/ui";
import { jsx, jsxs } from "react/jsx-runtime";
var AddCountriesSchema = zod.object({
  countries: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var PREFIX = "ac";
var AddCountriesForm = ({ region }) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const [rowSelection, setRowSelection] = useState({});
  const form = useForm({
    defaultValues: {
      countries: []
    },
    resolver: zodResolver(AddCountriesSchema)
  });
  const { setValue } = form;
  useEffect(() => {
    const ids = Object.keys(rowSelection).filter((k) => rowSelection[k]);
    setValue("countries", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useCountryTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { countries: countries2, count } = useCountries({
    countries: countries.map((c, i) => ({
      display_name: c.display_name,
      name: c.name,
      id: i,
      iso_2: c.iso_2,
      iso_3: c.iso_3,
      num_code: c.num_code,
      region_id: null,
      region: {}
    })),
    ...searchParams
  });
  const columns = useColumns();
  const { table } = useDataTable({
    data: countries2 || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return region.countries?.findIndex((c) => c.iso_2 === row.original.iso_2) === -1;
    },
    getRowId: (row) => row.iso_2,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    prefix: PREFIX
  });
  const { mutateAsync, isPending: isLoading } = useUpdateRegion(region.id);
  const handleSubmit = form.handleSubmit(async (values) => {
    const payload = [
      ...region.countries?.map((c) => c.iso_2) ?? [],
      ...values.countries
    ];
    await mutateAsync(
      {
        countries: payload
      },
      {
        onSuccess: () => {
          toast.success(t("regions.toast.countries"));
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", isLoading, type: "submit", children: t("actions.add") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            pageSize: PAGE_SIZE,
            count,
            search: "autofocus",
            pagination: true,
            layout: "fill",
            orderBy: ["name", "code"],
            queryObject: raw,
            prefix: PREFIX
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useCountryTableColumns();
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
          const isPreselected = !row.getCanSelect();
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected() || isPreselected,
              disabled: isPreselected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...base
    ],
    [base]
  );
};

// src/routes/regions/region-add-countries/region-add-countries.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var RegionAddCountries = () => {
  const { id } = useParams();
  const {
    region,
    isPending: isLoading,
    isError,
    error
  } = useRegion(id, {
    fields: "*payment_providers"
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && region && /* @__PURE__ */ jsx2(AddCountriesForm, { region }) });
};
export {
  RegionAddCountries as Component
};
