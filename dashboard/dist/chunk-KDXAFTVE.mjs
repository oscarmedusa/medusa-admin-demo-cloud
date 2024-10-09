// src/lib/promotions.ts
var getPromotionStatus = (promotion) => {
  const date = /* @__PURE__ */ new Date();
  const campaign = promotion.campaign;
  if (!campaign) {
    return "ACTIVE" /* ACTIVE */;
  }
  if (new Date(campaign.starts_at) > date) {
    return "SCHEDULED" /* SCHEDULED */;
  }
  const campaignBudget = campaign.budget;
  const overBudget = campaignBudget && campaignBudget.used > campaignBudget.limit;
  if (campaign.ends_at && new Date(campaign.ends_at) < date || overBudget) {
    return "EXPIRED" /* EXPIRED */;
  }
  return "ACTIVE" /* ACTIVE */;
};

export {
  getPromotionStatus
};
