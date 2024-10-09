/**
 * @medusajs/icons v2.0.0-rc-20241003153304 - MIT
 */

import * as React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Spinner = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M7.667 1.056v2.222" }),
        /* @__PURE__ */ React.createElement("path", { d: "m12.224 2.943-1.572 1.571", opacity: 0.88 }),
        /* @__PURE__ */ React.createElement("path", { d: "M14.111 7.5H11.89", opacity: 0.75 }),
        /* @__PURE__ */ React.createElement("path", { d: "m12.224 12.057-1.572-1.571", opacity: 0.63 }),
        /* @__PURE__ */ React.createElement("path", { d: "M7.667 13.945v-2.223", opacity: 0.5 }),
        /* @__PURE__ */ React.createElement("path", { d: "m3.11 12.057 1.57-1.571", opacity: 0.38 }),
        /* @__PURE__ */ React.createElement("path", { d: "M1.222 7.5h2.222", opacity: 0.25 }),
        /* @__PURE__ */ React.createElement("path", { d: "m3.11 2.943 1.57 1.571", opacity: 0.13 })
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner as default };
//# sourceMappingURL=spinner.js.map
