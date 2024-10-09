"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineProperty = defineProperty;
const dal_1 = require("../../../dal");
const common_1 = require("../../../common");
const core_1 = require("@mikro-orm/core");
const primary_key_1 = require("../../properties/primary-key");
/**
 * DML entity data types to PostgreSQL data types via
 * Mikro ORM.
 *
 * We remove "enum" type from here, because we use a dedicated
 * mikro orm decorator for that
 */
const COLUMN_TYPES = {
    boolean: "boolean",
    dateTime: "timestamptz",
    number: "integer",
    bigNumber: "numeric",
    text: "text",
    json: "jsonb",
    array: "array",
};
/**
 * DML entity data types to Mikro ORM property
 * types.
 *
 * We remove "enum" type from here, because we use a dedicated
 * mikro orm decorator for that
 */
const PROPERTY_TYPES = {
    boolean: "boolean",
    dateTime: "date",
    number: "number",
    bigNumber: "number",
    text: "string",
    json: "any",
    array: "string[]",
};
/**
 * Properties that needs special treatment based upon their name.
 * We can safely rely on these names because they are never
 * provided by the end-user. Instead we output them
 * implicitly via the DML.
 */
const SPECIAL_PROPERTIES = {
    created_at: (MikroORMEntity, field) => {
        (0, core_1.Property)({
            columnType: "timestamptz",
            type: "date",
            nullable: false,
            fieldName: field.fieldName,
            defaultRaw: "now()",
            onCreate: () => new Date(),
        })(MikroORMEntity.prototype, field.fieldName);
    },
    updated_at: (MikroORMEntity, field) => {
        (0, core_1.Property)({
            columnType: "timestamptz",
            type: "date",
            nullable: false,
            fieldName: field.fieldName,
            defaultRaw: "now()",
            onCreate: () => new Date(),
            onUpdate: () => new Date(),
        })(MikroORMEntity.prototype, field.fieldName);
    },
};
/**
 * Defines a DML entity schema field as a Mikro ORM property
 */
function defineProperty(MikroORMEntity, propertyName, property) {
    const field = property.parse(propertyName);
    /**
     * Here we initialize nullable properties with a null value
     */
    if (field.nullable) {
        Object.defineProperty(MikroORMEntity.prototype, field.fieldName, {
            value: null,
            configurable: true,
            enumerable: true,
            writable: true,
        });
    }
    if (SPECIAL_PROPERTIES[field.fieldName]) {
        SPECIAL_PROPERTIES[field.fieldName](MikroORMEntity, field);
        return;
    }
    /**
     * Defining an big number property
     * A big number property always comes with a raw_{{ fieldName }} column
     * where the config of the bigNumber is set.
     * The `raw_` field is generated during DML schema generation as a json
     * dataType.
     */
    if (field.dataType.name === "bigNumber") {
        (0, dal_1.MikroOrmBigNumberProperty)({
            nullable: field.nullable,
            fieldName: field.fieldName,
            /**
             * MikroORM does not ignore undefined values for default when generating
             * the database schema SQL. Conditionally add it here to prevent undefined
             * from being set as default value in SQL.
             */
            ...((0, common_1.isDefined)(field.defaultValue) && { default: field.defaultValue }),
        })(MikroORMEntity.prototype, field.fieldName);
        return;
    }
    if (field.dataType.name === "array") {
        (0, core_1.Property)({
            type: core_1.ArrayType,
            fieldName: field.fieldName,
            nullable: field.nullable,
            /**
             * MikroORM does not ignore undefined values for default when generating
             * the database schema SQL. Conditionally add it here to prevent undefined
             * from being set as default value in SQL.
             */
            ...((0, common_1.isDefined)(field.defaultValue) && { default: field.defaultValue }),
        })(MikroORMEntity.prototype, field.fieldName);
        return;
    }
    /**
     * Defining an enum property
     */
    if (field.dataType.name === "enum") {
        (0, core_1.Enum)({
            items: () => field.dataType.options.choices,
            nullable: field.nullable,
            fieldName: field.fieldName,
            type: core_1.Utils.getObjectType(field.dataType.options.choices[0]),
            /**
             * MikroORM does not ignore undefined values for default when generating
             * the database schema SQL. Conditionally add it here to prevent undefined
             * from being set as default value in SQL.
             */
            ...((0, common_1.isDefined)(field.defaultValue) && { default: field.defaultValue }),
        })(MikroORMEntity.prototype, field.fieldName);
        return;
    }
    /**
     * Defining an id property
     */
    if (field.dataType.name === "id") {
        const IdDecorator = primary_key_1.PrimaryKeyModifier.isPrimaryKeyModifier(property)
            ? (0, core_1.PrimaryKey)({
                columnType: "text",
                type: "string",
                nullable: false,
                fieldName: field.fieldName,
            })
            : (0, core_1.Property)({
                columnType: "text",
                type: "string",
                nullable: false,
                fieldName: field.fieldName,
            });
        IdDecorator(MikroORMEntity.prototype, field.fieldName);
        /**
         * Hook to generate entity within the code
         */
        const generateIdMethodName = `generateId`;
        MikroORMEntity.prototype[generateIdMethodName] = function () {
            this[field.fieldName] = (0, common_1.generateEntityId)(this[field.fieldName], field.dataType.options?.prefix);
        };
        /**
         * Execute hook via lifecycle decorators
         */
        (0, core_1.BeforeCreate)()(MikroORMEntity.prototype, generateIdMethodName);
        (0, core_1.OnInit)()(MikroORMEntity.prototype, generateIdMethodName);
        return;
    }
    /**
     * Handling JSON property separately to stringify its default value
     */
    if (field.dataType.name === "json") {
        (0, core_1.Property)({
            columnType: "jsonb",
            type: "any",
            nullable: field.nullable,
            fieldName: field.fieldName,
            /**
             * MikroORM does not ignore undefined values for default when generating
             * the database schema SQL. Conditionally add it here to prevent undefined
             * from being set as default value in SQL.
             */
            ...((0, common_1.isDefined)(field.defaultValue) && {
                default: JSON.stringify(field.defaultValue),
            }),
        })(MikroORMEntity.prototype, field.fieldName);
        return;
    }
    /**
     * Define rest of properties
     */
    const columnType = COLUMN_TYPES[field.dataType.name];
    const propertyType = PROPERTY_TYPES[field.dataType.name];
    /**
     * Defining a primary key property
     */
    if (primary_key_1.PrimaryKeyModifier.isPrimaryKeyModifier(property)) {
        (0, core_1.PrimaryKey)({
            columnType,
            type: propertyType,
            nullable: false,
            fieldName: field.fieldName,
        })(MikroORMEntity.prototype, field.fieldName);
        return;
    }
    (0, core_1.Property)({
        columnType,
        type: propertyType,
        nullable: field.nullable,
        fieldName: field.fieldName,
        /**
         * MikroORM does not ignore undefined values for default when generating
         * the database schema SQL. Conditionally add it here to prevent undefined
         * from being set as default value in SQL.
         */
        ...((0, common_1.isDefined)(field.defaultValue) && { default: field.defaultValue }),
    })(MikroORMEntity.prototype, field.fieldName);
}
//# sourceMappingURL=define-property.js.map