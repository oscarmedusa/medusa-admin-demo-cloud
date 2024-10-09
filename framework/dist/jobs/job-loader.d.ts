import type { SchedulerOptions } from "@medusajs/orchestration";
import { MedusaContainer } from "@medusajs/types";
type CronJobConfig = {
    name: string;
    schedule: string;
    numberOfExecutions?: SchedulerOptions["numberOfExecutions"];
};
type CronJobHandler = (container: MedusaContainer) => Promise<any>;
export declare class JobLoader {
    #private;
    constructor(sourceDir: string | string[]);
    /**
     * Validate cron job configuration
     * @param config
     * @protected
     */
    protected validateConfig(config: {
        schedule: string | SchedulerOptions;
        name: string;
    }): void;
    /**
     * Create a workflow to register a new cron job
     * @param config
     * @param handler
     * @protected
     */
    protected registerJob({ config, handler, }: {
        config: CronJobConfig;
        handler: CronJobHandler;
    }): void;
    /**
     * Load cron jobs from one or multiple source paths
     */
    load(): Promise<void>;
}
export {};
//# sourceMappingURL=job-loader.d.ts.map