import {
  useCampaignTableColumns
} from "./chunk-LDVL34F3.mjs";
import "./chunk-B4FQDBC3.mjs";
import {
  useCampaignTableQuery
} from "./chunk-OMC5JCQH.mjs";
import "./chunk-GA34GXNI.mjs";
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
  useCampaigns,
  useDeleteCampaign
} from "./chunk-P3OWRGDP.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/campaigns/campaign-list/campaign-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/campaigns/campaign-list/components/campaign-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Container, Heading, toast, usePrompt } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var CampaignListTable = () => {
  const { t } = useTranslation();
  const { raw, searchParams } = useCampaignTableQuery({ pageSize: PAGE_SIZE });
  const {
    campaigns,
    count,
    isPending: isLoading,
    isError,
    error
  } = useCampaigns(searchParams, {
    placeholderData: keepPreviousData
  });
  const columns = useColumns();
  const { table } = useDataTable({
    data: campaigns ?? [],
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
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("campaigns.domain") }),
      /* @__PURE__ */ jsx(Link, { to: "/campaigns/create", children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        pagination: true,
        search: true,
        navigateTo: (row) => row.id,
        isLoading,
        queryObject: raw,
        orderBy: ["name", "created_at", "updated_at"]
      }
    )
  ] });
};
var CampaignActions = ({ campaign }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteCampaign(campaign.id);
  const handleDelete = async () => {
    const confirm = await prompt({
      title: t("general.areYouSure"),
      description: t("campaigns.deleteCampaignWarning", {
        name: campaign.name
      }),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: campaign.name,
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!confirm) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(t("campaigns.toast.delete"));
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
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
              to: `/campaigns/${campaign.id}/edit`
            }
          ]
        },
        {
          actions: [
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
  const base = useCampaignTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(CampaignActions, { campaign: row.original });
        }
      })
    ],
    [base]
  );
};

// src/routes/campaigns/campaign-list/campaign-list.tsx
import after from "virtual:medusa/widgets/campaign/list/after";
import before from "virtual:medusa/widgets/campaign/list/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CampaignList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(CampaignListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};
export {
  CampaignList as Component
};
