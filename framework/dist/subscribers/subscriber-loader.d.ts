export declare class SubscriberLoader {
    #private;
    constructor(sourceDir: string | string[], options?: Record<string, unknown>);
    private validateSubscriber;
    private createDescriptor;
    private createMap;
    private inferIdentifier;
    private createSubscriber;
    load(): Promise<string[]>;
}
//# sourceMappingURL=subscriber-loader.d.ts.map