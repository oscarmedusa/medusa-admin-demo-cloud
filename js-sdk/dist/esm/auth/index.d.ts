import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { Config } from "../types";
export declare class Auth {
    private client;
    private config;
    constructor(client: Client, config: Config);
    register: (actor: string, method: string, payload: HttpTypes.AdminSignUpWithEmailPassword) => Promise<string>;
    login: (actor: string, method: string, payload: HttpTypes.AdminSignInWithEmailPassword | Record<string, unknown>) => Promise<string | {
        location: string;
    }>;
    callback: (actor: string, method: string, query?: Record<string, unknown>) => Promise<string>;
    refresh: () => Promise<string>;
    logout: () => Promise<void>;
    private setToken_;
}
//# sourceMappingURL=index.d.ts.map