import { Collection } from "@mikro-orm/core";
import ProviderIdentity from "./provider-identity";
export default class AuthIdentity {
    id: string;
    provider_identities: Collection<ProviderIdentity, object>;
    app_metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    onCreate(): void;
}
//# sourceMappingURL=auth-identity.d.ts.map