var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
const ArrowLeftMini = React.forwardRef((_a, ref) => {
    var { color = "currentColor" } = _a, props = __rest(_a, ["color"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: 15, height: 15, fill: "none", ref: ref }, props),
        React.createElement("path", { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778" })));
});
ArrowLeftMini.displayName = "ArrowLeftMini";
export default ArrowLeftMini;
