import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
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
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useDeleteSalesChannel,
  useSalesChannel,
  useSalesChannelRemoveProducts
} from "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  productsQueryKeys,
  useProducts
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/sales-channels/sales-channel-detail/loader.ts
var salesChannelDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.salesChannel.retrieve(id)
});
var salesChannelLoader = async ({ params }) => {
  const id = params.id;
  const query = salesChannelDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/sales-channels/sales-channel-detail/sales-channel-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/sales-channels/sales-channel-detail/components/sales-channel-general-section/sales-channel-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import {
  Container,
  Heading,
  StatusBadge,
  Text,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var SalesChannelGeneralSection = ({
  salesChannel
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteSalesChannel(salesChannel.id);
  const handleDelete = async () => {
    const confirm = await prompt({
      title: t("general.areYouSure"),
      description: t("salesChannels.deleteSalesChannelWarning", {
        name: salesChannel.name
      }),
      verificationInstruction: t("general.typeToConfirm"),
      verificationText: salesChannel.name,
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!confirm) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(t("salesChannels.toast.delete"));
        navigate("/settings/sales-channels", { replace: true });
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: salesChannel.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx(StatusBadge, { color: salesChannel.is_disabled ? "red" : "green", children: t(`general.${salesChannel.is_disabled ? "disabled" : "enabled"}`) }),
        /* @__PURE__ */ jsx(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                    label: t("actions.edit"),
                    to: `/settings/sales-channels/${salesChannel.id}/edit`
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
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: salesChannel.description || "-" })
    ] })
  ] });
};

// src/routes/sales-channels/sales-channel-detail/components/sales-channel-product-section/sales-channel-product-section.tsx
import { PencilSquare as PencilSquare2, Trash as Trash2 } from "@medusajs/icons";
import {
  Button,
  Checkbox,
  Container as Container2,
  Heading as Heading2,
  toast as toast2,
  usePrompt as usePrompt2
} from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var SalesChannelProductSection = ({
  salesChannel
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const {
    products,
    count,
    isPending: isLoading,
    isError,
    error
  } = useProducts(
    {
      ...searchParams,
      sales_channel_id: [salesChannel.id]
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
    count,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    meta: {
      salesChannelId: salesChannel.id
    }
  });
  const { mutateAsync } = useSalesChannelRemoveProducts(salesChannel.id);
  const prompt = usePrompt2();
  const { t } = useTranslation2();
  const handleRemove = async () => {
    const ids = Object.keys(rowSelection);
    const result = await prompt({
      title: t("general.areYouSure"),
      description: t("salesChannels.removeProductsWarning", {
        count: ids.length,
        sales_channel: salesChannel.name
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!result) {
      return;
    }
    await mutateAsync(ids, {
      onSuccess: () => {
        toast2.success(t("salesChannels.toast.update"));
        setRowSelection({});
      },
      onError: (error2) => {
        toast2.error(error2.message);
      }
    });
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsx2(Link, { to: `/settings/sales-channels/${salesChannel.id}/add-products`, children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("general.add") }) })
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        count,
        pagination: true,
        search: true,
        filters,
        navigateTo: (row) => `/products/${row.id}`,
        isLoading,
        orderBy: ["title", "variants", "status", "created_at", "updated_at"],
        queryObject: raw,
        noRecords: {
          message: t("salesChannels.products.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
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
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { salesChannelId } = table.options.meta;
          return /* @__PURE__ */ jsx2(
            ProductListCellActions,
            {
              productId: row.original.id,
              salesChannelId
            }
          );
        }
      })
    ],
    [base]
  );
};
var ProductListCellActions = ({
  salesChannelId,
  productId
}) => {
  const { t } = useTranslation2();
  const { mutateAsync } = useSalesChannelRemoveProducts(salesChannelId);
  const onRemove = async () => {
    await mutateAsync([productId], {
      onSuccess: () => {
        toast2.success(t("salesChannels.toast.update"));
      },
      onError: (e) => {
        toast2.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
              label: t("actions.edit"),
              to: `/products/${productId}`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(Trash2, {}),
              label: t("actions.remove"),
              onClick: onRemove
            }
          ]
        }
      ]
    }
  );
};

// src/routes/sales-channels/sales-channel-detail/sales-channel-detail.tsx
import after from "virtual:medusa/widgets/sales_channel/details/after";
import before from "virtual:medusa/widgets/sales_channel/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var SalesChannelDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { sales_channel, isPending: isLoading } = useSalesChannel(id, {
    initialData
  });
  if (isLoading || !sales_channel) {
    return /* @__PURE__ */ jsx3("div", { children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: sales_channel }) }, i);
    }),
    /* @__PURE__ */ jsx3(SalesChannelGeneralSection, { salesChannel: sales_channel }),
    /* @__PURE__ */ jsx3(SalesChannelProductSection, { salesChannel: sales_channel }),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: sales_channel }) }, i);
    }),
    /* @__PURE__ */ jsx3(JsonViewSection, { data: sales_channel }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
};
export {
  SalesChannelDetail as Component,
  salesChannelLoader as loader
};
