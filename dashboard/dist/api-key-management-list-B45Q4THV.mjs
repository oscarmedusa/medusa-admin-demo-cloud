import {
  getApiKeyStatusProps,
  getApiKeyTypeFromPathname,
  getApiKeyTypeProps,
  prettifyRedactedToken
} from "./chunk-G22WWLPG.mjs";
import {
  DateCell
} from "./chunk-B4FQDBC3.mjs";
import {
  TextCell
} from "./chunk-OI7BBNYW.mjs";
import "./chunk-OC7BQLYI.mjs";
import {
  StatusCell
} from "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
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
  useApiKeys,
  useDeleteApiKey,
  useRevokeApiKey
} from "./chunk-JJJMSDYK.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/api-key-management/api-key-management-list/api-key-management-list.tsx
import { Outlet, useLocation } from "react-router-dom";

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/api-key-management-list-table.tsx
import { Button, Container, Heading, Text as Text2 } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation4 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/use-api-key-management-table-columns.tsx
import { Badge, Copy, Text } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/api-key-row-actions.tsx
import { PencilSquare, SquareTwoStack, Trash, XCircle } from "@medusajs/icons";
import { toast, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var ApiKeyRowActions = ({
  apiKey
}) => {
  const { mutateAsync: revokeAsync } = useRevokeApiKey(apiKey.id);
  const { mutateAsync: deleteAsync } = useDeleteApiKey(apiKey.id);
  const { t } = useTranslation();
  const prompt = usePrompt();
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.delete.warning", {
        title: apiKey.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await deleteAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.delete.successToast", {
            title: apiKey.title
          })
        );
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  };
  const handleRevoke = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("apiKeyManagement.revoke.warning", {
        title: apiKey.title
      }),
      confirmText: t("apiKeyManagement.actions.revoke"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await revokeAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("apiKeyManagement.revoke.successToast", {
            title: apiKey.title
          })
        );
      },
      onError: (err) => {
        toast.error(err.message);
      }
    });
  };
  const handleCopyToken = () => {
    navigator.clipboard.writeText(apiKey.token);
    toast.success(t("apiKeyManagement.actions.copySuccessToast"));
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
              to: `${apiKey.id}/edit`
            },
            ...apiKey.type !== "secret" ? [
              {
                label: t("apiKeyManagement.actions.copy"),
                onClick: handleCopyToken,
                icon: /* @__PURE__ */ jsx(SquareTwoStack, {})
              }
            ] : []
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(XCircle, {}),
              label: t("apiKeyManagement.actions.revoke"),
              onClick: handleRevoke,
              disabled: !!apiKey.revoked_at
            },
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete,
              disabled: !apiKey.revoked_at
            }
          ]
        }
      ]
    }
  );
};

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/use-api-key-management-table-columns.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useApiKeyManagementTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("title", {
        header: t("fields.title"),
        cell: ({ getValue }) => /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: getValue() }) })
      }),
      columnHelper.accessor("redacted", {
        header: "Token",
        cell: ({ getValue, row }) => {
          const token = getValue();
          const isSecret = row.original.type === "secret";
          if (isSecret) {
            return /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", children: prettifyRedactedToken(token) });
          }
          const clickHandler = (e) => e.stopPropagation();
          return /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", className: "max-w-40", onClick: clickHandler, children: /* @__PURE__ */ jsx2(
            Copy,
            {
              content: row.original.token,
              className: "text-ui-fg-subtle",
              asChild: true,
              children: /* @__PURE__ */ jsx2(Text, { size: "xsmall", leading: "compact", className: "truncate", children: prettifyRedactedToken(token) })
            }
          ) });
        }
      }),
      columnHelper.accessor("type", {
        header: t("fields.type"),
        cell: ({ getValue }) => {
          const { label } = getApiKeyTypeProps(getValue(), t);
          return /* @__PURE__ */ jsx2(TextCell, { text: label });
        }
      }),
      columnHelper.accessor("revoked_at", {
        header: t("fields.status"),
        cell: ({ getValue }) => {
          const { color, label } = getApiKeyStatusProps(getValue(), t);
          return /* @__PURE__ */ jsx2(StatusCell, { color, children: label });
        }
      }),
      columnHelper.accessor("last_used_at", {
        header: t("apiKeyManagement.table.lastUsedAtHeader"),
        cell: ({ getValue }) => {
          const date = getValue();
          return /* @__PURE__ */ jsx2(DateCell, { date });
        }
      }),
      columnHelper.accessor("created_at", {
        header: t("fields.created"),
        cell: ({ getValue }) => {
          const date = getValue();
          return /* @__PURE__ */ jsx2(DateCell, { date });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx2(ApiKeyRowActions, { apiKey: row.original });
        }
      })
    ],
    [t]
  );
};

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/use-api-key-management-table-filters.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
var useApiKeyManagementTableFilters = () => {
  const { t } = useTranslation3();
  let filters = [];
  const dateFilters = [
    { label: t("fields.createdAt"), key: "created_at", type: "date" },
    { label: t("fields.updatedAt"), key: "updated_at", type: "date" },
    { label: t("fields.revokedAt"), key: "revoked_at", type: "date" }
  ];
  filters = [...filters, ...dateFilters];
  return filters;
};

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/use-api-key-management-table-query.tsx
var useApiKeyManagementTableQuery = ({
  prefix,
  pageSize = 20
}) => {
  const queryObject = useQueryParams(
    ["offset", "q", "created_at", "updated_at", "revoked_at", "order"],
    prefix
  );
  const { offset, created_at, updated_at, revoked_at, q, order } = queryObject;
  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0,
    revoked_at: revoked_at ? JSON.parse(revoked_at) : void 0,
    order,
    q
  };
  return {
    searchParams,
    raw: queryObject
  };
};

// src/routes/api-key-management/api-key-management-list/components/api-key-management-list-table/api-key-management-list-table.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ApiKeyManagementListTable = ({
  keyType
}) => {
  const { t } = useTranslation4();
  const { searchParams, raw } = useApiKeyManagementTableQuery({
    pageSize: PAGE_SIZE
  });
  const query = {
    ...searchParams,
    type: keyType,
    fields: "id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"
  };
  const { api_keys, count, isLoading, isError, error } = useApiKeys(query, {
    placeholderData: keepPreviousData
  });
  const filters = useApiKeyManagementTableFilters();
  const columns = useApiKeyManagementTableColumns();
  const { table } = useDataTable({
    data: api_keys || [],
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
        /* @__PURE__ */ jsx3(Heading, { level: "h2", children: keyType === "publishable" ? t(`apiKeyManagement.domain.publishable`) : t("apiKeyManagement.domain.secret") }),
        /* @__PURE__ */ jsx3(Text2, { className: "text-ui-fg-subtle", size: "small", children: keyType === "publishable" ? t(`apiKeyManagement.subtitle.publishable`) : t("apiKeyManagement.subtitle.secret") })
      ] }),
      /* @__PURE__ */ jsx3(Link, { to: "create", children: /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        filters,
        columns,
        count,
        pageSize: PAGE_SIZE,
        orderBy: ["title", "created_at", "updated_at", "revoked_at"],
        navigateTo: (row) => row.id,
        pagination: true,
        search: true,
        queryObject: raw,
        isLoading
      }
    )
  ] });
};

// src/routes/api-key-management/api-key-management-list/api-key-management-list.tsx
import after from "virtual:medusa/widgets/api_key/list/after";
import before from "virtual:medusa/widgets/api_key/list/before";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ApiKeyManagementList = () => {
  const { pathname } = useLocation();
  const keyType = getApiKeyTypeFromPathname(pathname);
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(ApiKeyManagementListTable, { keyType }),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
export {
  ApiKeyManagementList as Component
};
