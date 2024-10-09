import {
  InventoryItemGeneralSection
} from "./chunk-LX4JNAOB.mjs";
import "./chunk-YOYOJU5D.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import {
  reservationItemsQueryKeys,
  useReservationItem
} from "./chunk-OMZRRPIN.mjs";
import {
  useStockLocation
} from "./chunk-G3GT763I.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useInventoryItem
} from "./chunk-RZLMJCFD.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/reservations/reservation-detail/loader.ts
var reservationDetailQuery = (id) => ({
  queryKey: reservationItemsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.reservation.retrieve(id)
});
var reservationItemLoader = async ({ params }) => {
  const id = params.id;
  const query = reservationDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/reservations/reservation-detail/reservation-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/reservations/reservation-detail/components/reservation-general-section/reservation-general-section.tsx
import { Container, Heading } from "@medusajs/ui";
import { PencilSquare } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ReservationGeneralSection = ({
  reservation
}) => {
  const { t } = useTranslation();
  const { inventory_item: inventoryItem, isPending: isLoadingInventoryItem } = useInventoryItem(reservation.inventory_item_id);
  const { stock_location: location, isPending: isLoadingLocation } = useStockLocation(reservation.location_id);
  if (isLoadingInventoryItem || !inventoryItem || isLoadingLocation || !location) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  const locationLevel = inventoryItem.location_levels.find(
    (l) => l.location_id === reservation.location_id
  );
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("inventory.reservation.header", {
        itemName: inventoryItem.title ?? inventoryItem.sku
      }) }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                  label: t("actions.edit"),
                  to: `edit`
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.lineItemId"),
        value: reservation.line_item_id
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.description"),
        value: reservation.description
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.location"),
        value: location?.name
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.inStockAtLocation"),
        value: locationLevel?.stocked_quantity
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.availableAtLocation"),
        value: locationLevel?.available_quantity
      }
    ),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("inventory.reservation.reservedAtLocation"),
        value: locationLevel?.reserved_quantity
      }
    )
  ] });
};

// src/routes/reservations/reservation-detail/reservation-detail.tsx
import after from "virtual:medusa/widgets/reservation/details/after";
import before from "virtual:medusa/widgets/reservation/details/before";
import sideAfter from "virtual:medusa/widgets/reservation/details/side/after";
import sideBefore from "virtual:medusa/widgets/reservation/details/side/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ReservationDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { reservation, isLoading, isError, error } = useReservationItem(
    id,
    {},
    {
      initialData
    }
  );
  if (isLoading || !reservation) {
    return /* @__PURE__ */ jsx2("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: reservation }) }, i);
    }),
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-x-4 xl:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex w-full flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx2(ReservationGeneralSection, { reservation }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: reservation }) }, i);
        }),
        /* @__PURE__ */ jsx2("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx2(JsonViewSection, { data: reservation }) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-2 flex w-full max-w-[100%] flex-col gap-y-2 xl:mt-0 xl:max-w-[400px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: reservation }) }, i);
        }),
        /* @__PURE__ */ jsx2(
          InventoryItemGeneralSection,
          {
            inventoryItem: reservation.inventory_item
          }
        ),
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, { data: reservation }) }, i);
        }),
        /* @__PURE__ */ jsx2("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx2(JsonViewSection, { data: reservation }) }),
        /* @__PURE__ */ jsx2(Outlet, {})
      ] })
    ] })
  ] });
};
export {
  ReservationDetail as Component,
  reservationItemLoader as loader
};
