import {
  TaxRegionTable,
  useTaxRegionTable
} from "./chunk-YZBEDBQI.mjs";
import "./chunk-XMNLPGL4.mjs";
import {
  useTaxRegionTableQuery
} from "./chunk-RIV7FKGN.mjs";
import {
  SingleColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-VFWVYIBV.mjs";
import "./chunk-VDBOSWVE.mjs";
import "./chunk-EQTBJSBZ.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-YAKLSBTK.mjs";
import {
  useTaxRegions
} from "./chunk-YRIAF77S.mjs";
import "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-list/components/tax-region-list-view/tax-region-list-view.tsx
import { Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var TaxRegionListView = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useTaxRegionTableQuery({
    pageSize: PAGE_SIZE
  });
  const { tax_regions, count, isPending, isError, error } = useTaxRegions(
    {
      ...searchParams,
      order: "country_code",
      parent_id: "null"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const { table } = useTaxRegionTable({
    count,
    data: tax_regions,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(Container, { className: "divide-y p-0", children: /* @__PURE__ */ jsxs(
    TaxRegionTable,
    {
      action: {
        to: "create",
        label: t("actions.create")
      },
      isPending,
      queryObject: raw,
      table,
      count,
      children: [
        /* @__PURE__ */ jsx(Heading, { children: t("taxes.domain") }),
        /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle text-pretty", children: t("taxRegions.list.hint") })
      ]
    }
  ) });
};

// src/routes/tax-regions/tax-region-list/tax-region-list.tsx
import after from "virtual:medusa/widgets/tax/list/after";
import before from "virtual:medusa/widgets/tax/list/before";
import { jsx as jsx2 } from "react/jsx-runtime";
var TaxRegionsList = () => {
  return /* @__PURE__ */ jsx2(
    SingleColumnPage,
    {
      widgets: {
        before,
        after
      },
      hasOutlet: true,
      children: /* @__PURE__ */ jsx2(TaxRegionListView, {})
    }
  );
};
export {
  TaxRegionsList as Component
};
