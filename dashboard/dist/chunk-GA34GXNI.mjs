import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";

// src/components/table/table-cells/sales-channel/description-cell/description-cell.tsx
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var DescriptionCell = ({ description }) => {
  if (!description) {
    return /* @__PURE__ */ jsx(PlaceholderCell, {});
  }
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: description }) });
};
var DescriptionHeader = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: t("fields.description") }) });
};

// src/components/table/table-cells/sales-channel/name-cell/name-cell.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var NameCell = ({ name }) => {
  if (!name) {
    return /* @__PURE__ */ jsx2(PlaceholderCell, {});
  }
  return /* @__PURE__ */ jsx2("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: name }) });
};
var NameHeader = () => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsx2("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: t("fields.name") }) });
};

export {
  DescriptionCell,
  DescriptionHeader,
  NameCell,
  NameHeader
};
