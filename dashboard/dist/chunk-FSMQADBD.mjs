import {
  currencies
} from "./chunk-MWVM4TYO.mjs";

// src/lib/money-amount-helpers.ts
var getDecimalDigits = (currency) => {
  return currencies[currency.toUpperCase()]?.decimal_digits ?? 0;
};
var getLocaleAmount = (amount, currencyCode) => {
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: currencyCode
  });
  return formatter.format(amount);
};
var getNativeSymbol = (currencyCode) => {
  const formatted = new Intl.NumberFormat([], {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol"
  }).format(0);
  return formatted.replace(/\d/g, "").replace(/[.,]/g, "").trim();
};
var getStylizedAmount = (amount, currencyCode) => {
  const symbol = getNativeSymbol(currencyCode);
  const decimalDigits = getDecimalDigits(currencyCode);
  const total = amount.toLocaleString(void 0, {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits
  });
  return `${symbol} ${total} ${currencyCode.toUpperCase()}`;
};

export {
  getLocaleAmount,
  getStylizedAmount
};
