import { ConfigModule } from "@medusajs/framework/types";
import { Express } from "express";
type Options = {
    app: Express;
    configModule: ConfigModule;
    rootDirectory: string;
};
export default function adminLoader({ app, configModule, rootDirectory, }: Options): Promise<Express>;
export {};
//# sourceMappingURL=admin.d.ts.map