import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-REQCRDS6.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-XDUX5ONP.mjs";
import {
  RouteDrawer
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import {
  useStore,
  useUpdateStore
} from "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/store/store-metadata/store-metadata.tsx
import { jsx } from "react/jsx-runtime";
var StoreMetadata = () => {
  const { store, isPending, isError, error } = useStore();
  const { mutateAsync, isPending: isMutating } = useUpdateStore(store?.id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteDrawer, { children: /* @__PURE__ */ jsx(
    MetadataForm,
    {
      isPending,
      isMutating,
      hook: mutateAsync,
      metadata: store?.metadata
    }
  ) });
};
export {
  StoreMetadata as Component
};
