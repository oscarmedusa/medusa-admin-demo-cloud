var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class FulfillmentSet {
    constructor(client) {
        this.client = client;
    }
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/fulfillment-sets/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    createServiceZone(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/fulfillment-sets/${id}/service-zones`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    retrieveServiceZone(fulfillmentSetId, serviceZoneId, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "GET",
                headers,
                query,
            });
        });
    }
    updateServiceZone(fulfillmentSetId, serviceZoneId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    deleteServiceZone(fulfillmentSetId, serviceZoneId, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "DELETE",
                headers,
            });
        });
    }
}
//# sourceMappingURL=fulfillment-set.js.map