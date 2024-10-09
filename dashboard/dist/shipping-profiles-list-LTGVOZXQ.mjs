import "./chunk-LQTHYS2Z.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  useDeleteShippingProfile,
  useShippingProfiles
} from "./chunk-NTVBWR5J.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/shipping-profiles/shipping-profiles-list/shipping-profile-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/shipping-profile-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { Link } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation4 } from "react-i18next";

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/use-shipping-profile-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/shipping-options-row-actions.tsx
import { Trash } from "@medusajs/icons";
import { toast, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var ShippingOptionsRowActions = ({
  profile
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteShippingProfile(profile.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("shippingProfile.delete.title"),
      description: t("shippingProfile.delete.description", {
        name: profile.name
      }),
      verificationText: profile.name,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("shippingProfile.delete.successToast", {
            name: profile.name
          })
        );
      },
      onError: (error) => {
        toast.error(error.message);
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

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/use-shipping-profile-table-columns.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useShippingProfileTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("name", {
        header: t("fields.name"),
        cell: (cell) => cell.getValue()
      }),
      columnHelper.accessor("type", {
        header: t("fields.type"),
        cell: (cell) => cell.getValue()
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(ShippingOptionsRowActions, { profile: row.original })
      })
    ],
    [t]
  );
};

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/use-shipping-profile-table-filters.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
var useShippingProfileTableFilters = () => {
  const { t } = useTranslation3();
  let filters = [];
  filters.push({
    key: "name",
    label: t("fields.name"),
    type: "string"
  });
  filters.push({
    key: "type",
    label: t("fields.type"),
    type: "string"
  });
  const dateFilters = [
    { label: t("fields.createdAt"), key: "created_at" },
    { label: t("fields.updatedAt"), key: "updated_at" }
  ].map((f) => ({
    key: f.key,
    label: f.label,
    type: "date"
  }));
  filters = [...filters, ...dateFilters];
  return filters;
};

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/use-shipping-profile-table-query.tsx
var useShippingProfileTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(
    ["offset", "q", "order", "created_at", "updated_at", "name", "type"],
    prefix
  );
  const searchParams = {
    limit: pageSize,
    offset: raw.offset ? parseInt(raw.offset) : 0,
    q: raw.q,
    order: raw.order,
    created_at: raw.created_at ? JSON.parse(raw.created_at) : void 0,
    updated_at: raw.updated_at ? JSON.parse(raw.updated_at) : void 0,
    name: raw.name,
    type: raw.type
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/shipping-profiles/shipping-profiles-list/components/shipping-profile-list-table/shipping-profile-list-table.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ShippingProfileListTable = () => {
  const { t } = useTranslation4();
  const { raw, searchParams } = useShippingProfileTableQuery({
    pageSize: PAGE_SIZE
  });
  const { shipping_profiles, count, isLoading, isError, error } = useShippingProfiles(searchParams, {
    placeholderData: keepPreviousData
  });
  const columns = useShippingProfileTableColumns();
  const filters = useShippingProfileTableFilters();
  const { table } = useDataTable({
    data: shipping_profiles,
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
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx3(Heading, { children: t("shippingProfile.domain") }),
        /* @__PURE__ */ jsx3(Text, { className: "text-ui-fg-subtle", size: "small", children: t("shippingProfile.subtitle") })
      ] }),
      /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "create", children: t("actions.create") }) }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        pageSize: PAGE_SIZE,
        count,
        columns,
        filters,
        orderBy: ["name", "type", "created_at", "updated_at"],
        isLoading,
        navigateTo: (row) => row.id,
        queryObject: raw,
        search: true,
        pagination: true
      }
    )
  ] });
};

// src/routes/shipping-profiles/shipping-profiles-list/shipping-profile-list.tsx
import after from "virtual:medusa/widgets/shipping_profile/list/after";
import before from "virtual:medusa/widgets/shipping_profile/list/before";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ShippingProfileList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(ShippingProfileListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
export {
  ShippingProfileList as Component
};
