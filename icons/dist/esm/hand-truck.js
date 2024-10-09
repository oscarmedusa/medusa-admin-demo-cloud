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
const HandTruck = React.forwardRef(
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
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M10.6918 3.42715L6.96541 4.49011C6.50807 4.62056 6.24309 5.09706 6.37354 5.5544L7.31839 8.86672C7.44885 9.32405 7.92535 9.58904 8.38269 9.45858L12.109 8.39563C12.5664 8.26517 12.8314 7.78867 12.7009 7.33133L11.7561 4.01901C11.6256 3.56168 11.1491 3.29669 10.6918 3.42715Z",
            stroke: "#52525B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M8.82837 3.95886L9.30112 5.61478",
            stroke: "#52525B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M7.37573 12.2083L14.6736 10.127",
            stroke: "#52525B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M5.43299 10.8572L3.26988 3.24407C3.16482 2.87379 2.8264 2.61804 2.44149 2.61804H1.54163",
            stroke: "#52525B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M5.84728 13.8125C6.67954 13.8125 7.35422 13.1378 7.35422 12.3055C7.35422 11.4733 6.67954 10.7986 5.84728 10.7986C5.01501 10.7986 4.34033 11.4733 4.34033 12.3055C4.34033 13.1378 5.01501 13.8125 5.84728 13.8125Z",
            stroke: "#52525B",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
HandTruck.displayName = "HandTruck";

export { HandTruck as default };
//# sourceMappingURL=hand-truck.js.map
