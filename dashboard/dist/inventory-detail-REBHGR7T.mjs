import {
  InventoryItemGeneralSection
} from "./chunk-LX4JNAOB.mjs";
import {
  TwoColumnPage
} from "./chunk-FGHVNTU2.mjs";
import {
  getFormattedCountry
} from "./chunk-OIAPXGI2.mjs";
import "./chunk-YOYOJU5D.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  Thumbnail
} from "./chunk-PHMALPVO.mjs";
import {
  TextCell,
  TextHeader
} from "./chunk-OI7BBNYW.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import {
  TwoColumnPageSkeleton
} from "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
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
import {
  useDeleteReservationItem,
  useReservationItems
} from "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import {
  useStockLocations
} from "./chunk-G3GT763I.mjs";
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import {
  inventoryItemsQueryKeys,
  useDeleteInventoryItemLevel,
  useInventoryItem,
  useInventoryItemLevels
} from "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/inventory/inventory-detail/inventory-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/inventory/inventory-detail/components/inventory-item-attributes/attributes-section.tsx
import { Container, Heading } from "@medusajs/ui";
import { PencilSquare } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var InventoryItemAttributeSection = ({
  inventoryItem
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.attributes") }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "attributes",
                  icon: /* @__PURE__ */ jsx(PencilSquare, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.height"), value: inventoryItem.height }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.width"), value: inventoryItem.width }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.length"), value: inventoryItem.length }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.weight"), value: inventoryItem.weight }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.midCode"), value: inventoryItem.mid_code }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.hsCode"), value: inventoryItem.hs_code }),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("fields.countryOfOrigin"),
        value: getFormattedCountry(inventoryItem.origin_country)
      }
    )
  ] });
};

// src/routes/inventory/inventory-detail/components/inventory-item-location-levels.tsx
import { Button, Container as Container2, Heading as Heading2 } from "@medusajs/ui";

// src/routes/inventory/inventory-detail/components/location-levels-table/use-location-list-table-query.tsx
var useLocationLevelTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(
    [
      "id",
      "location_id",
      "stocked_quantity",
      "reserved_quantity",
      "incoming_quantity",
      "available_quantity",
      "*stock_locations"
    ],
    prefix
  );
  const { reserved_quantity, stocked_quantity, available_quantity, ...params } = raw;
  const searchParams = {
    limit: pageSize,
    reserved_quantity: reserved_quantity ? JSON.parse(reserved_quantity) : void 0,
    stocked_quantity: stocked_quantity ? JSON.parse(stocked_quantity) : void 0,
    available_quantity: available_quantity ? JSON.parse(available_quantity) : void 0,
    ...params
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/inventory/inventory-detail/components/location-levels-table/location-actions.tsx
import { PencilSquare as PencilSquare2, Trash } from "@medusajs/icons";
import { usePrompt } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var LocationActions = ({
  level
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteInventoryItemLevel(
    level.inventory_item_id,
    level.location_id
  );
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("inventory.deleteWarning"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync();
  };
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
              label: t("actions.edit"),
              to: `locations/${level.location_id}`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(Trash, {}),
              label: t("actions.delete"),
              onClick: handleDelete,
              disabled: level.reserved_quantity > 0 || level.stocked_quantity > 0
            }
          ]
        }
      ]
    }
  );
};

// src/routes/inventory/inventory-detail/components/location-levels-table/use-location-list-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx3 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useLocationListTableColumns = () => {
  const { t } = useTranslation3();
  return useMemo(
    () => [
      columnHelper.accessor("stock_locations.0.name", {
        header: t("fields.location"),
        cell: ({ getValue }) => {
          const locationName = getValue();
          if (!locationName) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: locationName.toString() }) });
        }
      }),
      columnHelper.accessor("reserved_quantity", {
        header: t("inventory.reserved"),
        cell: ({ getValue }) => {
          const quantity = getValue();
          if (Number.isNaN(quantity)) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: quantity }) });
        }
      }),
      columnHelper.accessor("stocked_quantity", {
        header: t("fields.inStock"),
        cell: ({ getValue }) => {
          const stockedQuantity = getValue();
          if (Number.isNaN(stockedQuantity)) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: stockedQuantity }) });
        }
      }),
      columnHelper.accessor("available_quantity", {
        header: t("inventory.available"),
        cell: ({ getValue }) => {
          const availableQuantity = getValue();
          if (Number.isNaN(availableQuantity)) {
            return /* @__PURE__ */ jsx3(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx3("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: availableQuantity }) });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx3(LocationActions, { level: row.original })
      })
    ],
    [t]
  );
};

// src/routes/inventory/inventory-detail/components/location-levels-table/location-list-table.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ItemLocationListTable = ({
  inventory_item_id
}) => {
  const { searchParams, raw } = useLocationLevelTableQuery({
    pageSize: PAGE_SIZE
  });
  const {
    inventory_levels,
    count,
    isPending: isLoading,
    isError,
    error
  } = useInventoryItemLevels(inventory_item_id, {
    ...searchParams,
    fields: "*stock_locations"
  });
  const columns = useLocationListTableColumns();
  const { table } = useDataTable({
    data: inventory_levels ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx4(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      isLoading,
      pagination: true,
      queryObject: raw
    }
  );
};

// src/routes/inventory/inventory-detail/components/inventory-item-location-levels.tsx
import { Link } from "react-router-dom";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var InventoryItemLocationLevelsSection = ({
  inventoryItem
}) => {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsxs2(Container2, { className: "p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx5(Heading2, { children: t("inventory.locationLevels") }),
      /* @__PURE__ */ jsx5(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx5(Link, { to: "locations", children: t("inventory.manageLocations") }) })
    ] }),
    /* @__PURE__ */ jsx5(ItemLocationListTable, { inventory_item_id: inventoryItem.id })
  ] });
};

// src/routes/inventory/inventory-detail/components/inventory-item-reservations.tsx
import { Button as Button2, Container as Container3, Heading as Heading3 } from "@medusajs/ui";
import { Link as Link2 } from "react-router-dom";

// src/routes/inventory/inventory-detail/components/reservations-table/reservation-list-table.tsx
import { useMemo as useMemo3 } from "react";

// src/routes/inventory/inventory-detail/components/reservations-table/use-reservation-list-table-columns.tsx
import { createColumnHelper as createColumnHelper2 } from "@tanstack/react-table";
import { useMemo as useMemo2 } from "react";
import { useTranslation as useTranslation7 } from "react-i18next";

// src/components/table/table-cells/common/created-at-cell/created-at-cell.tsx
import { Tooltip } from "@medusajs/ui";
import format from "date-fns/format";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsx as jsx6 } from "react/jsx-runtime";
var CreatedAtCell = ({ date }) => {
  if (!date) {
    return /* @__PURE__ */ jsx6(PlaceholderCell, {});
  }
  const value = new Date(date);
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset());
  const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12;
  const timestampFormat = hour12 ? "dd MMM yyyy hh:MM a" : "dd MMM yyyy HH:MM";
  return /* @__PURE__ */ jsx6("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx6(
    Tooltip,
    {
      className: "z-10",
      content: /* @__PURE__ */ jsx6("span", { className: "text-pretty", children: `${format(
        value,
        timestampFormat
      )}` }),
      children: /* @__PURE__ */ jsx6("span", { className: "truncate", children: format(value, "dd MMM yyyy") })
    }
  ) });
};

// src/routes/inventory/inventory-detail/components/reservations-table/reservation-actions.tsx
import { PencilSquare as PencilSquare3, Trash as Trash2 } from "@medusajs/icons";
import { toast, usePrompt as usePrompt2 } from "@medusajs/ui";
import { useTranslation as useTranslation6 } from "react-i18next";
import { jsx as jsx7 } from "react/jsx-runtime";
var ReservationActions = ({
  reservation
}) => {
  const { t } = useTranslation6();
  const prompt = usePrompt2();
  const { mutateAsync } = useDeleteReservationItem(reservation.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("inventory.deleteWarning"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(t("inventory.reservation.deleteSuccessToast"));
      },
      onError: (e) => {
        toast.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsx7(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx7(PencilSquare3, {}),
              label: t("actions.edit"),
              to: `/reservations/${reservation.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx7(Trash2, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};

// src/routes/inventory/inventory-detail/components/reservations-table/use-reservation-list-table-columns.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var columnHelper2 = createColumnHelper2();
var useReservationTableColumn = ({ sku }) => {
  const { t } = useTranslation7();
  return useMemo2(
    () => [
      columnHelper2.display({
        id: "sku",
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("fields.sku") }),
        cell: () => {
          return /* @__PURE__ */ jsx8(TextCell, { text: sku });
        }
      }),
      columnHelper2.accessor("line_item.order_id", {
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("inventory.reservation.orderID") }),
        cell: ({ getValue }) => {
          const orderId = getValue();
          if (!orderId) {
            return /* @__PURE__ */ jsx8(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx8(TextCell, { text: orderId });
        }
      }),
      columnHelper2.accessor("description", {
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("fields.description") }),
        cell: ({ getValue }) => {
          const description = getValue();
          if (!description) {
            return /* @__PURE__ */ jsx8(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx8(TextCell, { text: description });
        }
      }),
      columnHelper2.accessor("location.name", {
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("inventory.reservation.location") }),
        cell: ({ getValue }) => {
          const location = getValue();
          if (!location) {
            return /* @__PURE__ */ jsx8(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx8(TextCell, { text: location });
        }
      }),
      columnHelper2.accessor("created_at", {
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("fields.createdAt") }),
        cell: ({ getValue }) => /* @__PURE__ */ jsx8(CreatedAtCell, { date: getValue() })
      }),
      columnHelper2.accessor("quantity", {
        header: () => /* @__PURE__ */ jsx8(TextHeader, { text: t("fields.quantity"), align: "right" }),
        cell: ({ getValue }) => {
          return /* @__PURE__ */ jsx8(TextCell, { text: getValue(), align: "right" });
        }
      }),
      columnHelper2.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx8(ReservationActions, { reservation: row.original })
      })
    ],
    [t]
  );
};

// src/routes/inventory/inventory-detail/components/reservations-table/use-reservation-list-table-query.tsx
var useReservationsTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(
    [
      "id",
      "location_id",
      "inventory_item_id",
      "quantity",
      "line_item_id",
      "description",
      "created_by"
    ],
    prefix
  );
  const { quantity, ...params } = raw;
  const searchParams = {
    limit: pageSize,
    quantity: quantity ? JSON.parse(quantity) : void 0,
    ...params
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/inventory/inventory-detail/components/reservations-table/reservation-list-table.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var PAGE_SIZE2 = 20;
var ReservationItemTable = ({
  inventoryItem
}) => {
  const { searchParams, raw } = useReservationsTableQuery({
    pageSize: PAGE_SIZE2
  });
  const { reservations, count, isPending, isError, error } = useReservationItems({
    ...searchParams,
    inventory_item_id: [inventoryItem.id]
  });
  const { stock_locations } = useStockLocations({
    id: (reservations || []).map((r) => r.location_id)
  });
  const data = useMemo3(() => {
    const locationMap = new Map((stock_locations || []).map((l) => [l.id, l]));
    return (reservations || []).map((r) => ({
      ...r,
      location: locationMap.get(r.location_id)
    }));
  }, [reservations, stock_locations]);
  const columns = useReservationTableColumn({ sku: inventoryItem.sku });
  const { table } = useDataTable({
    data: data ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE2
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx9(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE2,
      count,
      isLoading: isPending,
      pagination: true,
      queryObject: raw
    }
  );
};

// src/routes/inventory/inventory-detail/components/inventory-item-reservations.tsx
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
var InventoryItemReservationsSection = ({
  inventoryItem
}) => {
  const { t } = useTranslation8();
  return /* @__PURE__ */ jsxs3(Container3, { className: "p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx10(Heading3, { children: t("reservations.domain") }),
      /* @__PURE__ */ jsx10(Button2, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx10(Link2, { to: `/reservations/create?item_id=${inventoryItem.id}`, children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx10(ReservationItemTable, { inventoryItem })
  ] });
};

// src/routes/inventory/inventory-detail/components/inventory-item-variants/variants-section.tsx
import { TriangleRightMini } from "@medusajs/icons";
import { Container as Container4, Heading as Heading4 } from "@medusajs/ui";
import { useTranslation as useTranslation9 } from "react-i18next";
import { Link as Link3 } from "react-router-dom";
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var InventoryItemVariantsSection = ({
  variants
}) => {
  const { t } = useTranslation9();
  if (!variants?.length) {
    return null;
  }
  return /* @__PURE__ */ jsxs4(Container4, { className: "p-0", children: [
    /* @__PURE__ */ jsx11("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx11(Heading4, { level: "h2", children: t("inventory.associatedVariants") }) }),
    /* @__PURE__ */ jsx11("div", { className: "txt-small flex flex-col gap-2 px-2 pb-2", children: variants.map((variant) => {
      const link = variant.product ? `/products/${variant.product.id}/variants/${variant.id}` : null;
      const Inner = /* @__PURE__ */ jsx11("div", { className: "shadow-elevation-card-rest bg-ui-bg-component rounded-md px-4 py-2 transition-colors", children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx11("div", { className: "shadow-elevation-card-rest rounded-md", children: /* @__PURE__ */ jsx11(Thumbnail, { src: variant.product?.thumbnail }) }),
        /* @__PURE__ */ jsxs4("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsx11("span", { className: "text-ui-fg-base font-medium", children: variant.title }),
          /* @__PURE__ */ jsx11("span", { className: "text-ui-fg-subtle", children: variant.options.map((o) => o.value).join(" \u22C5 ") })
        ] }),
        /* @__PURE__ */ jsx11("div", { className: "size-7 flex items-center justify-center", children: /* @__PURE__ */ jsx11(TriangleRightMini, { className: "text-ui-fg-muted" }) })
      ] }) });
      if (!link) {
        return /* @__PURE__ */ jsx11("div", { children: Inner }, variant.id);
      }
      return /* @__PURE__ */ jsx11(
        Link3,
        {
          to: link,
          className: "outline-none focus-within:shadow-borders-interactive-with-focus rounded-md [&:hover>div]:bg-ui-bg-component-hover",
          children: Inner
        },
        variant.id
      );
    }) })
  ] });
};

// src/routes/inventory/inventory-detail/inventory-detail.tsx
import after from "virtual:medusa/widgets/inventory_item/details/after";
import before from "virtual:medusa/widgets/inventory_item/details/before";
import sideAfter from "virtual:medusa/widgets/inventory_item/details/side/after";
import sideBefore from "virtual:medusa/widgets/inventory_item/details/side/before";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var InventoryDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const {
    inventory_item,
    isPending: isLoading,
    isError,
    error
  } = useInventoryItem(
    id,
    {
      fields: "*variants,*variants.product,*variants.options"
    },
    {
      initialData
    }
  );
  if (isLoading || !inventory_item) {
    return /* @__PURE__ */ jsx12(
      TwoColumnPageSkeleton,
      {
        showJSON: true,
        showMetadata: true,
        mainSections: 3,
        sidebarSections: 2
      }
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs5(
    TwoColumnPage,
    {
      widgets: {
        after,
        before,
        sideAfter,
        sideBefore
      },
      data: inventory_item,
      showJSON: true,
      showMetadata: true,
      hasOutlet: true,
      children: [
        /* @__PURE__ */ jsxs5(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx12(InventoryItemGeneralSection, { inventoryItem: inventory_item }),
          /* @__PURE__ */ jsx12(InventoryItemLocationLevelsSection, { inventoryItem: inventory_item }),
          /* @__PURE__ */ jsx12(InventoryItemReservationsSection, { inventoryItem: inventory_item })
        ] }),
        /* @__PURE__ */ jsxs5(TwoColumnPage.Sidebar, { children: [
          /* @__PURE__ */ jsx12(
            InventoryItemVariantsSection,
            {
              variants: inventory_item.variants
            }
          ),
          /* @__PURE__ */ jsx12(InventoryItemAttributeSection, { inventoryItem: inventory_item })
        ] })
      ]
    }
  );
};

// src/routes/inventory/inventory-detail/loader.ts
var inventoryDetailQuery = (id) => ({
  queryKey: inventoryItemsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.inventoryItem.retrieve(id, {
    fields: "*variants,*variants.product,*variants.options"
  })
});
var inventoryItemLoader = async ({ params }) => {
  const id = params.id;
  const query = inventoryDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};
export {
  InventoryDetail as Component,
  inventoryItemLoader as loader
};
