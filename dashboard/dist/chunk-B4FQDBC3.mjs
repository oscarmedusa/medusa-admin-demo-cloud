import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";

// src/components/table/table-cells/common/date-cell/date-cell.tsx
import { Tooltip } from "@medusajs/ui";
import { format } from "date-fns/format";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var DateCell = ({ date }) => {
  if (!date) {
    return /* @__PURE__ */ jsx(PlaceholderCell, {});
  }
  const value = new Date(date);
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset());
  const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12;
  const timestampFormat = hour12 ? "dd MMM yyyy hh:MM a" : "dd MMM yyyy HH:MM";
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx(
    Tooltip,
    {
      className: "z-10",
      content: /* @__PURE__ */ jsx("span", { className: "text-pretty", children: `${format(
        value,
        timestampFormat
      )}` }),
      children: /* @__PURE__ */ jsx("span", { className: "truncate", children: format(value, "dd MMM yyyy") })
    }
  ) });
};
var DateHeader = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: t("fields.date") }) });
};

export {
  DateCell,
  DateHeader
};
