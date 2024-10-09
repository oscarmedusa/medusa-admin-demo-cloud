import { Context, DAL, FindConfig, ProductTypes } from "@medusajs/framework/types";
import { ProductCategory } from "../models";
import { UpdateCategoryInput } from "../types";
type InjectedDependencies = {
    productCategoryRepository: DAL.TreeRepositoryService;
};
export default class ProductCategoryService {
    protected readonly productCategoryRepository_: DAL.TreeRepositoryService;
    constructor({ productCategoryRepository }: InjectedDependencies);
    retrieve(productCategoryId: string, config?: FindConfig<ProductTypes.ProductCategoryDTO>, sharedContext?: Context): Promise<ProductCategory>;
    list(filters?: ProductTypes.FilterableProductCategoryProps, config?: FindConfig<ProductTypes.ProductCategoryDTO>, sharedContext?: Context): Promise<ProductCategory[]>;
    listAndCount(filters?: ProductTypes.FilterableProductCategoryProps, config?: FindConfig<ProductTypes.ProductCategoryDTO>, sharedContext?: Context): Promise<[ProductCategory[], number]>;
    create(data: ProductTypes.CreateProductCategoryDTO[], sharedContext?: Context): Promise<ProductCategory[]>;
    update(data: UpdateCategoryInput[], sharedContext?: Context): Promise<ProductCategory[]>;
    delete(ids: string[], sharedContext?: Context): Promise<void>;
    softDelete(ids: string[], sharedContext?: Context): Promise<Record<string, string[]> | void>;
    restore(ids: string[], sharedContext?: Context): Promise<Record<string, string[]> | void>;
}
export {};
//# sourceMappingURL=product-category.d.ts.map