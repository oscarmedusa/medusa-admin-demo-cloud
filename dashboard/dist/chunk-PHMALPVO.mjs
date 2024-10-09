// src/components/common/thumbnail/thumbnail.tsx
import { Photo } from "@medusajs/icons";
import { jsx } from "react/jsx-runtime";
var Thumbnail = ({ src, alt }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-component flex h-8 w-6 items-center justify-center overflow-hidden rounded-[4px]", children: src ? /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      className: "h-full w-full object-cover object-center"
    }
  ) : /* @__PURE__ */ jsx(Photo, { className: "text-ui-fg-subtle" }) });
};

export {
  Thumbnail
};
