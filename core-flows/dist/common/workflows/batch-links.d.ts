import { BatchWorkflowInput, LinkDefinition } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export declare const batchLinksWorkflowId = "batch-links";
/**
 * This workflow manages one or more links to create, update, or dismiss them.
 */
export declare const batchLinksWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<BatchWorkflowInput<LinkDefinition, LinkDefinition, LinkDefinition>, {
    created: (LinkDefinition | WorkflowData<LinkDefinition>)[] & LinkDefinition[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<LinkDefinition[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    };
    updated: (LinkDefinition | WorkflowData<LinkDefinition>)[] & LinkDefinition[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<LinkDefinition[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    };
    deleted: (LinkDefinition | WorkflowData<LinkDefinition>)[] & LinkDefinition[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<LinkDefinition[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<LinkDefinition[]>;
    };
}, []>;
//# sourceMappingURL=batch-links.d.ts.map