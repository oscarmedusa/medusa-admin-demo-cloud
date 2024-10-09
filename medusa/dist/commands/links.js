"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sync_links_1 = __importDefault(require("./db/sync-links"));
const main = async function (argv) {
    if (argv.action !== "sync") {
        return process.exit();
    }
    await (0, sync_links_1.default)(argv);
};
exports.default = main;
//# sourceMappingURL=links.js.map