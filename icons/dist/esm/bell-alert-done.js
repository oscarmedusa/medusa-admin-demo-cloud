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
const BellAlertDone = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        width: 15,
        height: 15,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref
      }, props),
      /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "12.75", cy: "2.5", r: "2.5", fill: "#60A5FA" }), /* @__PURE__ */ React.createElement(
        "circle",
        {
          cx: "12.75",
          cy: "2.5",
          r: "2",
          stroke: color,
          strokeOpacity: "0.12"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M9.2426 0.575398C8.77142 0.427273 8.27003 0.347412 7.75 0.347412C5.00423 0.347412 2.77778 2.57387 2.77778 5.31963V9.54186C2.77778 10.1099 2.31801 10.5696 1.75 10.5696C1.33579 10.5696 1 10.9054 1 11.3196C1 11.7338 1.33579 12.0696 1.75 12.0696H13.75C14.1642 12.0696 14.5 11.7338 14.5 11.3196C14.5 10.9054 14.1642 10.5696 13.75 10.5696C13.182 10.5696 12.7222 10.1099 12.7222 9.54186V6.49991C12.1913 6.49629 11.6849 6.38924 11.2222 6.19788V9.54186C11.2222 9.90786 11.2999 10.2557 11.4398 10.5696H4.06022C4.20006 10.2557 4.27778 9.90786 4.27778 9.54186V5.31963C4.27778 3.40229 5.83266 1.84741 7.75 1.84741C8.10883 1.84741 8.45496 1.90187 8.78058 2.00297C8.84406 1.4908 9.00436 1.00865 9.2426 0.575398Z",
          fill: color
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M9.16158 13.0394C9.07714 12.9354 8.95091 12.875 8.81669 12.875H6.68425C6.55003 12.875 6.4238 12.9354 6.33936 13.0394C6.25491 13.1434 6.22203 13.2803 6.24958 13.411C6.40336 14.1417 7.02114 14.6528 7.75091 14.6528C8.48069 14.6528 9.09847 14.1417 9.25225 13.411C9.2798 13.2803 9.24603 13.1434 9.16158 13.0394Z",
          fill: color
        }
      ))
    );
  }
);
BellAlertDone.displayName = "BellAlertDone";

export { BellAlertDone as default };
//# sourceMappingURL=bell-alert-done.js.map
