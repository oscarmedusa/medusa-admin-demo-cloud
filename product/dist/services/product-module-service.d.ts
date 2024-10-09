import { Context, DAL, IEventBusModuleService, InternalModuleDeclaration, ModuleJoinerConfig, ModulesSdkTypes, ProductTypes } from "@medusajs/framework/types";
import { Image as ProductImage, Product, ProductCollection, ProductOption, ProductOptionValue, ProductTag, ProductType, ProductVariant } from "../models";
import { ProductCategoryService } from ".";
import { Modules } from "@medusajs/framework/utils";
import { UpdateCollectionInput, UpdateProductInput, UpdateProductOptionInput, UpdateProductVariantInput } from "../types";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    productService: ModulesSdkTypes.IMedusaInternalService<any, any>;
    productVariantService: ModulesSdkTypes.IMedusaInternalService<any, any>;
    productTagService: ModulesSdkTypes.IMedusaInternalService<any>;
    productCategoryService: ProductCategoryService;
    productCollectionService: ModulesSdkTypes.IMedusaInternalService<any>;
    productImageService: ModulesSdkTypes.IMedusaInternalService<any>;
    productTypeService: ModulesSdkTypes.IMedusaInternalService<any>;
    productOptionService: ModulesSdkTypes.IMedusaInternalService<any>;
    productOptionValueService: ModulesSdkTypes.IMedusaInternalService<any>;
    [Modules.EVENT_BUS]?: IEventBusModuleService;
};
declare const ProductModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<{
    Product: {
        dto: ProductTypes.ProductDTO;
    };
    ProductCategory: {
        dto: ProductTypes.ProductCategoryDTO;
    };
    ProductCollection: {
        dto: ProductTypes.ProductCollectionDTO;
    };
    ProductOption: {
        dto: ProductTypes.ProductOptionDTO;
    };
    ProductOptionValue: {
        dto: ProductTypes.ProductOptionValueDTO;
    };
    ProductTag: {
        dto: ProductTypes.ProductTagDTO;
    };
    ProductType: {
        dto: ProductTypes.ProductTypeDTO;
    };
    ProductVariant: {
        dto: ProductTypes.ProductVariantDTO;
    };
}>;
export default class ProductModuleService extends ProductModuleService_base implements ProductTypes.IProductModuleService {
    protected readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly productService_: ModulesSdkTypes.IMedusaInternalService<Product>;
    protected readonly productVariantService_: ModulesSdkTypes.IMedusaInternalService<ProductVariant>;
    protected readonly productCategoryService_: ProductCategoryService;
    protected readonly productTagService_: ModulesSdkTypes.IMedusaInternalService<ProductTag>;
    protected readonly productCollectionService_: ModulesSdkTypes.IMedusaInternalService<ProductCollection>;
    protected readonly productImageService_: ModulesSdkTypes.IMedusaInternalService<ProductImage>;
    protected readonly productTypeService_: ModulesSdkTypes.IMedusaInternalService<ProductType>;
    protected readonly productOptionService_: ModulesSdkTypes.IMedusaInternalService<ProductOption>;
    protected readonly productOptionValueService_: ModulesSdkTypes.IMedusaInternalService<ProductOptionValue>;
    protected readonly eventBusModuleService_?: IEventBusModuleService;
    constructor({ baseRepository, productService, productVariantService, productTagService, productCategoryService, productCollectionService, productImageService, productTypeService, productOptionService, productOptionValueService, [Modules.EVENT_BUS]: eventBusModuleService, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    createProductVariants(data: ProductTypes.CreateProductVariantDTO[], sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    createProductVariants(data: ProductTypes.CreateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    protected createVariants_(data: ProductTypes.CreateProductVariantDTO[], sharedContext?: Context): Promise<ProductVariant[]>;
    upsertProductVariants(data: ProductTypes.UpsertProductVariantDTO[], sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    upsertProductVariants(data: ProductTypes.UpsertProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    updateProductVariants(id: string, data: ProductTypes.UpdateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO>;
    updateProductVariants(selector: ProductTypes.FilterableProductVariantProps, data: ProductTypes.UpdateProductVariantDTO, sharedContext?: Context): Promise<ProductTypes.ProductVariantDTO[]>;
    protected updateVariants_(data: UpdateProductVariantInput[], sharedContext?: Context): Promise<ProductVariant[]>;
    createProductTags(data: ProductTypes.CreateProductTagDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTagDTO[]>;
    createProductTags(data: ProductTypes.CreateProductTagDTO, sharedContext?: Context): Promise<ProductTypes.ProductTagDTO>;
    upsertProductTags(data: ProductTypes.UpsertProductTagDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTagDTO[]>;
    upsertProductTags(data: ProductTypes.UpsertProductTagDTO, sharedContext?: Context): Promise<ProductTypes.ProductTagDTO>;
    updateProductTags(id: string, data: ProductTypes.UpdateProductTagDTO, sharedContext?: Context): Promise<ProductTypes.ProductTagDTO>;
    updateProductTags(selector: ProductTypes.FilterableProductTagProps, data: ProductTypes.UpdateProductTagDTO, sharedContext?: Context): Promise<ProductTypes.ProductTagDTO[]>;
    createProductTypes(data: ProductTypes.CreateProductTypeDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    createProductTypes(data: ProductTypes.CreateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    upsertProductTypes(data: ProductTypes.UpsertProductTypeDTO[], sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    upsertProductTypes(data: ProductTypes.UpsertProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    updateProductTypes(id: string, data: ProductTypes.UpdateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO>;
    updateProductTypes(selector: ProductTypes.FilterableProductTypeProps, data: ProductTypes.UpdateProductTypeDTO, sharedContext?: Context): Promise<ProductTypes.ProductTypeDTO[]>;
    createProductOptions(data: ProductTypes.CreateProductOptionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    createProductOptions(data: ProductTypes.CreateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    protected createOptions_(data: ProductTypes.CreateProductOptionDTO[], sharedContext?: Context): Promise<ProductOption[]>;
    upsertProductOptions(data: ProductTypes.UpsertProductOptionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    upsertProductOptions(data: ProductTypes.UpsertProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    updateProductOptions(id: string, data: ProductTypes.UpdateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO>;
    updateProductOptions(selector: ProductTypes.FilterableProductOptionProps, data: ProductTypes.UpdateProductOptionDTO, sharedContext?: Context): Promise<ProductTypes.ProductOptionDTO[]>;
    protected updateOptions_(data: UpdateProductOptionInput[], sharedContext?: Context): Promise<ProductOption[]>;
    createProductCollections(data: ProductTypes.CreateProductCollectionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    createProductCollections(data: ProductTypes.CreateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    createCollections_(data: ProductTypes.CreateProductCollectionDTO[], sharedContext?: Context): Promise<ProductCollection[]>;
    upsertProductCollections(data: ProductTypes.UpsertProductCollectionDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    upsertProductCollections(data: ProductTypes.UpsertProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    updateProductCollections(id: string, data: ProductTypes.UpdateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO>;
    updateProductCollections(selector: ProductTypes.FilterableProductCollectionProps, data: ProductTypes.UpdateProductCollectionDTO, sharedContext?: Context): Promise<ProductTypes.ProductCollectionDTO[]>;
    protected updateCollections_(data: UpdateCollectionInput[], sharedContext?: Context): Promise<ProductCollection[]>;
    createProductCategories(data: ProductTypes.CreateProductCategoryDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO[]>;
    createProductCategories(data: ProductTypes.CreateProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO>;
    upsertProductCategories(data: ProductTypes.UpsertProductCategoryDTO[], sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO[]>;
    upsertProductCategories(data: ProductTypes.UpsertProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO>;
    updateProductCategories(id: string, data: ProductTypes.UpdateProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO>;
    updateProductCategories(selector: ProductTypes.FilterableProductTypeProps, data: ProductTypes.UpdateProductCategoryDTO, sharedContext?: Context): Promise<ProductTypes.ProductCategoryDTO[]>;
    createProducts(data: ProductTypes.CreateProductDTO[], sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    createProducts(data: ProductTypes.CreateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    upsertProducts(data: ProductTypes.UpsertProductDTO[], sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    upsertProducts(data: ProductTypes.UpsertProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    updateProducts(id: string, data: ProductTypes.UpdateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO>;
    updateProducts(selector: ProductTypes.FilterableProductProps, data: ProductTypes.UpdateProductDTO, sharedContext?: Context): Promise<ProductTypes.ProductDTO[]>;
    protected createProducts_(data: ProductTypes.CreateProductDTO[], sharedContext?: Context): Promise<Product[]>;
    protected updateProducts_(data: UpdateProductInput[], sharedContext?: Context): Promise<Product[]>;
    /**
     * Validates the manually provided handle value of the product
     * to be URL-safe
     */
    protected validateProductPayload(productData: UpdateProductInput | ProductTypes.CreateProductDTO): void;
    protected normalizeCreateProductInput(product: ProductTypes.CreateProductDTO, sharedContext?: Context): Promise<ProductTypes.CreateProductDTO>;
    protected normalizeUpdateProductInput(product: UpdateProductInput, sharedContext?: Context): Promise<UpdateProductInput>;
    protected static normalizeCreateProductCollectionInput(collection: ProductTypes.CreateProductCollectionDTO): ProductTypes.CreateProductCollectionDTO;
    protected static normalizeUpdateProductCollectionInput(collection: ProductTypes.CreateProductCollectionDTO | UpdateCollectionInput): ProductTypes.CreateProductCollectionDTO | UpdateCollectionInput;
    protected static assignOptionsToVariants(variants: ProductTypes.CreateProductVariantDTO[] | ProductTypes.UpdateProductVariantDTO[], options: ProductOption[]): ProductTypes.CreateProductVariantDTO[] | ProductTypes.UpdateProductVariantDTO[];
}
export {};
//# sourceMappingURL=product-module-service.d.ts.map