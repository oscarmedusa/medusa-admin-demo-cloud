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
const ServerSolid = React.forwardRef(
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
      /* @__PURE__ */ React.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "m14.497 8.835-1.96-5.885a2.44 2.44 0 0 0-2.319-1.672H4.782a2.44 2.44 0 0 0-2.32 1.672L.505 8.835s-.115.39-.115.665v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.5c0-.342-.115-.665-.115-.665m-1.22 2.443a.667.667 0 0 1-.666.666H2.39a.667.667 0 0 1-.667-.666V9.5c0-.368.299-.667.667-.667H12.61c.368 0 .667.299.667.667z" }), /* @__PURE__ */ React.createElement("path", { d: "M5.722 9.722H3.278a.667.667 0 0 0 0 1.334h2.444a.667.667 0 0 0 0-1.334" })),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerSolid.displayName = "ServerSolid";

export { ServerSolid as default };
//# sourceMappingURL=server-solid.js.map
