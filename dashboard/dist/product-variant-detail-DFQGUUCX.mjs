import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import {
  getLocaleAmount
} from "./chunk-FSMQADBD.mjs";
import {
  VARIANT_DETAIL_FIELDS
} from "./chunk-EUTK2A3J.mjs";
import "./chunk-YOYOJU5D.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import {
  NoRecords
} from "./chunk-WX2SMNCD.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useDeleteVariant,
  useProductVariant,
  variantsQueryKeys
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-variants/product-variant-detail/loader.ts
var variantDetailQuery = (productId, variantId) => ({
  queryKey: variantsQueryKeys.detail(variantId),
  queryFn: async () => sdk.admin.product.retrieveVariant(productId, variantId, {
    fields: VARIANT_DETAIL_FIELDS
  })
});
var variantLoader = async ({ params }) => {
  const productId = params.id;
  const variantId = params.variant_id;
  const query = variantDetailQuery(productId, variantId);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-variants/product-variant-detail/product-variant-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/product-variants/product-variant-detail/components/variant-general-section/variant-general-section.tsx
import { Badge, Container, Heading, usePrompt } from "@medusajs/ui";
import { Component, PencilSquare, Trash } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
function VariantGeneralSection({ variant }) {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const hasInventoryKit = variant.inventory?.length > 1;
  const { mutateAsync } = useDeleteVariant(variant.product_id, variant.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("products.variant.deleteWarning", {
        title: variant.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        navigate("..", { replace: true });
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Heading, { children: variant.title }),
          hasInventoryKit && /* @__PURE__ */ jsx("span", { className: "text-ui-fg-muted font-normal", children: /* @__PURE__ */ jsx(Component, {}) })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle txt-small mt-2", children: t("labels.productVariant") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "edit",
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
      ) })
    ] }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.sku"), value: variant.sku }),
    variant.options.map((o) => /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: o.option?.title,
        value: /* @__PURE__ */ jsx(Badge, { size: "2xsmall", children: o.value })
      },
      o.id
    ))
  ] });
}

// src/routes/product-variants/product-variant-detail/components/variant-inventory-section/variant-inventory-section.tsx
import { useTranslation as useTranslation4 } from "react-i18next";
import { Buildings as Buildings2, Component as Component2 } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";

// src/routes/product-variants/product-variant-detail/components/variant-inventory-section/inventory-actions.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
import { Buildings } from "@medusajs/icons";
import { jsx as jsx2 } from "react/jsx-runtime";
var InventoryActions = ({ item }) => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(Buildings, {}),
              label: t("products.variant.inventory.navigateToItem"),
              to: `/inventory/${item.id}`
            }
          ]
        }
      ]
    }
  );
};

// src/routes/product-variants/product-variant-detail/components/variant-inventory-section/use-inventory-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx3 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useInventoryTableColumns = () => {
  const { t } = useTranslation3();
  return useMemo(
    () => [
      columnHelper.accessor("title", {
        header: t("fields.title"),
        cell: ({ getValue }) => {
          const title = getValue();
          if (!title) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: title }) });
        }
      }),
      columnHelper.accessor("sku", {
        header: t("fields.sku"),
        cell: ({ getValue }) => {
          const sku = getValue();
          if (!sku) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: sku }) });
        }
      }),
      columnHelper.accessor("required_quantity", {
        header: t("fields.requiredQuantity"),
        cell: ({ getValue }) => {
          const quantity = getValue();
          if (Number.isNaN(quantity)) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: quantity }) });
        }
      }),
      columnHelper.display({
        id: "inventory_quantity",
        header: t("fields.inventory"),
        cell: ({ getValue, row: { original: inventory } }) => {
          if (!inventory.location_levels?.length) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          let quantity = 0;
          let locations = 0;
          inventory.location_levels.forEach((level) => {
            quantity += level.available_quantity;
            locations += 1;
          });
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: t("products.variant.tableItem", {
            availableCount: quantity,
            locationCount: locations,
            count: locations
          }) }) });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx3(InventoryActions, { item: row.original })
      })
    ],
    [t]
  );
};

// src/routes/product-variants/product-variant-detail/components/variant-inventory-section/variant-inventory-section.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 20;
function VariantInventorySection({
  inventoryItems
}) {
  const { t } = useTranslation4();
  const columns = useInventoryTableColumns();
  const { table } = useDataTable({
    data: inventoryItems ?? [],
    columns,
    count: inventoryItems.length,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  const hasKit = inventoryItems.length > 1;
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx4(Heading2, { level: "h2", children: t("fields.inventoryItems") }) }),
      /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsx4(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t(
                    hasKit ? "products.variant.inventory.manageKit" : "products.variant.inventory.manageItems"
                  ),
                  to: "manage-items",
                  icon: hasKit ? /* @__PURE__ */ jsx4(Component2, {}) : /* @__PURE__ */ jsx4(Buildings2, {})
                }
              ]
            }
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx4(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count: inventoryItems.length,
        navigateTo: (row) => `/inventory/${row.id}`
      }
    )
  ] });
}
function InventorySectionPlaceholder() {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsx4(Container2, { className: "divide-y p-0", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx4(Heading2, { level: "h2", children: t("fields.inventoryItems") }),
      /* @__PURE__ */ jsx4("span", { className: "txt-small text-ui-fg-subtle", children: t("products.variant.inventory.notManagedDesc") })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsx4(LinkButton, { to: "edit", children: t("products.variant.edit.header") }) })
  ] }) });
}

// src/routes/product-variants/product-variant-detail/components/variant-prices-section/variant-prices-section.tsx
import { useTranslation as useTranslation5 } from "react-i18next";
import { useState } from "react";
import { CurrencyDollar } from "@medusajs/icons";
import { Button, Container as Container3, Heading as Heading3 } from "@medusajs/ui";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function VariantPricesSection({ variant }) {
  const { t } = useTranslation5();
  const prices = variant.prices.filter((p) => !Object.keys(p.rules || {}).length).sort((p1, p2) => p1.currency_code?.localeCompare(p2.currency_code));
  const hasPrices = !!prices.length;
  const [pageSize, setPageSize] = useState(3);
  const displayPrices = prices.slice(0, pageSize);
  const onShowMore = () => {
    setPageSize(pageSize + 3);
  };
  return /* @__PURE__ */ jsxs3(Container3, { className: "flex flex-col divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx5(Heading3, { level: "h2", children: t("labels.prices") }),
      /* @__PURE__ */ jsx5(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: `/products/${variant.product_id}/variants/${variant.id}/prices`,
                  icon: /* @__PURE__ */ jsx5(CurrencyDollar, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    !hasPrices && /* @__PURE__ */ jsx5(NoRecords, { className: "h-60" }),
    displayPrices.map((price) => {
      return /* @__PURE__ */ jsxs3(
        "div",
        {
          className: "txt-small text-ui-fg-subtle flex justify-between px-6 py-4",
          children: [
            /* @__PURE__ */ jsx5("span", { className: "font-medium", children: price.currency_code.toUpperCase() }),
            /* @__PURE__ */ jsx5("span", { children: getLocaleAmount(price.amount, price.currency_code) })
          ]
        },
        price.id
      );
    }),
    hasPrices && /* @__PURE__ */ jsxs3("div", { className: "txt-small text-ui-fg-subtle flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx5("span", { className: "font-medium", children: t("products.variant.pricesPagination", {
        total: prices.length,
        current: Math.min(pageSize, prices.length)
      }) }),
      /* @__PURE__ */ jsx5(
        Button,
        {
          onClick: onShowMore,
          disabled: pageSize >= prices.length,
          className: "-mr-3 text-blue-500",
          variant: "transparent",
          children: t("actions.showMore")
        }
      )
    ] })
  ] });
}

// src/routes/product-variants/product-variant-detail/product-variant-detail.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var ProductVariantDetail = () => {
  const initialData = useLoaderData();
  const { id, variant_id } = useParams();
  const { variant, isLoading, isError, error } = useProductVariant(
    id,
    variant_id,
    { fields: VARIANT_DETAIL_FIELDS },
    {
      initialData
    }
  );
  if (isLoading || !variant) {
    return /* @__PURE__ */ jsx6("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-2", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx6(VariantGeneralSection, { variant }),
        !variant.manage_inventory ? /* @__PURE__ */ jsx6(InventorySectionPlaceholder, {}) : /* @__PURE__ */ jsx6(
          VariantInventorySection,
          {
            inventoryItems: variant.inventory_items.map((i) => {
              return {
                ...i.inventory,
                required_quantity: i.required_quantity,
                variant
              };
            })
          }
        ),
        /* @__PURE__ */ jsx6("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx6(JsonViewSection, { data: variant, root: "product" }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]", children: [
        /* @__PURE__ */ jsx6(VariantPricesSection, { variant }),
        /* @__PURE__ */ jsx6("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx6(JsonViewSection, { data: variant }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx6(Outlet, {})
  ] });
};
export {
  ProductVariantDetail as Component,
  variantLoader as loader
};
