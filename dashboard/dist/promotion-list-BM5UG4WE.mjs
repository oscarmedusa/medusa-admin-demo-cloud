import {
  usePromotionTableColumns,
  usePromotionTableQuery
} from "./chunk-6UJYXEDY.mjs";
import "./chunk-KDXAFTVE.mjs";
import {
  usePromotionTableFilters
} from "./chunk-LSEYENCI.mjs";
import "./chunk-OI7BBNYW.mjs";
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
  promotionsQueryKeys,
  useDeletePromotion,
  usePromotions
} from "./chunk-P3OWRGDP.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/promotions/promotion-list/loader.ts
var params = {
  limit: 20,
  offset: 0
};
var promotionsListQuery = () => ({
  queryKey: promotionsQueryKeys.list(params),
  queryFn: async () => sdk.admin.promotion.list(params)
});
var promotionsLoader = (client) => {
  return async () => {
    const query = promotionsListQuery();
    return queryClient.getQueryData(
      query.queryKey
    ) ?? await client.fetchQuery(query);
  };
};

// src/routes/promotions/promotion-list/components/promotion-list-table/promotion-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading, usePrompt } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var PromotionListTable = () => {
  const { t } = useTranslation();
  const initialData = useLoaderData();
  const { searchParams, raw } = usePromotionTableQuery({ pageSize: PAGE_SIZE });
  const { promotions, count, isLoading, isError, error } = usePromotions(
    { ...searchParams },
    {
      initialData,
      placeholderData: keepPreviousData
    }
  );
  const filters = usePromotionTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: promotions ?? [],
    columns,
    count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("promotions.domain") }),
      /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        filters,
        search: true,
        pagination: true,
        isLoading,
        queryObject: raw,
        navigateTo: (row) => `${row.original.id}`,
        orderBy: ["created_at", "updated_at"]
      }
    ),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
};
var PromotionActions = ({ promotion }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeletePromotion(promotion.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("promotions.deleteWarning", { code: promotion.code }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel"),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: promotion.code
    });
    if (!res) {
      return;
    }
    try {
      await mutateAsync(void 0, {
        onSuccess: () => {
          navigate("/promotions", { replace: true });
        }
      });
    } catch {
      throw new Error(
        `Promotion with code ${promotion.code} could not be deleted`
      );
    }
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `/promotions/${promotion.id}/edit`
            },
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = usePromotionTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(PromotionActions, { promotion: row.original });
        }
      })
    ],
    [base]
  );
};

// src/routes/promotions/promotion-list/promotions-list.tsx
import after from "virtual:medusa/widgets/promotion/list/after";
import before from "virtual:medusa/widgets/promotion/list/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PromotionsList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(PromotionListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    })
  ] });
};
export {
  PromotionsList as Component,
  promotionsLoader
};
