import {
  ListSummary
} from "./chunk-I3VB6NM2.mjs";
import {
  useDeletePriceListAction
} from "./chunk-YNJS6EQD.mjs";
import {
  getPriceListStatus
} from "./chunk-G2J2T2QU.mjs";
import "./chunk-XUQVQCAO.mjs";
import {
  DateRangeDisplay
} from "./chunk-W5NWKBC6.mjs";
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
import "./chunk-6GU6IDUA.mjs";
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
  Skeleton
} from "./chunk-XDUX5ONP.mjs";
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
import {
  priceListsQueryKeys,
  usePriceList,
  usePriceListLinkProducts
} from "./chunk-D6JOCXZR.mjs";
import {
  useCustomerGroups
} from "./chunk-ZDMW42ZH.mjs";
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
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
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

// src/routes/price-lists/price-list-detail/loader.ts
var pricingDetailQuery = (id) => ({
  queryKey: priceListsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.priceList.retrieve(id)
});
var pricingLoader = async ({ params }) => {
  const id = params.id;
  const query = pricingDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/price-lists/price-list-detail/price-list-detail.tsx
import { Outlet, useParams } from "react-router-dom";

// src/routes/price-lists/price-list-detail/components/price-list-configuration-section/price-list-configuration-section.tsx
import { PencilSquare } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PriceListConfigurationSection = ({
  priceList
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Container, { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("priceLists.configuration.header") }),
        /* @__PURE__ */ jsx(CustomerGroupDisplay, { priceList })
      ] }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "configuration",
                  icon: /* @__PURE__ */ jsx(PencilSquare, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      DateRangeDisplay,
      {
        endsAt: priceList.ends_at,
        startsAt: priceList.starts_at,
        showTime: true
      }
    )
  ] });
};
var CustomerGroupDisplay = ({
  priceList
}) => {
  const { t } = useTranslation();
  const customerGroupIds = priceList.rules.customer_group_id;
  const { customer_groups, isPending, isError, error } = useCustomerGroups(
    {
      id: customerGroupIds
    },
    {
      enabled: !!customerGroupIds?.length
    }
  );
  if (isError) {
    throw error;
  }
  if (!customerGroupIds?.length) {
    return null;
  }
  if (isPending || !customer_groups) {
    return /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-full max-w-48" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "txt-small-plus text-ui-fg-muted flex items-center gap-x-1.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle", children: t("priceLists.fields.customerAvailability.attribute") }),
    /* @__PURE__ */ jsx("span", { children: "\xB7" }),
    /* @__PURE__ */ jsx(
      ListSummary,
      {
        list: customer_groups.map((group) => group.name),
        n: 1,
        className: "txt-small-plus text-ui-fg-muted"
      }
    )
  ] });
};

// src/routes/price-lists/price-list-detail/components/price-list-general-section/price-list-general-section.tsx
import { PencilSquare as PencilSquare2, Trash } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2, StatusBadge, Text } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PriceListGeneralSection = ({
  priceList
}) => {
  const { t } = useTranslation2();
  const overrideCount = priceList.prices?.length || 0;
  const { color, text } = getPriceListStatus(t, priceList);
  const handleDelete = useDeletePriceListAction({ priceList });
  const type = priceList.type === "sale" ? t("priceLists.fields.type.options.sale.label") : t("priceLists.fields.type.options.override.label");
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { children: priceList.title }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx2(StatusBadge, { color, children: text }),
        /* @__PURE__ */ jsx2(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    to: "edit",
                    icon: /* @__PURE__ */ jsx2(PencilSquare2, {})
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t("actions.delete"),
                    onClick: handleDelete,
                    icon: /* @__PURE__ */ jsx2(Trash, {})
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { leading: "compact", size: "small", weight: "plus", children: t("fields.type") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", className: "text-pretty", children: type })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { leading: "compact", size: "small", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", className: "text-pretty", children: priceList.description })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { leading: "compact", size: "small", weight: "plus", children: t("priceLists.fields.priceOverrides.label") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", className: "text-pretty", children: overrideCount || "-" })
    ] })
  ] });
};

// src/routes/price-lists/price-list-detail/components/price-list-product-section/price-list-product-section.tsx
import { PencilSquare as PencilSquare3, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Checkbox, Container as Container3, Heading as Heading3, toast, usePrompt } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "p";
var PriceListProductSection = ({
  priceList
}) => {
  const { t } = useTranslation3();
  const navigate = useNavigate();
  const prompt = usePrompt();
  const [rowSelection, setRowSelection] = useState({});
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      ...searchParams,
      price_list_id: [priceList.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTableFilters();
  const columns = useColumns(priceList);
  const { mutateAsync } = usePriceListLinkProducts(priceList.id);
  const { table } = useDataTable({
    data: products || [],
    count,
    columns,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    prefix: PREFIX
  });
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("priceLists.products.delete.confirmation", {
        count: Object.keys(rowSelection).length
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    mutateAsync(
      {
        remove: Object.keys(rowSelection)
      },
      {
        onSuccess: () => {
          toast.success(
            t("priceLists.products.delete.successToast", {
              count: Object.keys(rowSelection).length
            })
          );
          setRowSelection({});
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  const handleEdit = async () => {
    const ids = Object.keys(rowSelection).join(",");
    navigate(`products/edit?ids[]=${ids}`);
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading3, { children: t("priceLists.products.header") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("priceLists.products.actions.addProducts"),
                  to: "products/add",
                  icon: /* @__PURE__ */ jsx3(Plus, {})
                },
                {
                  label: t("priceLists.products.actions.editPrices"),
                  to: "products/edit",
                  icon: /* @__PURE__ */ jsx3(PencilSquare3, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        filters,
        columns,
        count,
        pageSize: PAGE_SIZE,
        isLoading,
        navigateTo: (row) => `/products/${row.original.id}`,
        orderBy: ["title", "created_at", "updated_at"],
        commands: [
          {
            action: handleEdit,
            label: t("actions.edit"),
            shortcut: "e"
          },
          {
            action: handleDelete,
            label: t("actions.delete"),
            shortcut: "d"
          }
        ],
        pagination: true,
        search: true,
        prefix: PREFIX,
        queryObject: raw
      }
    )
  ] });
};
var ProductRowAction = ({
  product,
  priceList
}) => {
  const { t } = useTranslation3();
  const prompt = usePrompt();
  const { mutateAsync } = usePriceListLinkProducts(priceList.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("priceLists.products.delete.confirmation", {
        count: 1
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    mutateAsync(
      {
        remove: [product.id]
      },
      {
        onSuccess: () => {
          toast.success(
            t("priceLists.products.delete.successToast", {
              count: 1
            })
          );
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx3(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(PencilSquare3, {}),
              label: t("priceLists.products.actions.editPrices"),
              to: `products/edit?ids[]=${product.id}`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx3(Trash2, {}),
              label: t("actions.remove"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = (priceList) => {
  const base = useProductTableColumns();
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
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx3(ProductRowAction, { product: row.original, priceList })
      })
    ],
    [base, priceList]
  );
};

// src/routes/price-lists/price-list-detail/price-list-detail.tsx
import after from "virtual:medusa/widgets/price_list/details/after";
import before from "virtual:medusa/widgets/price_list/details/before";
import sideAfter from "virtual:medusa/widgets/price_list/details/side/after";
import sideBefore from "virtual:medusa/widgets/price_list/details/side/before";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var PriceListDetails = () => {
  const { id } = useParams();
  const { price_list, isLoading, isError, error } = usePriceList(id);
  if (isLoading || !price_list) {
    return /* @__PURE__ */ jsx4("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: price_list }) }, i);
    }),
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-x-4 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex flex-1 flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx4(PriceListGeneralSection, { priceList: price_list }),
        /* @__PURE__ */ jsx4(PriceListProductSection, { priceList: price_list }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: price_list }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: price_list }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-2 flex w-full max-w-[100%] flex-col gap-y-2 xl:mt-0 xl:max-w-[440px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: price_list }) }, i);
        }),
        /* @__PURE__ */ jsx4(PriceListConfigurationSection, { priceList: price_list }),
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: price_list }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: price_list }) })
      ] }),
      /* @__PURE__ */ jsx4(Outlet, {})
    ] })
  ] });
};
export {
  PriceListDetails as Component,
  pricingLoader as loader
};
