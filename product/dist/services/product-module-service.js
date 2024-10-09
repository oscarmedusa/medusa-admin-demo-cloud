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
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@medusajs/framework/types");
const _models_1 = require("../models");
const utils_1 = require("@medusajs/framework/utils");
const types_2 = require("../types");
const utils_2 = require("../utils");
const joiner_config_1 = require("./../joiner-config");
class ProductModuleService extends (0, utils_1.MedusaService)({
    Product: _models_1.Product,
    ProductCategory: _models_1.ProductCategory,
    ProductCollection: _models_1.ProductCollection,
    ProductOption: _models_1.ProductOption,
    ProductOptionValue: _models_1.ProductOptionValue,
    ProductTag: _models_1.ProductTag,
    ProductType: _models_1.ProductType,
    ProductVariant: _models_1.ProductVariant,
}) {
    constructor({ baseRepository, productService, productVariantService, productTagService, productCategoryService, productCollectionService, productImageService, productTypeService, productOptionService, productOptionValueService, [utils_1.Modules.EVENT_BUS]: eventBusModuleService, }, moduleDeclaration) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        super(...arguments);
        this.moduleDeclaration = moduleDeclaration;
        this.baseRepository_ = baseRepository;
        this.productService_ = productService;
        this.productVariantService_ = productVariantService;
        this.productTagService_ = productTagService;
        this.productCategoryService_ = productCategoryService;
        this.productCollectionService_ = productCollectionService;
        this.productImageService_ = productImageService;
        this.productTypeService_ = productTypeService;
        this.productOptionService_ = productOptionService;
        this.productOptionValueService_ = productOptionValueService;
        this.eventBusModuleService_ = eventBusModuleService;
    }
    __joinerConfig() {
        return joiner_config_1.joinerConfig;
    }
    async createProductVariants(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const variants = await this.createVariants_(input, sharedContext);
        const createdVariants = await this.baseRepository_.serialize(variants);
        return Array.isArray(data) ? createdVariants : createdVariants[0];
    }
    async createVariants_(data, sharedContext = {}) {
        if (data.some((v) => !v.product_id)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Unable to create variants without specifying a product_id");
        }
        const productOptions = await this.productOptionService_.list({
            product_id: [...new Set(data.map((v) => v.product_id))],
        }, {
            relations: ["values"],
        }, sharedContext);
        const productVariantsWithOptions = ProductModuleService.assignOptionsToVariants(data, productOptions);
        const createdVariants = await this.productVariantService_.create(productVariantsWithOptions, sharedContext);
        utils_2.eventBuilders.createdProductVariant({
            data: createdVariants,
            sharedContext,
        });
        return createdVariants;
    }
    async upsertProductVariants(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((variant) => !!variant.id);
        const forCreate = input.filter((variant) => !variant.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.createVariants_(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.updateVariants_(forUpdate, sharedContext);
        }
        const result = [...created, ...updated];
        const allVariants = await this.baseRepository_.serialize(result);
        return Array.isArray(data) ? allVariants : allVariants[0];
    }
    async updateProductVariants(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const variants = await this.productVariantService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = variants.map((variant) => ({
                id: variant.id,
                ...data,
            }));
        }
        const variants = await this.updateVariants_(normalizedInput, sharedContext);
        const updatedVariants = await this.baseRepository_.serialize(variants);
        return (0, utils_1.isString)(idOrSelector) ? updatedVariants[0] : updatedVariants;
    }
    async updateVariants_(data, sharedContext = {}) {
        // Validation step
        const variantIdsToUpdate = data.map(({ id }) => id);
        const variants = await this.productVariantService_.list({ id: variantIdsToUpdate }, {}, sharedContext);
        if (variants.length !== data.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot update non-existing variants with ids: ${(0, utils_1.arrayDifference)(variantIdsToUpdate, variants.map(({ id }) => id)).join(", ")}`);
        }
        // Data normalization
        const variantsWithProductId = variants.map((v) => ({
            ...data.find((d) => d.id === v.id),
            id: v.id,
            product_id: v.product_id,
        }));
        const productOptions = await this.productOptionService_.list({
            product_id: Array.from(new Set(variantsWithProductId.map((v) => v.product_id))),
        }, { relations: ["values"] }, sharedContext);
        const { entities: productVariants, performedActions } = await this.productVariantService_.upsertWithReplace(ProductModuleService.assignOptionsToVariants(variantsWithProductId, productOptions), {
            relations: ["options"],
        }, sharedContext);
        utils_2.eventBuilders.createdProductVariant({
            data: performedActions.created[_models_1.ProductVariant.name] ?? [],
            sharedContext,
        });
        utils_2.eventBuilders.updatedProductVariant({
            data: performedActions.updated[_models_1.ProductVariant.name] ?? [],
            sharedContext,
        });
        utils_2.eventBuilders.deletedProductVariant({
            data: performedActions.deleted[_models_1.ProductVariant.name] ?? [],
            sharedContext,
        });
        return productVariants;
    }
    async createProductTags(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const tags = await this.productTagService_.create(input, sharedContext);
        const createdTags = await this.baseRepository_.serialize(tags);
        utils_2.eventBuilders.createdProductTag({
            data: createdTags,
            sharedContext,
        });
        return Array.isArray(data) ? createdTags : createdTags[0];
    }
    async upsertProductTags(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((tag) => !!tag.id);
        const forCreate = input.filter((tag) => !tag.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.productTagService_.create(forCreate, sharedContext);
            utils_2.eventBuilders.createdProductTag({
                data: created,
                sharedContext,
            });
        }
        if (forUpdate.length) {
            updated = await this.productTagService_.update(forUpdate, sharedContext);
            utils_2.eventBuilders.updatedProductTag({
                data: updated,
                sharedContext,
            });
        }
        const result = [...created, ...updated];
        const allTags = await this.baseRepository_.serialize(result);
        return Array.isArray(data) ? allTags : allTags[0];
    }
    async updateProductTags(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            // Check if the tag exists in the first place
            await this.productTagService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const tags = await this.productTagService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = tags.map((tag) => ({
                id: tag.id,
                ...data,
            }));
        }
        const tags = await this.productTagService_.update(normalizedInput, sharedContext);
        const updatedTags = await this.baseRepository_.serialize(tags);
        utils_2.eventBuilders.updatedProductTag({
            data: updatedTags,
            sharedContext,
        });
        return (0, utils_1.isString)(idOrSelector) ? updatedTags[0] : updatedTags;
    }
    async createProductTypes(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const types = await this.productTypeService_.create(input, sharedContext);
        const createdTypes = await this.baseRepository_.serialize(types);
        return Array.isArray(data) ? createdTypes : createdTypes[0];
    }
    async upsertProductTypes(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((type) => !!type.id);
        const forCreate = input.filter((type) => !type.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.productTypeService_.create(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.productTypeService_.update(forUpdate, sharedContext);
        }
        const result = [...created, ...updated];
        const allTypes = await this.baseRepository_.serialize(result);
        return Array.isArray(data) ? allTypes : allTypes[0];
    }
    async updateProductTypes(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            // Check if the type exists in the first place
            await this.productTypeService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const types = await this.productTypeService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = types.map((type) => ({
                id: type.id,
                ...data,
            }));
        }
        const types = await this.productTypeService_.update(normalizedInput, sharedContext);
        const updatedTypes = await this.baseRepository_.serialize(types);
        return (0, utils_1.isString)(idOrSelector) ? updatedTypes[0] : updatedTypes;
    }
    async createProductOptions(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const options = await this.createOptions_(input, sharedContext);
        const createdOptions = await this.baseRepository_.serialize(options);
        return Array.isArray(data) ? createdOptions : createdOptions[0];
    }
    async createOptions_(data, sharedContext = {}) {
        if (data.some((v) => !v.product_id)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Tried to create options without specifying a product_id");
        }
        const normalizedInput = data.map((opt) => {
            return {
                ...opt,
                values: opt.values?.map((v) => {
                    return typeof v === "string" ? { value: v } : v;
                }),
            };
        });
        return await this.productOptionService_.create(normalizedInput, sharedContext);
    }
    async upsertProductOptions(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((option) => !!option.id);
        const forCreate = input.filter((option) => !option.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.createOptions_(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.updateOptions_(forUpdate, sharedContext);
        }
        const result = [...created, ...updated];
        const allOptions = await this.baseRepository_.serialize(result);
        return Array.isArray(data) ? allOptions : allOptions[0];
    }
    async updateProductOptions(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            await this.productOptionService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const options = await this.productOptionService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = options.map((option) => ({
                id: option.id,
                ...data,
            }));
        }
        const options = await this.updateOptions_(normalizedInput, sharedContext);
        const updatedOptions = await this.baseRepository_.serialize(options);
        return (0, utils_1.isString)(idOrSelector) ? updatedOptions[0] : updatedOptions;
    }
    async updateOptions_(data, sharedContext = {}) {
        // Validation step
        if (data.some((option) => !option.id)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Tried to update options without specifying an ID");
        }
        const dbOptions = await this.productOptionService_.list({ id: data.map(({ id }) => id) }, { relations: ["values"] }, sharedContext);
        if (dbOptions.length !== data.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot update non-existing options with ids: ${(0, utils_1.arrayDifference)(data.map(({ id }) => id), dbOptions.map(({ id }) => id)).join(", ")}`);
        }
        // Data normalization
        const normalizedInput = data.map((opt) => {
            const dbValues = dbOptions.find(({ id }) => id === opt.id)?.values || [];
            const normalizedValues = opt.values?.map((v) => {
                return typeof v === "string" ? { value: v } : v;
            });
            return {
                ...opt,
                ...(normalizedValues
                    ? {
                        // Oftentimes the options are only passed by value without an id, even if they exist in the DB
                        values: normalizedValues.map((normVal) => {
                            if ("id" in normVal) {
                                return normVal;
                            }
                            const dbVal = dbValues.find((dbVal) => dbVal.value === normVal.value);
                            if (!dbVal) {
                                return normVal;
                            }
                            return {
                                id: dbVal.id,
                                value: normVal.value,
                            };
                        }),
                    }
                    : {}),
            };
        });
        const { entities: productOptions } = await this.productOptionService_.upsertWithReplace(normalizedInput, { relations: ["values"] }, sharedContext);
        return productOptions;
    }
    async createProductCollections(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const collections = await this.createCollections_(input, sharedContext);
        const createdCollections = await this.baseRepository_.serialize(collections);
        await this.eventBusModuleService_?.emit(collections.map(({ id }) => ({
            name: types_2.ProductCollectionEvents.COLLECTION_CREATED,
            data: { id },
        })), {
            internal: true,
        });
        return Array.isArray(data) ? createdCollections : createdCollections[0];
    }
    async createCollections_(data, sharedContext = {}) {
        const normalizedInput = data.map(ProductModuleService.normalizeCreateProductCollectionInput);
        // It's safe to use upsertWithReplace here since we only have product IDs and the only operation to do is update the product
        // with the collection ID
        const { entities: productCollections } = await this.productCollectionService_.upsertWithReplace(normalizedInput, { relations: ["products"] }, sharedContext);
        return productCollections;
    }
    async upsertProductCollections(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((collection) => !!collection.id);
        const forCreate = input.filter((collection) => !collection.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.createCollections_(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.updateCollections_(forUpdate, sharedContext);
        }
        const result = [...created, ...updated];
        const allCollections = await this.baseRepository_.serialize(result);
        if (created.length) {
            await this.eventBusModuleService_?.emit(created.map(({ id }) => ({
                name: types_2.ProductCollectionEvents.COLLECTION_CREATED,
                data: { id },
            })), {
                internal: true,
            });
        }
        if (updated.length) {
            await this.eventBusModuleService_?.emit(updated.map(({ id }) => ({
                name: types_2.ProductCollectionEvents.COLLECTION_UPDATED,
                data: { id },
            })), {
                internal: true,
            });
        }
        return Array.isArray(data) ? allCollections : allCollections[0];
    }
    async updateProductCollections(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            await this.productCollectionService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const collections = await this.productCollectionService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = collections.map((collection) => ({
                id: collection.id,
                ...data,
            }));
        }
        const collections = await this.updateCollections_(normalizedInput, sharedContext);
        const updatedCollections = await this.baseRepository_.serialize(collections);
        await this.eventBusModuleService_?.emit(updatedCollections.map(({ id }) => ({
            name: types_2.ProductCollectionEvents.COLLECTION_UPDATED,
            data: { id },
        })), {
            internal: true,
        });
        return (0, utils_1.isString)(idOrSelector) ? updatedCollections[0] : updatedCollections;
    }
    async updateCollections_(data, sharedContext = {}) {
        const normalizedInput = data.map(ProductModuleService.normalizeUpdateProductCollectionInput);
        // TODO: Maybe we can update upsertWithReplace to not remove oneToMany entities, but just disassociate them? With that we can remove the code below.
        // Another alternative is to not allow passing product_ids to a collection, and instead set the collection_id through the product update call.
        const updatedCollections = await this.productCollectionService_.update(normalizedInput.map((c) => (0, utils_1.removeUndefined)({ ...c, products: undefined })), sharedContext);
        const collections = [];
        const updateSelectorAndData = updatedCollections.flatMap((collectionData) => {
            const input = normalizedInput.find((c) => c.id === collectionData.id);
            const productsToUpdate = input?.products;
            const dissociateSelector = {
                collection_id: collectionData.id,
            };
            const associateSelector = {};
            if (!!productsToUpdate?.length) {
                const productIds = productsToUpdate.map((p) => p.id);
                dissociateSelector["id"] = { $nin: productIds };
                associateSelector["id"] = { $in: productIds };
            }
            const result = [
                {
                    selector: dissociateSelector,
                    data: {
                        collection_id: null,
                    },
                },
            ];
            if ((0, utils_1.isPresent)(associateSelector)) {
                result.push({
                    selector: associateSelector,
                    data: {
                        collection_id: collectionData.id,
                    },
                });
            }
            collections.push({
                ...collectionData,
                products: productsToUpdate ?? [],
            });
            return result;
        });
        await this.productService_.update(updateSelectorAndData, sharedContext);
        return collections;
    }
    async createProductCategories(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const categories = await this.productCategoryService_.create(input, sharedContext);
        const createdCategories = await this.baseRepository_.serialize(categories);
        utils_2.eventBuilders.createdProductCategory({
            data: createdCategories,
            sharedContext,
        });
        return Array.isArray(data) ? createdCategories : createdCategories[0];
    }
    async upsertProductCategories(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((category) => !!category.id);
        const forCreate = input.filter((category) => !category.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.productCategoryService_.create(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.productCategoryService_.update(forUpdate, sharedContext);
        }
        const createdCategories = await this.baseRepository_.serialize(created);
        const updatedCategories = await this.baseRepository_.serialize(updated);
        utils_2.eventBuilders.createdProductCategory({
            data: createdCategories,
            sharedContext,
        });
        utils_2.eventBuilders.updatedProductCategory({
            data: updatedCategories,
            sharedContext,
        });
        const result = [...createdCategories, ...updatedCategories];
        return Array.isArray(data) ? result : result[0];
    }
    async updateProductCategories(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            // Check if the type exists in the first place
            await this.productCategoryService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const categories = await this.productCategoryService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = categories.map((type) => ({
                id: type.id,
                ...data,
            }));
        }
        const categories = await this.productCategoryService_.update(normalizedInput, sharedContext);
        const updatedCategories = await this.baseRepository_.serialize(categories);
        utils_2.eventBuilders.updatedProductCategory({
            data: updatedCategories,
            sharedContext,
        });
        return (0, utils_1.isString)(idOrSelector) ? updatedCategories[0] : updatedCategories;
    }
    async createProducts(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const products = await this.createProducts_(input, sharedContext);
        const createdProducts = await this.baseRepository_.serialize(products);
        await this.eventBusModuleService_?.emit(createdProducts.map(({ id }) => ({
            name: types_2.ProductEvents.PRODUCT_CREATED,
            data: { id },
        })), {
            internal: true,
        });
        return Array.isArray(data) ? createdProducts : createdProducts[0];
    }
    async upsertProducts(data, sharedContext = {}) {
        const input = Array.isArray(data) ? data : [data];
        const forUpdate = input.filter((product) => !!product.id);
        const forCreate = input.filter((product) => !product.id);
        let created = [];
        let updated = [];
        if (forCreate.length) {
            created = await this.createProducts_(forCreate, sharedContext);
        }
        if (forUpdate.length) {
            updated = await this.updateProducts_(forUpdate, sharedContext);
        }
        const result = [...created, ...updated];
        const allProducts = await this.baseRepository_.serialize(result);
        if (created.length) {
            await this.eventBusModuleService_?.emit(created.map(({ id }) => ({
                name: types_2.ProductEvents.PRODUCT_CREATED,
                data: { id },
            })), {
                internal: true,
            });
        }
        if (updated.length) {
            await this.eventBusModuleService_?.emit(updated.map(({ id }) => ({
                name: types_2.ProductEvents.PRODUCT_UPDATED,
                data: { id },
            })), {
                internal: true,
            });
        }
        return Array.isArray(data) ? allProducts : allProducts[0];
    }
    async updateProducts(idOrSelector, data, sharedContext = {}) {
        let normalizedInput = [];
        if ((0, utils_1.isString)(idOrSelector)) {
            // This will throw if the product does not exist
            await this.productService_.retrieve(idOrSelector, {}, sharedContext);
            normalizedInput = [{ id: idOrSelector, ...data }];
        }
        else {
            const products = await this.productService_.list(idOrSelector, {}, sharedContext);
            normalizedInput = products.map((product) => ({
                id: product.id,
                ...data,
            }));
        }
        const products = await this.updateProducts_(normalizedInput, sharedContext);
        const updatedProducts = await this.baseRepository_.serialize(products);
        await this.eventBusModuleService_?.emit(updatedProducts.map(({ id }) => ({
            name: types_2.ProductEvents.PRODUCT_UPDATED,
            data: { id },
        })), {
            internal: true,
        });
        return (0, utils_1.isString)(idOrSelector) ? updatedProducts[0] : updatedProducts;
    }
    async createProducts_(data, sharedContext = {}) {
        const normalizedInput = await (0, utils_1.promiseAll)(data.map(async (d) => {
            const normalized = await this.normalizeCreateProductInput(d, sharedContext);
            this.validateProductPayload(normalized);
            return normalized;
        }));
        const { entities: productData } = await this.productService_.upsertWithReplace(normalizedInput, {
            relations: ["images", "tags", "categories"],
        }, sharedContext);
        await (0, utils_1.promiseAll)(
        // Note: It's safe to rely on the order here as `upsertWithReplace` preserves the order of the input
        normalizedInput.map(async (product, i) => {
            const upsertedProduct = productData[i];
            upsertedProduct.options = [];
            upsertedProduct.variants = [];
            if (product.options?.length) {
                const { entities: productOptions } = await this.productOptionService_.upsertWithReplace(product.options?.map((option) => ({
                    ...option,
                    product_id: upsertedProduct.id,
                })) ?? [], { relations: ["values"] }, sharedContext);
                upsertedProduct.options = productOptions;
            }
            if (product.variants?.length) {
                const { entities: productVariants } = await this.productVariantService_.upsertWithReplace(ProductModuleService.assignOptionsToVariants(product.variants?.map((v) => ({
                    ...v,
                    product_id: upsertedProduct.id,
                })) ?? [], upsertedProduct.options), { relations: ["options"] }, sharedContext);
                upsertedProduct.variants = productVariants;
            }
        }));
        return productData;
    }
    async updateProducts_(data, sharedContext = {}) {
        const normalizedInput = await (0, utils_1.promiseAll)(data.map(async (d) => {
            const normalized = await this.normalizeUpdateProductInput(d, sharedContext);
            this.validateProductPayload(normalized);
            return normalized;
        }));
        const { entities: productData } = await this.productService_.upsertWithReplace(normalizedInput, {
            relations: ["images", "tags", "categories"],
        }, sharedContext);
        // There is more than 1-level depth of relations here, so we need to handle the options and variants manually
        await (0, utils_1.promiseAll)(
        // Note: It's safe to rely on the order here as `upsertWithReplace` preserves the order of the input
        normalizedInput.map(async (product, i) => {
            const upsertedProduct = productData[i];
            let allOptions = [];
            if (product.options?.length) {
                const { entities: productOptions } = await this.productOptionService_.upsertWithReplace(product.options?.map((option) => ({
                    ...option,
                    product_id: upsertedProduct.id,
                })) ?? [], { relations: ["values"] }, sharedContext);
                upsertedProduct.options = productOptions;
                // Since we handle the options and variants outside of the product upsert, we need to clean up manually
                await this.productOptionService_.delete({
                    product_id: upsertedProduct.id,
                    id: {
                        $nin: upsertedProduct.options.map(({ id }) => id),
                    },
                }, sharedContext);
                allOptions = upsertedProduct.options;
            }
            else {
                // If the options weren't affected, but the user is changing the variants, make sure we have all options available locally
                if (product.variants?.length) {
                    allOptions = await this.productOptionService_.list({ product_id: upsertedProduct.id }, { relations: ["values"] }, sharedContext);
                }
            }
            if (product.variants?.length) {
                const { entities: productVariants } = await this.productVariantService_.upsertWithReplace(ProductModuleService.assignOptionsToVariants(product.variants?.map((v) => ({
                    ...v,
                    product_id: upsertedProduct.id,
                })) ?? [], allOptions), { relations: ["options"] }, sharedContext);
                upsertedProduct.variants = productVariants;
                await this.productVariantService_.delete({
                    product_id: upsertedProduct.id,
                    id: {
                        $nin: upsertedProduct.variants.map(({ id }) => id),
                    },
                }, sharedContext);
            }
        }));
        return productData;
    }
    /**
     * Validates the manually provided handle value of the product
     * to be URL-safe
     */
    validateProductPayload(productData) {
        if (productData.handle && !(0, utils_1.isValidHandle)(productData.handle)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Invalid product handle '${productData.handle}'. It must contain URL safe characters`);
        }
    }
    async normalizeCreateProductInput(product, sharedContext = {}) {
        const productData = (await this.normalizeUpdateProductInput(product, sharedContext));
        if (!productData.handle && productData.title) {
            productData.handle = (0, utils_1.toHandle)(productData.title);
        }
        if (!productData.status) {
            productData.status = utils_1.ProductStatus.DRAFT;
        }
        if (!productData.thumbnail && productData.images?.length) {
            productData.thumbnail = productData.images[0].url;
        }
        return productData;
    }
    async normalizeUpdateProductInput(product, sharedContext = {}) {
        const productData = { ...product };
        if (productData.is_giftcard) {
            productData.discountable = false;
        }
        if (productData.options?.length) {
            const dbOptions = await this.productOptionService_.list({ product_id: productData.id }, { relations: ["values"] }, sharedContext);
            productData.options = productData.options?.map((option) => {
                const dbOption = dbOptions.find((o) => o.title === option.title);
                return {
                    title: option.title,
                    values: option.values?.map((value) => {
                        const dbValue = dbOption?.values?.find((val) => val.value === value);
                        return {
                            value: value,
                            ...(dbValue ? { id: dbValue.id } : {}),
                        };
                    }),
                    ...(dbOption ? { id: dbOption.id } : {}),
                };
            });
        }
        if (productData.tag_ids) {
            ;
            productData.tags = productData.tag_ids.map((cid) => ({
                id: cid,
            }));
            delete productData.tag_ids;
        }
        if (productData.category_ids) {
            ;
            productData.categories = productData.category_ids.map((cid) => ({
                id: cid,
            }));
            delete productData.category_ids;
        }
        return productData;
    }
    static normalizeCreateProductCollectionInput(collection) {
        const collectionData = ProductModuleService.normalizeUpdateProductCollectionInput(collection);
        if (!collectionData.handle && collectionData.title) {
            collectionData.handle = (0, utils_1.kebabCase)(collectionData.title);
        }
        return collectionData;
    }
    static normalizeUpdateProductCollectionInput(collection) {
        const collectionData = { ...collection };
        if (collectionData.product_ids?.length) {
            ;
            collectionData.products = collectionData.product_ids.map((pid) => ({
                id: pid,
            }));
            delete collectionData.product_ids;
        }
        return collectionData;
    }
    static assignOptionsToVariants(variants, options) {
        if (!variants.length) {
            return variants;
        }
        const variantsWithOptions = variants.map((variant) => {
            const variantOptions = Object.entries(variant.options ?? {}).map(([key, val]) => {
                const option = options.find((o) => o.title === key && o.product_id === variant.product_id);
                const optionValue = option?.values?.find((v) => (v.value?.value ?? v.value) === val);
                if (!optionValue) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Option value ${val} does not exist for option ${key}`);
                }
                return {
                    id: optionValue.id,
                };
            });
            if (!variantOptions.length) {
                return variant;
            }
            return {
                ...variant,
                options: variantOptions,
            };
        });
        return variantsWithOptions;
    }
}
exports.default = ProductModuleService;
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductVariants", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createVariants_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductVariants", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductVariants", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateVariants_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductTags", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductTags", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductTags", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductTypes", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductTypes", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductTypes", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductOptions", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createOptions_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductOptions", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductOptions", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateOptions_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductCollections", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createCollections_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductCollections", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductCollections", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateCollections_", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProductCategories", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    (0, utils_1.EmitEvents)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProductCategories", null);
__decorate([
    (0, utils_1.InjectManager)(),
    (0, utils_1.EmitEvents)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProductCategories", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProducts", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "upsertProducts", null);
__decorate([
    (0, utils_1.InjectManager)(),
    __param(2, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProducts", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "createProducts_", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "updateProducts_", null);
__decorate([
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "normalizeCreateProductInput", null);
__decorate([
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductModuleService.prototype, "normalizeUpdateProductInput", null);
//# sourceMappingURL=product-module-service.js.map