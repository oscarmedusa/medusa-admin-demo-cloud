import {
  TaxRateRuleReferenceType
} from "./chunk-VNYVDWWH.mjs";
import {
  useProductTagTableColumns
} from "./chunk-JXL44QNJ.mjs";
import {
  useProductTypeTableColumns
} from "./chunk-UUDR5EKI.mjs";
import {
  useCustomerGroupTableColumns
} from "./chunk-QIWEFQ5Y.mjs";
import {
  useCollectionTableColumns
} from "./chunk-Y35YD3YU.mjs";
import {
  useCollectionTableQuery,
  useProductTagTableQuery
} from "./chunk-5R4UGQUP.mjs";
import {
  useProductTypeTableQuery
} from "./chunk-TDK3JDOB.mjs";
import {
  useCollectionTableFilters,
  useProductTagTableFilters
} from "./chunk-IRV425DP.mjs";
import {
  useProductTypeTableFilters
} from "./chunk-CBSCX7RE.mjs";
import {
  useCustomerGroupTableQuery
} from "./chunk-MOSRJHJ3.mjs";
import {
  useCustomerGroupTableFilters
} from "./chunk-DLZWPHHO.mjs";
import {
  useProductTableColumns
} from "./chunk-QWRBWAVK.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-S3UCQAPU.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import {
  StackedDrawer,
  StackedFocusModal
} from "./chunk-RLLZZQKN.mjs";
import {
  useProductTags
} from "./chunk-APCXHN2Y.mjs";
import {
  useProductTypes
} from "./chunk-DZ7P4IRT.mjs";
import {
  useCustomerGroups
} from "./chunk-ZDMW42ZH.mjs";
import {
  useCollections
} from "./chunk-2K25ZV2O.mjs";
import {
  useProducts
} from "./chunk-K3ZYJA7Z.mjs";

// src/routes/tax-regions/common/components/target-form/target-form.tsx
import { Button, Checkbox } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
function initRowSelection(state) {
  return state.reduce((acc, reference) => {
    acc[reference.value] = true;
    return acc;
  }, {});
}
var TargetForm = ({
  referenceType,
  type,
  setState,
  state
}) => {
  const { t } = useTranslation();
  const Component = type === "focus" ? StackedFocusModal : StackedDrawer;
  const [intermediate, setIntermediate] = useState(state);
  const handleSave = () => {
    setState(intermediate);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex size-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx(Component.Body, { className: "min-h-0 p-0", children: /* @__PURE__ */ jsx(
      Table,
      {
        referenceType,
        initialRowState: initRowSelection(state),
        intermediate,
        setIntermediate
      }
    ) }),
    /* @__PURE__ */ jsxs(Component.Footer, { children: [
      /* @__PURE__ */ jsx(Component.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", type: "button", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { type: "button", size: "small", onClick: handleSave, children: t("actions.save") })
    ] })
  ] });
};
var Table = ({ referenceType, ...props }) => {
  switch (referenceType) {
    case "customer_groups" /* CUSTOMER_GROUP */:
      return /* @__PURE__ */ jsx(CustomerGroupTable, { ...props });
    case "products" /* PRODUCT */:
      return /* @__PURE__ */ jsx(ProductTable, { ...props });
    case "product_collections" /* PRODUCT_COLLECTION */:
      return /* @__PURE__ */ jsx(ProductCollectionTable, { ...props });
    case "product_types" /* PRODUCT_TYPE */:
      return /* @__PURE__ */ jsx(ProductTypeTable, { ...props });
    case "product_tags" /* PRODUCT_TAG */:
      return /* @__PURE__ */ jsx(ProductTagTable, { ...props });
    default:
      return null;
  }
};
var PAGE_SIZE = 50;
var PREFIX_CUSTOMER_GROUP = "cg";
var CustomerGroupTable = ({
  initialRowState,
  intermediate,
  setIntermediate
}) => {
  const [rowSelection, setRowSelection] = useState(initialRowState);
  useCleanupSearchParams();
  const { searchParams, raw } = useCustomerGroupTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX_CUSTOMER_GROUP
  });
  const { customer_groups, count, isLoading, isError, error } = useCustomerGroups(searchParams, {
    placeholderData: keepPreviousData
  });
  const updater = (value) => {
    const state = typeof value === "function" ? value(rowSelection) : value;
    const currentIds = Object.keys(rowSelection);
    const ids = Object.keys(state);
    const newIds = ids.filter((id) => !currentIds.includes(id));
    const removedIds = currentIds.filter((id) => !ids.includes(id));
    const newCustomerGroups = customer_groups?.filter((cg) => newIds.includes(cg.id)).map((cg) => ({ value: cg.id, label: cg.name })) || [];
    const filteredIntermediate = intermediate.filter(
      (cg) => !removedIds.includes(cg.value)
    );
    setIntermediate([...filteredIntermediate, ...newCustomerGroups]);
    setRowSelection(state);
  };
  const filters = useCustomerGroupTableFilters();
  const columns = useGroupColumns();
  const { table } = useDataTable({
    data: customer_groups || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    prefix: PREFIX_CUSTOMER_GROUP
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      filters,
      orderBy: ["name", "created_at", "updated_at"],
      layout: "fill",
      pagination: true,
      search: true,
      prefix: PREFIX_CUSTOMER_GROUP,
      queryObject: raw
    }
  );
};
var cgColumnHelper = createColumnHelper();
var useGroupColumns = () => {
  const base = useCustomerGroupTableColumns();
  return useMemo(
    () => [
      cgColumnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
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
var PREFIX_PRODUCT = "p";
var ProductTable = ({
  initialRowState,
  intermediate,
  setIntermediate
}) => {
  const [rowSelection, setRowSelection] = useState(initialRowState);
  useCleanupSearchParams();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT
  });
  const { products, count, isLoading, isError, error } = useProducts(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (value) => {
    const state = typeof value === "function" ? value(rowSelection) : value;
    const currentIds = Object.keys(rowSelection);
    const ids = Object.keys(state);
    const newIds = ids.filter((id) => !currentIds.includes(id));
    const removedIds = currentIds.filter((id) => !ids.includes(id));
    const newProducts = products?.filter((p) => newIds.includes(p.id)).map((p) => ({
      value: p.id,
      label: p.title
    })) || [];
    const filteredIntermediate = intermediate.filter(
      (p) => !removedIds.includes(p.value)
    );
    setIntermediate([...filteredIntermediate, ...newProducts]);
    setRowSelection(state);
  };
  const filters = useProductTableFilters();
  const columns = useProductColumns();
  const { table } = useDataTable({
    data: products || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      filters,
      orderBy: ["title", "created_at", "updated_at"],
      layout: "fill",
      pagination: true,
      search: true,
      prefix: PREFIX_PRODUCT,
      queryObject: raw
    }
  );
};
var pColumnHelper = createColumnHelper();
var useProductColumns = () => {
  const base = useProductTableColumns();
  return useMemo(
    () => [
      pColumnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
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
var PREFIX_PRODUCT_COLLECTION = "pc";
var ProductCollectionTable = ({
  initialRowState,
  intermediate,
  setIntermediate
}) => {
  const [rowSelection, setRowSelection] = useState(initialRowState);
  useCleanupSearchParams();
  const { searchParams, raw } = useCollectionTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_COLLECTION
  });
  const { collections, count, isLoading, isError, error } = useCollections(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (value) => {
    const state = typeof value === "function" ? value(rowSelection) : value;
    const currentIds = Object.keys(rowSelection);
    const ids = Object.keys(state);
    const newIds = ids.filter((id) => !currentIds.includes(id));
    const removedIds = currentIds.filter((id) => !ids.includes(id));
    const newCollections = collections?.filter((p) => newIds.includes(p.id)).map((p) => ({
      value: p.id,
      label: p.title
    })) || [];
    const filteredIntermediate = intermediate.filter(
      (p) => !removedIds.includes(p.value)
    );
    setIntermediate([...filteredIntermediate, ...newCollections]);
    setRowSelection(state);
  };
  const filters = useCollectionTableFilters();
  const columns = useCollectionColumns();
  const { table } = useDataTable({
    data: collections || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_COLLECTION
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      filters,
      orderBy: ["title", "created_at", "updated_at"],
      layout: "fill",
      pagination: true,
      search: true,
      prefix: PREFIX_PRODUCT_COLLECTION,
      queryObject: raw
    }
  );
};
var pcColumnHelper = createColumnHelper();
var useCollectionColumns = () => {
  const base = useCollectionTableColumns();
  return useMemo(
    () => [
      pcColumnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
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
var PREFIX_PRODUCT_TYPE = "pt";
var ProductTypeTable = ({
  initialRowState,
  intermediate,
  setIntermediate
}) => {
  const [rowSelection, setRowSelection] = useState(initialRowState);
  useCleanupSearchParams();
  const { searchParams, raw } = useProductTypeTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_TYPE
  });
  const { product_types, count, isLoading, isError, error } = useProductTypes(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (value) => {
    const state = typeof value === "function" ? value(rowSelection) : value;
    const currentIds = Object.keys(rowSelection);
    const ids = Object.keys(state);
    const newIds = ids.filter((id) => !currentIds.includes(id));
    const removedIds = currentIds.filter((id) => !ids.includes(id));
    const newTypes = product_types?.filter((p) => newIds.includes(p.id)).map((p) => ({
      value: p.id,
      label: p.value
    })) || [];
    const filteredIntermediate = intermediate.filter(
      (p) => !removedIds.includes(p.value)
    );
    setIntermediate([...filteredIntermediate, ...newTypes]);
    setRowSelection(state);
  };
  const filters = useProductTypeTableFilters();
  const columns = useProductTypeColumns();
  const { table } = useDataTable({
    data: product_types || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_TYPE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      filters,
      orderBy: ["value", "created_at", "updated_at"],
      layout: "fill",
      pagination: true,
      search: true,
      prefix: PREFIX_PRODUCT_TYPE,
      queryObject: raw
    }
  );
};
var ptColumnHelper = createColumnHelper();
var useProductTypeColumns = () => {
  const base = useProductTypeTableColumns();
  return useMemo(
    () => [
      ptColumnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
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
var PREFIX_PRODUCT_TAG = "ptag";
var ProductTagTable = ({
  initialRowState,
  intermediate,
  setIntermediate
}) => {
  const [rowSelection, setRowSelection] = useState(initialRowState);
  useCleanupSearchParams();
  const { searchParams, raw } = useProductTagTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_TAG
  });
  const { product_tags, count, isLoading, isError, error } = useProductTags(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const updater = (value) => {
    const state = typeof value === "function" ? value(rowSelection) : value;
    const currentIds = Object.keys(rowSelection);
    const ids = Object.keys(state);
    const newIds = ids.filter((id) => !currentIds.includes(id));
    const removedIds = currentIds.filter((id) => !ids.includes(id));
    const newTags = product_tags?.filter((p) => newIds.includes(p.id)).map((p) => ({
      value: p.id,
      label: p.value
    })) || [];
    const filteredIntermediate = intermediate.filter(
      (p) => !removedIds.includes(p.value)
    );
    setIntermediate([...filteredIntermediate, ...newTags]);
    setRowSelection(state);
  };
  const filters = useProductTagTableFilters();
  const columns = useProductTagColumns();
  const { table } = useDataTable({
    data: product_tags || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    rowSelection: {
      state: rowSelection,
      updater
    },
    pageSize: PAGE_SIZE,
    prefix: PREFIX_PRODUCT_TAG
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      filters,
      orderBy: ["value", "created_at", "updated_at"],
      layout: "fill",
      pagination: true,
      search: true,
      prefix: PREFIX_PRODUCT_TAG,
      queryObject: raw
    }
  );
};
var ptagColumnHelper = createColumnHelper();
var useProductTagColumns = () => {
  const base = useProductTagTableColumns();
  return useMemo(
    () => [
      ptagColumnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
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
var useCleanupSearchParams = () => {
  const [_, setSearchParams] = useSearchParams();
  useEffect(() => {
    return () => {
      setSearchParams({});
    };
  }, []);
};

// src/routes/tax-regions/common/components/target-item/target-item.tsx
import { XMarkMini } from "@medusajs/icons";
import { IconButton, Text } from "@medusajs/ui";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TargetItem = ({ index, label, onRemove }) => {
  return /* @__PURE__ */ jsxs2("div", { className: "bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5", children: [
    /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: label }),
    /* @__PURE__ */ jsx2(
      IconButton,
      {
        size: "small",
        variant: "transparent",
        type: "button",
        onClick: () => onRemove(index),
        children: /* @__PURE__ */ jsx2(XMarkMini, {})
      }
    )
  ] });
};

// src/routes/tax-regions/common/schemas.ts
import { z } from "zod";
var TaxRateRuleReferenceSchema = z.object({
  value: z.string(),
  label: z.string()
});
var TaxRateRuleTargetSchema = z.object({
  reference_type: z.nativeEnum(TaxRateRuleReferenceType),
  references: z.array(TaxRateRuleReferenceSchema)
});

// src/routes/tax-regions/common/utils.ts
var createTaxRulePayload = (target) => {
  return target.references.map((reference) => ({
    reference: target.reference_type,
    reference_id: reference.value
  }));
};

export {
  TargetForm,
  TargetItem,
  TaxRateRuleReferenceSchema,
  createTaxRulePayload
};
