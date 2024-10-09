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
const HeartBroken = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement("g", { id: "heart-broken" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M8.24998 3.47314L6.4722 5.72203L10.0278 7.49981L8.24998 9.27759",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M7.83132 13.0306C8.09532 13.1683 8.40376 13.1683 8.66776 13.0306C10.0633 12.3026 14.4713 9.66434 14.4713 5.37456C14.4784 3.49011 12.9567 1.95589 11.0704 1.94434C9.93532 1.95856 8.88021 2.531 8.24998 3.47322C7.61887 2.531 6.56376 1.95856 5.42954 1.94434C3.54243 1.95589 2.02154 3.49011 2.02865 5.37456C2.02865 9.66434 6.43576 12.3026 7.83132 13.0306Z",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5
        }
      ))
    );
  }
);
HeartBroken.displayName = "HeartBroken";

export { HeartBroken as default };
//# sourceMappingURL=heart-broken.js.map
