import { IndexTypes } from "@medusajs/framework/types";
import { GraphQLUtils } from "@medusajs/framework/utils";
export declare const CustomDirectives: {
    Listeners: {
        configurationPropertyName: string;
        isRequired: boolean;
        name: string;
        directive: string;
        definition: string;
    };
};
export declare function makeSchemaExecutable(inputSchema: string): GraphQLUtils.GraphQLSchema;
/**
 * This util build an internal representation object from the provided schema.
 * It will resolve all modules, fields, link module representation to build
 * the appropriate representation for the index module.
 *
 * This representation will be used to re construct the expected output object from a search
 * but can also be used for anything since the relation tree is available through ref.
 *
 * @param schema
 */
export declare function buildSchemaObjectRepresentation(schema: any): [IndexTypes.SchemaObjectRepresentation, Record<string, any>];
//# sourceMappingURL=build-config.d.ts.map