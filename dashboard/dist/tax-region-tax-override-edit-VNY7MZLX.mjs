import {
  TargetForm,
  TargetItem,
  TaxRateRuleReferenceSchema,
  createTaxRulePayload
} from "./chunk-6E6KZPR6.mjs";
import "./chunk-VNYVDWWH.mjs";
import "./chunk-JXL44QNJ.mjs";
import "./chunk-UUDR5EKI.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-QIWEFQ5Y.mjs";
import "./chunk-Y35YD3YU.mjs";
import {
  PercentageInput
} from "./chunk-YRY2CZ6I.mjs";
import "./chunk-LDVL34F3.mjs";
import "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-WJAYXTY4.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-J3QLEX6O.mjs";
import "./chunk-VDBOSWVE.mjs";
import "./chunk-QWRBWAVK.mjs";
import "./chunk-TKCL6FA5.mjs";
import "./chunk-PHMALPVO.mjs";
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-S3UCQAPU.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  SwitchBox
} from "./chunk-ARXK2O3B.mjs";
import "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteDrawer,
  StackedDrawer,
  useRouteModal,
  useStackedModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import "./chunk-V5VCT6TO.mjs";
import {
  useProductTags
} from "./chunk-APCXHN2Y.mjs";
import {
  useTaxRate,
  useUpdateTaxRate
} from "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import {
  useProductTypes
} from "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import {
  useCustomerGroups
} from "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import {
  useCollections
} from "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  useProducts
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-tax-override-edit/tax-region-tax-override-edit.tsx
import { Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/tax-regions/tax-region-tax-override-edit/components/tax-region-tax-override-edit-form/tax-region-tax-override-edit-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@medusajs/icons";
import {
  Button,
  Heading,
  Hint,
  Input,
  Label,
  Select,
  Text,
  clx,
  toast
} from "@medusajs/ui";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var STACKED_MODAL_ID = "tr";
var getStackedModalId = (type) => `${STACKED_MODAL_ID}-${type}`;
var TaxRegionTaxRateEditSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  rate: z.object({
    float: z.number().optional(),
    value: z.string().optional()
  }),
  is_combinable: z.boolean().optional(),
  enabled_rules: z.object({
    products: z.boolean(),
    product_collections: z.boolean(),
    product_tags: z.boolean(),
    product_types: z.boolean(),
    customer_groups: z.boolean()
  }),
  products: z.array(TaxRateRuleReferenceSchema).optional(),
  product_collections: z.array(TaxRateRuleReferenceSchema).optional(),
  product_tags: z.array(TaxRateRuleReferenceSchema).optional(),
  product_types: z.array(TaxRateRuleReferenceSchema).optional(),
  customer_groups: z.array(TaxRateRuleReferenceSchema).optional()
});
var TaxRegionTaxOverrideEditForm = ({
  taxRate,
  isCombinable = false,
  initialValues
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const { setIsOpen } = useStackedModal();
  const form = useForm({
    defaultValues: {
      name: taxRate.name,
      code: taxRate.code,
      rate: {
        value: taxRate.rate?.toString() || ""
      },
      is_combinable: taxRate.is_combinable,
      enabled_rules: {
        products: initialValues.products.length > 0,
        product_collections: initialValues.product_collections.length > 0,
        product_tags: initialValues.product_tags.length > 0,
        product_types: initialValues.product_types.length > 0,
        customer_groups: initialValues.customer_groups.length > 0
      },
      products: initialValues.products,
      product_collections: initialValues.product_collections,
      product_tags: initialValues.product_tags,
      product_types: initialValues.product_types,
      customer_groups: initialValues.customer_groups
    },
    resolver: zodResolver(TaxRegionTaxRateEditSchema)
  });
  const { mutateAsync, isPending } = useUpdateTaxRate(taxRate.id);
  const handleSubmit = form.handleSubmit(async (values) => {
    const {
      products: products2,
      customer_groups,
      product_collections,
      product_tags,
      product_types
    } = values;
    const productRules = createTaxRulePayload({
      reference_type: "products" /* PRODUCT */,
      references: products2 || []
    });
    const customerGroupRules = createTaxRulePayload({
      reference_type: "customer_groups" /* CUSTOMER_GROUP */,
      references: customer_groups || []
    });
    const productCollectionRules = createTaxRulePayload({
      reference_type: "product_collections" /* PRODUCT_COLLECTION */,
      references: product_collections || []
    });
    const productTagRules = createTaxRulePayload({
      reference_type: "product_tags" /* PRODUCT_TAG */,
      references: product_tags || []
    });
    const productTypeRules = createTaxRulePayload({
      reference_type: "product_types" /* PRODUCT_TYPE */,
      references: product_types || []
    });
    const rules = [
      productRules,
      customerGroupRules,
      productCollectionRules,
      productTagRules,
      productTypeRules
    ].filter((rule) => Boolean(rule)).flatMap((r) => r);
    await mutateAsync(
      {
        name: values.name,
        code: values.code || null,
        rate: values.rate?.float,
        is_combinable: values.is_combinable,
        rules
      },
      {
        onSuccess: () => {
          toast.success(t("taxRegions.taxRates.edit.successToast"));
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  const products = useFieldArray({
    control: form.control,
    name: "products"
  });
  const productCollections = useFieldArray({
    control: form.control,
    name: "product_collections"
  });
  const productTags = useFieldArray({
    control: form.control,
    name: "product_tags"
  });
  const productTypes = useFieldArray({
    control: form.control,
    name: "product_types"
  });
  const customerGroups = useFieldArray({
    control: form.control,
    name: "customer_groups"
  });
  const getControls = (type) => {
    switch (type) {
      case "products" /* PRODUCT */:
        return products;
      case "product_collections" /* PRODUCT_COLLECTION */:
        return productCollections;
      case "product_tags" /* PRODUCT_TAG */:
        return productTags;
      case "product_types" /* PRODUCT_TYPE */:
        return productTypes;
      case "customer_groups" /* CUSTOMER_GROUP */:
        return customerGroups;
    }
  };
  const referenceTypeOptions = [
    {
      value: "products" /* PRODUCT */,
      label: t("taxRegions.fields.targets.options.product")
    },
    {
      value: "product_collections" /* PRODUCT_COLLECTION */,
      label: t("taxRegions.fields.targets.options.productCollection")
    },
    {
      value: "product_tags" /* PRODUCT_TAG */,
      label: t("taxRegions.fields.targets.options.productTag")
    },
    {
      value: "product_types" /* PRODUCT_TYPE */,
      label: t("taxRegions.fields.targets.options.productType")
    },
    {
      value: "customer_groups" /* CUSTOMER_GROUP */,
      label: t("taxRegions.fields.targets.options.customerGroup")
    }
  ];
  const searchPlaceholders = {
    ["products" /* PRODUCT */]: t(
      "taxRegions.fields.targets.placeholders.product"
    ),
    ["product_collections" /* PRODUCT_COLLECTION */]: t(
      "taxRegions.fields.targets.placeholders.productCollection"
    ),
    ["product_tags" /* PRODUCT_TAG */]: t(
      "taxRegions.fields.targets.placeholders.productTag"
    ),
    ["product_types" /* PRODUCT_TYPE */]: t(
      "taxRegions.fields.targets.placeholders.productType"
    ),
    ["customer_groups" /* CUSTOMER_GROUP */]: t(
      "taxRegions.fields.targets.placeholders.customerGroup"
    )
  };
  const getFieldHandler = (type) => {
    const { fields, remove, append } = getControls(type);
    const modalId = getStackedModalId(type);
    return (references) => {
      if (!references.length) {
        form.setValue(type, [], {
          shouldDirty: true
        });
        setIsOpen(modalId, false);
        return;
      }
      const newIds = references.map((reference) => reference.value);
      const fieldsToAdd = references.filter(
        (reference) => !fields.some((field) => field.value === reference.value)
      );
      for (const field of fields) {
        if (!newIds.includes(field.value)) {
          remove(fields.indexOf(field));
        }
      }
      append(fieldsToAdd);
      setIsOpen(modalId, false);
    };
  };
  const displayOrder = /* @__PURE__ */ new Set([
    "products" /* PRODUCT */
  ]);
  const disableRule = (type) => {
    form.setValue(type, [], {
      shouldDirty: true
    });
    form.setValue(`enabled_rules.${type}`, false, {
      shouldDirty: true
    });
    displayOrder.delete(type);
  };
  const enableRule = (type) => {
    form.setValue(`enabled_rules.${type}`, true, {
      shouldDirty: true
    });
    form.setValue(type, [], {
      shouldDirty: true
    });
    displayOrder.add(type);
  };
  const watchedEnabledRules = useWatch({
    control: form.control,
    name: "enabled_rules"
  });
  const addRule = () => {
    const firstDisabledRule = Object.keys(watchedEnabledRules).find(
      (key) => !watchedEnabledRules[key]
    );
    if (firstDisabledRule) {
      enableRule(firstDisabledRule);
    }
  };
  const visibleRuleTypes = referenceTypeOptions.filter((option) => watchedEnabledRules[option.value]).sort((a, b) => {
    const orderArray = Array.from(displayOrder);
    return orderArray.indexOf(a.value) - orderArray.indexOf(b.value);
  });
  const getAvailableRuleTypes = (type) => {
    return referenceTypeOptions.filter((option) => {
      return !visibleRuleTypes.some(
        (visibleOption) => visibleOption.value === option.value
      ) || option.value === type;
    });
  };
  const showAddButton = Object.values(watchedEnabledRules).some(
    (value) => !value
  );
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "flex flex-1 flex-col overflow-hidden",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsxs(RouteDrawer.Body, { className: "flex flex-1 flex-col gap-y-6 overflow-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "code",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("taxRegions.fields.taxCode") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "rate",
                render: ({ field: { value, onChange, ...field } }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("taxRegions.fields.taxRate") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                      PercentageInput,
                      {
                        ...field,
                        value: value?.value,
                        onValueChange: (value2, _name, values) => onChange({
                          value: value2,
                          float: values?.float
                        })
                      }
                    ) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] }),
          isCombinable && /* @__PURE__ */ jsx(
            SwitchBox,
            {
              control: form.control,
              name: "is_combinable",
              label: t("taxRegions.fields.isCombinable.label"),
              description: t("taxRegions.fields.isCombinable.hint")
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-x-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
                  /* @__PURE__ */ jsx(Label, { id: "tax_region_rules_label", htmlFor: "tax_region_rules", children: t("taxRegions.fields.targets.label") }),
                  /* @__PURE__ */ jsxs(
                    Text,
                    {
                      size: "small",
                      leading: "compact",
                      className: "text-ui-fg-muted",
                      children: [
                        "(",
                        t("fields.optional"),
                        ")"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(Hint, { id: "tax_region_rules_description", className: "text-pretty", children: t("taxRegions.fields.targets.hint") })
              ] }),
              showAddButton && /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: addRule,
                  type: "button",
                  size: "small",
                  variant: "transparent",
                  className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex-shrink-0",
                  children: t("taxRegions.fields.targets.action")
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "tax_region_rules",
                "aria-labelledby": "tax_region_rules_label",
                "aria-describedby": "tax_region_rules_description",
                role: "application",
                className: "flex flex-col gap-y-3",
                children: visibleRuleTypes.map((ruleType, index) => {
                  const type = ruleType.value;
                  const label = ruleType.label;
                  const isLast = index === visibleRuleTypes.length - 1;
                  const searchPlaceholder = searchPlaceholders[type];
                  const options = getAvailableRuleTypes(type);
                  const modalId = getStackedModalId(type);
                  const { fields, remove } = getControls(type);
                  const handler = getFieldHandler(type);
                  const handleChangeType = (value) => {
                    disableRule(type);
                    enableRule(value);
                  };
                  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                    Form.Field,
                    {
                      control: form.control,
                      name: ruleType.value,
                      render: ({
                        field: { value: _value, onChange: _onChange, ...field }
                      }) => {
                        return /* @__PURE__ */ jsxs(Form.Item, { className: "space-y-0", children: [
                          /* @__PURE__ */ jsx(Form.Label, { className: "sr-only", children: label }),
                          /* @__PURE__ */ jsxs(
                            "div",
                            {
                              className: clx(
                                "bg-ui-bg-component shadow-elevation-card-rest transition-fg grid gap-1.5 rounded-xl py-1.5",
                                "aria-[invalid='true']:shadow-borders-error"
                              ),
                              role: "application",
                              ...field,
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid gap-1.5 px-1.5 md:grid-cols-2", children: [
                                  isLast ? /* @__PURE__ */ jsxs(
                                    Select,
                                    {
                                      value: type,
                                      onValueChange: handleChangeType,
                                      children: [
                                        /* @__PURE__ */ jsx(Select.Trigger, { className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover", children: /* @__PURE__ */ jsx(Select.Value, {}) }),
                                        /* @__PURE__ */ jsx(Select.Content, { children: options.map((option) => {
                                          return /* @__PURE__ */ jsx(
                                            Select.Item,
                                            {
                                              value: option.value,
                                              children: option.label
                                            },
                                            option.value
                                          );
                                        }) })
                                      ]
                                    }
                                  ) : /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5", children: label }),
                                  /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-field shadow-borders-base txt-compact-small rounded-md px-2 py-1.5", children: t("taxRegions.fields.targets.operators.in") })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-1.5", children: [
                                  /* @__PURE__ */ jsxs(StackedDrawer, { id: modalId, children: [
                                    /* @__PURE__ */ jsx(StackedDrawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover shadow-borders-base txt-compact-small text-ui-fg-muted transition-fg focus-visible:shadow-borders-interactive-with-active flex flex-1 items-center gap-x-2 rounded-md px-2 py-1.5 outline-none",
                                        children: [
                                          /* @__PURE__ */ jsx(MagnifyingGlass, {}),
                                          searchPlaceholder
                                        ]
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsx(StackedDrawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: t("actions.browse") }) }),
                                    /* @__PURE__ */ jsxs(StackedDrawer.Content, { children: [
                                      /* @__PURE__ */ jsxs(StackedDrawer.Header, { children: [
                                        /* @__PURE__ */ jsx(StackedDrawer.Title, { asChild: true, children: /* @__PURE__ */ jsx(Heading, { children: t(
                                          "taxRegions.fields.targets.modal.header"
                                        ) }) }),
                                        /* @__PURE__ */ jsx(StackedDrawer.Description, { className: "sr-only", children: t("taxRegions.fields.targets.hint") })
                                      ] }),
                                      /* @__PURE__ */ jsx(
                                        TargetForm,
                                        {
                                          type: "drawer",
                                          referenceType: type,
                                          state: fields,
                                          setState: handler
                                        }
                                      )
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx(
                                    Button,
                                    {
                                      variant: "secondary",
                                      onClick: () => disableRule(type),
                                      type: "button",
                                      children: t("actions.delete")
                                    }
                                  )
                                ] }),
                                fields.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1.5", children: [
                                  /* @__PURE__ */ jsx(Divider, { variant: "dashed" }),
                                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-1.5 px-1.5", children: fields.map((field2, index2) => {
                                    return /* @__PURE__ */ jsx(
                                      TargetItem,
                                      {
                                        index: index2,
                                        label: field2.label,
                                        onRemove: remove
                                      },
                                      field2.id
                                    );
                                  }) })
                                ] }) : null
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx(Form.ErrorMessage, { className: "mt-2" })
                        ] });
                      }
                    }
                  ) }, type);
                })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { className: "shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/tax-regions/tax-region-tax-override-edit/tax-region-tax-override-edit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TaxRegionTaxOverrideEdit = () => {
  const { t } = useTranslation2();
  const { tax_rate_id } = useParams();
  const { tax_rate, isPending, isError, error } = useTaxRate(tax_rate_id);
  const { initialValues, isPending: isInitializing } = useDefaultRulesValues(tax_rate);
  const ready = !isPending && !!tax_rate && !isInitializing && !!initialValues;
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsxs2(RouteDrawer.Header, { children: [
      /* @__PURE__ */ jsx2(RouteDrawer.Title, { asChild: true, children: /* @__PURE__ */ jsx2(Heading2, { children: t("taxRegions.taxOverrides.edit.header") }) }),
      /* @__PURE__ */ jsx2(RouteDrawer.Description, { className: "sr-only", children: t("taxRegions.taxOverrides.edit.hint") })
    ] }),
    ready && /* @__PURE__ */ jsx2(
      TaxRegionTaxOverrideEditForm,
      {
        taxRate: tax_rate,
        isCombinable: true,
        initialValues
      }
    )
  ] });
};
var useDefaultRulesValues = (taxRate) => {
  const rules = taxRate?.rules || [];
  const idsByReferenceType = {
    ["products" /* PRODUCT */]: [],
    ["product_collections" /* PRODUCT_COLLECTION */]: [],
    ["product_tags" /* PRODUCT_TAG */]: [],
    ["product_types" /* PRODUCT_TYPE */]: [],
    ["customer_groups" /* CUSTOMER_GROUP */]: []
  };
  rules.forEach((rule) => {
    const reference = rule.reference;
    idsByReferenceType[reference]?.push(rule.reference_id);
  });
  const queries = [
    {
      ids: idsByReferenceType["products" /* PRODUCT */],
      hook: useProducts,
      key: "products" /* PRODUCT */,
      getResult: (result) => result.products.map((product) => ({
        label: product.title,
        value: product.id
      }))
    },
    {
      ids: idsByReferenceType["product_collections" /* PRODUCT_COLLECTION */],
      hook: useCollections,
      key: "product_collections" /* PRODUCT_COLLECTION */,
      getResult: (result) => result.collections.map((collection) => ({
        label: collection.title,
        value: collection.id
      }))
    },
    {
      ids: idsByReferenceType["product_tags" /* PRODUCT_TAG */],
      hook: useProductTags,
      key: "product_tags" /* PRODUCT_TAG */,
      getResult: (result) => result.tags.map((tag) => ({
        label: tag.value,
        value: tag.id
      }))
    },
    {
      ids: idsByReferenceType["product_types" /* PRODUCT_TYPE */],
      hook: useProductTypes,
      key: "product_types" /* PRODUCT_TYPE */,
      getResult: (result) => result.product_types.map((productType) => ({
        label: productType.value,
        value: productType.id
      }))
    },
    {
      ids: idsByReferenceType["customer_groups" /* CUSTOMER_GROUP */],
      hook: useCustomerGroups,
      key: "customer_groups" /* CUSTOMER_GROUP */,
      getResult: (result) => result.customer_groups.map((customerGroup) => ({
        label: customerGroup.name,
        value: customerGroup.id
      }))
    }
  ];
  const queryResults = queries.map(({ ids, hook }) => {
    const enabled = ids.length > 0;
    return {
      result: hook({ id: ids, limit: ids.length }, { enabled }),
      enabled
    };
  });
  if (!taxRate) {
    return { isPending: true };
  }
  const isPending = queryResults.some(
    ({ result, enabled }) => enabled && result.isPending
  );
  if (isPending) {
    return { isPending };
  }
  queryResults.forEach(({ result, enabled }) => {
    if (enabled && result.isError) {
      throw result.error;
    }
  });
  const initialRulesValues = queries.reduce(
    (acc, { key, getResult }, index) => ({
      ...acc,
      [key]: queryResults[index].enabled ? getResult(queryResults[index].result) : []
    }),
    {}
  );
  return { initialValues: initialRulesValues, isPending: false };
};
export {
  TaxRegionTaxOverrideEdit as Component
};
