/**
 * A low-level utility to migrate the database. This util should
 * never exit the process implicitly.
 */
export declare function migrate({ directory, skipLinks, executeAllLinks, executeSafeLinks, }: {
    directory: string;
    skipLinks: boolean;
    executeAllLinks: boolean;
    executeSafeLinks: boolean;
}): Promise<boolean>;
declare const main: ({ directory, skipLinks, executeAllLinks, executeSafeLinks, }: {
    directory: any;
    skipLinks: any;
    executeAllLinks: any;
    executeSafeLinks: any;
}) => Promise<never>;
export default main;
//# sourceMappingURL=migrate.d.ts.map