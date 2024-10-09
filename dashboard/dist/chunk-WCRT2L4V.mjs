import {
  CreateCampaignFormFields
} from "./chunk-NNI447QF.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  useCreateCampaign
} from "./chunk-P3OWRGDP.mjs";

// src/routes/campaigns/campaign-create/components/create-campaign-form/create-campaign-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateCampaignSchema = zod.object({
  name: zod.string().min(1),
  description: zod.string().optional(),
  campaign_identifier: zod.string().min(1),
  starts_at: zod.date().optional(),
  ends_at: zod.date().optional(),
  budget: zod.object({
    limit: zod.number().min(0).nullish(),
    type: zod.enum(["spend", "usage"]),
    currency_code: zod.string().nullish()
  })
});
var defaultCampaignValues = {
  name: "",
  description: "",
  campaign_identifier: "",
  budget: {
    type: "usage",
    currency_code: null,
    limit: null
  }
};
var CreateCampaignForm = () => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const { mutateAsync, isPending } = useCreateCampaign();
  const form = useForm({
    defaultValues: defaultCampaignValues,
    resolver: zodResolver(CreateCampaignSchema)
  });
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        name: data.name,
        description: data.description,
        campaign_identifier: data.campaign_identifier,
        starts_at: data.starts_at,
        ends_at: data.ends_at,
        budget: {
          type: data.budget.type,
          limit: data.budget.limit ? data.budget.limit : void 0,
          currency_code: data.budget.currency_code
        }
      },
      {
        onSuccess: ({ campaign }) => {
          toast.success(
            t("campaigns.create.successToast", {
              name: campaign.name
            })
          );
          handleSuccess(`/campaigns/${campaign.id}`);
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
      className: "flex size-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, {}),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex size-full flex-col items-center overflow-auto py-16", children: /* @__PURE__ */ jsx(CreateCampaignFormFields, { form }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "small",
              variant: "primary",
              type: "submit",
              isLoading: isPending,
              children: t("actions.create")
            }
          )
        ] }) })
      ]
    }
  ) });
};

export {
  CreateCampaignSchema,
  defaultCampaignValues,
  CreateCampaignForm
};
