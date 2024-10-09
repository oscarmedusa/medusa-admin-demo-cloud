import {
  languages
} from "./chunk-GQ6DSXIJ.mjs";
import {
  useMe
} from "./chunk-2KLB4XUE.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/profile/profile-detail/profile-detail.tsx
import { Outlet, json } from "react-router-dom";

// src/routes/profile/profile-detail/components/profile-general-section/profile-general-section.tsx
import { PencilSquare } from "@medusajs/icons";
import { Container, Heading, StatusBadge, Text } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProfileGeneralSection = ({ user }) => {
  const { i18n, t } = useTranslation();
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: t("profile.domain") }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle", size: "small", children: t("profile.manageYourProfileDetails") })
      ] }),
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
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.name") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("fields.email") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: user.email })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("profile.fields.languageLabel") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: languages.find((lang) => lang.code === i18n.language)?.display_name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t("profile.fields.usageInsightsLabel") }),
      /* @__PURE__ */ jsx(StatusBadge, { color: "red", className: "w-fit", children: t("general.disabled") })
    ] })
  ] });
};

// src/routes/profile/profile-detail/profile-detail.tsx
import after from "virtual:medusa/widgets/profile/details/after";
import before from "virtual:medusa/widgets/profile/details/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProfileDetail = () => {
  const { user, isPending: isLoading, isError, error } = useMe();
  if (isLoading) {
    return /* @__PURE__ */ jsx2("div", { children: "Loading..." });
  }
  if (isError || !user) {
    if (error) {
      throw error;
    }
    throw json("An unknown error has occurred", 500);
  }
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: user }) }, i)),
    /* @__PURE__ */ jsx2(ProfileGeneralSection, { user }),
    after.widgets.map((w, i) => /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: user }) }, i)),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};
export {
  ProfileDetail as Component
};
