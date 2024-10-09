"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmSerializer = exports.EntitySerializer = void 0;
const core_1 = require("@mikro-orm/core");
function isVisible(meta, propName, options = {}) {
    if (options.populate === true) {
        return options.populate;
    }
    if (Array.isArray(options.populate) &&
        options.populate?.find((item) => item === propName || item.startsWith(propName + "."))) {
        return true;
    }
    if (options.exclude?.find((item) => item === propName)) {
        return false;
    }
    const prop = meta.properties[propName];
    const visible = prop && !prop.hidden;
    const prefixed = prop && !prop.primary && propName.startsWith("_"); // ignore prefixed properties, if it's not a PK
    return visible && !prefixed;
}
function isPopulated(entity, propName, options) {
    if (typeof options.populate !== "boolean" &&
        options.populate?.find((item) => item === propName || item.startsWith(propName + "."))) {
        return true;
    }
    if (typeof options.populate === "boolean") {
        return options.populate;
    }
    return false;
}
/**
 * Custom property filtering for the serialization which takes into account circular references to not return them.
 * @param propName
 * @param meta
 * @param options
 * @param parents
 */
function filterEntityPropToSerialize({ propName, meta, options, parents, }) {
    parents ??= [];
    const isVisibleRes = isVisible(meta, propName, options);
    const prop = meta.properties[propName];
    // Only prevent circular references if prop is a relation
    if (prop &&
        options.preventCircularRef &&
        isVisibleRes &&
        prop.reference !== core_1.ReferenceType.SCALAR) {
        // mapToPk would represent a foreign key and we want to keep them
        if (!!prop.mapToPk) {
            return true;
        }
        return !parents.some((parent) => parent === prop.type);
    }
    return isVisibleRes;
}
class EntitySerializer {
    static serialize(entity, options = {}, parents = []) {
        const parents_ = Array.from(new Set(parents));
        const wrapped = (0, core_1.helper)(entity);
        const meta = wrapped.__meta;
        let contextCreated = false;
        if (!wrapped.__serializationContext.root) {
            const root = new core_1.SerializationContext();
            core_1.SerializationContext.propagate(root, entity, (meta, prop) => meta.properties[prop]?.reference !== core_1.ReferenceType.SCALAR);
            contextCreated = true;
        }
        const root = wrapped.__serializationContext
            .root;
        const ret = {};
        const keys = new Set(meta.primaryKeys);
        Object.keys(entity).forEach((prop) => keys.add(prop));
        const visited = root.visited.has(entity);
        if (!visited) {
            root.visited.add(entity);
        }
        // Virtually augment the serialization context
        root.visitedSerialized ??= new Map();
        const primaryKeysValues = Array.from(keys)
            .map((key) => entity[key])
            .join("-");
        if (root.visitedSerialized.has(primaryKeysValues)) {
            return root.visitedSerialized.get(primaryKeysValues);
        }
        ;
        [...keys]
            /** Medusa Custom properties filtering **/
            .filter((prop) => filterEntityPropToSerialize({
            propName: prop,
            meta,
            options,
            parents: parents_,
        }))
            .map((prop) => {
            const cycle = root.visit(meta.className, prop);
            if (cycle && visited) {
                return [prop, undefined];
            }
            const val = this.processProperty(prop, entity, options, parents_);
            if (!cycle) {
                root.leave(meta.className, prop);
            }
            if (options.skipNull && core_1.Utils.isPlainObject(val)) {
                core_1.Utils.dropUndefinedProperties(val, null);
            }
            return [prop, val];
        })
            .filter(([, value]) => typeof value !== "undefined" && !(value === null && options.skipNull))
            .forEach(([prop, value]) => (ret[this.propertyName(meta, prop, wrapped.__platform)] = value));
        if (contextCreated) {
            root.close();
        }
        if (!wrapped.isInitialized()) {
            return ret;
        }
        // decorated getters
        meta.props
            .filter((prop) => prop.getter &&
            prop.getterName === undefined &&
            typeof entity[prop.name] !== "undefined" &&
            isVisible(meta, prop.name, options))
            .forEach((prop) => (ret[this.propertyName(meta, prop.name, wrapped.__platform)] =
            this.processProperty(prop.name, entity, options, parents_)));
        // decorated get methods
        meta.props
            .filter((prop) => prop.getterName &&
            entity[prop.getterName] instanceof Function &&
            isVisible(meta, prop.name, options))
            .forEach((prop) => (ret[this.propertyName(meta, prop.name, wrapped.__platform)] =
            this.processProperty(prop.getterName, entity, options, parents_)));
        root.visitedSerialized.set(primaryKeysValues, ret);
        return ret;
    }
    static propertyName(meta, prop, platform) {
        /* istanbul ignore next */
        if (meta.properties[prop]?.serializedName) {
            return meta.properties[prop].serializedName;
        }
        if (meta.properties[prop]?.primary && platform) {
            return platform.getSerializedPrimaryKeyField(prop);
        }
        return prop;
    }
    static processProperty(prop, entity, options, parents = []) {
        const parents_ = [...parents, entity.constructor.name];
        const parts = prop.split(".");
        prop = parts[0];
        const wrapped = (0, core_1.helper)(entity);
        const property = wrapped.__meta.properties[prop];
        const serializer = property?.serializer;
        // getter method
        if (entity[prop] instanceof Function) {
            const returnValue = entity[prop]();
            if (!options.ignoreSerializers && serializer) {
                return serializer(returnValue);
            }
            return returnValue;
        }
        /* istanbul ignore next */
        if (!options.ignoreSerializers && serializer) {
            return serializer(entity[prop]);
        }
        if (core_1.Utils.isCollection(entity[prop])) {
            return this.processCollection(prop, entity, options, parents_);
        }
        if (core_1.Utils.isEntity(entity[prop], true)) {
            return this.processEntity(prop, entity, wrapped.__platform, options, parents_);
        }
        /* istanbul ignore next */
        if (property?.reference === core_1.ReferenceType.EMBEDDED) {
            if (Array.isArray(entity[prop])) {
                return entity[prop].map((item) => (0, core_1.helper)(item).toJSON());
            }
            if (core_1.Utils.isObject(entity[prop])) {
                return (0, core_1.helper)(entity[prop]).toJSON();
            }
        }
        const customType = property?.customType;
        if (customType) {
            return customType.toJSON(entity[prop], wrapped.__platform);
        }
        return wrapped.__platform.normalizePrimaryKey(entity[prop]);
    }
    static extractChildOptions(options, prop) {
        const extractChildElements = (items) => {
            return items
                .filter((field) => field.startsWith(`${prop}.`))
                .map((field) => field.substring(prop.length + 1));
        };
        return {
            ...options,
            populate: Array.isArray(options.populate)
                ? extractChildElements(options.populate)
                : options.populate,
            exclude: Array.isArray(options.exclude)
                ? extractChildElements(options.exclude)
                : options.exclude,
        };
    }
    static processEntity(prop, entity, platform, options, parents = []) {
        const parents_ = [...parents, entity.constructor.name];
        const child = core_1.Reference.unwrapReference(entity[prop]);
        const wrapped = (0, core_1.helper)(child);
        const populated = isPopulated(child, prop, options) && wrapped.isInitialized();
        const expand = populated || options.forceObject || !wrapped.__managed;
        if (expand) {
            return this.serialize(child, this.extractChildOptions(options, prop), parents_);
        }
        return platform.normalizePrimaryKey(wrapped.getPrimaryKey());
    }
    static processCollection(prop, entity, options, parents = []) {
        const parents_ = [...parents, entity.constructor.name];
        const col = entity[prop];
        if (!col.isInitialized()) {
            return undefined;
        }
        return col.getItems(false).map((item) => {
            if (isPopulated(item, prop, options)) {
                return this.serialize(item, this.extractChildOptions(options, prop), parents_);
            }
            return (0, core_1.helper)(item).getPrimaryKey();
        });
    }
}
exports.EntitySerializer = EntitySerializer;
const mikroOrmSerializer = (data, options) => {
    return new Promise((resolve) => {
        options ??= {};
        const data_ = (Array.isArray(data) ? data : [data]).filter(Boolean);
        const forSerialization = [];
        const notForSerialization = [];
        data_.forEach((object) => {
            if (object.__meta) {
                return forSerialization.push(object);
            }
            return notForSerialization.push(object);
        });
        let result = forSerialization.map((entity) => EntitySerializer.serialize(entity, {
            forceObject: true,
            populate: true,
            preventCircularRef: true,
            ...options,
        }));
        if (notForSerialization.length) {
            result = result.concat(notForSerialization);
        }
        resolve(Array.isArray(data) ? result : result[0]);
    });
};
exports.mikroOrmSerializer = mikroOrmSerializer;
//# sourceMappingURL=mikro-orm-serializer.js.map