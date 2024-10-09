import {
  useCountries,
  useCountryTableColumns,
  useCountryTableQuery
} from "./chunk-NOAFLTPV.mjs";
import {
  countries
} from "./chunk-VDBOSWVE.mjs";
import {
  ChipGroup
} from "./chunk-ESMNJXW4.mjs";
import {
  SplitView
} from "./chunk-ZIB4QG4N.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";

// src/routes/locations/common/components/geo-zone-form/geo-zone-form.tsx
import { Button, Checkbox } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var GeoZoneSchema = z.object({
  countries: z.array(
    z.object({ iso_2: z.string().min(2), display_name: z.string() })
  )
});
var GeoZoneFormImpl = ({
  form,
  onOpenChange
}) => {
  const castForm = form;
  const { t } = useTranslation();
  const { fields, remove, replace } = useFieldArray({
    control: castForm.control,
    name: "countries",
    keyName: "iso_2"
  });
  const handleClearAll = () => {
    replace([]);
  };
  validateForm(form);
  return /* @__PURE__ */ jsx(
    Form.Field,
    {
      control: form.control,
      name: "countries",
      render: () => {
        return /* @__PURE__ */ jsxs(Form.Item, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-x-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("stockLocations.serviceZones.manageAreas.label") }),
              /* @__PURE__ */ jsx(Form.Hint, { children: t("stockLocations.serviceZones.manageAreas.hint") })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "small",
                variant: "secondary",
                type: "button",
                onClick: () => onOpenChange(true),
                children: t("stockLocations.serviceZones.manageAreas.action")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Form.ErrorMessage, {}),
          /* @__PURE__ */ jsx(Form.Control, { className: "mt-0", children: fields.length > 0 && /* @__PURE__ */ jsx(
            ChipGroup,
            {
              onClearAll: handleClearAll,
              onRemove: remove,
              className: "py-4",
              children: fields.map((field, index) => /* @__PURE__ */ jsx(ChipGroup.Chip, { index, children: field.display_name }, field.iso_2))
            }
          ) })
        ] });
      }
    }
  );
};
var PREFIX = "ac";
var PAGE_SIZE = 50;
var AreaDrawer = ({
  form,
  open,
  onOpenChange
}) => {
  const castForm = form;
  const { t } = useTranslation();
  const { getValues, setValue } = castForm;
  const [selection, setSelection] = useState({});
  const [state, setState] = useState(
    []
  );
  const { searchParams, raw } = useCountryTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { countries: countries2, count } = useCountries({
    countries: countries.map((c) => ({
      display_name: c.display_name,
      name: c.name,
      iso_2: c.iso_2,
      iso_3: c.iso_3,
      num_code: c.num_code
    })),
    ...searchParams
  });
  useEffect(() => {
    if (!open) {
      return;
    }
    const countries3 = getValues("countries");
    if (countries3) {
      setState(
        countries3.map((country) => ({
          iso_2: country.iso_2,
          display_name: country.display_name
        }))
      );
      setSelection(
        countries3.reduce(
          (acc, country) => ({
            ...acc,
            [country.iso_2]: true
          }),
          {}
        )
      );
    }
  }, [open, getValues]);
  const updater = (fn) => {
    const value = typeof fn === "function" ? fn(selection) : fn;
    const ids = Object.keys(value);
    const addedIdsSet = new Set(ids.filter((id) => value[id] && !selection[id]));
    const addedCountries = [];
    if (addedIdsSet.size > 0) {
      const countriesToAdd = countries2?.filter((country) => addedIdsSet.has(country.iso_2)) ?? [];
      for (const country of countriesToAdd) {
        addedCountries.push({
          iso_2: country.iso_2,
          display_name: country.display_name
        });
      }
    }
    setState((prev) => {
      const filteredPrev = prev.filter((country) => value[country.iso_2]);
      return Array.from(/* @__PURE__ */ new Set([...filteredPrev, ...addedCountries]));
    });
    setSelection(value);
  };
  const handleAdd = () => {
    setValue("countries", state, {
      shouldDirty: true,
      shouldTouch: true
    });
    onOpenChange(false);
  };
  const columns = useColumns();
  const { table } = useDataTable({
    data: countries2 || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.iso_2,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: selection,
      updater
    },
    prefix: PREFIX
  });
  validateForm(form);
  return /* @__PURE__ */ jsx(SplitView.Drawer, { children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        search: true,
        pagination: true,
        layout: "fill",
        orderBy: ["name", "code"],
        queryObject: raw,
        prefix: PREFIX
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2 border-t p-4", children: [
      /* @__PURE__ */ jsx(SplitView.Close, { type: "button", asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", type: "button", onClick: handleAdd, children: t("actions.add") })
    ] })
  ] }) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useCountryTableColumns();
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
          const isPreselected = !row.getCanSelect();
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected() || isPreselected,
              disabled: isPreselected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...base
    ],
    [base]
  );
};
function validateForm(form) {
  if (form.getValues("countries") === void 0) {
    throw new Error(
      "The form does not have a field named 'countries'. This field is required to use the GeoZoneForm component."
    );
  }
}
var GeoZoneForm = Object.assign(GeoZoneFormImpl, {
  AreaDrawer
});

export {
  GeoZoneForm
};
