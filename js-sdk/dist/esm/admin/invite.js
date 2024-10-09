var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export class Invite {
    constructor(client) {
        this.client = client;
    }
    accept(input, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const { invite_token } = input, rest = __rest(input, ["invite_token"]);
            return yield this.client.fetch(`/admin/invites/accept?token=${input.invite_token}`, {
                method: "POST",
                headers,
                body: rest,
                query,
            });
        });
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/invites`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/invites/${id}`, {
                headers,
                query,
            });
        });
    }
    list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/invites`, {
                headers,
                query: queryParams,
            });
        });
    }
    resend(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/invites/${id}/resend`, {
                method: "POST",
                headers,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/invites/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
}
//# sourceMappingURL=invite.js.map