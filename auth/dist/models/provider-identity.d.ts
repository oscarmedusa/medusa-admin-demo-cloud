import { Rel } from "@mikro-orm/core";
import AuthIdentity from "./auth-identity";
export default class ProviderIdentity {
    id: string;
    entity_id: string;
    provider: string;
    auth_identity_id: string;
    auth_identity: Rel<AuthIdentity>;
    user_metadata: Record<string, unknown> | null;
    provider_metadata: Record<string, unknown> | null;
    created_at: Date;
    updated_at: Date;
    onCreate(): void;
}
//# sourceMappingURL=provider-identity.d.ts.map