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
import {
  collectionsQueryKeys,
  useCollection,
  useDeleteCollection,
  useUpdateCollectionProducts
} from "./chunk-2K25ZV2O.mjs";
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

// src/routes/collections/collection-detail/collection-detail.tsx
import { Outlet, json, useLoaderData, useParams } from "react-router-dom";

// src/routes/collections/collection-detail/components/collection-general-section/collection-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, Text, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var CollectionGeneralSection = ({
  collection
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteCollection(collection.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.deleteWarning", {
        count: 1,
        title: collection.title
      })
    });
    if (!res) {
      return;
    }
    await mutateAsync();
    navigate("../", { replace: true });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: collection.title }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: `/collections/${collection.id}/edit`,
                  disabled: !collection.id
                }
              ]
            },
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(Trash, {}),
                  label: t("actions.delete"),
                  onClick: handleDelete,
                  disabled: !collection.id
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.handle") }),
      /* @__PURE__ */ jsxs(Text, { size: "small", children: [
        "/",
        collection.handle
      ] })
    ] })
  ] });
};

// src/routes/collections/collection-detail/components/collection-product-section/collection-product-section.tsx
import { PencilSquare as PencilSquare2, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Checkbox, Container as Container2, Heading as Heading2, toast, usePrompt as usePrompt2 } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CollectionProductSection = ({
  collection
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({ pageSize: PAGE_SIZE });
  const { products, count, isLoading, isError, error } = useProducts(
    {
      limit: PAGE_SIZE,
      ...searchParams,
      collection_id: [collection.id]
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductTableFilters(["collections"]);
  const columns = useColumns();
  const { table } = useDataTable({
    data: products ?? [],
    columns,
    getRowId: (row) => row.id,
    count,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    meta: {
      collectionId: collection.id
    }
  });
  const prompt = usePrompt2();
  const { mutateAsync } = useUpdateCollectionProducts(collection.id);
  const handleRemove = async (selection) => {
    const ids = Object.keys(selection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.removeProductsWarning", {
        count: ids.length
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: ids
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.remove.successToast", {
              count: ids.length
            })
          );
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("products.domain") }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(Plus, {}),
                  label: t("actions.add"),
                  to: "products"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        search: true,
        pagination: true,
        pageSize: PAGE_SIZE,
        navigateTo: ({ original }) => `/products/${original.id}`,
        count,
        filters,
        isLoading,
        orderBy: ["title", "created_at", "updated_at"],
        queryObject: raw,
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        noRecords: {
          message: t("collections.products.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var ProductActions = ({
  product,
  collectionId
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt2();
  const { mutateAsync } = useUpdateCollectionProducts(collectionId);
  const handleRemove = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.removeSingleProductWarning", {
        title: product.title
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        remove: [product.id]
      },
      {
        onSuccess: () => {
          toast.success(
            t("collections.products.remove.successToast", {
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
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
              label: t("actions.edit"),
              to: `/products/${product.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(Trash2, {}),
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
  const columns = useProductTableColumns();
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
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { collectionId } = table.options.meta;
          return /* @__PURE__ */ jsx2(
            ProductActions,
            {
              product: row.original,
              collectionId
            }
          );
        }
      })
    ],
    [columns]
  );
};

// src/routes/collections/collection-detail/collection-detail.tsx
import after from "virtual:medusa/widgets/product_collection/details/after";
import before from "virtual:medusa/widgets/product_collection/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var CollectionDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { collection, isLoading, isError, error } = useCollection(id, {
    initialData
  });
  if (isLoading) {
    return /* @__PURE__ */ jsx3("div", { children: "Loading..." });
  }
  if (isError || !collection) {
    if (error) {
      throw error;
    }
    throw json("An unknown error occurred", 500);
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: collection }) }, i);
    }),
    /* @__PURE__ */ jsx3(CollectionGeneralSection, { collection }),
    /* @__PURE__ */ jsx3(CollectionProductSection, { collection }),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: collection }) }, i);
    }),
    /* @__PURE__ */ jsx3(JsonViewSection, { data: collection }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
};

// src/routes/collections/collection-detail/loader.ts
var collectionDetailQuery = (id) => ({
  queryKey: collectionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productCollection.retrieve(id)
});
var collectionLoader = async ({ params }) => {
  const id = params.id;
  const query = collectionDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};
export {
  CollectionDetail as Component,
  collectionLoader as loader
};
