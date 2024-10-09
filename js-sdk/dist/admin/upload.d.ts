import { HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Upload {
    private client;
    constructor(client: Client);
    create(body: HttpTypes.AdminUploadFile, query?: SelectParams, headers?: ClientHeaders): Promise<{
        files: HttpTypes.AdminFile[];
    }>;
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<{
        file: HttpTypes.AdminFile;
    }>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminFileDeleteResponse>;
}
//# sourceMappingURL=upload.d.ts.map