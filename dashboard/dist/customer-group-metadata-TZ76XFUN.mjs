import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-REQCRDS6.mjs";
import "./chunk-53IEL2PE.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import {
  useCustomerGroup,
  useUpdateCustomerGroup
} from "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customer-groups/customer-group-metadata/customer-metadata.tsx
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var CustomerGroupMetadata = () => {
  const { id } = useParams();
  const { customer_group, isPending, isError, error } = useCustomerGroup(id);
  const { mutateAsync, isPending: isMutating } = useUpdateCustomerGroup(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    MetadataForm,
    {
      metadata: customer_group?.metadata,
      hook: mutateAsync,
      isPending,
      isMutating
    }
  );
};
export {
  CustomerGroupMetadata as Component
};
