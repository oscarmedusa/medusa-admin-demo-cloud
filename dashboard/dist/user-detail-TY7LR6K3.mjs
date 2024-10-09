import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import {
  useDeleteUser,
  useUser
} from "./chunk-2KLB4XUE.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  productsQueryKeys
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/users/user-detail/loader.ts
var userDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.user.retrieve(id)
});
var userLoader = async ({ params }) => {
  const id = params.id;
  const query = userDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/users/user-detail/user-detail.tsx
import { Outlet, json, useLoaderData, useParams } from "react-router-dom";

// src/routes/users/user-detail/components/user-general-section/user-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, Text, usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var UserGeneralSection = ({ user }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteUser(user.id);
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ");
  const handleDeleteUser = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("users.deleteUserWarning", {
        name: name ?? user.email
      }),
      verificationText: name ?? user.email,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        navigate("..");
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: user.email }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "edit",
                  icon: /* @__PURE__ */ jsx(PencilSquare, {})
                }
              ]
            },
            {
              actions: [
                {
                  label: t("actions.delete"),
                  onClick: handleDeleteUser,
                  icon: /* @__PURE__ */ jsx(Trash, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.name") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: name ?? "-" })
    ] })
  ] });
};

// src/routes/users/user-detail/user-detail.tsx
import after from "virtual:medusa/widgets/user/details/after";
import before from "virtual:medusa/widgets/user/details/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var UserDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const {
    user,
    isPending: isLoading,
    isError,
    error
  } = useUser(id, void 0, {
    initialData
  });
  if (isLoading) {
    return /* @__PURE__ */ jsx2("div", { children: "Loading..." });
  }
  if (isError || !user) {
    if (error) {
      throw error;
    }
    throw json("An unknown error has occured", 500);
  }
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: user }) }, i)),
    /* @__PURE__ */ jsx2(UserGeneralSection, { user }),
    after.widgets.map((w, i) => /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: user }) }, i)),
    /* @__PURE__ */ jsx2(JsonViewSection, { data: user }),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};
export {
  UserDetail as Component,
  userLoader as loader
};
