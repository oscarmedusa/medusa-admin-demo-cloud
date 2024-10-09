import { AuthenticationInput, AuthenticationResponse, AuthIdentityProviderService, AuthTypes, Context, DAL, InternalModuleDeclaration, ModuleJoinerConfig, ModulesSdkTypes } from "@medusajs/framework/types";
import { AuthIdentity, ProviderIdentity } from "../models";
import AuthProviderService from "./auth-provider";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    authIdentityService: ModulesSdkTypes.IMedusaInternalService<any>;
    providerIdentityService: ModulesSdkTypes.IMedusaInternalService<any>;
    authProviderService: AuthProviderService;
};
declare const AuthModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<{
    AuthIdentity: {
        dto: AuthTypes.AuthIdentityDTO;
    };
    ProviderIdentity: {
        dto: AuthTypes.ProviderIdentityDTO;
    };
}>;
export default class AuthModuleService extends AuthModuleService_base implements AuthTypes.IAuthModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected authIdentityService_: ModulesSdkTypes.IMedusaInternalService<AuthIdentity>;
    protected providerIdentityService_: ModulesSdkTypes.IMedusaInternalService<ProviderIdentity>;
    protected readonly authProviderService_: AuthProviderService;
    constructor({ authIdentityService, providerIdentityService, authProviderService, baseRepository, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    createAuthIdentities(data: AuthTypes.CreateAuthIdentityDTO[], sharedContext?: Context): Promise<AuthTypes.AuthIdentityDTO[]>;
    createAuthIdentities(data: AuthTypes.CreateAuthIdentityDTO, sharedContext?: Context): Promise<AuthTypes.AuthIdentityDTO>;
    updateAuthIdentities(data: AuthTypes.UpdateAuthIdentityDTO[], sharedContext?: Context): Promise<AuthTypes.AuthIdentityDTO[]>;
    updateAuthIdentities(data: AuthTypes.UpdateAuthIdentityDTO, sharedContext?: Context): Promise<AuthTypes.AuthIdentityDTO>;
    register(provider: string, authenticationData: AuthenticationInput): Promise<AuthenticationResponse>;
    createProviderIdentities(data: AuthTypes.CreateProviderIdentityDTO[], sharedContext?: Context): Promise<AuthTypes.ProviderIdentityDTO[]>;
    createProviderIdentities(data: AuthTypes.CreateProviderIdentityDTO, sharedContext?: Context): Promise<AuthTypes.ProviderIdentityDTO>;
    updateProviderIdentities(data: AuthTypes.UpdateProviderIdentityDTO[], sharedContext?: Context): Promise<AuthTypes.ProviderIdentityDTO[]>;
    updateProviderIdentities(data: AuthTypes.UpdateProviderIdentityDTO, sharedContext?: Context): Promise<AuthTypes.ProviderIdentityDTO>;
    updateProvider(provider: string, data: Record<string, unknown>): Promise<AuthenticationResponse>;
    authenticate(provider: string, authenticationData: AuthenticationInput): Promise<AuthenticationResponse>;
    validateCallback(provider: string, authenticationData: AuthenticationInput): Promise<AuthenticationResponse>;
    getAuthIdentityProviderService(provider: string): AuthIdentityProviderService;
}
export {};
//# sourceMappingURL=auth-module.d.ts.map