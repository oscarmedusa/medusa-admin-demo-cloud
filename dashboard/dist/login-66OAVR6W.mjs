import {
  AvatarBox
} from "./chunk-ZSTDLFYU.mjs";
import "./chunk-EQTBJSBZ.mjs";
import {
  isFetchError
} from "./chunk-ONB3JEHR.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useSignInWithEmailPassword
} from "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/login/login.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Heading, Hint, Input, Text } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as z from "zod";
import after from "virtual:medusa/widgets/login/after";
import before from "virtual:medusa/widgets/login/before";
import { jsx, jsxs } from "react/jsx-runtime";
var LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});
var Login = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/orders";
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const { mutateAsync, isPending } = useSignInWithEmailPassword();
  const handleSubmit = form.handleSubmit(async ({ email, password }) => {
    try {
      await mutateAsync({
        email,
        password
      });
      navigate(from, { replace: true });
    } catch (error) {
      if (isFetchError(error)) {
        if (error.status === 401) {
          form.setError("email", {
            type: "manual"
          });
          form.setError("password", {
            type: "manual",
            message: t("errors.invalidCredentials")
          });
          return;
        }
      }
      form.setError("root.serverError", {
        type: "manual",
        message: t("errors.serverError")
      });
    }
  });
  const serverError = form.formState.errors?.root?.serverError?.message;
  const validationError = form.formState.errors.email?.message || form.formState.errors.password?.message;
  return /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "m-4 flex w-full max-w-[280px] flex-col items-center", children: [
    /* @__PURE__ */ jsx(AvatarBox, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("login.title") }),
      /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle text-center", children: t("login.hint") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-y-3", children: [
      before.widgets.map((w, i) => {
        return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(w.Component, {}) }, i);
      }),
      /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex w-full flex-col gap-y-6",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
              /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: "email",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsx(Form.Item, { children: /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        autoComplete: "email",
                        ...field,
                        className: "bg-ui-bg-field-component",
                        placeholder: t("fields.email")
                      }
                    ) }) });
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: "password",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, {}),
                      /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                        Input,
                        {
                          type: "password",
                          autoComplete: "current-password",
                          ...field,
                          className: "bg-ui-bg-field-component",
                          placeholder: t("fields.password")
                        }
                      ) })
                    ] });
                  }
                }
              )
            ] }),
            validationError && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Hint, { className: "inline-flex", variant: "error", children: validationError }) }),
            serverError && /* @__PURE__ */ jsx(
              Alert,
              {
                className: "p-2 bg-ui-bg-base items-center",
                dismissible: true,
                variant: "error",
                children: serverError
              }
            ),
            /* @__PURE__ */ jsx(Button, { className: "w-full", type: "submit", isLoading: isPending, children: t("actions.continueWithEmail") })
          ]
        }
      ) }),
      after.widgets.map((w, i) => {
        return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(w.Component, {}) }, i);
      })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-ui-fg-muted txt-small my-6", children: /* @__PURE__ */ jsx(
      Trans,
      {
        i18nKey: "login.forgotPassword",
        components: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/reset-password",
              className: "text-ui-fg-interactive transition-fg hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover font-medium outline-none"
            },
            "reset-password-link"
          )
        ]
      }
    ) })
  ] }) });
};
export {
  Login as Component
};
