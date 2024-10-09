import {
  useRegionTableColumns
} from "./chunk-FYN6YJ5C.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-IR5DHEKS.mjs";
import {
  useRegionTableQuery
} from "./chunk-XR4GEMGR.mjs";
import {
  useRegionTableFilters
} from "./chunk-LT4MVCA7.mjs";
import "./chunk-VDBOSWVE.mjs";
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
  useDeleteRegion,
  useRegions
} from "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/regions/region-list/region-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/regions/region-list/components/region-list-table/region-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import {
  Button,
  Container,
  Heading,
  toast,
  usePrompt,
  Text
} from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var RegionListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useRegionTableQuery({ pageSize: PAGE_SIZE });
  const {
    regions,
    count,
    isPending: isLoading,
    isError,
    error
  } = useRegions(
    {
      ...searchParams,
      fields: "*payment_providers"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useRegionTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: regions ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: t("regions.domain") }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle", size: "small", children: t("regions.subtitle") })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/settings/regions/create", children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        isLoading,
        filters,
        orderBy: ["name", "created_at", "updated_at"],
        navigateTo: (row) => `${row.original.id}`,
        pagination: true,
        search: true,
        queryObject: raw,
        noRecords: {
          message: t("regions.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var RegionActions = ({ region }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteRegion(region.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("regions.deleteRegionWarning", {
        name: region.name
      }),
      verificationText: region.name,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    try {
      await mutateAsync(void 0);
      toast.success(t("general.success"), {
        description: t("regions.toast.delete"),
        dismissLabel: t("actions.close")
      });
    } catch (e) {
      toast.error(t("general.error"), {
        description: e.message,
        dismissLabel: t("actions.close")
      });
    }
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `/settings/regions/${region.id}/edit`,
              icon: /* @__PURE__ */ jsx(PencilSquare, {})
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              onClick: handleDelete,
              icon: /* @__PURE__ */ jsx(Trash, {})
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useRegionTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(RegionActions, { region: row.original });
        }
      })
    ],
    [base]
  );
};

// src/routes/regions/region-list/region-list.tsx
import after from "virtual:medusa/widgets/region/list/after";
import before from "virtual:medusa/widgets/region/list/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var RegionList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(RegionListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};
export {
  RegionList as Component
};
