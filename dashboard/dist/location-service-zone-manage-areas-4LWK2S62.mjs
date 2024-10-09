import {
  GeoZoneForm
} from "./chunk-ZJ3WKFSQ.mjs";
import "./chunk-NOAFLTPV.mjs";
import {
  countries
} from "./chunk-VDBOSWVE.mjs";
import "./chunk-ESMNJXW4.mjs";
import {
  SplitView
} from "./chunk-ZIB4QG4N.mjs";
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
import "./chunk-C7RYT3S3.mjs";
import {
  useUpdateFulfillmentSetServiceZone
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

// src/routes/locations/location-service-zone-manage-areas/location-service-zone-manage-areas.tsx
import { json, useParams } from "react-router-dom";

// src/routes/locations/location-service-zone-manage-areas/components/edit-region-areas-form/edit-service-zone-areas-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, toast } from "@medusajs/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var EditeServiceZoneSchema = z.object({
  countries: z.array(z.object({ iso_2: z.string().min(2), display_name: z.string() })).min(1)
});
function EditServiceZoneAreasForm({
  fulfillmentSetId,
  locationId,
  zone
}) {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      countries: zone.geo_zones.map((z2) => {
        const country = countries.find((c) => c.iso_2 === z2.country_code);
        return {
          iso_2: z2.country_code,
          display_name: country?.display_name || z2.country_code.toUpperCase()
        };
      })
    },
    resolver: zodResolver(EditeServiceZoneSchema)
  });
  const { mutateAsync: editServiceZone, isPending: isLoading } = useUpdateFulfillmentSetServiceZone(fulfillmentSetId, zone.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    await editServiceZone(
      {
        geo_zones: data.countries.map(({ iso_2 }) => ({
          country_code: iso_2,
          type: "country"
        }))
      },
      {
        onSuccess: () => {
          toast.success(
            t("stockLocations.serviceZones.manageAreas.successToast", {
              name: zone.name
            })
          );
          handleSuccess(`/settings/locations/${locationId}`);
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
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxs(SplitView, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(SplitView.Content, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center p-16", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: [
            /* @__PURE__ */ jsx(Heading, { children: t("stockLocations.serviceZones.manageAreas.header", {
              name: zone.name
            }) }),
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

// src/routes/locations/location-service-zone-manage-areas/location-service-zone-manage-areas.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var LocationServiceZoneManageAreas = () => {
  const { location_id, fset_id, zone_id } = useParams();
  const { stock_location, isPending, isFetching, isError, error } = useStockLocation(location_id, {
    fields: "*fulfillment_sets.service_zones.geo_zones"
  });
  const zone = stock_location?.fulfillment_sets?.find((f) => f.id === fset_id)?.service_zones.find((z2) => z2.id === zone_id);
  if (!isPending && !isFetching && !zone) {
    throw json(
      { message: `Service zone with ID ${zone_id} was not found` },
      404
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx2(RouteFocusModal, { prev: `/settings/locations/${location_id}`, children: zone && /* @__PURE__ */ jsx2(
    EditServiceZoneAreasForm,
    {
      zone,
      fulfillmentSetId: fset_id,
      locationId: location_id
    }
  ) });
};
export {
  LocationServiceZoneManageAreas as Component
};
