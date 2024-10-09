"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const _models_1 = require("../models");
// 1 day
const DEFAULT_VALID_INVITE_DURATION = 60 * 60 * 24 * 1000;
class UserModuleService extends (0, utils_1.MedusaService)({ User: _models_1.User, Invite: _models_1.Invite }) {
    constructor({ userService, inviteService, baseRepository }, moduleDeclaration) {
        // @ts-ignore
        super(...arguments);
        this.moduleDeclaration = moduleDeclaration;
        this.baseRepository_ = baseRepository;
        this.userService_ = userService;
        this.inviteService_ = inviteService;
        this.config = {
            jwtSecret: moduleDeclaration["jwt_secret"],
            expiresIn: parseInt(moduleDeclaration["valid_duration"]) ||
                DEFAULT_VALID_INVITE_DURATION,
        };
        if (!this.config.jwtSecret) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "No jwt_secret was provided in the UserModule's options. Please add one.");
        }
    }
    async validateInviteToken(token, sharedContext = {}) {
        const jwtSecret = this.moduleDeclaration["jwt_secret"];
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret, { complete: true });
        const invite = await this.inviteService_.retrieve(decoded.payload.id, {}, sharedContext);
        if (invite.expires_at < new Date()) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "The invite has expired");
        }
        return await this.baseRepository_.serialize(invite, {
            populate: true,
        });
    }
    async refreshInviteTokens(inviteIds, sharedContext = {}) {
        const invites = await this.refreshInviteTokens_(inviteIds, sharedContext);
        sharedContext.messageAggregator?.saveRawMessageData(invites.map((invite) => ({
            eventName: utils_1.UserEvents.INVITE_TOKEN_GENERATED,
            source: this.constructor.name,
            action: "token_generated",
            object: "invite",
            context: sharedContext,
            data: { id: invite.id },
        })));
        return await this.baseRepository_.serialize(invites, {
            populate: true,
        });
    }
    async refreshInviteTokens_(inviteIds, sharedContext = {}) {
        const [invites, count] = await this.inviteService_.listAndCount({ id: inviteIds }, {}, sharedContext);
        if (count !== inviteIds.length) {
            const missing = (0, utils_1.arrayDifference)(inviteIds, invites.map((invite) => invite.id));
            if (missing.length > 0) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `The following invites do not exist: ${missing.join(", ")}`);
            }
        }
        const updates = invites.map((invite) => {
            return {
                id: invite.id,
                expires_at: new Date().setMilliseconds(new Date().getMilliseconds() + this.config.expiresIn),
                token: this.generateToken({ id: invite.id, email: invite.email }),
            };
        });
        return await this.inviteService_.update(updates, sharedContext);
    }
    async createUsers(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const users = await this.userService_.create(input, sharedContext);
        const serializedUsers = await this.baseRepository_.serialize(users, {
            populate: true,
        });
        sharedContext.messageAggregator?.saveRawMessageData(users.map((user) => ({
            eventName: utils_1.UserEvents.USER_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "user",
            context: sharedContext,
            data: { id: user.id },
        })));
        return Array.isArray(data) ? serializedUsers : serializedUsers[0];
    }
    async updateUsers(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const updatedUsers = await this.userService_.update(input, sharedContext);
        const serializedUsers = await this.baseRepository_.serialize(updatedUsers, {
            populate: true,
        });
        sharedContext.messageAggregator?.saveRawMessageData(updatedUsers.map((user) => ({
            eventName: utils_1.UserEvents.USER_UPDATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.UPDATED,
            object: "user",
            context: sharedContext,
            data: { id: user.id },
        })));
        return Array.isArray(data) ? serializedUsers : serializedUsers[0];
    }
    async createInvites(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const invites = await this.createInvites_(input, sharedContext);
        const serializedInvites = await this.baseRepository_.serialize(invites, {
            populate: true,
        });
        sharedContext.messageAggregator?.saveRawMessageData(invites.map((invite) => ({
            eventName: utils_1.UserEvents.INVITE_CREATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.CREATED,
            object: "invite",
            context: sharedContext,
            data: { id: invite.id },
        })));
        sharedContext.messageAggregator?.saveRawMessageData(invites.map((invite) => ({
            eventName: utils_1.UserEvents.INVITE_TOKEN_GENERATED,
            source: this.constructor.name,
            action: "token_generated",
            object: "invite",
            context: sharedContext,
            data: { id: invite.id },
        })));
        return Array.isArray(data) ? serializedInvites : serializedInvites[0];
    }
    async createInvites_(data, sharedContext = {}) {
        const alreadyExistingUsers = await this.listUsers({
            email: data.map((d) => d.email),
        });
        if (alreadyExistingUsers.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `User account for following email(s) already exist: ${alreadyExistingUsers
                .map((u) => u.email)
                .join(", ")}`);
        }
        const toCreate = data.map((invite) => {
            return {
                ...invite,
                expires_at: new Date(),
                token: "placeholder",
            };
        });
        const created = await this.inviteService_.create(toCreate, sharedContext);
        const updates = created.map((invite) => {
            return {
                id: invite.id,
                expires_at: new Date().setMilliseconds(new Date().getMilliseconds() + this.config.expiresIn),
                token: this.generateToken({ id: invite.id, email: invite.email }),
            };
        });
        return await this.inviteService_.update(updates, sharedContext);
    }
    async updateInvites(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const updatedInvites = await this.inviteService_.update(input, sharedContext);
        const serializedInvites = await this.baseRepository_.serialize(updatedInvites, {
            populate: true,
        });
        sharedContext.messageAggregator?.saveRawMessageData(serializedInvites.map((invite) => ({
            eventName: utils_1.UserEvents.INVITE_UPDATED,
            source: this.constructor.name,
            action: utils_1.CommonEvents.UPDATED,
            object: "invite",
            context: sharedContext,
            data: { id: invite.id },
        })));
        return Array.isArray(data) ? serializedInvites : serializedInvites[0];
    }
    generateToken(data) {
        const jwtSecret = this.moduleDeclaration["jwt_secret"];
        return jsonwebtoken_1.default.sign(data, jwtSecret, {
            jwtid: node_crypto_1.default.randomUUID(),
            expiresIn: this.config.expiresIn,
        });
    }
}
exports.default = UserModuleService;
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "validateInviteToken", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "refreshInviteTokens", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "refreshInviteTokens_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "createUsers", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "updateUsers", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "createInvites", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "createInvites_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserModuleService.prototype, "updateInvites", null);
//# sourceMappingURL=user-module.js.map