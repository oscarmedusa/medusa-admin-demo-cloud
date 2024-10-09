import { Filter as MikroORMFilter } from "@mikro-orm/core";
import { TSMigrationGenerator } from "@mikro-orm/migrations";
import { ModuleServiceInitializeOptions } from "@medusajs/types";
type FilterDef = Parameters<typeof MikroORMFilter>[0];
export declare class CustomTsMigrationGenerator extends TSMigrationGenerator {
    createStatement(sql: string, padLeft: number): string;
}
export type Filter = {
    name?: string;
} & Omit<FilterDef, "name">;
export declare function mikroOrmCreateConnection(database: ModuleServiceInitializeOptions["database"] & {
    connection?: any;
    filters?: Record<string, Filter>;
}, entities: any[], pathToMigrations: string): Promise<import("@mikro-orm/core").MikroORM<import("@mikro-orm/postgresql").PostgreSqlDriver>>;
export {};
//# sourceMappingURL=mikro-orm-create-connection.d.ts.map