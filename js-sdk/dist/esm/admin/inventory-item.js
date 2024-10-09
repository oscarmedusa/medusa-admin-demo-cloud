var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class InventoryItem {
    constructor(client) {
        this.client = client;
    }
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items`, {
                query,
                headers,
            });
        });
    }
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                query,
                headers,
            });
        });
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    listLevels(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
                query,
                headers,
            });
        });
    }
    updateLevel(id, locationId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    deleteLevel(id, locationId, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    batchUpdateLevels(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
}
//# sourceMappingURL=inventory-item.js.map