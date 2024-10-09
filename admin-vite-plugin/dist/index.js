"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/plugin.ts
var import_admin_shared = require("@medusajs/admin-shared");
var import_fdir = require("fdir");
var import_promises = __toESM(require("fs/promises"));
var import_magic_string = __toESM(require("magic-string"));
var import_path = __toESM(require("path"));

// src/babel.ts
var import_parser = require("@babel/parser");
var import_traverse = __toESM(require("@babel/traverse"));
var traverse;
if (typeof import_traverse.default === "function") {
  traverse = import_traverse.default;
} else {
  traverse = import_traverse.default.default;
}

// src/plugin.ts
var VALID_FILE_EXTENSIONS = [".tsx", ".jsx"];
function convertToImportPath(file) {
  return import_path.default.normalize(file).split(import_path.default.sep).join("/");
}
function getModuleType(file) {
  const normalizedPath = convertToImportPath(file);
  if (normalizedPath.includes("/admin/widgets/")) {
    return "widget";
  } else if (normalizedPath.includes("/admin/routes/")) {
    return "route";
  } else {
    return "none";
  }
}
function getParserOptions(file) {
  const options = {
    sourceType: "module",
    plugins: ["jsx"]
  };
  if (file.endsWith(".tsx")) {
    options.plugins?.push("typescript");
  }
  return options;
}
function generateModule(code) {
  const magicString = new import_magic_string.default(code);
  return {
    code: magicString.toString(),
    map: magicString.generateMap({ hires: true })
  };
}
async function crawl(dir, file, depth) {
  const dirDepth = dir.split(import_path.default.sep).length;
  const crawler = new import_fdir.fdir().withBasePath().exclude((dirName) => dirName.startsWith("_")).filter((path2) => {
    return VALID_FILE_EXTENSIONS.some((ext) => path2.endsWith(ext));
  });
  if (file) {
    crawler.filter((path2) => {
      return VALID_FILE_EXTENSIONS.some((ext) => path2.endsWith(file + ext));
    });
  }
  if (depth) {
    crawler.filter((file2) => {
      const pathDepth = file2.split(import_path.default.sep).length - 1;
      if (depth.max && pathDepth > dirDepth + depth.max) {
        return false;
      }
      if (pathDepth < dirDepth + depth.min) {
        return false;
      }
      return true;
    });
  }
  return crawler.crawl(dir).withPromise();
}
function getConfigObjectProperties(path2) {
  const declaration = path2.node.declaration;
  if (declaration && declaration.type === "VariableDeclaration") {
    const configDeclaration = declaration.declarations.find(
      (d) => d.type === "VariableDeclarator" && d.id.type === "Identifier" && d.id.name === "config"
    );
    if (configDeclaration && configDeclaration.init?.type === "CallExpression" && configDeclaration.init.arguments.length > 0 && configDeclaration.init.arguments[0].type === "ObjectExpression") {
      return configDeclaration.init.arguments[0].properties;
    }
  }
  return null;
}
function isDefaultExportComponent(path2, ast) {
  let hasComponentExport = false;
  const declaration = path2.node.declaration;
  if (declaration && (declaration.type === "Identifier" || declaration.type === "FunctionDeclaration")) {
    const exportName = declaration.type === "Identifier" ? declaration.name : declaration.id && declaration.id.name;
    if (exportName) {
      try {
        traverse(ast, {
          VariableDeclarator({ node, scope }) {
            let isDefaultExport = false;
            if (node.id.type === "Identifier" && node.id.name === exportName) {
              isDefaultExport = true;
            }
            if (!isDefaultExport) {
              return;
            }
            traverse(
              node,
              {
                ReturnStatement(path3) {
                  if (path3.node.argument?.type === "JSXElement" || path3.node.argument?.type === "JSXFragment") {
                    hasComponentExport = true;
                  }
                }
              },
              scope
            );
          }
        });
      } catch (e) {
        return false;
      }
    }
  }
  return hasComponentExport;
}
function validateWidgetConfig(path2, zone) {
  let zoneIsValid = false;
  let zoneValue = null;
  const properties = getConfigObjectProperties(path2);
  if (!properties) {
    return { zoneIsValid, zoneValue };
  }
  const zoneProperty = properties.find(
    (p) => p.type === "ObjectProperty" && p.key.type === "Identifier" && p.key.name === "zone"
  );
  if (!zoneProperty) {
    return { zoneIsValid, zoneValue };
  }
  if (zoneProperty.value.type === "StringLiteral") {
    zoneIsValid = !zone ? (0, import_admin_shared.isValidInjectionZone)(zoneProperty.value.value) : zone === zoneProperty.value.value;
    zoneValue = zoneProperty.value.value;
  } else if (zoneProperty.value.type === "ArrayExpression") {
    zoneIsValid = zoneProperty.value.elements.every((e) => {
      if (!e || e.type !== "StringLiteral") {
        return false;
      }
      const isZoneMatch = !zone ? true : zone === e.value;
      return (0, import_admin_shared.isValidInjectionZone)(e.value) && isZoneMatch;
    });
    const values = [];
    for (const element of zoneProperty.value.elements) {
      if (element && element.type === "StringLiteral") {
        values.push(element.value);
      }
    }
    zoneValue = values;
  }
  return { zoneIsValid, zoneValue };
}
async function validateWidget(file, zone) {
  let _zoneValue = null;
  const content = await import_promises.default.readFile(file, "utf-8");
  const parserOptions = getParserOptions(file);
  let ast;
  try {
    ast = (0, import_parser.parse)(content, parserOptions);
  } catch (e) {
    return { valid: false, zone: _zoneValue };
  }
  let hasDefaultExport = false;
  let hasNamedExport = false;
  try {
    traverse(ast, {
      ExportDefaultDeclaration(path2) {
        hasDefaultExport = isDefaultExportComponent(path2, ast);
      },
      ExportNamedDeclaration(path2) {
        const { zoneIsValid, zoneValue } = validateWidgetConfig(path2, zone);
        hasNamedExport = zoneIsValid;
        _zoneValue = zoneValue;
      }
    });
  } catch (err) {
    return { valid: false, zone: _zoneValue };
  }
  return { valid: hasNamedExport && hasDefaultExport, zone: _zoneValue };
}
async function generateWidgetEntrypoint(sources, zone) {
  const files = (await Promise.all(
    Array.from(sources).map(async (source) => crawl(`${source}/widgets`))
  )).flat();
  const validatedWidgets = (await Promise.all(
    files.map(async (widget) => {
      const { valid } = await validateWidget(widget, zone);
      return valid ? widget : null;
    })
  )).filter(Boolean);
  if (!validatedWidgets.length) {
    const code2 = `export default {
        widgets: [],
      }`;
    return { module: generateModule(code2), paths: [] };
  }
  const importString = validatedWidgets.map(
    (path2, index) => `import WidgetExt${index} from "${convertToImportPath(path2)}";`
  ).join("\n");
  const exportString = `export default {
      widgets: [${validatedWidgets.map((_, index) => `{ Component: WidgetExt${index} }`).join(", ")}],
    }`;
  const code = `${importString}
${exportString}`;
  return { module: generateModule(code), paths: validatedWidgets };
}
function validateRouteConfig(path2, resolveMenuItem) {
  const properties = getConfigObjectProperties(path2);
  if (!properties && resolveMenuItem) {
    return false;
  }
  if (!properties) {
    return true;
  }
  const labelProperty = properties.find(
    (p) => p.type === "ObjectProperty" && p.key.type === "Identifier" && p.key.name === "label"
  );
  const labelIsValid = !labelProperty || labelProperty.value.type === "StringLiteral";
  return labelIsValid;
}
async function validateRoute(file, resolveMenuItem = false) {
  const content = await import_promises.default.readFile(file, "utf-8");
  const parserOptions = getParserOptions(file);
  let ast;
  try {
    ast = (0, import_parser.parse)(content, parserOptions);
  } catch (_e) {
    return false;
  }
  let hasDefaultExport = false;
  let hasNamedExport = resolveMenuItem ? false : true;
  try {
    traverse(ast, {
      ExportDefaultDeclaration(path2) {
        hasDefaultExport = isDefaultExportComponent(path2, ast);
      },
      ExportNamedDeclaration(path2) {
        hasNamedExport = validateRouteConfig(path2, resolveMenuItem);
      }
    });
  } catch (_e) {
    return false;
  }
  return hasNamedExport && hasDefaultExport;
}
function createRoutePath(file) {
  const importPath = convertToImportPath(file);
  return importPath.replace(/.*\/admin\/(routes|settings)/, "").replace(/\[([^\]]+)\]/g, ":$1").replace(/\/page\.(tsx|jsx)/, "");
}
async function generateRouteEntrypoint(sources, type) {
  const files = (await Promise.all(
    Array.from(sources).map(
      async (source) => crawl(`${source}/routes`, "page", { min: 1 })
    )
  )).flat();
  const validatedRoutes = (await Promise.all(
    files.map(async (route) => {
      const valid = await validateRoute(route, type === "link");
      return valid ? route : null;
    })
  )).filter(Boolean);
  if (!validatedRoutes.length) {
    const code2 = `export default {
        ${type}s: [],
      }`;
    return { module: generateModule(code2), paths: [] };
  }
  const importString = validatedRoutes.map((path2, index) => {
    return type === "page" ? `import RouteExt${index} from "${convertToImportPath(path2)}";` : `import { config as routeConfig${index} } from "${convertToImportPath(
      path2
    )}";`;
  }).join("\n");
  const exportString = `export default {
      ${type}s: [${validatedRoutes.map((file, index) => {
    return type === "page" ? `{ path: "${createRoutePath(file)}", Component: RouteExt${index} }` : `{ path: "${createRoutePath(file)}", ...routeConfig${index} }`;
  }).join(", ")}],
    }`;
  const code = `${importString}
${exportString}`;
  return { module: generateModule(code), paths: validatedRoutes };
}
var medusaVitePlugin = (options) => {
  const _extensionGraph = /* @__PURE__ */ new Map();
  const _sources = new Set(options?.sources ?? []);
  let server;
  let watcher;
  async function loadModule(options2) {
    switch (options2.type) {
      case "widget": {
        return await generateWidgetEntrypoint(_sources, options2.get);
      }
      case "route":
        return await generateRouteEntrypoint(_sources, options2.get);
      default:
        return null;
    }
  }
  async function register(id, options2) {
    const result = await loadModule(options2);
    if (!result) {
      return;
    }
    const { module: module2, paths } = result;
    for (const path2 of paths) {
      const ids = _extensionGraph.get(path2) || /* @__PURE__ */ new Set();
      ids.add(id);
      _extensionGraph.set(path2, ids);
    }
    return module2;
  }
  async function handleWidgetChange(file, event) {
    const { valid, zone } = await validateWidget(file);
    const zoneValues = Array.isArray(zone) ? zone : [zone];
    if (event === "change") {
      if (!valid) {
        const extensionIds = _extensionGraph.get(file);
        _extensionGraph.delete(file);
        if (!extensionIds) {
          return;
        }
        for (const moduleId of extensionIds) {
          const module2 = server?.moduleGraph.getModuleById(moduleId);
          if (module2) {
            await server?.reloadModule(module2);
          }
        }
        return;
      }
      if (!_extensionGraph.has(file)) {
        const imports = /* @__PURE__ */ new Set();
        for (const zoneValue of zoneValues) {
          const zonePath = (0, import_admin_shared.getWidgetImport)(zoneValue);
          const moduleId = (0, import_admin_shared.getVirtualId)(zonePath);
          const resolvedModuleId = (0, import_admin_shared.resolveVirtualId)(moduleId);
          const module2 = server?.moduleGraph.getModuleById(resolvedModuleId);
          if (module2) {
            imports.add(resolvedModuleId);
            await server?.reloadModule(module2);
          }
        }
        _extensionGraph.set(file, imports);
      }
      if (_extensionGraph.has(file)) {
        const modules = _extensionGraph.get(file);
        if (!modules) {
          return;
        }
        for (const moduleId of modules) {
          const module2 = server?.moduleGraph.getModuleById(moduleId);
          if (!module2 || !module2.id) {
            continue;
          }
          const matchedInjectionZone = (0, import_admin_shared.getWidgetZone)(module2.id);
          if (!zoneValues.includes(matchedInjectionZone)) {
            modules.delete(moduleId);
            await server?.reloadModule(module2);
          }
        }
        const imports = new Set(modules);
        for (const zoneValue of zoneValues) {
          const zonePath = (0, import_admin_shared.getWidgetImport)(zoneValue);
          const moduleId = (0, import_admin_shared.getVirtualId)(zonePath);
          const resolvedModuleId = (0, import_admin_shared.resolveVirtualId)(moduleId);
          if (!modules.has(resolvedModuleId)) {
            const module2 = server?.moduleGraph.getModuleById(resolvedModuleId);
            if (module2) {
              imports.add(resolvedModuleId);
              await server?.reloadModule(module2);
            }
          }
        }
        _extensionGraph.set(file, imports);
      }
    }
    if (event === "add") {
      if (!valid) {
        return;
      }
      const imports = /* @__PURE__ */ new Set();
      for (const zoneValue of zoneValues) {
        const zonePath = (0, import_admin_shared.getWidgetImport)(zoneValue);
        const moduleId = (0, import_admin_shared.getVirtualId)(zonePath);
        const resolvedModuleId = (0, import_admin_shared.resolveVirtualId)(moduleId);
        const module2 = server?.moduleGraph.getModuleById(resolvedModuleId);
        if (module2) {
          imports.add(resolvedModuleId);
          await server?.reloadModule(module2);
        }
      }
      _extensionGraph.set(file, imports);
    }
  }
  async function handleRouteChange(file, event) {
    const valid = await validateRoute(file);
    if (event === "change") {
      if (!valid) {
        const extensionIds = _extensionGraph.get(file);
        _extensionGraph.delete(file);
        if (!extensionIds) {
          return;
        }
        for (const moduleId of extensionIds) {
          const module2 = server?.moduleGraph.getModuleById(moduleId);
          if (module2) {
            await server?.reloadModule(module2);
          }
        }
        return;
      }
      if (!_extensionGraph.has(file)) {
        const imports = /* @__PURE__ */ new Set();
        for (const resolvedModuleId of import_admin_shared.RESOLVED_ROUTE_MODULES) {
          const module2 = server?.moduleGraph.getModuleById(resolvedModuleId);
          if (module2) {
            imports.add(resolvedModuleId);
            await server?.reloadModule(module2);
          }
        }
        _extensionGraph.set(file, imports);
      }
    }
    if (event === "add") {
      if (!valid) {
        return;
      }
      const imports = /* @__PURE__ */ new Set();
      for (const resolvedModuleId of import_admin_shared.RESOLVED_ROUTE_MODULES) {
        const module2 = server?.moduleGraph.getModuleById(resolvedModuleId);
        if (module2) {
          imports.add(resolvedModuleId);
          await server?.reloadModule(module2);
        }
      }
      _extensionGraph.set(file, imports);
    }
  }
  async function handleAddOrChange(path2, event) {
    const type = getModuleType(path2);
    switch (type) {
      case "widget":
        await handleWidgetChange(path2, event);
        break;
      case "route":
        await handleRouteChange(path2, event);
        break;
      default:
        break;
    }
  }
  async function handleUnlink(path2) {
    const moduleIds = _extensionGraph.get(path2);
    _extensionGraph.delete(path2);
    if (!moduleIds) {
      return;
    }
    for (const moduleId of moduleIds) {
      const module2 = server?.moduleGraph.getModuleById(moduleId);
      if (module2) {
        await server?.reloadModule(module2);
      }
    }
  }
  return {
    name: "@medusajs/admin-vite-plugin",
    enforce: "pre",
    configureServer(_server) {
      server = _server;
      watcher = _server.watcher;
      _sources.forEach((source) => {
        watcher?.add(source);
      });
      watcher.on("all", async (event, path2) => {
        switch (event) {
          case "add":
          case "change": {
            await handleAddOrChange(path2, event);
            break;
          }
          case "unlinkDir":
          case "unlink":
            await handleUnlink(path2);
            break;
          default:
            break;
        }
      });
    },
    resolveId(id) {
      if (import_admin_shared.VIRTUAL_MODULES.includes(id)) {
        return (0, import_admin_shared.resolveVirtualId)(id);
      }
      return null;
    },
    async load(id) {
      if (import_admin_shared.RESOLVED_WIDGET_MODULES.includes(id)) {
        const zone = (0, import_admin_shared.getWidgetZone)(id);
        return register(id, { type: "widget", get: zone });
      }
      if (import_admin_shared.RESOLVED_ROUTE_MODULES.includes(id)) {
        const type = id.includes("link") ? "link" : "page";
        return register(id, { type: "route", get: type });
      }
    },
    async closeBundle() {
      if (watcher) {
        await watcher.close();
      }
    }
  };
};

// src/index.ts
var src_default = medusaVitePlugin;
