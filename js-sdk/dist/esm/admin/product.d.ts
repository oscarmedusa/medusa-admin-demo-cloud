import { HttpTypes, SelectParams } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class Product {
    private client;
    constructor(client: Client);
    import(body: HttpTypes.AdminImportProductRequest, query?: {}, headers?: ClientHeaders): Promise<HttpTypes.AdminImportProductResponse>;
    confirmImport(transactionId: string, query?: {}, headers?: ClientHeaders): Promise<{}>;
    export(body: HttpTypes.AdminExportProductRequest, query?: HttpTypes.AdminProductListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminExportProductResponse>;
    batch(body: HttpTypes.AdminBatchProductRequest, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminBatchProductResponse>;
    create(body: HttpTypes.AdminCreateProduct, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    update(id: string, body: HttpTypes.AdminUpdateProduct, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    list(queryParams?: HttpTypes.AdminProductListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductListResponse>;
    retrieve(id: string, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductDeleteResponse>;
    batchVariants(productId: string, body: HttpTypes.AdminBatchProductVariantRequest, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminBatchProductVariantResponse>;
    createVariant(productId: string, body: HttpTypes.AdminCreateProductVariant, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    updateVariant(productId: string, id: string, body: HttpTypes.AdminUpdateProductVariant, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    listVariants(productId: string, queryParams?: HttpTypes.AdminProductVariantParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductVariantListResponse>;
    retrieveVariant(productId: string, id: string, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductVariantResponse>;
    deleteVariant(productId: string, id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductVariantDeleteResponse>;
    batchVariantInventoryItems(productId: string, body: HttpTypes.AdminBatchProductVariantInventoryItemRequest, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminBatchProductVariantInventoryItemResponse>;
    createOption(productId: string, body: HttpTypes.AdminCreateProductOption, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    updateOption(productId: string, id: string, body: HttpTypes.AdminUpdateProductOption, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductResponse>;
    listOptions(productId: string, queryParams?: HttpTypes.AdminProductOptionParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductOptionListResponse>;
    retrieveOption(productId: string, id: string, query?: SelectParams, headers?: ClientHeaders): Promise<HttpTypes.AdminProductOptionResponse>;
    deleteOption(productId: string, id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminProductOptionDeleteResponse>;
}
//# sourceMappingURL=product.d.ts.map