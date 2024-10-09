import { type GraphQLSchema } from "graphql";
import { ModuleJoinerConfig } from "@medusajs/types";
export declare function gqlSchemaToTypes({ schema, outputDir, filename, joinerConfigs, interfaceName, }: {
    schema: GraphQLSchema;
    outputDir: string;
    filename: string;
    joinerConfigs: ModuleJoinerConfig[];
    interfaceName: string;
}): Promise<void>;
//# sourceMappingURL=graphql-to-ts-types.d.ts.map