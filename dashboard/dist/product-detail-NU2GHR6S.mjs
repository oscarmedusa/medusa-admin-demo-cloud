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
import {
  productLoader
} from "./chunk-HCP7DWCN.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  PRODUCT_DETAIL_FIELDS
} from "./chunk-SWMQZ55N.mjs";
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
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useSalesChannels
} from "./chunk-TID2KHW6.mjs";
import {
  useDeleteProduct,
  useDeleteProductOption,
  useDeleteVariant,
  useProduct,
  useProductVariants,
  useUpdateProduct
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-detail/product-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/products/product-detail/components/product-attribute-section/product-attribute-section.tsx
import { PencilSquare } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductAttributeSection = ({
  product
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
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.height"), value: product.height }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.width"), value: product.width }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.length"), value: product.length }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.weight"), value: product.weight }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.midCode"), value: product.mid_code }),
    /* @__PURE__ */ jsx(SectionRow, { title: t("fields.hsCode"), value: product.hs_code }),
    /* @__PURE__ */ jsx(
      SectionRow,
      {
        title: t("fields.countryOfOrigin"),
        value: getFormattedCountry(product.origin_country)
      }
    )
  ] });
};

// src/routes/products/product-detail/components/product-general-section/product-general-section.tsx
import { PencilSquare as PencilSquare2, Trash } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2, StatusBadge, usePrompt } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var productStatusColor = (status) => {
  switch (status) {
    case "draft":
      return "grey";
    case "proposed":
      return "orange";
    case "published":
      return "green";
    case "rejected":
      return "red";
    default:
      return "grey";
  }
};
var ProductGeneralSection = ({
  product
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteProduct(product.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("products.deleteWarning", {
        title: product.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        navigate("..");
      }
    });
  };
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { children: product.title }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx2(StatusBadge, { color: productStatusColor(product.status), children: t(`products.productStatus.${product.status}`) }),
        /* @__PURE__ */ jsx2(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.edit"),
                    to: "edit",
                    icon: /* @__PURE__ */ jsx2(PencilSquare2, {})
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t("actions.delete"),
                    onClick: handleDelete,
                    icon: /* @__PURE__ */ jsx2(Trash, {})
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx2(SectionRow, { title: t("fields.description"), value: product.description }),
    /* @__PURE__ */ jsx2(SectionRow, { title: t("fields.subtitle"), value: product.subtitle }),
    /* @__PURE__ */ jsx2(SectionRow, { title: t("fields.handle"), value: `/${product.handle}` }),
    /* @__PURE__ */ jsx2(
      SectionRow,
      {
        title: t("fields.discountable"),
        value: product.discountable ? t("fields.true") : t("fields.false")
      }
    )
  ] });
};

// src/routes/products/product-detail/components/product-media-section/product-media-section.tsx
import { PencilSquare as PencilSquare3, ThumbnailBadge } from "@medusajs/icons";
import {
  Button,
  Checkbox,
  CommandBar,
  Container as Container3,
  Heading as Heading3,
  Text as Text2,
  Tooltip,
  clx,
  usePrompt as usePrompt2
} from "@medusajs/ui";
import { useState } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductMediaSection = ({ product }) => {
  const { t } = useTranslation3();
  const prompt = usePrompt2();
  const [selection, setSelection] = useState({});
  const media = getMedia(product);
  const handleCheckedChange = (id) => {
    setSelection((prev) => {
      if (prev[id]) {
        const { [id]: _, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [id]: true };
      }
    });
  };
  const { mutateAsync } = useUpdateProduct(product.id);
  const handleDelete = async () => {
    const ids = Object.keys(selection);
    const includingThumbnail = ids.some(
      (id) => media.find((m) => m.id === id)?.isThumbnail
    );
    const res = await prompt({
      title: t("general.areYouSure"),
      description: includingThumbnail ? t("products.media.deleteWarningWithThumbnail", {
        count: ids.length
      }) : t("products.media.deleteWarning", {
        count: ids.length
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    const mediaToKeep = product.images.filter((i) => !ids.includes(i.id)).map((i) => ({ url: i.url }));
    await mutateAsync(
      {
        images: mediaToKeep,
        thumbnail: includingThumbnail ? "" : void 0
      },
      {
        onSuccess: () => {
          setSelection({});
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs3(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading3, { level: "h2", children: t("products.media.label") }),
      /* @__PURE__ */ jsx3(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "media?view=edit",
                  icon: /* @__PURE__ */ jsx3(PencilSquare3, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    media.length > 0 ? /* @__PURE__ */ jsx3("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-4 px-6 py-4", children: media.map((i, index) => {
      const isSelected = selection[i.id];
      return /* @__PURE__ */ jsxs3(
        "div",
        {
          className: "shadow-elevation-card-rest hover:shadow-elevation-card-hover transition-fg group relative aspect-square size-full cursor-pointer overflow-hidden rounded-[8px]",
          children: [
            /* @__PURE__ */ jsx3(
              "div",
              {
                className: clx(
                  "transition-fg invisible absolute right-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100",
                  {
                    "visible opacity-100": isSelected
                  }
                ),
                children: /* @__PURE__ */ jsx3(
                  Checkbox,
                  {
                    checked: selection[i.id] || false,
                    onCheckedChange: () => handleCheckedChange(i.id)
                  }
                )
              }
            ),
            i.isThumbnail && /* @__PURE__ */ jsx3("div", { className: "absolute left-2 top-2", children: /* @__PURE__ */ jsx3(Tooltip, { content: t("fields.thumbnail"), children: /* @__PURE__ */ jsx3(ThumbnailBadge, {}) }) }),
            /* @__PURE__ */ jsx3(Link, { to: `media`, state: { curr: index }, children: /* @__PURE__ */ jsx3(
              "img",
              {
                src: i.url,
                alt: `${product.title} image`,
                className: "size-full object-cover"
              }
            ) })
          ]
        },
        i.id
      );
    }) }) : /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-center gap-y-4 pb-8 pt-6", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx3(
          Text2,
          {
            size: "small",
            leading: "compact",
            weight: "plus",
            className: "text-ui-fg-subtle",
            children: t("products.media.emptyState.header")
          }
        ),
        /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-muted", children: t("products.media.emptyState.description") })
      ] }),
      /* @__PURE__ */ jsx3(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "media?view=edit", children: t("products.media.emptyState.action") }) })
    ] }),
    /* @__PURE__ */ jsx3(CommandBar, { open: !!Object.keys(selection).length, children: /* @__PURE__ */ jsxs3(CommandBar.Bar, { children: [
      /* @__PURE__ */ jsx3(CommandBar.Value, { children: t("general.countSelected", {
        count: Object.keys(selection).length
      }) }),
      /* @__PURE__ */ jsx3(CommandBar.Seperator, {}),
      /* @__PURE__ */ jsx3(
        CommandBar.Command,
        {
          action: handleDelete,
          label: t("actions.delete"),
          shortcut: "d"
        }
      )
    ] }) })
  ] });
};
var getMedia = (product) => {
  const { images = [], thumbnail } = product;
  const media = images.map((image) => ({
    id: image.id,
    url: image.url,
    isThumbnail: image.url === thumbnail
  }));
  if (thumbnail && !media.some((mediaItem) => mediaItem.url === thumbnail)) {
    media.unshift({
      id: "img_thumbnail",
      url: thumbnail,
      isThumbnail: true
    });
  }
  return media;
};

// src/routes/products/product-detail/components/product-option-section/product-option-section.tsx
import { PencilSquare as PencilSquare4, Plus, Trash as Trash2 } from "@medusajs/icons";
import { Badge, Container as Container4, Heading as Heading4, usePrompt as usePrompt3 } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var OptionActions = ({
  product,
  option
}) => {
  const { t } = useTranslation4();
  const { mutateAsync } = useDeleteProductOption(product.id, option.id);
  const prompt = usePrompt3();
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("products.options.deleteWarning", {
        title: option.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync();
  };
  return /* @__PURE__ */ jsx4(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `options/${option.id}/edit`,
              icon: /* @__PURE__ */ jsx4(PencilSquare4, {})
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              onClick: handleDelete,
              icon: /* @__PURE__ */ jsx4(Trash2, {})
            }
          ]
        }
      ]
    }
  );
};
var ProductOptionSection = ({
  product
}) => {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsxs4(Container4, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx4(Heading4, { level: "h2", children: t("products.options.header") }),
      /* @__PURE__ */ jsx4(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.create"),
                  to: "options/create",
                  icon: /* @__PURE__ */ jsx4(Plus, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    product.options?.map((option) => {
      return /* @__PURE__ */ jsx4(
        SectionRow,
        {
          title: option.title,
          value: option.values?.map((val) => {
            return /* @__PURE__ */ jsx4(
              Badge,
              {
                size: "2xsmall",
                className: "flex min-w-[20px] items-center justify-center",
                children: val.value
              },
              val.value
            );
          }),
          actions: /* @__PURE__ */ jsx4(OptionActions, { product, option })
        },
        option.id
      );
    })
  ] });
};

// src/routes/products/product-detail/components/product-organization-section/product-organization-section.tsx
import { PencilSquare as PencilSquare5 } from "@medusajs/icons";
import { Badge as Badge2, Container as Container5, Heading as Heading5 } from "@medusajs/ui";
import { useTranslation as useTranslation5 } from "react-i18next";
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var ProductOrganizationSection = ({
  product
}) => {
  const { t } = useTranslation5();
  return /* @__PURE__ */ jsxs5(Container5, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx5(Heading5, { level: "h2", children: t("products.organization.header") }),
      /* @__PURE__ */ jsx5(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "organization",
                  icon: /* @__PURE__ */ jsx5(PencilSquare5, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx5(
      SectionRow,
      {
        title: t("fields.tags"),
        value: product.tags?.length ? product.tags.map((tag) => /* @__PURE__ */ jsx5(Badge2, { className: "w-fit", size: "2xsmall", asChild: true, children: /* @__PURE__ */ jsx5(Link2, { to: `/products?tag_id=${tag.id}`, children: tag.value }) }, tag.id)) : void 0
      }
    ),
    /* @__PURE__ */ jsx5(
      SectionRow,
      {
        title: t("fields.type"),
        value: product.type ? /* @__PURE__ */ jsx5(Badge2, { size: "2xsmall", className: "w-fit", asChild: true, children: /* @__PURE__ */ jsx5(Link2, { to: `/products?type_id=${product.type_id}`, children: product.type.value }) }) : void 0
      }
    ),
    /* @__PURE__ */ jsx5(
      SectionRow,
      {
        title: t("fields.collection"),
        value: product.collection ? /* @__PURE__ */ jsx5(Badge2, { size: "2xsmall", className: "w-fit", asChild: true, children: /* @__PURE__ */ jsx5(Link2, { to: `/collections/${product.collection.id}`, children: product.collection.title }) }) : void 0
      }
    ),
    /* @__PURE__ */ jsx5(
      SectionRow,
      {
        title: t("fields.categories"),
        value: product.categories?.length ? product.categories.map((pcat) => /* @__PURE__ */ jsx5(Badge2, { className: "w-fit", size: "2xsmall", asChild: true, children: /* @__PURE__ */ jsx5(Link2, { to: `/categories/${pcat.id}`, children: pcat.name }) }, pcat.id)) : void 0
      }
    )
  ] });
};

// src/routes/products/product-detail/components/product-sales-channel-section/product-sales-channel-section.tsx
import { Channels, PencilSquare as PencilSquare6 } from "@medusajs/icons";
import { Container as Container6, Heading as Heading6, Text as Text3, Tooltip as Tooltip2 } from "@medusajs/ui";
import { Trans, useTranslation as useTranslation6 } from "react-i18next";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var ProductSalesChannelSection = ({
  product
}) => {
  const { count } = useSalesChannels();
  const { t } = useTranslation6();
  const availableInSalesChannels = product.sales_channels?.map((sc) => ({
    id: sc.id,
    name: sc.name
  })) ?? [];
  const firstChannels = availableInSalesChannels.slice(0, 3);
  const restChannels = availableInSalesChannels.slice(3);
  return /* @__PURE__ */ jsxs6(Container6, { className: "flex flex-col gap-y-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx6(Heading6, { level: "h2", children: t("fields.sales_channels") }),
      /* @__PURE__ */ jsx6(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.edit"),
                  to: "sales-channels",
                  icon: /* @__PURE__ */ jsx6(PencilSquare6, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-[28px_1fr] items-center gap-x-3", children: [
      /* @__PURE__ */ jsx6("div", { className: "bg-ui-bg-base shadow-borders-base flex size-7 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx6("div", { className: "bg-ui-bg-component flex size-6 items-center justify-center rounded-[4px]", children: /* @__PURE__ */ jsx6(Channels, { className: "text-ui-fg-subtle" }) }) }),
      availableInSalesChannels.length > 0 ? /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-x-1", children: [
        /* @__PURE__ */ jsx6(Text3, { size: "small", leading: "compact", children: firstChannels.map((sc) => sc.name).join(", ") }),
        restChannels.length > 0 && /* @__PURE__ */ jsx6(
          Tooltip2,
          {
            content: /* @__PURE__ */ jsx6("ul", { children: restChannels.map((sc) => /* @__PURE__ */ jsx6("li", { children: sc.name }, sc.id)) }),
            children: /* @__PURE__ */ jsx6(
              Text3,
              {
                size: "small",
                leading: "compact",
                className: "text-ui-fg-subtle",
                children: `+${restChannels.length}`
              }
            )
          }
        )
      ] }) : /* @__PURE__ */ jsx6(Text3, { size: "small", leading: "compact", className: "text-ui-fg-subtle", children: t("products.noSalesChannels") })
    ] }),
    /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6(Text3, { className: "text-ui-fg-subtle", size: "small", leading: "compact", children: /* @__PURE__ */ jsx6(
      Trans,
      {
        i18nKey: "sales_channels.availableIn",
        values: {
          x: availableInSalesChannels.length,
          y: count ?? 0
        },
        components: [
          /* @__PURE__ */ jsx6(
            "span",
            {
              className: "text-ui-fg-base txt-compact-medium-plus"
            },
            "x"
          ),
          /* @__PURE__ */ jsx6(
            "span",
            {
              className: "text-ui-fg-base txt-compact-medium-plus"
            },
            "y"
          )
        ]
      }
    ) }) })
  ] });
};

// src/routes/products/product-detail/components/product-variant-section/product-variant-section.tsx
import { PencilSquare as PencilSquare8, Plus as Plus2 } from "@medusajs/icons";
import { Container as Container7, Heading as Heading7 } from "@medusajs/ui";
import { useTranslation as useTranslation9 } from "react-i18next";
import { keepPreviousData } from "@tanstack/react-query";

// src/routes/products/product-detail/components/product-variant-section/use-variant-table-columns.tsx
import { Buildings, Component, PencilSquare as PencilSquare7, Trash as Trash3 } from "@medusajs/icons";
import { Badge as Badge3, clx as clx2, usePrompt as usePrompt4 } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation7 } from "react-i18next";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var VariantActions = ({
  variant,
  product
}) => {
  const { mutateAsync } = useDeleteVariant(product.id, variant.id);
  const { t } = useTranslation7();
  const prompt = usePrompt4();
  const inventoryItemsCount = variant.inventory_items?.length || 0;
  const hasInventoryItem = inventoryItemsCount === 1;
  const hasInventoryKit = inventoryItemsCount > 1;
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("products.deleteVariantWarning", {
        title: variant.title
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync();
  };
  const [inventoryItemLink, inventoryKitLink] = useMemo(() => {
    if (!variant.inventory_items?.length) {
      return ["", ""];
    }
    const itemId = variant.inventory_items[0].inventory.id;
    const itemLink = `/inventory/${itemId}`;
    const itemIds = variant.inventory_items.map((i) => i.inventory.id);
    const params = { id: itemIds };
    const query = new URLSearchParams(params).toString();
    const kitLink = `/inventory?${query}`;
    return [itemLink, kitLink];
  }, [variant.inventory_items]);
  return /* @__PURE__ */ jsx7(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `edit-variant?variant_id=${variant.id}`,
              icon: /* @__PURE__ */ jsx7(PencilSquare7, {})
            },
            {
              label: t("actions.delete"),
              onClick: handleDelete,
              icon: /* @__PURE__ */ jsx7(Trash3, {})
            },
            hasInventoryItem ? {
              label: t("products.variant.inventory.actions.inventoryItems"),
              to: inventoryItemLink,
              icon: /* @__PURE__ */ jsx7(Buildings, {})
            } : false,
            hasInventoryKit ? {
              label: t("products.variant.inventory.actions.inventoryKit"),
              to: inventoryKitLink,
              icon: /* @__PURE__ */ jsx7(Component, {})
            } : false
          ].filter(Boolean)
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useProductVariantTableColumns = (product) => {
  const { t } = useTranslation7();
  const optionColumns = useMemo(() => {
    if (!product) {
      return [];
    }
    return product.options?.map((option) => {
      return columnHelper.display({
        id: option.id,
        header: () => /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: option.title }) }),
        cell: ({ row }) => {
          const variantOpt = row.original.options.find(
            (opt) => opt.option_id === option.id
          );
          if (!variantOpt) {
            return /* @__PURE__ */ jsx7(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx7("div", { className: "flex items-center", children: /* @__PURE__ */ jsx7(
            Badge3,
            {
              size: "2xsmall",
              title: variantOpt.value,
              className: "inline-flex min-w-[20px] max-w-[140px] items-center justify-center overflow-hidden truncate",
              children: variantOpt.value
            }
          ) });
        }
      });
    });
  }, [product]);
  return useMemo(
    () => [
      columnHelper.accessor("title", {
        header: () => /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: t("fields.title") }) }),
        cell: ({ getValue }) => /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: getValue() }) })
      }),
      columnHelper.accessor("sku", {
        header: () => /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: t("fields.sku") }) }),
        cell: ({ getValue }) => {
          const value = getValue();
          if (!value) {
            return /* @__PURE__ */ jsx7(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: value }) });
        }
      }),
      ...optionColumns,
      columnHelper.accessor("inventory_items", {
        header: () => /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx7("span", { className: "truncate", children: t("fields.inventory") }) }),
        cell: ({ getValue, row }) => {
          const variant = row.original;
          if (!variant.manage_inventory) {
            return t("products.variant.inventory.notManaged");
          }
          const inventory = getValue().map(
            (i) => i.inventory
          );
          const hasInventoryKit = inventory.length > 1;
          const locations = {};
          inventory.forEach((i) => {
            i.location_levels.forEach((l) => {
              locations[l.id] = true;
            });
          });
          const locationCount = Object.keys(locations).length;
          const text = hasInventoryKit ? t("products.variant.tableItemAvailable", {
            availableCount: variant.inventory_quantity
          }) : t("products.variant.tableItem", {
            availableCount: variant.inventory_quantity,
            locationCount,
            count: locationCount
          });
          return /* @__PURE__ */ jsxs7("div", { className: "flex h-full w-full items-center gap-2 overflow-hidden", children: [
            hasInventoryKit && /* @__PURE__ */ jsx7(Component, { style: { marginTop: 1 } }),
            /* @__PURE__ */ jsx7(
              "span",
              {
                className: clx2("truncate", {
                  "text-ui-fg-error": !variant.inventory_quantity
                }),
                title: text,
                children: text
              }
            )
          ] });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { product: product2 } = table.options.meta;
          return /* @__PURE__ */ jsx7(VariantActions, { variant: row.original, product: product2 });
        }
      })
    ],
    [t, optionColumns]
  );
};

// src/routes/products/product-detail/components/product-variant-section/use-variant-table-filters.tsx
import { useTranslation as useTranslation8 } from "react-i18next";
var useProductVariantTableFilters = () => {
  const { t } = useTranslation8();
  let filters = [];
  const manageInventoryFilter = {
    key: "manage_inventory",
    label: t("fields.managedInventory"),
    type: "select",
    options: [
      {
        label: t("fields.true"),
        value: "true"
      },
      {
        label: t("fields.false"),
        value: "false"
      }
    ]
  };
  const allowBackorderFilter = {
    key: "allow_backorder",
    label: t("fields.allowBackorder"),
    type: "select",
    options: [
      {
        label: t("fields.true"),
        value: "true"
      },
      {
        label: t("fields.false"),
        value: "false"
      }
    ]
  };
  const dateFilters = [
    { label: t("fields.createdAt"), key: "created_at" },
    { label: t("fields.updatedAt"), key: "updated_at" }
  ].map((f) => ({
    key: f.key,
    label: f.label,
    type: "date"
  }));
  filters = [
    ...filters,
    manageInventoryFilter,
    allowBackorderFilter,
    ...dateFilters
  ];
  return filters;
};

// src/routes/products/product-detail/components/product-variant-section/use-variant-table-query.tsx
var useProductVariantTableQuery = ({
  pageSize,
  prefix
}) => {
  const queryObject = useQueryParams(
    [
      "offset",
      "q",
      "manage_inventory",
      "allow_backorder",
      "order",
      "created_at",
      "updated_at"
    ],
    prefix
  );
  const {
    offset,
    manage_inventory,
    allow_backorder,
    created_at,
    updated_at,
    q,
    order
  } = queryObject;
  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    manage_inventory: manage_inventory ? manage_inventory === "true" : void 0,
    allow_backorder: allow_backorder ? allow_backorder === "true" : void 0,
    order,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0,
    q
  };
  return {
    searchParams,
    raw: queryObject
  };
};

// src/routes/products/product-detail/components/product-variant-section/product-variant-section.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var ProductVariantSection = ({
  product
}) => {
  const { t } = useTranslation9();
  const { searchParams, raw } = useProductVariantTableQuery({
    pageSize: PAGE_SIZE
  });
  const { variants, count, isLoading, isError, error } = useProductVariants(
    product.id,
    {
      ...searchParams,
      fields: "*inventory_items.inventory.location_levels,+inventory_quantity"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useProductVariantTableFilters();
  const columns = useProductVariantTableColumns(product);
  const { table } = useDataTable({
    data: variants ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    meta: {
      product
    }
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs8(Container7, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx8(Heading7, { level: "h2", children: t("products.variants") }),
      /* @__PURE__ */ jsx8(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.create"),
                  to: `variants/create`,
                  icon: /* @__PURE__ */ jsx8(Plus2, {})
                },
                {
                  label: t("products.editPrices"),
                  to: `prices`,
                  icon: /* @__PURE__ */ jsx8(PencilSquare8, {})
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx8(
      DataTable,
      {
        table,
        columns,
        filters,
        count,
        pageSize: PAGE_SIZE,
        isLoading,
        orderBy: ["title", "created_at", "updated_at"],
        navigateTo: (row) => `/products/${row.original.product_id}/variants/${row.id}`,
        pagination: true,
        search: true,
        queryObject: raw
      }
    )
  ] });
};

// src/routes/products/product-detail/product-detail.tsx
import after from "virtual:medusa/widgets/product/details/after";
import before from "virtual:medusa/widgets/product/details/before";
import sideAfter from "virtual:medusa/widgets/product/details/side/after";
import sideBefore from "virtual:medusa/widgets/product/details/side/before";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var ProductDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { product, isLoading, isError, error } = useProduct(
    id,
    { fields: PRODUCT_DETAIL_FIELDS },
    {
      initialData
    }
  );
  if (isLoading || !product) {
    return /* @__PURE__ */ jsx9(
      TwoColumnPageSkeleton,
      {
        mainSections: 4,
        sidebarSections: 3,
        showJSON: true,
        showMetadata: true
      }
    );
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs9(
    TwoColumnPage,
    {
      widgets: {
        after,
        before,
        sideAfter,
        sideBefore
      },
      showJSON: true,
      showMetadata: true,
      data: product,
      children: [
        /* @__PURE__ */ jsxs9(TwoColumnPage.Main, { children: [
          /* @__PURE__ */ jsx9(ProductGeneralSection, { product }),
          /* @__PURE__ */ jsx9(ProductMediaSection, { product }),
          /* @__PURE__ */ jsx9(ProductOptionSection, { product }),
          /* @__PURE__ */ jsx9(ProductVariantSection, { product })
        ] }),
        /* @__PURE__ */ jsxs9(TwoColumnPage.Sidebar, { children: [
          /* @__PURE__ */ jsx9(ProductSalesChannelSection, { product }),
          /* @__PURE__ */ jsx9(ProductOrganizationSection, { product }),
          /* @__PURE__ */ jsx9(ProductAttributeSection, { product })
        ] })
      ]
    }
  );
};
export {
  ProductDetail as Component,
  productLoader as loader
};
