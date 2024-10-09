import { FindParams, HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Invite {
    private client;
    constructor(client: Client);
    accept(input: HttpTypes.AdminAcceptInvite & {
        invite_token: string;
    }, query?: SelectParams, headers?: ClientHeaders): Promise<{
        user: HttpTypes.AdminUserResponse;
    }>;
    create(body: HttpTypes.AdminCreateInvite, query?: SelectParams, headers?: ClientHeaders): Promise<{
        invite: HttpTypes.AdminInviteResponse;
    }>;
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<{
        invite: HttpTypes.AdminInviteResponse;
    }>;
    list(queryParams?: FindParams, headers?: ClientHeaders): Promise<HttpTypes.PaginatedResponse<{
        invites: HttpTypes.AdminInviteResponse[];
    }>>;
    resend(id: string, headers?: ClientHeaders): Promise<{
        invite: HttpTypes.AdminInviteResponse;
    }>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminInviteDeleteResponse>;
}
//# sourceMappingURL=invite.d.ts.map