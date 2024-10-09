"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExchangeRepository = void 0;
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("../models");
const base_repository_find_1 = require("../utils/base-repository-find");
class OrderExchangeRepository extends utils_1.DALUtils.mikroOrmBaseRepositoryFactory(_models_1.OrderExchange) {
}
exports.OrderExchangeRepository = OrderExchangeRepository;
(0, base_repository_find_1.setFindMethods)(OrderExchangeRepository, _models_1.OrderExchange);
//# sourceMappingURL=exchange.js.map