import {
  PercentageInput
} from "./chunk-YRY2CZ6I.mjs";
import {
  CountrySelect
} from "./chunk-MW4K5NNY.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import {
  useCreateTaxRegion
} from "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
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
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/tax-regions/tax-region-create/components/tax-region-create-form/tax-region-create-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InformationCircleSolid } from "@medusajs/icons";
import { Button, Heading, Input, Text, Tooltip, toast } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var TaxRegionCreateSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  rate: z.object({
    float: z.number().optional(),
    value: z.string().optional()
  }),
  country_code: z.string().min(1)
});
var TaxRegionCreateForm = ({ parentId }) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      name: "",
      rate: {
        value: ""
      },
      code: "",
      country_code: ""
    },
    resolver: zodResolver(TaxRegionCreateSchema)
  });
  const { mutateAsync, isPending } = useCreateTaxRegion();
  const handleSubmit = form.handleSubmit(async (values) => {
    const defaultRate = values.name ? {
      name: values.name,
      rate: values.rate?.value === "" ? void 0 : parseFloat(values.rate.value),
      code: values.code
    } : void 0;
    await mutateAsync(
      {
        country_code: values.country_code,
        parent_id: parentId,
        default_tax_rate: defaultRate
      },
      {
        onSuccess: ({ tax_region }) => {
          toast.success(t("taxRegions.create.successToast"));
          handleSuccess(`../${tax_region.id}`);
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, {}),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Heading, { className: "capitalize", children: t("taxRegions.create.header") }),
            /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("taxRegions.create.hint") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "country_code",
              render: ({ field }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("fields.country") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(CountrySelect, { ...field }) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
              /* @__PURE__ */ jsx(Heading, { level: "h2", className: "!txt-compact-small-plus", children: t("taxRegions.fields.defaultTaxRate.label") }),
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
              ),
              /* @__PURE__ */ jsx(
                Tooltip,
                {
                  content: t("taxRegions.fields.defaultTaxRate.tooltip"),
                  children: /* @__PURE__ */ jsx(InformationCircleSolid, { className: "text-ui-fg-muted" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
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
              )
            ] }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/tax-regions/tax-region-create/tax-region-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var TaxRegionCreate = () => {
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(TaxRegionCreateForm, {}) });
};
export {
  TaxRegionCreate as Component,
  TaxRegionCreate
};
