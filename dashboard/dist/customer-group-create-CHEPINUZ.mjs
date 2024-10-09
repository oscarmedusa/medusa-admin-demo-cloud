import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCreateCustomerGroup
} from "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customer-groups/customer-group-create/components/create-customer-group-form/create-customer-group-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, Text, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateCustomerGroupSchema = zod.object({
  name: zod.string().min(1)
});
var CreateCustomerGroupForm = () => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      name: ""
    },
    resolver: zodResolver(CreateCustomerGroupSchema)
  });
  const { mutateAsync, isPending } = useCreateCustomerGroup();
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        name: data.name
      },
      {
        onSuccess: ({ customer_group }) => {
          toast.success(
            t("customerGroups.create.successToast", {
              name: customer_group.name
            })
          );
          handleSuccess(`/customer-groups/${customer_group.id}`);
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          variant: "primary",
          size: "small",
          isLoading: isPending,
          children: t("actions.create")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-col items-center pt-[72px]", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: t("customerGroups.create.header") }),
        /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("customerGroups.create.hint") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: /* @__PURE__ */ jsx(
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
      ) })
    ] }) })
  ] }) });
};

// src/routes/customer-groups/customer-group-create/customer-group-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CustomerGroupCreate = () => {
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(CreateCustomerGroupForm, {}) });
};
export {
  CustomerGroupCreate as Component
};
