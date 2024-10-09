import {
  useCountries,
  useCountryTableColumns,
  useCountryTableQuery
} from "./chunk-NOAFLTPV.mjs";
import {
  ListSummary
} from "./chunk-I3VB6NM2.mjs";
import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import {
  SectionRow
} from "./chunk-ULQT3HE4.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import {
  currencies
} from "./chunk-MWVM4TYO.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
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
  regionsQueryKeys,
  useDeleteRegion,
  useRegion,
  useUpdateRegion
} from "./chunk-CELPQCSR.mjs";
import {
  usePricePreferences
} from "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/regions/region-detail/loader.ts
var regionQuery = (id) => ({
  queryKey: regionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.region.retrieve(id, {
    fields: "*payment_providers,*countries,+automatic_taxes"
  })
});
var regionLoader = async ({ params }) => {
  const id = params.id;
  const query = regionQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/regions/region-detail/region-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/regions/region-detail/components/region-country-section/region-country-section.tsx
import { PlusMini, Trash } from "@medusajs/icons";
import { Checkbox, Container, Heading, toast, usePrompt } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PREFIX = "c";
var PAGE_SIZE = 10;
var RegionCountrySection = ({ region }) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const [rowSelection, setRowSelection] = useState({});
  const { searchParams, raw } = useCountryTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { countries, count } = useCountries({
    countries: region.countries || [],
    ...searchParams
  });
  const columns = useColumns();
  const { table } = useDataTable({
    data: countries || [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.iso_2,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    prefix: PREFIX,
    meta: {
      region
    }
  });
  const { mutateAsync } = useUpdateRegion(region.id);
  const handleRemoveCountries = async () => {
    const ids = Object.keys(rowSelection).filter((k) => rowSelection[k]);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("regions.removeCountriesWarning", {
        count: ids.length
      }),
      verificationText: t("actions.remove"),
      verificationInstruction: t("general.typeToConfirm"),
      cancelText: t("actions.cancel"),
      confirmText: t("actions.remove")
    });
    if (!res) {
      return;
    }
    const payload = region.countries?.filter((c) => !ids.includes(c.iso_2)).map((c) => c.iso_2);
    await mutateAsync(
      {
        countries: payload
      },
      {
        onSuccess: () => {
          toast.success(t("regions.toast.countries"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("fields.countries") }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("regions.addCountries"),
                  icon: /* @__PURE__ */ jsx(PlusMini, {}),
                  to: "countries/add"
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        orderBy: ["name", "code"],
        search: true,
        pagination: true,
        queryObject: raw,
        prefix: PREFIX,
        commands: [
          {
            action: handleRemoveCountries,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ]
      }
    )
  ] });
};
var CountryActions = ({
  country,
  region
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useUpdateRegion(region.id);
  const payload = region.countries?.filter((c) => c.iso_2 !== country.iso_2).map((c) => c.iso_2);
  const handleRemove = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("regions.removeCountryWarning", {
        name: country.display_name
      }),
      verificationText: country.display_name,
      verificationInstruction: t("general.typeToConfirm"),
      cancelText: t("actions.cancel"),
      confirmText: t("actions.remove")
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      {
        countries: payload
      },
      {
        onSuccess: () => {
          toast.success(t("regions.toast.countries"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.remove"),
              onClick: handleRemove,
              icon: /* @__PURE__ */ jsx(Trash, {})
            }
          ]
        }
      ]
    }
  );
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
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { region } = table.options.meta;
          return /* @__PURE__ */ jsx(CountryActions, { country: row.original, region });
        }
      })
    ],
    [base]
  );
};

// src/routes/regions/region-detail/components/region-general-section/region-general-section.tsx
import { PencilSquare, Trash as Trash2 } from "@medusajs/icons";
import { Badge, Container as Container2, Heading as Heading2, Text, toast as toast2, usePrompt as usePrompt2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var RegionGeneralSection = ({
  region,
  pricePreferences
}) => {
  const { t } = useTranslation2();
  const pricePreferenceForRegion = pricePreferences?.find(
    (preference) => preference.attribute === "region_id" && preference.value === region.id
  );
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { children: region.name }),
      /* @__PURE__ */ jsx2(RegionActions, { region })
    ] }),
    /* @__PURE__ */ jsx2(
      SectionRow,
      {
        title: t("fields.currency"),
        value: /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx2(Badge, { size: "2xsmall", className: "uppercase", children: region.currency_code }),
          /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: currencies[region.currency_code.toUpperCase()].name })
        ] })
      }
    ),
    /* @__PURE__ */ jsx2(
      SectionRow,
      {
        title: t("fields.automaticTaxes"),
        value: region.automatic_taxes ? t("fields.true") : t("fields.false")
      }
    ),
    /* @__PURE__ */ jsx2(
      SectionRow,
      {
        title: t("fields.taxInclusivePricing"),
        value: pricePreferenceForRegion?.is_tax_inclusive ? t("fields.true") : t("fields.false")
      }
    ),
    /* @__PURE__ */ jsx2(
      SectionRow,
      {
        title: t("fields.paymentProviders"),
        value: /* @__PURE__ */ jsx2("div", { className: "inline-flex", children: region.payment_providers?.length ? /* @__PURE__ */ jsx2(
          ListSummary,
          {
            list: region.payment_providers.map((p) => formatProvider(p.id))
          }
        ) : "-" })
      }
    )
  ] });
};
var RegionActions = ({ region }) => {
  const navigate = useNavigate();
  const { t } = useTranslation2();
  const { mutateAsync } = useDeleteRegion(region.id);
  const prompt = usePrompt2();
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("regions.deleteRegionWarning", {
        name: region.name
      }),
      verificationText: region.name,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast2.success(t("regions.toast.delete"));
        navigate("/settings/regions", { replace: true });
      },
      onError: (e) => {
        toast2.error(e.message);
      }
    });
  };
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(PencilSquare, {}),
              label: t("actions.edit"),
              to: `/settings/regions/${region.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx2(Trash2, {}),
              label: t("actions.delete"),
              onClick: handleDelete
            }
          ]
        }
      ]
    }
  );
};

// src/routes/regions/region-detail/region-detail.tsx
import after from "virtual:medusa/widgets/region/details/after";
import before from "virtual:medusa/widgets/region/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var RegionDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const {
    region,
    isPending: isLoading,
    isError: isRegionError,
    error: regionError
  } = useRegion(
    id,
    { fields: "*payment_providers,*countries,+automatic_taxes" },
    {
      initialData
    }
  );
  const {
    price_preferences: pricePreferences,
    isPending: isLoadingPreferences,
    isError: isPreferencesError,
    error: preferencesError
  } = usePricePreferences(
    {
      attribute: "region_id",
      value: id
    },
    { enabled: !!region }
  );
  if (isLoading || isLoadingPreferences || !region) {
    return /* @__PURE__ */ jsx3("div", { children: "Loading..." });
  }
  if (isRegionError) {
    throw regionError;
  }
  if (isPreferencesError) {
    throw preferencesError;
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: region }) }, i);
    }),
    /* @__PURE__ */ jsx3(
      RegionGeneralSection,
      {
        region,
        pricePreferences: pricePreferences ?? []
      }
    ),
    /* @__PURE__ */ jsx3(RegionCountrySection, { region }),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: region }) }, i);
    }),
    /* @__PURE__ */ jsx3(JsonViewSection, { data: region }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
};
export {
  RegionDetail as Component,
  regionLoader as loader
};
