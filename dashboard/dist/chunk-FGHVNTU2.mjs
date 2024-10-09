import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";

// src/components/layout/pages/single-column-page/single-column-page.tsx
import { Outlet } from "react-router-dom";

// src/components/common/metadata-section/metadata-section.tsx
import { ArrowUpRightOnBox } from "@medusajs/icons";
import { Badge, Container, Heading, IconButton } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var MetadataSection = ({
  data,
  href = "metadata/edit"
}) => {
  const { t } = useTranslation();
  if (!data) {
    return null;
  }
  if (!("metadata" in data)) {
    return null;
  }
  const numberOfKeys = data.metadata ? Object.keys(data.metadata).length : 0;
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("metadata.header") }),
      /* @__PURE__ */ jsx(Badge, { size: "2xsmall", rounded: "full", children: t("metadata.numberOfKeys", {
        count: numberOfKeys
      }) })
    ] }),
    /* @__PURE__ */ jsx(
      IconButton,
      {
        size: "small",
        variant: "transparent",
        className: "text-ui-fg-muted hover:text-ui-fg-subtle",
        asChild: true,
        children: /* @__PURE__ */ jsx(Link, { to: href, children: /* @__PURE__ */ jsx(ArrowUpRightOnBox, {}) })
      }
    )
  ] });
};

// src/components/layout/pages/single-column-page/single-column-page.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
import { createElement } from "react";
var SingleColumnPage = ({
  children,
  widgets,
  /**
   * Data of the page which is passed to Widgets, JSON view, and Metadata view.
   */
  data,
  /**
   * Whether the page should render an outlet for children routes. Defaults to true.
   */
  hasOutlet = true,
  /**
   * Whether to show JSON view of the data. Defaults to false.
   */
  showJSON,
  /**
   * Whether to show metadata view of the data. Defaults to false.
   */
  showMetadata
}) => {
  const { before, after } = widgets;
  const widgetProps = { data };
  if (showJSON && !data) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "`showJSON` is true but no data is provided. To display JSON, provide data prop."
      );
    }
    showJSON = false;
  }
  if (showMetadata && !data) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "`showMetadata` is true but no data is provided. To display metadata, provide data prop."
      );
    }
    showMetadata = false;
  }
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ createElement(w.Component, { ...widgetProps, key: i });
    }),
    children,
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ createElement(w.Component, { ...widgetProps, key: i });
    }),
    showMetadata && /* @__PURE__ */ jsx2(MetadataSection, { data }),
    showJSON && /* @__PURE__ */ jsx2(JsonViewSection, { data }),
    hasOutlet && /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};

// src/components/layout/pages/two-column-page/two-column-page.tsx
import { clx } from "@medusajs/ui";
import { Children } from "react";
import { Outlet as Outlet2 } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
import { createElement as createElement2 } from "react";
var Root = ({
  children,
  /**
   * Widgets to be rendered in the main content area and sidebar.
   */
  widgets,
  /**
   * Data to be passed to widgets, JSON view, and Metadata view.
   */
  data,
  /**
   * Whether to show JSON view of the data. Defaults to false.
   */
  showJSON = false,
  /**
   * Whether to show metadata view of the data. Defaults to false.
   */
  showMetadata = false,
  /**
   * Whether to render an outlet for children routes. Defaults to true.
   */
  hasOutlet = true
}) => {
  const widgetProps = { data };
  const { before, after, sideBefore, sideAfter } = widgets;
  if (showJSON && !data) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "`showJSON` is true but no data is provided. To display JSON, provide data prop."
      );
    }
    showJSON = false;
  }
  if (showMetadata && !data) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "`showMetadata` is true but no data is provided. To display metadata, provide data prop."
      );
    }
    showMetadata = false;
  }
  const childrenArray = Children.toArray(children);
  if (childrenArray.length !== 2) {
    throw new Error("TwoColumnPage expects exactly two children");
  }
  const [main, sidebar] = childrenArray;
  const showExtraData = showJSON || showMetadata;
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ createElement2(w.Component, { ...widgetProps, key: i });
    }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-x-4 gap-y-3 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex w-full flex-col gap-y-3", children: [
        main,
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ createElement2(w.Component, { ...widgetProps, key: i });
        }),
        showExtraData && /* @__PURE__ */ jsxs3("div", { className: "hidden flex-col gap-y-3 xl:flex", children: [
          showMetadata && /* @__PURE__ */ jsx3(MetadataSection, { data }),
          showJSON && /* @__PURE__ */ jsx3(JsonViewSection, { data })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[440px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ createElement2(w.Component, { ...widgetProps, key: i });
        }),
        sidebar,
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ createElement2(w.Component, { ...widgetProps, key: i });
        }),
        showExtraData && /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-3 xl:hidden", children: [
          showMetadata && /* @__PURE__ */ jsx3(MetadataSection, { data }),
          showJSON && /* @__PURE__ */ jsx3(JsonViewSection, { data })
        ] })
      ] })
    ] }),
    hasOutlet && /* @__PURE__ */ jsx3(Outlet2, {})
  ] });
};
var Main = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx3("div", { className: clx("flex w-full flex-col gap-y-3", className), ...props, children });
};
var Sidebar = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: clx(
        "flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[440px]",
        className
      ),
      ...props,
      children
    }
  );
};
var TwoColumnPage = Object.assign(Root, { Main, Sidebar });

export {
  SingleColumnPage,
  TwoColumnPage
};
