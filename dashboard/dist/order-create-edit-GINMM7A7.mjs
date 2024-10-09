import {
  MoneyAmountCell
} from "./chunk-LHJ6JQGA.mjs";
import {
  useAddOrderEditItems,
  useCancelOrderEdit,
  useCreateOrderEdit,
  useRemoveOrderEditItem,
  useRequestOrderEdit,
  useUpdateOrderEditAddedItem,
  useUpdateOrderEditOriginalItem
} from "./chunk-L5KMON7M.mjs";
import {
  DEFAULT_FIELDS
} from "./chunk-DJGKMY2K.mjs";
import {
  getStylizedAmount
} from "./chunk-FSMQADBD.mjs";
import {
  ProductCell,
  ProductHeader
} from "./chunk-TKCL6FA5.mjs";
import {
  Thumbnail
} from "./chunk-PHMALPVO.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
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
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteFocusModal,
  StackedFocusModal,
  useRouteModal,
  useStackedModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useVariants
} from "./chunk-V5VCT6TO.mjs";
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
import {
  useOrder,
  useOrderPreview
} from "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
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

// src/routes/orders/order-create-edit/order-edit-create.tsx
import { toast as toast4 } from "@medusajs/ui";
import { useEffect } from "react";
import { useTranslation as useTranslation6 } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

// src/routes/orders/order-create-edit/components/order-edit-create-form/order-edit-create-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button as Button2, Heading as Heading2, Input as Input3, Switch, toast as toast3, usePrompt } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation as useTranslation5 } from "react-i18next";

// src/routes/orders/order-create-edit/components/order-edit-create-form/order-edit-items-section.tsx
import { useMemo as useMemo3, useState as useState2 } from "react";
import { Button, Heading, Input as Input2, toast as toast2 } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";

// src/routes/orders/order-create-edit/components/add-order-edit-items-table/add-order-edit-items-table.tsx
import { useState } from "react";

// src/routes/orders/order-create-edit/components/add-order-edit-items-table/use-order-edit-item-table-filters.tsx
import { useTranslation } from "react-i18next";
var useOrderEditItemTableFilters = () => {
  const { t } = useTranslation();
  const filters = [
    {
      key: "created_at",
      label: t("fields.createdAt"),
      type: "date"
    },
    {
      key: "updated_at",
      label: t("fields.updatedAt"),
      type: "date"
    }
  ];
  return filters;
};

// src/routes/orders/order-create-edit/components/add-order-edit-items-table/use-order-edit-item-table-query.tsx
var useOrderEditItemTableQuery = ({
  pageSize = 50,
  prefix
}) => {
  const raw = useQueryParams(
    ["q", "offset", "order", "created_at", "updated_at"],
    prefix
  );
  const { offset, created_at, updated_at, ...rest } = raw;
  const searchParams = {
    ...rest,
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0
  };
  return { searchParams, raw };
};

// src/routes/orders/order-create-edit/components/add-order-edit-items-table/use-order-edit-item-table-columns.tsx
import { Checkbox } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useOrderEditItemsTableColumns = (currencyCode) => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          const isSelectable = row.getCanSelect();
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              disabled: !isSelectable,
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      columnHelper.display({
        id: "product",
        header: () => /* @__PURE__ */ jsx(ProductHeader, {}),
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(ProductCell, { product: row.original.product });
        }
      }),
      columnHelper.accessor("sku", {
        header: t("fields.sku"),
        cell: ({ getValue }) => {
          return getValue() || "-";
        }
      }),
      columnHelper.accessor("title", {
        header: t("fields.title")
      })
    ],
    [t, currencyCode]
  );
};

// src/routes/orders/order-create-edit/components/add-order-edit-items-table/add-order-edit-items-table.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PAGE_SIZE = 50;
var PREFIX = "rit";
var AddOrderEditItemsTable = ({
  onSelectionChange,
  currencyCode
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const updater = (fn) => {
    const newState = typeof fn === "function" ? fn(rowSelection) : fn;
    setRowSelection(newState);
    onSelectionChange(Object.keys(newState));
  };
  const { searchParams, raw } = useOrderEditItemTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { variants = [], count } = useVariants({
    ...searchParams,
    fields: "*inventory_items.inventory.location_levels,+inventory_quantity"
  });
  const columns = useOrderEditItemsTableColumns(currencyCode);
  const filters = useOrderEditItemTableFilters();
  const { table } = useDataTable({
    data: variants,
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    enableRowSelection: (_row) => {
      return true;
    },
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  return /* @__PURE__ */ jsx2("div", { className: "flex size-full flex-col overflow-hidden", children: /* @__PURE__ */ jsx2(
    DataTable,
    {
      table,
      columns,
      pageSize: PAGE_SIZE,
      count,
      filters,
      pagination: true,
      layout: "fill",
      search: true,
      orderBy: ["product_id", "title", "sku"],
      prefix: PREFIX,
      queryObject: raw
    }
  ) });
};

// src/routes/orders/order-create-edit/components/order-edit-create-form/order-edit-item.tsx
import { ArrowUturnLeft, DocumentSeries, XCircle } from "@medusajs/icons";
import { Badge, Input, Text, toast } from "@medusajs/ui";
import { useTranslation as useTranslation3 } from "react-i18next";
import { useMemo as useMemo2 } from "react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function OrderEditItem({ item, currencyCode, orderId }) {
  const { t } = useTranslation3();
  const { mutateAsync: addItems } = useAddOrderEditItems(orderId);
  const { mutateAsync: updateAddedItem } = useUpdateOrderEditAddedItem(orderId);
  const { mutateAsync: updateOriginalItem } = useUpdateOrderEditOriginalItem(orderId);
  const { mutateAsync: undoAction } = useRemoveOrderEditItem(orderId);
  const isAddedItem = useMemo2(
    () => !!item.actions?.find((a) => a.action === "ITEM_ADD"),
    [item]
  );
  const isItemUpdated = useMemo2(
    () => !!item.actions?.find((a) => a.action === "ITEM_UPDATE"),
    [item]
  );
  const isItemRemoved = useMemo2(() => {
    const updateAction = item.actions?.find((a) => a.action === "ITEM_UPDATE");
    return !!updateAction && item.quantity === item.detail.fulfilled_quantity;
  }, [item]);
  const onUpdate = async (quantity) => {
    if (quantity <= item.detail.fulfilled_quantity) {
      toast.error(t("orders.edits.validation.quantityLowerThanFulfillment"));
      return;
    }
    if (quantity === item.quantity) {
      return;
    }
    const addItemAction = item.actions?.find((a) => a.action === "ITEM_ADD");
    try {
      if (addItemAction) {
        await updateAddedItem({ quantity, actionId: addItemAction.id });
      } else {
        await updateOriginalItem({ quantity, itemId: item.id });
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  const onRemove = async () => {
    const addItemAction = item.actions?.find((a) => a.action === "ITEM_ADD");
    try {
      if (addItemAction) {
        await undoAction(addItemAction.id);
      } else {
        await updateOriginalItem({
          quantity: item.detail.fulfilled_quantity,
          //
          itemId: item.id
        });
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  const onRemoveUndo = async () => {
    const updateItemAction = item.actions?.find(
      (a) => a.action === "ITEM_UPDATE"
    );
    try {
      if (updateItemAction) {
        await undoAction(updateItemAction.id);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  const onDuplicate = async () => {
    try {
      await addItems({
        items: [
          {
            variant_id: item.variant_id,
            quantity: item.quantity
          }
        ]
      });
    } catch (e) {
      toast.error(e.message);
    }
  };
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: "bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-x-3", children: [
            /* @__PURE__ */ jsx3(Thumbnail, { src: item.thumbnail }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(Text, { className: "txt-small", as: "span", weight: "plus", children: [
                  item.title,
                  " "
                ] }),
                item.variant_sku && /* @__PURE__ */ jsxs("span", { children: [
                  "(",
                  item.variant_sku,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsx3(Text, { as: "div", className: "text-ui-fg-subtle txt-small", children: item.product_title })
            ] })
          ] }),
          isAddedItem && /* @__PURE__ */ jsx3(Badge, { size: "2xsmall", rounded: "full", color: "blue", className: "mr-1", children: t("general.new") }),
          isItemRemoved ? /* @__PURE__ */ jsx3(Badge, { size: "2xsmall", rounded: "full", color: "red", className: "mr-1", children: t("general.removed") }) : isItemUpdated && /* @__PURE__ */ jsx3(
            Badge,
            {
              size: "2xsmall",
              rounded: "full",
              color: "orange",
              className: "mr-1",
              children: t("general.modified")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-grow items-center gap-2", children: [
            /* @__PURE__ */ jsx3(
              Input,
              {
                className: "bg-ui-bg-base txt-small w-[67px] rounded-lg [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                type: "number",
                disabled: item.detail.fulfilled_quantity === item.quantity,
                min: item.detail.fulfilled_quantity,
                defaultValue: item.quantity,
                onBlur: (e) => {
                  const val = e.target.value;
                  const payload = val === "" ? null : Number(val);
                  if (payload) {
                    onUpdate(payload);
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx3(Text, { className: "txt-small text-ui-fg-subtle", children: t("fields.qty") })
          ] }),
          /* @__PURE__ */ jsx3("div", { className: "text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0", children: /* @__PURE__ */ jsx3(MoneyAmountCell, { currencyCode, amount: item.total }) }),
          /* @__PURE__ */ jsx3(
            ActionMenu,
            {
              groups: [
                {
                  actions: [
                    {
                      label: t("actions.duplicate"),
                      onClick: onDuplicate,
                      icon: /* @__PURE__ */ jsx3(DocumentSeries, {})
                    }
                  ]
                },
                {
                  actions: [
                    !isItemRemoved ? {
                      label: t("actions.remove"),
                      onClick: onRemove,
                      icon: /* @__PURE__ */ jsx3(XCircle, {}),
                      disabled: item.detail.fulfilled_quantity === item.quantity
                    } : {
                      label: t("actions.undo"),
                      onClick: onRemoveUndo,
                      icon: /* @__PURE__ */ jsx3(ArrowUturnLeft, {})
                    }
                  ].filter(Boolean)
                }
              ]
            }
          )
        ] })
      ] })
    },
    item.quantity
  );
}

// src/routes/orders/order-create-edit/components/order-edit-create-form/order-edit-items-section.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var addedVariants = [];
var OrderEditItemsSection = ({
  order,
  preview
}) => {
  const { t } = useTranslation4();
  const { setIsOpen } = useStackedModal();
  const [filterTerm, setFilterTerm] = useState2("");
  const { mutateAsync: addItems, isPending } = useAddOrderEditItems(order.id);
  const onItemsSelected = async () => {
    try {
      await addItems({
        items: addedVariants.map((i) => ({
          variant_id: i,
          quantity: 1
        }))
      });
    } catch (e) {
      toast2.error(e.message);
    }
    setIsOpen("inbound-items", false);
  };
  const filteredItems = useMemo3(() => {
    return preview.items.filter(
      (i) => i.title.toLowerCase().includes(filterTerm) || i.product_title.toLowerCase().includes(filterTerm)
    );
  }, [preview, filterTerm]);
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsxs2("div", { className: "mb-3 mt-8 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx4(Heading, { level: "h2", children: t("fields.items") }),
      /* @__PURE__ */ jsxs2("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx4(
          Input2,
          {
            value: filterTerm,
            onChange: (e) => setFilterTerm(e.target.value),
            placeholder: t("fields.search"),
            autoComplete: "off",
            type: "search"
          }
        ),
        /* @__PURE__ */ jsxs2(StackedFocusModal, { id: "inbound-items", children: [
          /* @__PURE__ */ jsx4(StackedFocusModal.Trigger, { asChild: true, children: /* @__PURE__ */ jsx4(Button, { variant: "secondary", size: "small", children: t("actions.addItems") }) }),
          /* @__PURE__ */ jsxs2(StackedFocusModal.Content, { children: [
            /* @__PURE__ */ jsx4(StackedFocusModal.Header, {}),
            /* @__PURE__ */ jsx4(
              AddOrderEditItemsTable,
              {
                currencyCode: order.currency_code,
                onSelectionChange: (finalSelection) => {
                  addedVariants = finalSelection;
                }
              }
            ),
            /* @__PURE__ */ jsx4(StackedFocusModal.Footer, { children: /* @__PURE__ */ jsx4("div", { className: "flex w-full items-center justify-end gap-x-4", children: /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-end gap-x-2", children: [
              /* @__PURE__ */ jsx4(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx4(Button, { type: "button", variant: "secondary", size: "small", children: t("actions.cancel") }) }),
              /* @__PURE__ */ jsx4(
                Button,
                {
                  type: "submit",
                  variant: "primary",
                  size: "small",
                  role: "button",
                  disabled: isPending,
                  onClick: async () => await onItemsSelected(),
                  children: t("actions.save")
                },
                "submit-button"
              )
            ] }) }) })
          ] })
        ] })
      ] })
    ] }),
    filteredItems.map((item) => /* @__PURE__ */ jsx4(
      OrderEditItem,
      {
        item,
        orderId: order.id,
        currencyCode: order.currency_code
      },
      item.id
    )),
    filterTerm && !filteredItems.length && /* @__PURE__ */ jsx4(
      "div",
      {
        style: {
          background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"
        },
        className: "bg-ui-bg-field mt-4 block h-[56px] w-full rounded-lg border border-dashed"
      }
    )
  ] });
};

// src/routes/orders/order-create-edit/components/order-edit-create-form/schema.ts
import { z } from "zod";
var OrderEditCreateSchema = z.object({
  note: z.string().optional(),
  send_notification: z.boolean().optional()
});

// src/routes/orders/order-create-edit/components/order-edit-create-form/order-edit-create-form.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var OrderEditCreateForm = ({
  order,
  preview
}) => {
  const { t } = useTranslation5();
  const { handleSuccess } = useRouteModal();
  const { mutateAsync: cancelOrderEditRequest, isPending: isCanceling } = useCancelOrderEdit(order.id);
  const { mutateAsync: requestOrderEdit, isPending: isRequesting } = useRequestOrderEdit(order.id);
  const isRequestRunning = isCanceling || isRequesting;
  const form = useForm({
    defaultValues: () => {
      return Promise.resolve({
        note: "",
        // TODO: add note when update edit route is added
        send_notification: false
        // TODO: not supported in the API ATM
      });
    },
    resolver: zodResolver(OrderEditCreateSchema)
  });
  const prompt = usePrompt();
  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const res = await prompt({
        title: t("general.areYouSure"),
        description: t("orders.edits.confirmText"),
        confirmText: t("actions.continue"),
        cancelText: t("actions.cancel"),
        variant: "confirmation"
      });
      if (!res) {
        return;
      }
      await requestOrderEdit();
      toast3.success(t("orders.edits.createSuccessToast"));
      handleSuccess();
    } catch (e) {
      toast3.error(t("general.error"), {
        description: e.message
      });
    }
  });
  return /* @__PURE__ */ jsx5(
    RouteFocusModal.Form,
    {
      form,
      onClose: (isSubmitSuccessful) => {
        if (!isSubmitSuccessful) {
          cancelOrderEditRequest(void 0, {
            onSuccess: () => {
              toast3.success(t("orders.edits.cancelSuccessToast"));
            },
            onError: (error) => {
              toast3.error(error.message);
            }
          });
        }
      },
      children: /* @__PURE__ */ jsxs3("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
        /* @__PURE__ */ jsx5(RouteFocusModal.Header, {}),
        /* @__PURE__ */ jsx5(RouteFocusModal.Body, { className: "flex size-full justify-center overflow-y-auto", children: /* @__PURE__ */ jsxs3("div", { className: "mt-16 w-[720px] max-w-[100%] px-4 md:p-0", children: [
          /* @__PURE__ */ jsx5(Heading2, { level: "h1", children: t("orders.edits.create") }),
          /* @__PURE__ */ jsx5(OrderEditItemsSection, { preview, order }),
          /* @__PURE__ */ jsxs3("div", { className: "mt-8 border-y border-dotted py-4", children: [
            /* @__PURE__ */ jsxs3("div", { className: "mb-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx5("span", { className: "txt-small text-ui-fg-subtle", children: t("orders.edits.currentTotal") }),
              /* @__PURE__ */ jsx5("span", { className: "txt-small text-ui-fg-subtle", children: getStylizedAmount(order.total, order.currency_code) })
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "mb-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx5("span", { className: "txt-small text-ui-fg-subtle", children: t("orders.edits.newTotal") }),
              /* @__PURE__ */ jsx5("span", { className: "txt-small text-ui-fg-subtle", children: getStylizedAmount(preview.total, order.currency_code) })
            ] }),
            /* @__PURE__ */ jsxs3("div", { className: "mt-4 flex items-center justify-between border-t border-dotted pt-4", children: [
              /* @__PURE__ */ jsx5("span", { className: "txt-small font-medium", children: t("orders.exchanges.refundAmount") }),
              /* @__PURE__ */ jsx5("span", { className: "txt-small font-medium", children: getStylizedAmount(
                preview.summary.pending_difference,
                order.currency_code
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsx5(
            Form.Field,
            {
              control: form.control,
              name: "note",
              render: ({ field }) => {
                return /* @__PURE__ */ jsx5(Form.Item, { children: /* @__PURE__ */ jsxs3("div", { className: "mt-8 flex", children: [
                  /* @__PURE__ */ jsxs3("div", { className: "block flex-1", children: [
                    /* @__PURE__ */ jsx5(Form.Label, { children: t("fields.note") }),
                    /* @__PURE__ */ jsx5(Form.Hint, { className: "!mt-1", children: t("orders.edits.noteHint") })
                  ] }),
                  /* @__PURE__ */ jsx5("div", { className: "w-full flex-1 flex-grow", children: /* @__PURE__ */ jsx5(Form.Control, { children: /* @__PURE__ */ jsx5(Input3, { ...field, placeholder: t("fields.note") }) }) })
                ] }) });
              }
            }
          ),
          /* @__PURE__ */ jsx5("div", { className: "bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4", children: /* @__PURE__ */ jsx5(
            Form.Field,
            {
              control: form.control,
              name: "send_notification",
              render: ({ field: { onChange, value, ...field } }) => {
                return /* @__PURE__ */ jsxs3(Form.Item, { children: [
                  /* @__PURE__ */ jsxs3("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx5(Form.Control, { className: "mr-4 self-start", children: /* @__PURE__ */ jsx5(
                      Switch,
                      {
                        className: "mt-[2px]",
                        checked: !!value,
                        onCheckedChange: onChange,
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ jsxs3("div", { className: "block", children: [
                      /* @__PURE__ */ jsx5(Form.Label, { children: t("orders.returns.sendNotification") }),
                      /* @__PURE__ */ jsx5(Form.Hint, { className: "!mt-1", children: t("orders.returns.sendNotificationHint") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx5(Form.ErrorMessage, {})
                ] });
              }
            }
          ) }),
          /* @__PURE__ */ jsx5("div", { className: "p-8" })
        ] }) }),
        /* @__PURE__ */ jsx5(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsx5("div", { className: "flex w-full items-center justify-end gap-x-4", children: /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx5(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx5(Button2, { type: "button", variant: "secondary", size: "small", children: t("orders.edits.cancel") }) }),
          /* @__PURE__ */ jsx5(
            Button2,
            {
              type: "submit",
              variant: "primary",
              size: "small",
              isLoading: isRequestRunning,
              children: t("orders.edits.confirm")
            },
            "submit-button"
          )
        ] }) }) })
      ] })
    }
  );
};

// src/routes/orders/order-create-edit/order-edit-create.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var IS_REQUEST_RUNNING = false;
var OrderEditCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation6();
  const { order } = useOrder(id, {
    fields: DEFAULT_FIELDS
  });
  const { order: preview } = useOrderPreview(id);
  const { mutateAsync: createOrderEdit } = useCreateOrderEdit(order.id);
  useEffect(() => {
    async function run() {
      if (IS_REQUEST_RUNNING || !preview) {
        return;
      }
      if (preview.order_change) {
        if (preview.order_change.change_type !== "edit") {
          navigate(`/orders/${preview.id}`, { replace: true });
          toast4.error(t("orders.edits.activeChangeError"));
        }
        return;
      }
      IS_REQUEST_RUNNING = true;
      try {
        const { order: order2 } = await createOrderEdit({
          order_id: preview.id
        });
      } catch (e) {
        toast4.error(e.message);
        navigate(`/orders/${preview.id}`, { replace: true });
      } finally {
        IS_REQUEST_RUNNING = false;
      }
    }
    run();
  }, [preview]);
  return /* @__PURE__ */ jsx6(RouteFocusModal, { children: preview && order && /* @__PURE__ */ jsx6(OrderEditCreateForm, { order, preview }) });
};
export {
  OrderEditCreate as Component
};
