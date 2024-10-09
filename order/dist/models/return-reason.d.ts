import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
type OptionalOrderProps = "parent_return_reason" | DAL.ModelDateColumns;
export default class ReturnReason {
    [OptionalProps]?: OptionalOrderProps;
    id: string;
    value: string;
    label: string;
    description: string | null;
    parent_return_reason_id?: string | null;
    parent_return_reason?: Rel<ReturnReason> | null;
    Searchable: any;
    return_reason_children: Rel<ReturnReason>[];
    metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=return-reason.d.ts.map