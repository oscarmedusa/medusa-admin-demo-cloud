import {
  TaxOverrideTable,
  TaxRateLine,
  useTaxOverrideTable
} from "./chunk-TN3G3QJM.mjs";
import {
  TaxRegionCard
} from "./chunk-XMNLPGL4.mjs";
import "./chunk-VNYVDWWH.mjs";
import "./chunk-3WXBLS2P.mjs";
import {
  useTaxRateTableQuery
} from "./chunk-I5HYE2RW.mjs";
import {
  SingleColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-VFWVYIBV.mjs";
import "./chunk-VDBOSWVE.mjs";
import "./chunk-EQTBJSBZ.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-7XWP2AR2.mjs";
import "./chunk-APCXHN2Y.mjs";
import {
  useTaxRates
} from "./chunk-YAKLSBTK.mjs";
import {
  taxRegionsQueryKeys,
  useTaxRegion
} from "./chunk-YRIAF77S.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-WRXTMI2J.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-province-detail/tax-region-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/tax-regions/tax-region-province-detail/components/tax-region-province-detail-section/tax-region-detail-section.tsx
import { Badge, Container, Tooltip } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var TaxRegionProvinceDetailSection = ({
  taxRegion
}) => {
  const { t } = useTranslation();
  const defaultRates = taxRegion.tax_rates.filter((r) => r.is_default === true);
  const showBage = defaultRates.length === 0;
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx(
      TaxRegionCard,
      {
        taxRegion,
        type: "header",
        asLink: false,
        badge: showBage && /* @__PURE__ */ jsx(Tooltip, { content: t("taxRegions.fields.noDefaultRate.tooltip"), children: /* @__PURE__ */ jsx(Badge, { color: "orange", size: "2xsmall", className: "cursor-default", children: t("taxRegions.fields.noDefaultRate.label") }) })
      }
    ),
    defaultRates.map((rate) => {
      return /* @__PURE__ */ jsx(TaxRateLine, { taxRate: rate, isSublevelTaxRate: true }, rate.id);
    })
  ] });
};

// src/routes/tax-regions/tax-region-province-detail/tax-region-detail.tsx
import after from "virtual:medusa/widgets/tax/details/after";
import before from "virtual:medusa/widgets/tax/details/before";

// src/routes/tax-regions/tax-region-province-detail/components/tax-region-province-override-section/tax-region-province-override-section.tsx
import { Container as Container2, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "o";
var TaxRegionProvinceOverrideSection = ({
  taxRegion
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useTaxRateTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { tax_rates, count, isPending, isError, error } = useTaxRates(
    {
      ...searchParams,
      tax_region_id: taxRegion.id,
      is_default: false
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const { table } = useTaxOverrideTable({
    count,
    data: tax_rates,
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(Container2, { className: "p-0", children: /* @__PURE__ */ jsx2(
    TaxOverrideTable,
    {
      isPending,
      table,
      count,
      action: {
        label: t("actions.create"),
        to: "overrides/create"
      },
      queryObject: raw,
      prefix: PREFIX,
      children: /* @__PURE__ */ jsx2(Heading, { level: "h2", children: t("taxRegions.taxOverrides.header") })
    }
  ) });
};

// src/routes/tax-regions/tax-region-province-detail/tax-region-detail.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var TaxRegionDetail = () => {
  const { province_id } = useParams();
  const initialData = useLoaderData();
  const {
    tax_region: taxRegion,
    isLoading,
    isError,
    error
  } = useTaxRegion(province_id, void 0, { initialData });
  if (isLoading || !taxRegion) {
    return /* @__PURE__ */ jsx3("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(
    SingleColumnPage,
    {
      data: taxRegion,
      showJSON: true,
      hasOutlet: true,
      widgets: {
        after,
        before
      },
      children: [
        /* @__PURE__ */ jsx3(TaxRegionProvinceDetailSection, { taxRegion }),
        /* @__PURE__ */ jsx3(TaxRegionProvinceOverrideSection, { taxRegion })
      ]
    }
  );
};

// src/routes/tax-regions/tax-region-province-detail/loader.ts
var taxRegionDetailQuery = (id) => ({
  queryKey: taxRegionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.taxRegion.retrieve(id)
});
var taxRegionLoader = async ({ params }) => {
  const id = params.province_id;
  const query = taxRegionDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  TaxRegionDetail as Component,
  TaxRegionDetail,
  taxRegionLoader as loader
};
