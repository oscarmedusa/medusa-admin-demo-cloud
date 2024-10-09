export declare class WorkflowLoader {
    #private;
    constructor(sourceDir: string | string[]);
    /**
     * Load workflows from the source paths, workflows are registering themselves,
     * therefore we only need to import them
     */
    load(): Promise<void>;
}
//# sourceMappingURL=workflow-loader.d.ts.map