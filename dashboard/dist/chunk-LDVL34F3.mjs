import {
  DateCell
} from "./chunk-B4FQDBC3.mjs";
import {
  DescriptionCell,
  DescriptionHeader,
  NameCell,
  NameHeader
} from "./chunk-GA34GXNI.mjs";
import {
  TextCell,
  TextHeader
} from "./chunk-OI7BBNYW.mjs";

// src/hooks/table/columns/use-campaign-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useCampaignTableColumns = () => {
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
      columnHelper.accessor("campaign_identifier", {
        header: () => /* @__PURE__ */ jsx(TextHeader, { text: t("campaigns.fields.identifier") }),
        cell: ({ getValue }) => {
          const value = getValue();
          return /* @__PURE__ */ jsx(TextCell, { text: value });
        }
      }),
      columnHelper.accessor("starts_at", {
        header: () => /* @__PURE__ */ jsx(TextHeader, { text: t("campaigns.fields.start_date") }),
        cell: ({ getValue }) => {
          const value = getValue();
          if (!value) {
            return;
          }
          const date = new Date(value);
          return /* @__PURE__ */ jsx(DateCell, { date });
        }
      }),
      columnHelper.accessor("ends_at", {
        header: () => /* @__PURE__ */ jsx(TextHeader, { text: t("campaigns.fields.end_date") }),
        cell: ({ getValue }) => {
          const value = getValue();
          if (!value) {
            return;
          }
          const date = new Date(value);
          return /* @__PURE__ */ jsx(DateCell, { date });
        }
      })
    ],
    [t]
  );
};

export {
  useCampaignTableColumns
};
