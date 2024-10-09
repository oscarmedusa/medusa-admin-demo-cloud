import {
  DescriptionCell,
  DescriptionHeader,
  NameCell,
  NameHeader
} from "./chunk-GA34GXNI.mjs";
import {
  TextHeader
} from "./chunk-OI7BBNYW.mjs";
import {
  StatusCell
} from "./chunk-ADOCJB6L.mjs";

// src/hooks/table/columns/use-sales-channel-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useSalesChannelTableColumns = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => /* @__PURE__ */ jsx(NameHeader, {}),
        cell: ({ getValue }) => /* @__PURE__ */ jsx(NameCell, { name: getValue() })
      }),
      columnHelper.accessor("description", {
        header: () => /* @__PURE__ */ jsx(DescriptionHeader, {}),
        cell: ({ getValue }) => /* @__PURE__ */ jsx(DescriptionCell, { description: getValue() })
      }),
      columnHelper.accessor("is_disabled", {
        header: () => /* @__PURE__ */ jsx(TextHeader, { text: t("fields.status") }),
        cell: ({ getValue }) => {
          const value = getValue();
          return /* @__PURE__ */ jsx(StatusCell, { color: value ? "grey" : "green", children: value ? t("general.disabled") : t("general.enabled") });
        }
      })
    ],
    [t]
  );
};

export {
  useSalesChannelTableColumns
};
