import {
  GeoZoneForm
} from "./chunk-ZJ3WKFSQ.mjs";
import "./chunk-OUAFSZKF.mjs";
import "./chunk-NOAFLTPV.mjs";
import "./chunk-VDBOSWVE.mjs";
import "./chunk-ESMNJXW4.mjs";
import {
  SplitView
} from "./chunk-ZIB4QG4N.mjs";
import {
  InlineTip
} from "./chunk-53IEL2PE.mjs";
import "./chunk-MGS2W2HU.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCreateFulfillmentSetServiceZone
} from "./chunk-NFTXVZ2D.mjs";
import "./chunk-CH64NKU5.mjs";
import {
  useStockLocation
} from "./chunk-G3GT763I.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/locations/location-service-zone-create/location-service-zone-create.tsx
import { json, useParams } from "react-router-dom";

// src/routes/locations/location-service-zone-create/components/create-service-zone-form/create-service-zone-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, toast } from "@medusajs/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateServiceZoneSchema = z.object({
  name: z.string().min(1),
  countries: z.array(z.object({ iso_2: z.string().min(2), display_name: z.string() })).min(1)
});
function CreateServiceZoneForm({
  fulfillmentSet,
  type,
  location
}) {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      countries: []
    },
    resolver: zodResolver(CreateServiceZoneSchema)
  });
  const { mutateAsync, isPending } = useCreateFulfillmentSetServiceZone(
    fulfillmentSet.id
  );
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        name: data.name,
        geo_zones: data.countries.map(({ iso_2 }) => ({
          country_code: iso_2,
          type: "country"
        }))
      },
      {
        onSuccess: () => {
          toast.success(
            t("stockLocations.serviceZones.create.successToast", {
              name: data.name
            })
          );
          handleSuccess(`/settings/locations/${location.id}`);
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "flex h-full flex-col overflow-hidden",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading: isPending, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "m-auto flex h-full w-full  flex-col items-center divide-y overflow-hidden", children: /* @__PURE__ */ jsxs(SplitView, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(SplitView.Content, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16", children: [
            /* @__PURE__ */ jsx(Heading, { children: type === "pickup" /* Pickup */ ? t("stockLocations.serviceZones.create.headerPickup", {
              location: location.name
            }) : t("stockLocations.serviceZones.create.headerShipping", {
              location: location.name
            }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ) }),
            /* @__PURE__ */ jsx(InlineTip, { children: t("stockLocations.serviceZones.fields.tip") }),
            /* @__PURE__ */ jsx(GeoZoneForm, { form, onOpenChange: setOpen })
          ] }) }) }),
          /* @__PURE__ */ jsx(
            GeoZoneForm.AreaDrawer,
            {
              form,
              open,
              onOpenChange: setOpen
            }
          )
        ] }) })
      ]
    }
  ) });
}

// src/routes/locations/location-service-zone-create/location-service-zone-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function LocationCreateServiceZone() {
  const { fset_id, location_id } = useParams();
  const { stock_location, isPending, isFetching, isError, error } = useStockLocation(location_id, {
    fields: "*fulfillment_sets"
  });
  const fulfillmentSet = stock_location?.fulfillment_sets?.find(
    (f) => f.id === fset_id
  );
  const type = fulfillmentSet?.type === "pickup" /* Pickup */ ? "pickup" /* Pickup */ : "shipping" /* Shipping */;
  if (!isPending && !isFetching && !fulfillmentSet) {
    throw json(
      { message: `Fulfillment set with ID: ${fset_id} was not found.` },
      404
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { prev: `/settings/locations/${location_id}`, children: fulfillmentSet && /* @__PURE__ */ jsx2(
    CreateServiceZoneForm,
    {
      fulfillmentSet,
      location: stock_location,
      type
    }
  ) });
}
export {
  LocationCreateServiceZone as Component
};
