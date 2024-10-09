import {
  DeprecatedPercentageInput
} from "./chunk-YRY2CZ6I.mjs";
import {
  AddCampaignPromotionFields
} from "./chunk-PDI7L6VD.mjs";
import {
  RulesFormField
} from "./chunk-RA32OGF4.mjs";
import {
  CreateCampaignSchema,
  defaultCampaignValues
} from "./chunk-WCRT2L4V.mjs";
import "./chunk-NNI447QF.mjs";
import {
  getCurrencySymbol
} from "./chunk-MWVM4TYO.mjs";
import "./chunk-G4XMHIPB.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCampaigns,
  useCreatePromotion
} from "./chunk-P3OWRGDP.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/promotions/promotion-create/components/create-promotion-form/create-promotion-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Badge,
  Button,
  clx,
  CurrencyInput,
  Heading,
  Input,
  ProgressTabs,
  RadioGroup,
  Text,
  toast
} from "@medusajs/ui";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";

// src/routes/promotions/promotion-create/components/create-promotion-form/form-schema.ts
import { z } from "zod";
var RuleSchema = z.array(
  z.object({
    id: z.string().optional(),
    attribute: z.string().min(1, { message: "Required field" }),
    operator: z.string().min(1, { message: "Required field" }),
    values: z.union([
      z.number().min(1, { message: "Required field" }),
      z.string().min(1, { message: "Required field" }),
      z.array(z.string()).min(1, { message: "Required field" })
    ]),
    required: z.boolean().optional(),
    disguised: z.boolean().optional(),
    field_type: z.string().optional()
  })
);
var CreatePromotionSchema = z.object({
  template_id: z.string().optional(),
  campaign_id: z.string().optional(),
  campaign_choice: z.enum(["none", "existing", "new"]).optional(),
  is_automatic: z.string().toLowerCase(),
  code: z.string().min(1),
  type: z.enum(["buyget", "standard"]),
  rules: RuleSchema,
  application_method: z.object({
    allocation: z.enum(["each", "across"]),
    value: z.number().min(0),
    currency_code: z.string().optional(),
    max_quantity: z.number().optional().nullable(),
    target_rules: RuleSchema,
    buy_rules: RuleSchema,
    type: z.enum(["fixed", "percentage"]),
    target_type: z.enum(["order", "shipping_methods", "items"])
  }),
  campaign: CreateCampaignSchema.optional()
}).refine(
  (data) => {
    if (data.application_method.allocation === "across") {
      return true;
    }
    return data.application_method.allocation === "each" && typeof data.application_method.max_quantity === "number";
  },
  {
    path: ["application_method.max_quantity"],
    message: `required field`
  }
);

// src/routes/promotions/promotion-create/components/create-promotion-form/templates.ts
var commonHiddenFields = [
  "type",
  "application_method.type",
  "application_method.allocation"
];
var templates = [
  {
    id: "amount_off_products",
    type: "standard",
    title: "Amount off products",
    description: "Discount specific products or collection of products",
    hiddenFields: [...commonHiddenFields],
    defaults: {
      is_automatic: "false",
      type: "standard",
      application_method: {
        allocation: "each",
        target_type: "items",
        type: "fixed"
      }
    }
  },
  {
    id: "amount_off_order",
    type: "standard",
    title: "Amount off order",
    description: "Discounts the total order amount",
    hiddenFields: [...commonHiddenFields],
    defaults: {
      is_automatic: "false",
      type: "standard",
      application_method: {
        allocation: "across",
        target_type: "order",
        type: "fixed"
      }
    }
  },
  {
    id: "percentage_off_product",
    type: "standard",
    title: "Percentage off product",
    description: "Discounts a percentage off selected products",
    hiddenFields: [...commonHiddenFields],
    defaults: {
      is_automatic: "false",
      type: "standard",
      application_method: {
        allocation: "each",
        target_type: "items",
        type: "percentage"
      }
    }
  },
  {
    id: "percentage_off_order",
    type: "standard",
    title: "Percentage off order",
    description: "Discounts a percentage of the total order amount",
    hiddenFields: [...commonHiddenFields],
    defaults: {
      is_automatic: "false",
      type: "standard",
      application_method: {
        allocation: "across",
        target_type: "order",
        type: "percentage"
      }
    }
  },
  {
    id: "buy_get",
    type: "buy_get",
    title: "Buy X Get Y",
    description: "Buy X product(s), get Y product(s)",
    hiddenFields: [...commonHiddenFields, "application_method.value"],
    defaults: {
      is_automatic: "false",
      type: "buyget",
      application_method: {
        type: "percentage",
        value: 100,
        apply_to_quantity: 1,
        max_quantity: 1
      }
    }
  }
];

// src/routes/promotions/promotion-create/components/create-promotion-form/create-promotion-form.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var defaultValues = {
  campaign_id: void 0,
  template_id: templates[0].id,
  campaign_choice: "none",
  is_automatic: "false",
  code: "",
  type: "standard",
  rules: [],
  application_method: {
    allocation: "each",
    type: "fixed",
    target_type: "items",
    max_quantity: 1,
    target_rules: [],
    buy_rules: []
  },
  campaign: void 0
};
var CreatePromotionForm = () => {
  const [tab, setTab] = useState("type" /* TYPE */);
  const [detailsValidated, setDetailsValidated] = useState(false);
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues,
    resolver: zodResolver(CreatePromotionSchema)
  });
  const { mutateAsync: createPromotion } = useCreatePromotion();
  const handleSubmit = form.handleSubmit(
    async (data) => {
      const {
        campaign_choice,
        is_automatic,
        template_id,
        application_method,
        rules,
        ...promotionData
      } = data;
      const {
        target_rules: targetRulesData = [],
        buy_rules: buyRulesData = [],
        ...applicationMethodData
      } = application_method;
      const disguisedRules = [
        ...targetRulesData.filter((r) => !!r.disguised),
        ...buyRulesData.filter((r) => !!r.disguised),
        ...rules.filter((r) => !!r.disguised)
      ];
      const applicationMethodRuleData = {};
      for (const rule of disguisedRules) {
        applicationMethodRuleData[rule.attribute] = rule.field_type === "number" ? parseInt(rule.values) : rule.values;
      }
      const buildRulesData = (rules2) => {
        return rules2.filter((r) => !r.disguised).map((rule) => ({
          operator: rule.operator,
          attribute: rule.attribute,
          values: rule.values
        }));
      };
      createPromotion(
        {
          ...promotionData,
          rules: buildRulesData(rules),
          application_method: {
            ...applicationMethodData,
            ...applicationMethodRuleData,
            target_rules: buildRulesData(targetRulesData),
            buy_rules: buildRulesData(buyRulesData)
          },
          is_automatic: is_automatic === "true"
        },
        {
          onSuccess: ({ promotion }) => {
            toast.success(
              t("promotions.toasts.promotionCreateSuccess", {
                code: promotion.code
              })
            );
            handleSuccess();
          },
          onError: (e) => {
            toast.error(e.message);
          }
        }
      );
    },
    async (error) => {
      const { campaign, ...rest } = error || {};
      const errorInPromotionTab = !!Object.keys(rest || {}).length;
      if (errorInPromotionTab) {
        toast.error(t("promotions.errors.promotionTabError"));
      }
    }
  );
  const handleContinue = async () => {
    switch (tab) {
      case "type" /* TYPE */:
        setTab("promotion" /* PROMOTION */);
        break;
      case "promotion" /* PROMOTION */:
        const valid = await form.trigger();
        if (valid) {
          setTab("campaign" /* CAMPAIGN */);
        } else {
        }
        break;
      case "campaign" /* CAMPAIGN */:
        break;
    }
  };
  const handleTabChange = (tab2) => {
    switch (tab2) {
      case "type" /* TYPE */:
        setDetailsValidated(false);
        setTab(tab2);
        break;
      case "promotion" /* PROMOTION */:
        setDetailsValidated(false);
        setTab(tab2);
        break;
      case "campaign" /* CAMPAIGN */:
        setDetailsValidated(false);
        setTab(tab2);
        break;
    }
  };
  const watchTemplateId = useWatch({
    control: form.control,
    name: "template_id"
  });
  const currentTemplate = useMemo(() => {
    const currentTemplate2 = templates.find(
      (template) => template.id === watchTemplateId
    );
    if (!currentTemplate2) {
      return;
    }
    form.reset({ ...defaultValues, template_id: watchTemplateId });
    for (const [key, value] of Object.entries(currentTemplate2.defaults)) {
      if (typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          form.setValue(`application_method.${subKey}`, subValue);
        }
      } else {
        form.setValue(key, value);
      }
    }
    return currentTemplate2;
  }, [watchTemplateId]);
  const watchValueType = useWatch({
    control: form.control,
    name: "application_method.type"
  });
  const isFixedValueType = watchValueType === "fixed";
  const watchAllocation = useWatch({
    control: form.control,
    name: "application_method.allocation"
  });
  useEffect(() => {
    if (watchAllocation === "across") {
      form.setValue("application_method.max_quantity", null);
    }
  }, [watchAllocation]);
  const watchType = useWatch({
    control: form.control,
    name: "type"
  });
  const isTypeStandard = watchType === "standard";
  const targetType = useWatch({
    control: form.control,
    name: "application_method.target_type"
  });
  const isTargetTypeOrder = targetType === "order";
  const formData = form.getValues();
  let campaignQuery = {};
  if (isFixedValueType && formData.application_method.currency_code) {
    campaignQuery = {
      budget: { currency_code: formData.application_method.currency_code }
    };
  }
  const { campaigns } = useCampaigns(campaignQuery);
  const detailsProgress = useMemo(() => {
    if (detailsValidated) {
      return "completed";
    }
    return "not-started";
  }, [detailsValidated]);
  const watchCampaignChoice = useWatch({
    control: form.control,
    name: "campaign_choice"
  });
  useEffect(() => {
    const formData2 = form.getValues();
    if (watchCampaignChoice !== "existing") {
      form.setValue("campaign_id", void 0);
    }
    if (watchCampaignChoice !== "new") {
      form.setValue("campaign", void 0);
    }
    if (watchCampaignChoice === "new") {
      if (!formData2.campaign || !formData2.campaign?.budget?.type) {
        form.setValue("campaign", {
          ...defaultCampaignValues,
          budget: {
            ...defaultCampaignValues.budget,
            currency_code: formData2.application_method.currency_code
          }
        });
      }
    }
  }, [watchCampaignChoice]);
  const watchRules = useWatch({
    control: form.control,
    name: "rules"
  });
  const watchCurrencyRule = watchRules.find(
    (rule) => rule.attribute === "currency_code"
  );
  if (watchCurrencyRule) {
    const formData2 = form.getValues();
    const currencyCode = formData2.application_method.currency_code;
    const ruleValue = watchCurrencyRule.values;
    if (!Array.isArray(ruleValue) && currencyCode !== ruleValue) {
      form.setValue("application_method.currency_code", ruleValue);
    }
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("form", { className: "flex h-full flex-col", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs(
      ProgressTabs,
      {
        value: tab,
        onValueChange: (tab2) => handleTabChange(tab2),
        className: "flex h-full flex-col overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsx("div", { className: "flex w-full items-center justify-between gap-x-4", children: /* @__PURE__ */ jsx("div", { className: "-my-2 w-full max-w-[600px] border-l", children: /* @__PURE__ */ jsxs(ProgressTabs.List, { className: "grid w-full grid-cols-3", children: [
            /* @__PURE__ */ jsx(
              ProgressTabs.Trigger,
              {
                className: "w-full",
                value: "type" /* TYPE */,
                status: detailsProgress,
                children: t("promotions.tabs.template")
              }
            ),
            /* @__PURE__ */ jsx(
              ProgressTabs.Trigger,
              {
                className: "w-full",
                value: "promotion" /* PROMOTION */,
                children: t("promotions.tabs.details")
              }
            ),
            /* @__PURE__ */ jsx(ProgressTabs.Trigger, { className: "w-full", value: "campaign" /* CAMPAIGN */, children: t("promotions.tabs.campaign") })
          ] }) }) }) }),
          /* @__PURE__ */ jsxs(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              ProgressTabs.Content,
              {
                value: "type" /* TYPE */,
                className: "size-full overflow-y-auto",
                children: /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-[720px] py-16", children: /* @__PURE__ */ jsx(
                  Form.Field,
                  {
                    control: form.control,
                    name: "template_id",
                    render: ({ field }) => {
                      return /* @__PURE__ */ jsxs(Form.Item, { children: [
                        /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.fields.type") }),
                        /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                          RadioGroup,
                          {
                            className: "flex-col gap-y-3",
                            ...field,
                            onValueChange: field.onChange,
                            children: templates.map((template) => {
                              return /* @__PURE__ */ jsx(
                                RadioGroup.ChoiceBox,
                                {
                                  value: template.id,
                                  label: template.title,
                                  description: template.description
                                },
                                template.id
                              );
                            })
                          },
                          "template_id"
                        ) }),
                        /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                      ] });
                    }
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              ProgressTabs.Content,
              {
                value: "promotion" /* PROMOTION */,
                className: "size-full overflow-y-auto",
                children: /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 py-16", children: [
                  /* @__PURE__ */ jsxs(Heading, { level: "h1", className: "text-fg-base", children: [
                    t(`promotions.sections.details`),
                    currentTemplate?.title && /* @__PURE__ */ jsx(
                      Badge,
                      {
                        className: "ml-2 align-middle",
                        color: "grey",
                        size: "2xsmall",
                        rounded: "full",
                        children: currentTemplate?.title
                      }
                    )
                  ] }),
                  form.formState.errors.root && /* @__PURE__ */ jsx(
                    Alert,
                    {
                      variant: "error",
                      dismissible: false,
                      className: "text-balance",
                      children: form.formState.errors.root.message
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: "is_automatic",
                      render: ({ field }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { children: [
                          /* @__PURE__ */ jsx(Form.Label, { children: "Method" }),
                          /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              className: "flex gap-y-3",
                              ...field,
                              value: field.value,
                              onValueChange: field.onChange,
                              children: [
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "false",
                                    label: t("promotions.form.method.code.title"),
                                    description: t(
                                      "promotions.form.method.code.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "true",
                                    label: t(
                                      "promotions.form.method.automatic.title"
                                    ),
                                    description: t(
                                      "promotions.form.method.automatic.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                )
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                        ] });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-y-4", children: /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: "code",
                      render: ({ field }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { className: "basis-1/2", children: [
                          /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.form.code.title") }),
                          /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "SUMMER15" }) }),
                          /* @__PURE__ */ jsx(
                            Text,
                            {
                              size: "small",
                              leading: "compact",
                              className: "text-ui-fg-subtle",
                              children: /* @__PURE__ */ jsx(
                                Trans,
                                {
                                  t,
                                  i18nKey: "promotions.form.code.description",
                                  components: [/* @__PURE__ */ jsx("br", {}, "break")]
                                }
                              )
                            }
                          )
                        ] });
                      }
                    }
                  ) }),
                  !currentTemplate?.hiddenFields?.includes("type") && /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: "type",
                      render: ({ field }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { children: [
                          /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.fields.type") }),
                          /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              className: "flex gap-y-3",
                              ...field,
                              onValueChange: field.onChange,
                              children: [
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "standard",
                                    label: t(
                                      "promotions.form.type.standard.title"
                                    ),
                                    description: t(
                                      "promotions.form.type.standard.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "buyget",
                                    label: t("promotions.form.type.buyget.title"),
                                    description: t(
                                      "promotions.form.type.buyget.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                )
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                        ] });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(Divider, {}),
                  /* @__PURE__ */ jsx(RulesFormField, { form, ruleType: "rules" }),
                  /* @__PURE__ */ jsx(Divider, {}),
                  !currentTemplate?.hiddenFields?.includes(
                    "application_method.type"
                  ) && /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: "application_method.type",
                      render: ({ field }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { children: [
                          /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.fields.value_type") }),
                          /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              className: "flex gap-y-3",
                              ...field,
                              onValueChange: field.onChange,
                              children: [
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "fixed",
                                    label: t(
                                      "promotions.form.value_type.fixed.title"
                                    ),
                                    description: t(
                                      "promotions.form.value_type.fixed.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "percentage",
                                    label: t(
                                      "promotions.form.value_type.percentage.title"
                                    ),
                                    description: t(
                                      "promotions.form.value_type.percentage.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                )
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                        ] });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 gap-y-4", children: [
                    !currentTemplate?.hiddenFields?.includes(
                      "application_method.value"
                    ) && /* @__PURE__ */ jsx(
                      Form.Field,
                      {
                        control: form.control,
                        name: "application_method.value",
                        render: ({ field: { onChange, value, ...field } }) => {
                          const currencyCode = form.getValues().application_method.currency_code;
                          return /* @__PURE__ */ jsxs(Form.Item, { className: "basis-1/2", children: [
                            /* @__PURE__ */ jsx(
                              Form.Label,
                              {
                                tooltip: currencyCode || !isFixedValueType ? void 0 : t("promotions.fields.amount.tooltip"),
                                children: t("promotions.form.value.title")
                              }
                            ),
                            /* @__PURE__ */ jsx(Form.Control, { children: isFixedValueType ? /* @__PURE__ */ jsx(
                              CurrencyInput,
                              {
                                ...field,
                                min: 0,
                                onValueChange: (value2) => {
                                  onChange(value2 ? parseInt(value2) : "");
                                },
                                code: currencyCode || "USD",
                                symbol: currencyCode ? getCurrencySymbol(currencyCode) : "$",
                                value,
                                disabled: !currencyCode
                              }
                            ) : /* @__PURE__ */ jsx(
                              DeprecatedPercentageInput,
                              {
                                className: "text-right",
                                min: 0,
                                max: 100,
                                ...field,
                                value,
                                onChange: (e) => {
                                  onChange(
                                    e.target.value === "" ? null : parseInt(e.target.value)
                                  );
                                }
                              },
                              "amount"
                            ) }),
                            /* @__PURE__ */ jsx(
                              Text,
                              {
                                size: "small",
                                leading: "compact",
                                className: "text-ui-fg-subtle",
                                children: /* @__PURE__ */ jsx(
                                  Trans,
                                  {
                                    t,
                                    i18nKey: isFixedValueType ? "promotions.form.value_type.fixed.description" : "promotions.form.value_type.percentage.description",
                                    components: [/* @__PURE__ */ jsx("br", {}, "break")]
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                          ] });
                        }
                      }
                    ),
                    isTypeStandard && watchAllocation === "each" && /* @__PURE__ */ jsx(
                      Form.Field,
                      {
                        control: form.control,
                        name: "application_method.max_quantity",
                        render: ({ field }) => {
                          return /* @__PURE__ */ jsxs(Form.Item, { className: "basis-1/2", children: [
                            /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.form.max_quantity.title") }),
                            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                              Input,
                              {
                                ...form.register(
                                  "application_method.max_quantity",
                                  { valueAsNumber: true }
                                ),
                                type: "number",
                                min: 1,
                                placeholder: "3"
                              }
                            ) }),
                            /* @__PURE__ */ jsx(
                              Text,
                              {
                                size: "small",
                                leading: "compact",
                                className: "text-ui-fg-subtle",
                                children: /* @__PURE__ */ jsx(
                                  Trans,
                                  {
                                    t,
                                    i18nKey: "promotions.form.max_quantity.description",
                                    components: [/* @__PURE__ */ jsx("br", {}, "break")]
                                  }
                                )
                              }
                            )
                          ] });
                        }
                      }
                    )
                  ] }),
                  isTypeStandard && !currentTemplate?.hiddenFields?.includes(
                    "application_method.allocation"
                  ) && /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: "application_method.allocation",
                      render: ({ field }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { children: [
                          /* @__PURE__ */ jsx(Form.Label, { children: t("promotions.fields.allocation") }),
                          /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              className: "flex gap-y-3",
                              ...field,
                              onValueChange: field.onChange,
                              children: [
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "each",
                                    label: t(
                                      "promotions.form.allocation.each.title"
                                    ),
                                    description: t(
                                      "promotions.form.allocation.each.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  RadioGroup.ChoiceBox,
                                  {
                                    value: "across",
                                    label: t(
                                      "promotions.form.allocation.across.title"
                                    ),
                                    description: t(
                                      "promotions.form.allocation.across.description"
                                    ),
                                    className: clx("basis-1/2")
                                  }
                                )
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                        ] });
                      }
                    }
                  ),
                  !isTypeStandard && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
                    RulesFormField,
                    {
                      form,
                      ruleType: "buy-rules",
                      scope: "application_method.buy_rules"
                    }
                  ) }),
                  !isTargetTypeOrder && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Divider, {}),
                    /* @__PURE__ */ jsx(
                      RulesFormField,
                      {
                        form,
                        ruleType: "target-rules",
                        scope: "application_method.target_rules"
                      }
                    )
                  ] })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              ProgressTabs.Content,
              {
                value: "campaign" /* CAMPAIGN */,
                className: "size-full overflow-auto",
                children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 py-16", children: /* @__PURE__ */ jsx(
                  AddCampaignPromotionFields,
                  {
                    form,
                    campaigns: campaigns || []
                  }
                ) }) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
      tab === "campaign" /* CAMPAIGN */ ? /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          size: "small",
          isLoading: false,
          children: t("actions.save")
        },
        "save-btn"
      ) : /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          onClick: handleContinue,
          size: "small",
          children: t("actions.continue")
        },
        "continue-btn"
      )
    ] }) })
  ] }) });
};

// src/routes/promotions/promotion-create/promotion-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PromotionCreate = () => {
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(CreatePromotionForm, {}) });
};
export {
  PromotionCreate as Component
};
