"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SubscriberLoader_pluginOptions, _SubscriberLoader_sourceDir, _SubscriberLoader_excludes, _SubscriberLoader_subscriberDescriptors;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberLoader = void 0;
const utils_1 = require("@medusajs/utils");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const config_1 = require("../config");
const container_1 = require("../container");
const logger_1 = require("../logger");
class SubscriberLoader {
    constructor(sourceDir, options = {}) {
        /**
         * The options of the plugin from which the subscribers are being loaded
         * @private
         */
        _SubscriberLoader_pluginOptions.set(this, void 0);
        /**
         * The base directory from which to scan for the subscribers
         * @private
         */
        _SubscriberLoader_sourceDir.set(this, void 0);
        /**
         * The list of file names to exclude from the subscriber scan
         * @private
         */
        _SubscriberLoader_excludes.set(this, [
            /index\.js/,
            /index\.ts/,
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts|\.md)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ]
        /**
         * Map of subscribers descriptors to consume in the loader
         * @private
         */
        );
        /**
         * Map of subscribers descriptors to consume in the loader
         * @private
         */
        _SubscriberLoader_subscriberDescriptors.set(this, new Map());
        __classPrivateFieldSet(this, _SubscriberLoader_sourceDir, sourceDir, "f");
        __classPrivateFieldSet(this, _SubscriberLoader_pluginOptions, options, "f");
    }
    validateSubscriber(subscriber, path) {
        const handler = subscriber.default;
        if (!handler || typeof handler !== "function") {
            /**
             * If the handler is not a function, we can't use it
             */
            logger_1.logger.warn(`The subscriber in ${path} is not a function. skipped.`);
            return false;
        }
        const config = subscriber.config;
        if (!config) {
            /**
             * If the subscriber is missing a config, we can't use it
             */
            logger_1.logger.warn(`The subscriber in ${path} is missing a config. skipped.`);
            return false;
        }
        if (!config.event) {
            /**
             * If the subscriber is missing an event, we can't use it.
             * In production we throw an error, else we log a warning
             */
            if (config_1.configManager.isProduction) {
                throw new Error(`The subscriber in ${path} is missing an event in the config.`);
            }
            else {
                logger_1.logger.warn(`The subscriber in ${path} is missing an event in the config. skipped.`);
            }
            return false;
        }
        const events = Array.isArray(config.event) ? config.event : [config.event];
        if (events.some((e) => !(typeof e === "string"))) {
            /**
             * If the subscribers event is not a string or an array of strings, we can't use it
             */
            logger_1.logger.warn(`The subscriber in ${path} has an invalid event config. The event must be a string or an array of strings. skipped.`);
            return false;
        }
        return true;
    }
    async createDescriptor(absolutePath) {
        return await (0, utils_1.dynamicImport)(absolutePath).then((module_) => {
            module_ = (0, utils_1.resolveExports)(module_);
            const isValid = this.validateSubscriber(module_, absolutePath);
            if (!isValid) {
                return;
            }
            __classPrivateFieldGet(this, _SubscriberLoader_subscriberDescriptors, "f").set(absolutePath, {
                config: module_.config,
                handler: module_.default,
            });
        });
    }
    async createMap(dirPath) {
        const promises = await (0, promises_1.readdir)(dirPath, {
            recursive: true,
            withFileTypes: true,
        }).then(async (entries) => {
            const fileEntries = entries.filter((entry) => {
                return (!entry.isDirectory() &&
                    !__classPrivateFieldGet(this, _SubscriberLoader_excludes, "f").some((exclude) => exclude.test(entry.name)));
            });
            logger_1.logger.debug(`Registering subscribers from ${dirPath}.`);
            return fileEntries.flatMap(async (entry) => {
                const fullPath = (0, path_1.join)(entry.path, entry.name);
                return await this.createDescriptor(fullPath);
            });
        });
        await (0, utils_1.promiseAll)(promises);
    }
    inferIdentifier(fileName, { context }, handler) {
        /**
         * If subscriberId is provided, use that
         */
        if (context?.subscriberId) {
            return context.subscriberId;
        }
        const handlerName = handler.name;
        /**
         * If the handler is not anonymous, use the name
         */
        if (handlerName && !handlerName.startsWith("_default")) {
            return (0, utils_1.kebabCase)(handlerName);
        }
        /**
         * If the handler is anonymous, use the file name
         */
        const idFromFile = (0, path_1.parse)(fileName).name;
        return (0, utils_1.kebabCase)(idFromFile);
    }
    createSubscriber({ fileName, config, handler, }) {
        const eventBusService = container_1.container.resolve(utils_1.Modules.EVENT_BUS);
        const { event } = config;
        const events = Array.isArray(event) ? event : [event];
        const subscriberId = this.inferIdentifier(fileName, config, handler);
        for (const e of events) {
            const subscriber = async (data) => {
                return await handler({
                    event: { name: e, ...data },
                    container: container_1.container,
                    pluginOptions: __classPrivateFieldGet(this, _SubscriberLoader_pluginOptions, "f"),
                });
            };
            eventBusService.subscribe(e, subscriber, {
                ...config.context,
                subscriberId,
            });
        }
    }
    async load() {
        const normalizeSourcePaths = Array.isArray(__classPrivateFieldGet(this, _SubscriberLoader_sourceDir, "f"))
            ? __classPrivateFieldGet(this, _SubscriberLoader_sourceDir, "f")
            : [__classPrivateFieldGet(this, _SubscriberLoader_sourceDir, "f")];
        const promises = normalizeSourcePaths.map(async (sourcePath) => {
            try {
                await (0, promises_1.access)(sourcePath);
            }
            catch {
                logger_1.logger.info(`No subscribers to load from ${sourcePath}. skipped.`);
                return;
            }
            return await this.createMap(sourcePath);
        });
        await (0, utils_1.promiseAll)(promises);
        for (const [fileName, { config, handler },] of __classPrivateFieldGet(this, _SubscriberLoader_subscriberDescriptors, "f").entries()) {
            this.createSubscriber({
                fileName,
                config,
                handler,
            });
        }
        logger_1.logger.debug(`Subscribers registered.`);
        /**
         * Return the file paths of the registered subscribers, to prevent the
         * backwards compatible loader from trying to register them.
         */
        return [...__classPrivateFieldGet(this, _SubscriberLoader_subscriberDescriptors, "f").keys()];
    }
}
exports.SubscriberLoader = SubscriberLoader;
_SubscriberLoader_pluginOptions = new WeakMap(), _SubscriberLoader_sourceDir = new WeakMap(), _SubscriberLoader_excludes = new WeakMap(), _SubscriberLoader_subscriberDescriptors = new WeakMap();
//# sourceMappingURL=subscriber-loader.js.map