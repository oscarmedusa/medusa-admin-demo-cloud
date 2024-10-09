"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareCustomLineItemData = prepareCustomLineItemData;
const prepare_line_item_data_1 = require("../../cart/utils/prepare-line-item-data");
function prepareCustomLineItemData(data) {
    const { variant, unitPrice, isTaxInclusive, quantity, metadata, taxLines, adjustments, } = data;
    const lineItem = {
        quantity,
        title: variant.title,
        variant_sku: variant.sku,
        variant_barcode: variant.barcode,
        variant_title: variant.title,
        unit_price: unitPrice,
        is_tax_inclusive: !!isTaxInclusive,
        metadata,
    };
    if (taxLines) {
        lineItem.tax_lines = (0, prepare_line_item_data_1.prepareTaxLinesData)(taxLines);
    }
    if (adjustments) {
        lineItem.adjustments = (0, prepare_line_item_data_1.prepareAdjustmentsData)(adjustments);
    }
    return lineItem;
}
//# sourceMappingURL=prepare-custom-line-item-data.js.map