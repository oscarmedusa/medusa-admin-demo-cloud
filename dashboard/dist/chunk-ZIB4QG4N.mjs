import {
  Close,
  Content,
  Overlay,
  Root
} from "./chunk-MGS2W2HU.mjs";

// src/components/layout/split-view/split-view.tsx
import { Button, clx } from "@medusajs/ui";
import {
  createContext,
  useContext,
  useRef
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var SplitViewContext = createContext(null);
var Root2 = ({ open, onOpenChange, children }) => {
  const containerRef = useRef(null);
  return /* @__PURE__ */ jsx(Root, { open, onOpenChange, children: /* @__PURE__ */ jsx("div", { ref: containerRef, className: "relative size-full overflow-hidden", children }) });
};
var Content2 = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clx("relative h-full overflow-y-auto", className),
      ...props,
      children
    }
  );
};
var Drawer = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Overlay,
      {
        className: clx(
          "bg-ui-bg-base absolute inset-0 opacity-40",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Content,
      {
        className: clx(
          "bg-ui-bg-base border-ui-border-base absolute inset-y-0 right-0 flex w-full max-w-[calc(100%-128px)] flex-1 flex-col border-l focus:outline-none md:max-w-[80%] lg:max-w-[50%]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 duration-200"
        ),
        children
      }
    )
  ] });
};
var Close2 = ({
  variant = "secondary",
  size = "small",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size, variant, ...props, children }) });
};
var SplitView = Object.assign(Root2, {
  Content: Content2,
  Drawer,
  Close: Close2
});

export {
  SplitView
};
