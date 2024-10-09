import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import {
  useDeleteProductCategoryAction
} from "./chunk-J2HHVKWK.mjs";
import {
  getCategoryChildren,
  getCategoryPath,
  getIsActiveProps,
  getIsInternalProps
} from "./chunk-54IEHX46.mjs";
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
import "./chunk-TID2KHW6.mjs";
import {
  categoriesQueryKeys,
  useProductCategory,
  useUpdateProductCategoryProducts
} from "./chunk-TUUKVWGY.mjs";
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

// src/routes/categories/category-detail/category-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/categories/category-detail/components/category-general-section/category-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, StatusBadge, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var CategoryGeneralSection = ({
  category
}) => {
  const { t } = useTranslation();
  const activeProps = getIsActiveProps(category.is_active, t);
  const internalProps = getIsInternalProps(category.is_internal, t);
  const handleDelete = useDeleteProductCategoryAction(category);
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: category.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(StatusBadge, { color: activeProps.color, children: activeProps.label }),
          /* @__PURE__ */ jsx(StatusBadge, { color: internalProps.color, children: internalProps.label })
        ] }),
        /* @__PURE__ */ jsx(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                    to: "edit"
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t("actions.delete"),
                    icon: /* @__PURE__ */ jsx(Trash, {}),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.description") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: category.description || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.handle") }),
      /* @__PURE__ */ jsxs(Text, { size: "small", leading: "compact", children: [
        "/",
        category.handle
      ] })
    ] })
  ] });
};

// src/routes/categories/category-detail/components/category-organize-section/category-organize-section.tsx
import {
  FolderIllustration,
  PencilSquare as PencilSquare2,
  TriangleRightMini
} from "@medusajs/icons";
import { Badge, Container as Container2, Heading as Heading2, Text as Text2, Tooltip } from "@medusajs/ui";
import { useMemo, useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CategoryOrganizeSection = ({
  category
}) => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("categories.organize.header") }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("categories.organize.action"),
                  icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
                  to: `organize`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("categories.fields.path.label") }),
      /* @__PURE__ */ jsx2(PathDisplay, { category })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start gap-3 px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", weight: "plus", children: t("categories.fields.children.label") }),
      /* @__PURE__ */ jsx2(ChildrenDisplay, { category })
    ] })
  ] });
};
var PathDisplay = ({
  category
}) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation2();
  const {
    product_category: withParents,
    isLoading,
    isError,
    error
  } = useProductCategory(category.id, {
    include_ancestors_tree: true,
    fields: "id,name,*parent_category"
  });
  const chips = useMemo(() => getCategoryPath(withParents), [withParents]);
  if (isLoading || !withParents) {
    return /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-16" });
  }
  if (isError) {
    throw error;
  }
  if (!chips.length) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: "-" });
  }
  if (chips.length > 1 && !expanded) {
    return /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[20px_1fr] items-start gap-x-2", children: [
      /* @__PURE__ */ jsx2(FolderIllustration, {}),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-0.5", children: [
        /* @__PURE__ */ jsx2(Tooltip, { content: t("categories.fields.path.tooltip"), children: /* @__PURE__ */ jsx2(
          "button",
          {
            className: "outline-none",
            type: "button",
            onClick: () => setExpanded(true),
            children: /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: "..." })
          }
        ) }),
        /* @__PURE__ */ jsx2(TriangleRightMini, {}),
        /* @__PURE__ */ jsx2(
          Text2,
          {
            size: "xsmall",
            leading: "compact",
            weight: "plus",
            className: "truncate",
            children: chips[chips.length - 1].name
          }
        )
      ] })
    ] });
  }
  if (chips.length > 1 && expanded) {
    return /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-[20px_1fr] items-start gap-x-2", children: [
      /* @__PURE__ */ jsx2(FolderIllustration, {}),
      /* @__PURE__ */ jsx2("div", { className: "gap- flex flex-wrap items-center gap-x-0.5 gap-y-1", children: chips.map((chip, index) => {
        return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-0.5", children: [
          index === chips.length - 1 ? /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: chip.name }) : /* @__PURE__ */ jsx2(
            LinkButton,
            {
              to: `/categories/${chip.id}`,
              className: "txt-compact-xsmall-plus text-ui-fg-subtle hover:text-ui-fg-base focus-visible:text-ui-fg-base",
              children: chip.name
            }
          ),
          index < chips.length - 1 && /* @__PURE__ */ jsx2(TriangleRightMini, {})
        ] }, chip.id);
      }) })
    ] });
  }
  return /* @__PURE__ */ jsx2("div", { className: "grid grid-cols-1 items-start gap-x-2", children: chips.map((chip, index) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-0.5", children: [
    /* @__PURE__ */ jsx2(Text2, { size: "xsmall", leading: "compact", weight: "plus", children: chip.name }),
    index < chips.length - 1 && /* @__PURE__ */ jsx2(TriangleRightMini, {})
  ] }, chip.id)) });
};
var ChildrenDisplay = ({
  category
}) => {
  const {
    product_category: withChildren,
    isLoading,
    isError,
    error
  } = useProductCategory(category.id, {
    include_descendants_tree: true,
    fields: "id,name,category_children"
  });
  const chips = useMemo(() => getCategoryChildren(withChildren), [withChildren]);
  if (isLoading || !withChildren) {
    return /* @__PURE__ */ jsx2(Skeleton, { className: "h-5 w-16" });
  }
  if (isError) {
    throw error;
  }
  if (!chips.length) {
    return /* @__PURE__ */ jsx2(Text2, { size: "small", leading: "compact", children: "-" });
  }
  return /* @__PURE__ */ jsx2("div", { className: "flex flex-wrap gap-1", children: chips.map((chip) => /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", asChild: true, children: /* @__PURE__ */ jsx2(Link, { to: `/categories/${chip.id}`, children: chip.name }) }, chip.id)) });
};

// src/routes/categories/category-detail/components/category-product-section/category-product-section.tsx
import { PlusMini } from "@medusajs/icons";
import {
  Checkbox,
  CommandBar,
  Container as Container3,
  Heading as Heading3,
  toast,
  usePrompt
} from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo as useMemo2, useState as useState2 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CategoryProductSection = ({
  category
}) => {
  const { t } = useTranslation3();
  const prompt = usePrompt();
  const [selection, setSelection] = useState2({});
  const { raw, searchParams } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      ...searchParams,
      category_id: [category.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useProductTableFilters(["categories"]);
  const { table } = useDataTable({
    data: products || [],
    columns,
    count,
    getRowId: (original) => original.id,
    pageSize: PAGE_SIZE,
    enableRowSelection: true,
    enablePagination: true,
    rowSelection: {
      state: selection,
      updater: setSelection
    }
  });
  const { mutateAsync } = useUpdateProductCategoryProducts(category.id);
  const handleRemove = async () => {
    const selected = Object.keys(selection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("categories.products.remove.confirmation", {
        count: selected.length
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: selected
      },
      {
        onSuccess: () => {
          toast.success(
            t("categories.products.remove.successToast", {
              count: selected.length
            })
          );
          setSelection({});
        },
        onError: (error2) => {
          toast.error(error2.message);
        }
      }
    );
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading3, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.add"),
                  icon: /* @__PURE__ */ jsx3(PlusMini, {}),
                  to: "products"
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
        orderBy: ["title", "created_at", "updated_at"],
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => `/products/${row.id}`,
        isLoading,
        queryObject: raw,
        noRecords: {
          message: t("categories.products.list.noRecordsMessage")
        }
      }
    ),
    /* @__PURE__ */ jsx3(CommandBar, { open: !!Object.keys(selection).length, children: /* @__PURE__ */ jsxs3(CommandBar.Bar, { children: [
      /* @__PURE__ */ jsx3(CommandBar.Value, { children: t("general.countSelected", {
        count: Object.keys(selection).length
      }) }),
      /* @__PURE__ */ jsx3(CommandBar.Seperator, {}),
      /* @__PURE__ */ jsx3(
        CommandBar.Command,
        {
          action: handleRemove,
          label: t("actions.remove"),
          shortcut: "r"
        }
      )
    ] }) })
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useProductTableColumns();
  return useMemo2(
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
      ...base
    ],
    [base]
  );
};

// src/routes/categories/category-detail/category-detail.tsx
import after from "virtual:medusa/widgets/product_category/details/after";
import before from "virtual:medusa/widgets/product_category/details/before";
import sideAfter from "virtual:medusa/widgets/product_category/details/side/after";
import sideBefore from "virtual:medusa/widgets/product_category/details/side/before";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var CategoryDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { product_category, isLoading, isError, error } = useProductCategory(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isLoading || !product_category) {
    return /* @__PURE__ */ jsx4("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: product_category }) }, i);
    }),
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx4(CategoryGeneralSection, { category: product_category }),
        /* @__PURE__ */ jsx4(CategoryProductSection, { category: product_category }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: product_category }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: product_category }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:max-w-[400px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: product_category }) }, i);
        }),
        /* @__PURE__ */ jsx4(CategoryOrganizeSection, { category: product_category }),
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, { data: product_category }) }, i);
        }),
        /* @__PURE__ */ jsx4("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx4(JsonViewSection, { data: product_category }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};

// src/routes/categories/category-detail/loader.ts
var categoryDetailQuery = (id) => ({
  queryKey: categoriesQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productCategory.retrieve(id)
});
var categoryLoader = async ({ params }) => {
  const id = params.id;
  const query = categoryDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  CategoryDetail as Component,
  categoryLoader as loader
};
