import {
  usePromotionTableColumns,
  usePromotionTableQuery
} from "./chunk-6UJYXEDY.mjs";
import {
  DateRangeDisplay
} from "./chunk-W5NWKBC6.mjs";
import "./chunk-KDXAFTVE.mjs";
import {
  usePromotionTableFilters
} from "./chunk-LSEYENCI.mjs";
import {
  TwoColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
import {
  currencies
} from "./chunk-MWVM4TYO.mjs";
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
import {
  TwoColumnPageSkeleton
} from "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  campaignsQueryKeys,
  useAddOrRemoveCampaignPromotions,
  useCampaign,
  useDeleteCampaign,
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

// src/routes/campaigns/campaign-detail/campaign-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/campaigns/campaign-detail/components/campaign-budget/campaign-budget.tsx
import { ChartPie, PencilSquare } from "@medusajs/icons";
import { Container, Heading, Text } from "@medusajs/ui";
import { Trans, useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var CampaignBudget = ({ campaign }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Container, { className: "flex flex-col gap-y-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-base shadow-borders-base float-left flex size-7 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx(ChartPie, { className: "text-ui-fg-subtle" }) }) }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: "text-ui-fg-subtle ml-10 mt-[1.5px] font-normal",
            level: "h3",
            children: t("campaigns.fields.budget_limit")
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: `edit-budget`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Text,
      {
        className: "text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",
        size: "small",
        leading: "compact",
        children: /* @__PURE__ */ jsx(
          Trans,
          {
            i18nKey: "campaigns.totalSpend",
            values: {
              amount: campaign?.budget?.limit || "no limit",
              currency: campaign?.budget?.type === "spend" && campaign?.budget.limit ? campaign.budget?.currency_code : ""
            },
            components: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-ui-fg-base txt-compact-medium-plus text-lg"
                },
                "amount"
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-ui-fg-base txt-compact-medium-plus text-lg"
                },
                "currency"
              )
            ]
          }
        )
      }
    ) })
  ] });
};

// src/routes/campaigns/campaign-detail/components/campaign-general-section/campaign-general-section.tsx
import { PencilSquare as PencilSquare2, Trash } from "@medusajs/icons";
import {
  Badge,
  Container as Container2,
  Heading as Heading2,
  StatusBadge,
  Text as Text2,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";

// src/routes/campaigns/common/utils/campaign-status.ts
import { isAfter, isBefore } from "date-fns";
function campaignStatus(campaign) {
  if (campaign.ends_at) {
    if (isBefore(new Date(campaign.ends_at), /* @__PURE__ */ new Date())) {
      return "expired";
    }
  }
  if (campaign.starts_at) {
    if (isAfter(new Date(campaign.starts_at), /* @__PURE__ */ new Date())) {
      return "scheduled";
    }
  }
  return "active";
}
var statusColor = (status) => {
  switch (status) {
    case "expired":
      return "red";
    case "scheduled":
      return "orange";
    case "active":
      return "green";
    default:
      return "grey";
  }
};

// src/routes/campaigns/campaign-detail/components/campaign-general-section/campaign-general-section.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CampaignGeneralSection = ({
  campaign
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteCampaign(campaign.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("campaigns.delete.title"),
      description: t("campaigns.delete.description", {
        name: campaign.name
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("campaigns.delete.successToast", {
            name: campaign.name
          })
        );
        navigate("/campaigns", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  const status = campaignStatus(campaign);
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { children: campaign.name }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx2(StatusBadge, { color: statusColor(status), children: t(`campaigns.status.${status}`) }),
        /* @__PURE__ */ jsx2(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
                    label: t("actions.edit"),
                    to: `/campaigns/${campaign.id}/edit`
                  }
                ]
              },
              {
                actions: [
                  {
                    icon: /* @__PURE__ */ jsx2(Trash, {}),
                    label: t("actions.delete"),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("campaigns.fields.identifier") }),
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: campaign.campaign_identifier })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: campaign.description || "-" })
    ] }),
    campaign?.budget && campaign.budget.type === "spend" && /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("fields.currency") }),
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2(Badge, { size: "xsmall", children: campaign?.budget.currency_code }),
        /* @__PURE__ */ jsx2(Text2, { className: "inline pl-3", size: "small", leading: "compact", children: currencies[campaign?.budget.currency_code?.toUpperCase()]?.name })
      ] })
    ] })
  ] });
};

// src/routes/campaigns/campaign-detail/components/campaign-promotion-section/campaign-promotion-section.tsx
import { PencilSquare as PencilSquare3, Trash as Trash2 } from "@medusajs/icons";
import { Button, Checkbox, Container as Container3, Heading as Heading3, usePrompt as usePrompt2 } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CampaignPromotionSection = ({
  campaign
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const { t } = useTranslation3();
  const prompt = usePrompt2();
  const columns = useColumns();
  const filters = usePromotionTableFilters();
  const { searchParams, raw } = usePromotionTableQuery({ pageSize: PAGE_SIZE });
  const { promotions, count, isLoading, isError, error } = usePromotions({
    ...searchParams,
    campaign_id: campaign.id
  });
  const { table } = useDataTable({
    data: promotions ?? [],
    columns,
    count,
    getRowId: (row) => row.id,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    meta: { campaignId: campaign.id }
  });
  if (isError) {
    throw error;
  }
  const { mutateAsync } = useAddOrRemoveCampaignPromotions(campaign.id);
  const handleRemove = async () => {
    const keys = Object.keys(rowSelection);
    const res = await prompt({
      title: t("campaigns.promotions.remove.title", { count: keys.length }),
      description: t("campaigns.promotions.remove.description", {
        count: keys.length
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      { remove: keys },
      { onSuccess: () => setRowSelection({}) }
    );
  };
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading3, { level: "h2", children: t("promotions.domain") }),
      /* @__PURE__ */ jsx3(Link, { to: `/campaigns/${campaign.id}/add-promotions`, children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", children: t("general.add") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        navigateTo: (row) => `/promotions/${row.id}`,
        filters,
        search: true,
        pagination: true,
        orderBy: [
          "email",
          "first_name",
          "last_name",
          "has_account",
          "created_at",
          "updated_at"
        ],
        queryObject: raw,
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        noRecords: {
          message: t("campaigns.promotions.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var PromotionActions = ({
  promotion,
  campaignId
}) => {
  const { t } = useTranslation3();
  const { mutateAsync } = useAddOrRemoveCampaignPromotions(campaignId);
  const prompt = usePrompt2();
  const handleRemove = async () => {
    const res = await prompt({
      title: t("campaigns.promotions.remove.title", {
        count: 1
      }),
      description: t("campaigns.promotions.remove.description", {
        count: 1
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync({
      remove: [promotion.id]
    });
  };
  return /* @__PURE__ */ jsx3(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(PencilSquare3, {}),
              label: t("actions.edit"),
              to: `/promotions/${promotion.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(Trash2, {}),
              label: t("actions.remove"),
              onClick: handleRemove
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = usePromotionTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx3(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx3(
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
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { campaignId } = table.options.meta;
          return /* @__PURE__ */ jsx3(
            PromotionActions,
            {
              promotion: row.original,
              campaignId
            }
          );
        }
      })
    ],
    [columns]
  );
};

// src/routes/campaigns/campaign-detail/components/campaign-spend/campaign-spend.tsx
import { CurrencyDollar } from "@medusajs/icons";
import { Container as Container4, Heading as Heading4, Text as Text3 } from "@medusajs/ui";
import { Trans as Trans2, useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var CampaignSpend = ({ campaign }) => {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsxs4(Container4, { className: "flex flex-col gap-y-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs4("div", { className: "mb-2 grid grid-cols-[28px_1fr] items-center gap-x-3", children: [
      /* @__PURE__ */ jsx4("div", { className: "bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx4("div", { className: "bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx4(CurrencyDollar, { className: "text-ui-fg-subtle" }) }) }),
      /* @__PURE__ */ jsx4(Heading4, { level: "h3", className: "text-ui-fg-subtle font-normal", children: campaign.budget?.type === "spend" ? t("campaigns.fields.total_spend") : t("campaigns.fields.total_used") })
    ] }),
    /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(
      Text3,
      {
        className: "text-ui-fg-subtle border-ui-border-strong border-l-4 pl-3",
        size: "small",
        leading: "compact",
        children: /* @__PURE__ */ jsx4(
          Trans2,
          {
            i18nKey: "campaigns.totalSpend",
            values: {
              amount: campaign?.budget?.used || 0,
              currency: campaign?.budget?.type === "spend" ? campaign?.budget?.currency_code : ""
            },
            components: [
              /* @__PURE__ */ jsx4(
                "span",
                {
                  className: "text-ui-fg-base txt-compact-medium-plus text-lg"
                },
                "amount"
              ),
              /* @__PURE__ */ jsx4(
                "span",
                {
                  className: "text-ui-fg-base txt-compact-medium-plus text-lg"
                },
                "currency"
              )
            ]
          }
        )
      }
    ) })
  ] });
};

// src/routes/campaigns/campaign-detail/campaign-detail.tsx
import after from "virtual:medusa/widgets/campaign/details/after";
import before from "virtual:medusa/widgets/campaign/details/before";
import sideAfter from "virtual:medusa/widgets/campaign/details/side/after";
import sideBefore from "virtual:medusa/widgets/campaign/details/side/before";

// src/routes/campaigns/campaign-detail/components/campaign-configuration-section/campaign-configuration-section.tsx
import { Container as Container5, Heading as Heading5 } from "@medusajs/ui";
import { PencilSquare as PencilSquare4 } from "@medusajs/icons";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var CampaignConfigurationSection = ({
  campaign
}) => {
  const { t } = useTranslation5();
  return /* @__PURE__ */ jsxs5(Container5, { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx5(Heading5, { level: "h2", children: t("campaigns.configuration.header") }),
      /* @__PURE__ */ jsx5(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  icon: /* @__PURE__ */ jsx5(PencilSquare4, {}),
                  to: "configuration"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx5(
      DateRangeDisplay,
      {
        startsAt: campaign.starts_at,
        endsAt: campaign.ends_at,
        showTime: true
      }
    )
  ] });
};

// src/routes/campaigns/campaign-detail/campaign-detail.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var CampaignDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { campaign, isLoading, isError, error } = useCampaign(
    id,
    { fields: "+promotions.id" },
    { initialData }
  );
  if (isLoading || !campaign) {
    return /* @__PURE__ */ jsx6(
      TwoColumnPageSkeleton,
      {
        mainSections: 2,
        sidebarSections: 3,
        showJSON: true,
        showMetadata: true
      }
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs6(
    TwoColumnPage,
    {
      widgets: {
        after,
        before,
        sideAfter,
        sideBefore
      },
      hasOutlet: true,
      showJSON: true,
      showMetadata: true,
      data: campaign,
      children: [
        /* @__PURE__ */ jsxs6(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx6(CampaignGeneralSection, { campaign }),
          /* @__PURE__ */ jsx6(CampaignPromotionSection, { campaign })
        ] }),
        /* @__PURE__ */ jsxs6(TwoColumnPage.Sidebar, { children: [
          /* @__PURE__ */ jsx6(CampaignConfigurationSection, { campaign }),
          /* @__PURE__ */ jsx6(CampaignSpend, { campaign }),
          /* @__PURE__ */ jsx6(CampaignBudget, { campaign })
        ] })
      ]
    }
  );
};

// src/routes/campaigns/campaign-detail/loader.ts
var campaignDetailQuery = (id) => ({
  queryKey: campaignsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.campaign.retrieve(id, {
    fields: "+promotions.id"
  })
});
var campaignLoader = async ({ params }) => {
  const id = params.id;
  const query = campaignDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  CampaignDetail as Component,
  campaignLoader as loader
};
