import {
  AddCampaignPromotionForm
} from "./chunk-PDI7L6VD.mjs";
import "./chunk-NNI447QF.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  RouteDrawer
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import {
  useCampaigns,
  usePromotion
} from "./chunk-P3OWRGDP.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/promotions/promotion-add-campaign/promotion-add-campaign.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PromotionAddCampaign = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { promotion, isPending, isError, error } = usePromotion(id);
  let campaignQuery = {};
  if (promotion?.application_method?.currency_code) {
    campaignQuery = {
      budget: {
        currency_code: promotion?.application_method?.currency_code
      }
    };
  }
  const {
    campaigns,
    isPending: areCampaignsLoading,
    isError: isCampaignError,
    error: campaignError
  } = useCampaigns(campaignQuery);
  if (isError || isCampaignError) {
    throw error || campaignError;
  }
  return /* @__PURE__ */ jsxs(RouteDrawer, { children: [
    /* @__PURE__ */ jsx(RouteDrawer.Header, { children: /* @__PURE__ */ jsx(Heading, { children: t("promotions.campaign.edit.header") }) }),
    !isPending && !areCampaignsLoading && promotion && campaigns && /* @__PURE__ */ jsx(AddCampaignPromotionForm, { promotion, campaigns })
  ] });
};
export {
  PromotionAddCampaign as Component
};
