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
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import {
  useAddOrRemoveCampaignPromotions,
  useCampaign,
  usePromotions
} from "./chunk-P3OWRGDP.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/campaigns/add-campaign-promotions/add-campaign-promotions.tsx
import { useParams } from "react-router-dom";

// src/routes/campaigns/add-campaign-promotions/components/add-campaign-promotions-form.tsx
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
var AddCampaignPromotionsSchema = zod.object({
  promotion_ids: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 50;
var AddCampaignPromotionsForm = ({
  campaign
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: { promotion_ids: [] },
    resolver: zodResolver(AddCampaignPromotionsSchema)
  });
  const { setValue } = form;
  const { mutateAsync, isPending } = useAddOrRemoveCampaignPromotions(
    campaign.id
  );
  const [rowSelection, setRowSelection] = useState({});
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("promotion_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const { searchParams, raw } = usePromotionTableQuery({ pageSize: PAGE_SIZE });
  const {
    promotions,
    count,
    isPending: isLoading
  } = usePromotions({ ...searchParams }, { placeholderData: keepPreviousData });
  const columns = useColumns();
  const filters = usePromotionTableFilters();
  const { table } = useDataTable({
    data: promotions ?? [],
    columns,
    enableRowSelection: (row) => {
      return row.original.campaign_id !== campaign.id;
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
      campaignId: campaign.id,
      currencyCode: campaign?.budget?.currency_code,
      budgetType: campaign?.budget?.type
    }
  });
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(
      { add: values.promotion_ids },
      {
        onSuccess: () => {
          toast.success(
            t("campaigns.promotions.toast.success", {
              count: values.promotion_ids.length
            })
          );
          handleSuccess();
        },
        onError: (error) => toast.error(error.message)
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
          form.formState.errors.promotion_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.promotion_ids.message }),
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
              message: t("campaigns.promotions.add.list.noRecordsMessage")
            }
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = usePromotionTableColumns();
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
              onCheckedChange: (value) => table.toggleAllRowsSelected(!!value)
            }
          );
        },
        cell: ({ row, table }) => {
          const { campaignId, currencyCode, budgetType } = table.options.meta;
          const isTypeSpend = budgetType === "spend";
          const isAdded = row.original.campaign_id === campaignId;
          const isAddedToADiffCampaign = !!row.original.campaign_id && row.original.campaign_id !== campaignId;
          const currencyMismatch = isTypeSpend && row.original.application_method?.currency_code !== currencyCode;
          const isSelected = row.getIsSelected() || isAdded;
          const isIndeterminate = currencyMismatch || isAddedToADiffCampaign;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isIndeterminate ? "indeterminate" : isSelected,
              disabled: isAdded || isAddedToADiffCampaign || currencyMismatch,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isAddedToADiffCampaign) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("campaigns.promotions.alreadyAddedDiffCampaign", {
                  name: row.original?.campaign?.name
                }),
                side: "right",
                children: Component
              }
            );
          }
          if (currencyMismatch) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("campaigns.promotions.currencyMismatch"),
                side: "right",
                children: Component
              }
            );
          }
          if (isAdded) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("campaigns.promotions.alreadyAdded"),
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

// src/routes/campaigns/add-campaign-promotions/add-campaign-promotions.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var AddCampaignPromotions = () => {
  const { id } = useParams();
  const { campaign, isError, error } = useCampaign(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: campaign && /* @__PURE__ */ jsx2(AddCampaignPromotionsForm, { campaign }) });
};
export {
  AddCampaignPromotions as Component
};
