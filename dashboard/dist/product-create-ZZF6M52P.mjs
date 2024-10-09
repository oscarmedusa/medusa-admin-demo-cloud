import {
  ChipGroup
} from "./chunk-ESMNJXW4.mjs";
import {
  SplitView
} from "./chunk-ZIB4QG4N.mjs";
import {
  CSS
} from "./chunk-ACBS6KFT.mjs";
import {
  HandleInput
} from "./chunk-7OYLCEKK.mjs";
import {
  ChipInput
} from "./chunk-OEMJBX6M.mjs";
import {
  DataGrid,
  createDataGridHelper,
  createDataGridPriceColumns
} from "./chunk-R5UFUQNC.mjs";
import {
  InlineTip
} from "./chunk-53IEL2PE.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  SwitchBox
} from "./chunk-ARXK2O3B.mjs";
import {
  useSalesChannelTableColumns
} from "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import {
  useSalesChannelTableQuery
} from "./chunk-GSM3OOMB.mjs";
import {
  useSalesChannelTableFilters
} from "./chunk-VELNOPU6.mjs";
import {
  CategoryCombobox
} from "./chunk-336CPPXJ.mjs";
import {
  useComboboxData
} from "./chunk-KKUJQ3HN.mjs";
import {
  Combobox
} from "./chunk-G4XMHIPB.mjs";
import {
  PRODUCT_CREATE_FORM_DEFAULTS,
  ProductCreateSchema,
  UploadMediaFormItem,
  decorateVariantsWithDefaultValues,
  normalizeProductFormValues
} from "./chunk-K6JDMUI7.mjs";
import "./chunk-QRQHBXSL.mjs";
import "./chunk-6GU6IDUA.mjs";
import "./chunk-MGS2W2HU.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-NL4BBOUC.mjs";
import {
  isFetchError
} from "./chunk-ONB3JEHR.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
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
import "./chunk-TYTNUPXB.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
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
  useStore
} from "./chunk-HULOFXB4.mjs";
import {
  useRegions
} from "./chunk-CELPQCSR.mjs";
import {
  usePricePreferences
} from "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  useSalesChannel,
  useSalesChannels
} from "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  useCreateProduct
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-create/components/product-create-form/product-create-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button as Button5, ProgressTabs, toast } from "@medusajs/ui";
import { useEffect as useEffect3, useMemo as useMemo4, useState as useState5 } from "react";
import { useForm, useWatch as useWatch4 } from "react-hook-form";
import { useTranslation as useTranslation9 } from "react-i18next";

// src/routes/products/product-create/components/product-create-details-form/product-create-details-form.tsx
import { Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";

// src/routes/products/product-create/components/product-create-details-form/components/product-create-details-general-section/product-create-general-section.tsx
import { Input, Textarea } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductCreateGeneralSection = ({
  form
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { id: "general", className: "flex flex-col gap-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-2", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "title",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("products.fields.title.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "Winter jacket" }) })
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "subtitle",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.subtitle.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "Warm and cosy" }) })
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "handle",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(
                Form.Label,
                {
                  tooltip: t("products.fields.handle.tooltip"),
                  optional: true,
                  children: t("fields.handle")
                }
              ),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(HandleInput, { ...field, placeholder: "winter-jacket" }) })
            ] });
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      Form.Field,
      {
        control: form.control,
        name: "description",
        render: ({ field }) => {
          return /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.description.label") }),
            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Textarea, { ...field, placeholder: "A warm and cozy jacket" }) })
          ] });
        }
      }
    )
  ] });
};

// src/routes/products/product-create/components/product-create-details-form/components/product-create-details-media-section/product-create-details-media-section.tsx
import { StackPerspective, ThumbnailBadge, Trash, XMark } from "@medusajs/icons";
import { IconButton, Text } from "@medusajs/ui";
import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductCreateMediaSection = ({
  form
}) => {
  const { fields, append, remove } = useFieldArray({
    name: "media",
    control: form.control,
    keyName: "field_id"
  });
  const getOnDelete = (index) => {
    return () => {
      remove(index);
    };
  };
  const getMakeThumbnail = (index) => {
    return () => {
      const newFields = fields.map((field, i) => {
        return {
          ...field,
          isThumbnail: i === index
        };
      });
      form.setValue("media", newFields, {
        shouldDirty: true,
        shouldTouch: true
      });
    };
  };
  const getItemHandlers = (index) => {
    return {
      onDelete: getOnDelete(index),
      onMakeThumbnail: getMakeThumbnail(index)
    };
  };
  return /* @__PURE__ */ jsxs2("div", { id: "media", className: "flex flex-col gap-y-2", children: [
    /* @__PURE__ */ jsx2(UploadMediaFormItem, { form, append, showHint: false }),
    /* @__PURE__ */ jsx2("ul", { className: "flex flex-col gap-y-2", children: fields.map((field, index) => {
      const { onDelete, onMakeThumbnail } = getItemHandlers(index);
      return /* @__PURE__ */ jsx2(
        MediaItem,
        {
          field,
          onDelete,
          onMakeThumbnail
        },
        field.id
      );
    }) })
  ] });
};
var MediaItem = ({ field, onDelete, onMakeThumbnail }) => {
  const { t } = useTranslation2();
  if (!field.file) {
    return null;
  }
  return /* @__PURE__ */ jsxs2("li", { className: "bg-ui-bg-component shadow-elevation-card-rest flex items-center justify-between rounded-lg px-3 py-2", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ jsx2("div", { className: "bg-ui-bg-base h-10 w-[30px] overflow-hidden rounded-md", children: /* @__PURE__ */ jsx2(ThumbnailPreview, { file: field.file }) }),
      /* @__PURE__ */ jsxs2("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: field.file.name }),
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-1", children: [
          field.isThumbnail && /* @__PURE__ */ jsx2(ThumbnailBadge, {}),
          /* @__PURE__ */ jsx2(Text, { size: "xsmall", leading: "compact", className: "text-ui-fg-subtle", children: formatFileSize(field.file.size) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-1", children: [
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("products.media.makeThumbnail"),
                  icon: /* @__PURE__ */ jsx2(StackPerspective, {}),
                  onClick: onMakeThumbnail
                }
              ]
            },
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(Trash, {}),
                  label: t("actions.delete"),
                  onClick: onDelete
                }
              ]
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx2(
        IconButton,
        {
          type: "button",
          size: "small",
          variant: "transparent",
          onClick: onDelete,
          children: /* @__PURE__ */ jsx2(XMark, {})
        }
      )
    ] })
  ] });
};
var ThumbnailPreview = ({ file }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setThumbnailUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);
  if (!thumbnailUrl) {
    return null;
  }
  return /* @__PURE__ */ jsx2(
    "img",
    {
      src: thumbnailUrl,
      alt: "",
      className: "size-full object-cover object-center"
    }
  );
};
function formatFileSize(bytes, decimalPlaces = 2) {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPlaces)) + " " + sizes[i];
}

// src/routes/products/product-create/components/product-create-details-form/components/product-create-details-variant-section/product-create-details-variant-section.tsx
import { XMarkMini } from "@medusajs/icons";
import {
  Alert,
  Button,
  Checkbox,
  Heading,
  Hint,
  IconButton as IconButton3,
  Input as Input2,
  Label,
  Text as Text2,
  clx as clx2
} from "@medusajs/ui";
import {
  Controller,
  useFieldArray as useFieldArray2,
  useWatch
} from "react-hook-form";
import { useTranslation as useTranslation3 } from "react-i18next";

// src/components/common/sortable-list/sortable-list.tsx
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable
} from "@dnd-kit/sortable";
import { DotsSix } from "@medusajs/icons";
import { IconButton as IconButton2, clx } from "@medusajs/ui";
import {
  Fragment,
  createContext,
  useContext,
  useMemo,
  useState as useState2
} from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var List = ({
  items,
  onChange,
  renderItem
}) => {
  const [active, setActive] = useState2(null);
  const [activeItem, activeIndex] = useMemo(() => {
    if (active === null) {
      return [null, null];
    }
    const index = items.findIndex(({ id }) => id === active.id);
    return [items[index], index];
  }, [active, items]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragStart = ({ active: active2 }) => {
    setActive(active2);
  };
  const handleDragEnd = ({ active: active2, over }) => {
    if (over && active2.id !== over.id) {
      const activeIndex2 = items.findIndex(({ id }) => id === active2.id);
      const overIndex = items.findIndex(({ id }) => id === over.id);
      onChange(arrayMove(items, activeIndex2, overIndex));
    }
    setActive(null);
  };
  const handleDragCancel = () => {
    setActive(null);
  };
  return /* @__PURE__ */ jsxs3(
    DndContext,
    {
      sensors,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      onDragCancel: handleDragCancel,
      children: [
        /* @__PURE__ */ jsx3(Overlay, { children: activeItem && activeIndex !== null ? renderItem(activeItem, activeIndex) : null }),
        /* @__PURE__ */ jsx3(SortableContext, { items, children: /* @__PURE__ */ jsx3(
          "ul",
          {
            role: "application",
            className: "flex list-inside list-none list-image-none flex-col p-0",
            children: items.map((item, index) => /* @__PURE__ */ jsx3(Fragment, { children: renderItem(item, index) }, item.id))
          }
        ) })
      ]
    }
  );
};
var dropAnimationConfig = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4"
      }
    }
  })
};
var Overlay = ({ children }) => {
  return /* @__PURE__ */ jsx3(
    DragOverlay,
    {
      className: "shadow-elevation-card-hover overflow-hidden rounded-md [&>li]:border-b-0",
      dropAnimation: dropAnimationConfig,
      children
    }
  );
};
var SortableItemContext = createContext(null);
var useSortableItemContext = () => {
  const context = useContext(SortableItemContext);
  if (!context) {
    throw new Error(
      "useSortableItemContext must be used within a SortableItemContext"
    );
  }
  return context;
};
var Item = ({
  id,
  className,
  children
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
      isDragging
    }),
    [attributes, listeners, setActivatorNodeRef, isDragging]
  );
  const style = {
    opacity: isDragging ? 0.4 : void 0,
    transform: CSS.Translate.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx3(SortableItemContext.Provider, { value: context, children: /* @__PURE__ */ jsx3(
    "li",
    {
      className: clx("transition-fg flex flex-1 list-none", className),
      ref: setNodeRef,
      style,
      children
    }
  ) });
};
var DragHandle = () => {
  const { attributes, listeners, ref } = useSortableItemContext();
  return /* @__PURE__ */ jsx3(
    IconButton2,
    {
      variant: "transparent",
      size: "small",
      ...attributes,
      ...listeners,
      ref,
      className: "cursor-grab touch-none active:cursor-grabbing",
      children: /* @__PURE__ */ jsx3(DotsSix, { className: "text-ui-fg-muted" })
    }
  );
};
var SortableList = Object.assign(List, {
  Item,
  DragHandle
});

// src/routes/products/product-create/components/product-create-details-form/components/product-create-details-variant-section/product-create-details-variant-section.tsx
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var getPermutations = (data) => {
  if (data.length === 0) {
    return [];
  }
  if (data.length === 1) {
    return data[0].values.map((value) => ({ [data[0].title]: value }));
  }
  const toProcess = data[0];
  const rest = data.slice(1);
  return toProcess.values.flatMap((value) => {
    return getPermutations(rest).map((permutation) => {
      return {
        [toProcess.title]: value,
        ...permutation
      };
    });
  });
};
var getVariantName = (options) => {
  return Object.values(options).join(" / ");
};
var ProductCreateVariantsSection = ({
  form
}) => {
  const { t } = useTranslation3();
  const options = useFieldArray2({
    control: form.control,
    name: "options"
  });
  const variants = useFieldArray2({
    control: form.control,
    name: "variants"
  });
  const watchedAreVariantsEnabled = useWatch({
    control: form.control,
    name: "enable_variants",
    defaultValue: false
  });
  const watchedOptions = useWatch({
    control: form.control,
    name: "options",
    defaultValue: []
  });
  const watchedVariants = useWatch({
    control: form.control,
    name: "variants",
    defaultValue: []
  });
  const showInvalidOptionsMessage = !!form.formState.errors.options?.length;
  const showInvalidVariantsMessage = form.formState.errors.variants?.root?.message === "invalid_length";
  const handleOptionValueUpdate = (index, value) => {
    const { isTouched: hasUserSelectedVariants } = form.getFieldState("variants");
    const newOptions = [...watchedOptions];
    newOptions[index].values = value;
    const permutations = getPermutations(newOptions);
    const oldVariants = [...watchedVariants];
    const findMatchingPermutation = (options2) => {
      return permutations.find(
        (permutation) => Object.keys(options2).every((key) => options2[key] === permutation[key])
      );
    };
    const newVariants = oldVariants.reduce((variants2, variant) => {
      const match = findMatchingPermutation(variant.options);
      if (match) {
        variants2.push({
          ...variant,
          title: getVariantName(match),
          options: match
        });
      }
      return variants2;
    }, []);
    const usedPermutations = new Set(
      newVariants.map((variant) => variant.options)
    );
    const unusedPermutations = permutations.filter(
      (permutation) => !usedPermutations.has(permutation)
    );
    unusedPermutations.forEach((permutation) => {
      newVariants.push({
        title: getVariantName(permutation),
        options: permutation,
        should_create: hasUserSelectedVariants ? false : true,
        variant_rank: newVariants.length,
        // NOTE - prepare inventory array here for now so we prevent rendering issue if we append the items later
        inventory: [{ inventory_item_id: "", required_quantity: "" }]
      });
    });
    form.setValue("variants", newVariants);
  };
  const handleRemoveOption = (index) => {
    if (index === 0) {
      return;
    }
    options.remove(index);
    const newOptions = [...watchedOptions];
    newOptions.splice(index, 1);
    const permutations = getPermutations(newOptions);
    const oldVariants = [...watchedVariants];
    const findMatchingPermutation = (options2) => {
      return permutations.find(
        (permutation) => Object.keys(options2).every((key) => options2[key] === permutation[key])
      );
    };
    const newVariants = oldVariants.reduce((variants2, variant) => {
      const match = findMatchingPermutation(variant.options);
      if (match) {
        variants2.push({
          ...variant,
          title: getVariantName(match),
          options: match
        });
      }
      return variants2;
    }, []);
    const usedPermutations = new Set(
      newVariants.map((variant) => variant.options)
    );
    const unusedPermutations = permutations.filter(
      (permutation) => !usedPermutations.has(permutation)
    );
    unusedPermutations.forEach((permutation) => {
      newVariants.push({
        title: getVariantName(permutation),
        options: permutation,
        should_create: false,
        variant_rank: newVariants.length
      });
    });
    form.setValue("variants", newVariants);
  };
  const handleRankChange = (items) => {
    const update = items.map((item, index) => {
      const variant = watchedVariants.find((v) => v.title === item.title);
      return {
        id: item.id,
        ...variant || item,
        variant_rank: index
      };
    });
    variants.replace(update);
  };
  const getCheckboxState = (variants2) => {
    if (variants2.every((variant) => variant.should_create)) {
      return true;
    }
    if (variants2.some((variant) => variant.should_create)) {
      return "indeterminate";
    }
    return false;
  };
  const onCheckboxChange = (value) => {
    switch (value) {
      case true: {
        const update = watchedVariants.map((variant) => {
          return {
            ...variant,
            should_create: true
          };
        });
        form.setValue("variants", update);
        break;
      }
      case false: {
        const update = watchedVariants.map((variant) => {
          return {
            ...variant,
            should_create: false
          };
        });
        form.setValue("variants", decorateVariantsWithDefaultValues(update));
        break;
      }
      case "indeterminate":
        break;
    }
  };
  const createDefaultOptionAndVariant = () => {
    form.setValue("options", [
      {
        title: "Default option",
        values: ["Default option value"]
      }
    ]);
    form.setValue(
      "variants",
      decorateVariantsWithDefaultValues([
        {
          title: "Default variant",
          should_create: true,
          variant_rank: 0,
          options: {
            "Default option": "Default option value"
          },
          inventory: [{ inventory_item_id: "", required_quantity: "" }],
          is_default: true
        }
      ])
    );
  };
  return /* @__PURE__ */ jsxs4("div", { id: "variants", className: "flex flex-col gap-y-8", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-6", children: [
      /* @__PURE__ */ jsx4(Heading, { level: "h2", children: t("products.create.variants.header") }),
      /* @__PURE__ */ jsx4(
        SwitchBox,
        {
          control: form.control,
          name: "enable_variants",
          label: t("products.create.variants.subHeadingTitle"),
          description: t("products.create.variants.subHeadingDescription"),
          onCheckedChange: (checked) => {
            if (checked) {
              form.setValue("options", [
                {
                  title: "",
                  values: []
                }
              ]);
              form.setValue("variants", []);
            } else {
              createDefaultOptionAndVariant();
            }
          }
        }
      )
    ] }),
    watchedAreVariantsEnabled && /* @__PURE__ */ jsxs4(Fragment2, { children: [
      /* @__PURE__ */ jsx4("div", { className: "flex flex-col gap-y-6", children: /* @__PURE__ */ jsx4(
        Form.Field,
        {
          control: form.control,
          name: "options",
          render: () => {
            return /* @__PURE__ */ jsx4(Form.Item, { children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-6", children: [
              /* @__PURE__ */ jsxs4("div", { className: "flex items-start justify-between gap-x-4", children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx4(Form.Label, { children: t("products.create.variants.productOptions.label") }),
                  /* @__PURE__ */ jsx4(Form.Hint, { children: t("products.create.variants.productOptions.hint") })
                ] }),
                /* @__PURE__ */ jsx4(
                  Button,
                  {
                    size: "small",
                    variant: "secondary",
                    type: "button",
                    onClick: () => {
                      options.append({
                        title: "",
                        values: []
                      });
                    },
                    children: t("actions.add")
                  }
                )
              ] }),
              showInvalidOptionsMessage && /* @__PURE__ */ jsx4(Alert, { dismissible: true, variant: "error", children: t("products.create.errors.options") }),
              /* @__PURE__ */ jsx4("ul", { className: "flex flex-col gap-y-4", children: options.fields.map((option, index) => {
                return /* @__PURE__ */ jsxs4(
                  "li",
                  {
                    className: "bg-ui-bg-component shadow-elevation-card-rest grid grid-cols-[1fr_28px] items-center gap-1.5 rounded-xl p-1.5",
                    children: [
                      /* @__PURE__ */ jsxs4("div", { className: "grid grid-cols-[min-content,1fr] items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx4("div", { className: "flex items-center px-2 py-1.5", children: /* @__PURE__ */ jsx4(
                          Label,
                          {
                            size: "xsmall",
                            weight: "plus",
                            className: "text-ui-fg-subtle",
                            htmlFor: `options.${index}.title`,
                            children: t("fields.title")
                          }
                        ) }),
                        /* @__PURE__ */ jsx4(
                          Input2,
                          {
                            className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",
                            ...form.register(
                              `options.${index}.title`
                            ),
                            placeholder: t(
                              "products.fields.options.optionTitlePlaceholder"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx4("div", { className: "flex items-center px-2 py-1.5", children: /* @__PURE__ */ jsx4(
                          Label,
                          {
                            size: "xsmall",
                            weight: "plus",
                            className: "text-ui-fg-subtle",
                            htmlFor: `options.${index}.values`,
                            children: t("fields.values")
                          }
                        ) }),
                        /* @__PURE__ */ jsx4(
                          Controller,
                          {
                            control: form.control,
                            name: `options.${index}.values`,
                            render: ({
                              field: { onChange, ...field }
                            }) => {
                              const handleValueChange = (value) => {
                                handleOptionValueUpdate(index, value);
                                onChange(value);
                              };
                              return /* @__PURE__ */ jsx4(
                                ChipInput,
                                {
                                  ...field,
                                  variant: "contrast",
                                  onChange: handleValueChange,
                                  placeholder: t(
                                    "products.fields.options.variantionsPlaceholder"
                                  )
                                }
                              );
                            }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx4(
                        IconButton3,
                        {
                          type: "button",
                          size: "small",
                          variant: "transparent",
                          className: "text-ui-fg-muted",
                          disabled: index === 0,
                          onClick: () => handleRemoveOption(index),
                          children: /* @__PURE__ */ jsx4(XMarkMini, {})
                        }
                      )
                    ]
                  },
                  option.id
                );
              }) })
            ] }) });
          }
        }
      ) }),
      /* @__PURE__ */ jsx4("div", { className: "grid grid-cols-1 gap-x-4 gap-y-8", children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-6", children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx4(Label, { weight: "plus", children: t("products.create.variants.productVariants.label") }),
          /* @__PURE__ */ jsx4(Hint, { children: t("products.create.variants.productVariants.hint") })
        ] }),
        !showInvalidOptionsMessage && showInvalidVariantsMessage && /* @__PURE__ */ jsx4(Alert, { dismissible: true, variant: "error", children: t("products.create.errors.variants") }),
        variants.fields.length > 0 ? /* @__PURE__ */ jsxs4("div", { className: "overflow-hidden rounded-xl border", children: [
          /* @__PURE__ */ jsxs4(
            "div",
            {
              className: "bg-ui-bg-component text-ui-fg-subtle grid items-center gap-3 border-b px-6 py-2.5",
              style: {
                gridTemplateColumns: `20px 28px repeat(${watchedOptions.length}, 1fr)`
              },
              children: [
                /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(
                  Checkbox,
                  {
                    checked: getCheckboxState(watchedVariants),
                    onCheckedChange: onCheckboxChange
                  }
                ) }),
                /* @__PURE__ */ jsx4("div", {}),
                watchedOptions.map((option, index) => /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(Text2, { size: "small", leading: "compact", weight: "plus", children: option.title }) }, index))
              ]
            }
          ),
          /* @__PURE__ */ jsx4(
            SortableList,
            {
              items: variants.fields,
              onChange: handleRankChange,
              renderItem: (item, index) => {
                return /* @__PURE__ */ jsx4(
                  SortableList.Item,
                  {
                    id: item.id,
                    className: clx2("bg-ui-bg-base border-b", {
                      "border-b-0": index === variants.fields.length - 1
                    }),
                    children: /* @__PURE__ */ jsxs4(
                      "div",
                      {
                        className: "text-ui-fg-subtle grid w-full items-center gap-3 px-6 py-2.5",
                        style: {
                          gridTemplateColumns: `20px 28px repeat(${watchedOptions.length}, 1fr)`
                        },
                        children: [
                          /* @__PURE__ */ jsx4(
                            Form.Field,
                            {
                              control: form.control,
                              name: `variants.${index}.should_create`,
                              render: ({
                                field: { value, onChange, ...field }
                              }) => {
                                return /* @__PURE__ */ jsx4(Form.Item, { children: /* @__PURE__ */ jsx4(Form.Control, { children: /* @__PURE__ */ jsx4(
                                  Checkbox,
                                  {
                                    ...field,
                                    checked: value,
                                    onCheckedChange: onChange
                                  }
                                ) }) });
                              }
                            }
                          ),
                          /* @__PURE__ */ jsx4(SortableList.DragHandle, {}),
                          Object.values(item.options).map((value, index2) => /* @__PURE__ */ jsx4(Text2, { size: "small", leading: "compact", children: value }, index2))
                        ]
                      }
                    )
                  }
                );
              }
            }
          )
        ] }) : /* @__PURE__ */ jsx4(Alert, { children: t("products.create.variants.productVariants.alert") }),
        variants.fields.length > 0 && /* @__PURE__ */ jsx4(InlineTip, { variant: "tip", children: t("products.create.variants.productVariants.tip") })
      ] }) })
    ] })
  ] });
};

// src/routes/products/product-create/components/product-create-details-form/product-create-details-form.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var ProductCreateDetailsForm = ({ form }) => {
  return /* @__PURE__ */ jsx5("div", { className: "flex flex-col items-center p-16", children: /* @__PURE__ */ jsxs5("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx5(Header, {}),
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-y-6", children: [
      /* @__PURE__ */ jsx5(ProductCreateGeneralSection, { form }),
      /* @__PURE__ */ jsx5(ProductCreateMediaSection, { form })
    ] }),
    /* @__PURE__ */ jsx5(Divider, {}),
    /* @__PURE__ */ jsx5(ProductCreateVariantsSection, { form })
  ] }) });
};
var Header = () => {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsx5("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx5(Heading2, { children: t("products.create.header") }) });
};

// src/routes/products/product-create/components/product-create-inventory-kit-form/components/product-create-inventory-kit-section/product-create-inventory-kit-section.tsx
import { Button as Button2, Heading as Heading3, IconButton as IconButton4, Input as Input3, Label as Label2 } from "@medusajs/ui";
import { useFieldArray as useFieldArray3, useWatch as useWatch2 } from "react-hook-form";
import { XMarkMini as XMarkMini2 } from "@medusajs/icons";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function VariantSection({ form, variant, index }) {
  const { t } = useTranslation5();
  const inventory = useFieldArray3({
    control: form.control,
    name: `variants.${index}.inventory`
  });
  const inventoryFormData = useWatch2({
    control: form.control,
    name: `variants.${index}.inventory`
  });
  const items = useComboboxData({
    queryKey: ["inventory_items"],
    queryFn: (params) => sdk.admin.inventoryItem.list(params),
    getOptions: (data) => data.inventory_items.map((item) => ({
      label: item.title,
      value: item.id
    }))
  });
  const isItemOptionDisabled = (option, inventoryIndex) => {
    return inventoryFormData?.some(
      (i, index2) => index2 != inventoryIndex && i.inventory_item_id === option.value
    );
  };
  return /* @__PURE__ */ jsxs6("div", { className: "grid gap-y-4", children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex items-start justify-between gap-x-4", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx6(Form.Label, { children: variant.title }),
        /* @__PURE__ */ jsx6(Form.Hint, { children: t("products.create.inventory.label") })
      ] }),
      /* @__PURE__ */ jsx6(
        Button2,
        {
          size: "small",
          variant: "secondary",
          type: "button",
          onClick: () => {
            inventory.append({
              inventory_item_id: "",
              required_quantity: ""
            });
          },
          children: t("actions.add")
        }
      )
    ] }),
    inventory.fields.map((inventoryItem, inventoryIndex) => /* @__PURE__ */ jsxs6(
      "li",
      {
        className: "bg-ui-bg-component shadow-elevation-card-rest grid grid-cols-[1fr_28px] items-center gap-1.5 rounded-xl p-1.5",
        children: [
          /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-[min-content,1fr] items-center gap-1.5", children: [
            /* @__PURE__ */ jsx6("div", { className: "flex items-center px-2 py-1.5", children: /* @__PURE__ */ jsx6(
              Label2,
              {
                size: "xsmall",
                weight: "plus",
                className: "text-ui-fg-subtle",
                htmlFor: `variants.${index}.inventory.${inventoryIndex}.inventory_item_id`,
                children: t("fields.item")
              }
            ) }),
            /* @__PURE__ */ jsx6(
              Form.Field,
              {
                control: form.control,
                name: `variants.${index}.inventory.${inventoryIndex}.inventory_item_id`,
                render: ({ field }) => {
                  return /* @__PURE__ */ jsx6(Form.Item, { children: /* @__PURE__ */ jsx6(Form.Control, { children: /* @__PURE__ */ jsx6(
                    Combobox,
                    {
                      ...field,
                      options: items.options.map((o) => ({
                        ...o,
                        disabled: isItemOptionDisabled(o, inventoryIndex)
                      })),
                      searchValue: items.searchValue,
                      onSearchValueChange: items.onSearchValueChange,
                      fetchNextPage: items.fetchNextPage,
                      className: "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",
                      placeholder: t(
                        "products.create.inventory.itemPlaceholder"
                      )
                    }
                  ) }) });
                }
              }
            ),
            /* @__PURE__ */ jsx6("div", { className: "flex items-center px-2 py-1.5", children: /* @__PURE__ */ jsx6(
              Label2,
              {
                size: "xsmall",
                weight: "plus",
                className: "text-ui-fg-subtle",
                htmlFor: `variants.${index}.inventory.${inventoryIndex}.required_quantity`,
                children: t("fields.quantity")
              }
            ) }),
            /* @__PURE__ */ jsx6(
              Form.Field,
              {
                control: form.control,
                name: `variants.${index}.inventory.${inventoryIndex}.required_quantity`,
                render: ({ field: { onChange, value, ...field } }) => {
                  return /* @__PURE__ */ jsxs6(Form.Item, { children: [
                    /* @__PURE__ */ jsx6(Form.Control, { children: /* @__PURE__ */ jsx6(
                      Input3,
                      {
                        type: "number",
                        className: "bg-ui-bg-field-component",
                        min: 0,
                        value,
                        onChange: (e) => {
                          const value2 = e.target.value;
                          if (value2 === "") {
                            onChange(null);
                          } else {
                            onChange(Number(value2));
                          }
                        },
                        ...field,
                        placeholder: t(
                          "products.create.inventory.quantityPlaceholder"
                        )
                      }
                    ) }),
                    /* @__PURE__ */ jsx6(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx6(
            IconButton4,
            {
              type: "button",
              size: "small",
              variant: "transparent",
              className: "text-ui-fg-muted",
              onClick: () => inventory.remove(inventoryIndex),
              children: /* @__PURE__ */ jsx6(XMarkMini2, {})
            }
          )
        ]
      },
      inventoryItem.id
    ))
  ] });
}
var ProductCreateInventoryKitSection = ({
  form
}) => {
  const { t } = useTranslation5();
  const variants = useFieldArray3({
    control: form.control,
    name: "variants"
  });
  return /* @__PURE__ */ jsxs6("div", { id: "organize", className: "flex flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx6(Heading3, { children: t("products.create.inventory.heading") }),
    variants.fields.filter((v) => v.inventory_kit).map((variant, variantIndex) => /* @__PURE__ */ jsx6(
      VariantSection,
      {
        form,
        variant,
        index: variantIndex
      },
      variant.id
    ))
  ] });
};

// src/routes/products/product-create/components/product-create-inventory-kit-form/product-create-inventory-kit-form.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var ProductCreateInventoryKitForm = ({
  form
}) => {
  return /* @__PURE__ */ jsx7("div", { className: "flex flex-col items-center p-16", children: /* @__PURE__ */ jsx7("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: /* @__PURE__ */ jsx7(ProductCreateInventoryKitSection, { form }) }) });
};

// src/routes/products/product-create/components/product-create-organize-form/product-create-organize-form.tsx
import { useState as useState4 } from "react";

// src/routes/products/product-create/components/product-create-organize-form/components/product-create-organize-context/product-create-details-context.tsx
import { createContext as createContext2 } from "react";
var ProductCreateDetailsContext = createContext2(null);

// src/routes/products/product-create/components/product-create-organize-form/components/product-create-organize-context/use-product-create-details-context.tsx
import { useContext as useContext2 } from "react";
var useProductCreateDetailsContext = () => {
  const context = useContext2(ProductCreateDetailsContext);
  if (!context) {
    throw new Error(
      "useProductCreateDetailsContext must be used within a ProductCreateDetailsContextProvider"
    );
  }
  return context;
};

// src/routes/products/product-create/components/product-create-organize-form/components/product-create-organize-section/product-create-details-organize-section.tsx
import { Button as Button3, Heading as Heading4 } from "@medusajs/ui";
import { useFieldArray as useFieldArray4 } from "react-hook-form";
import { Trans, useTranslation as useTranslation6 } from "react-i18next";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var ProductCreateOrganizationSection = ({
  form
}) => {
  const { t } = useTranslation6();
  const { onOpenChange } = useProductCreateDetailsContext();
  const collections = useComboboxData({
    queryKey: ["product_collections"],
    queryFn: (params) => sdk.admin.productCollection.list(params),
    getOptions: (data) => data.collections.map((collection) => ({
      label: collection.title,
      value: collection.id
    }))
  });
  const types = useComboboxData({
    queryKey: ["product_types"],
    queryFn: (params) => sdk.admin.productType.list(params),
    getOptions: (data) => data.product_types.map((type) => ({
      label: type.value,
      value: type.id
    }))
  });
  const tags = useComboboxData({
    queryKey: ["product_tags"],
    queryFn: (params) => sdk.admin.productTag.list(params),
    getOptions: (data) => data.product_tags.map((tag) => ({
      label: tag.value,
      value: tag.id
    }))
  });
  const { fields, remove, replace } = useFieldArray4({
    control: form.control,
    name: "sales_channels",
    keyName: "key"
  });
  const handleClearAllSalesChannels = () => {
    replace([]);
  };
  return /* @__PURE__ */ jsxs7("div", { id: "organize", className: "flex flex-col gap-y-8", children: [
    /* @__PURE__ */ jsx8(Heading4, { children: t("products.organization.header") }),
    /* @__PURE__ */ jsx8(
      SwitchBox,
      {
        control: form.control,
        name: "discountable",
        label: t("products.fields.discountable.label"),
        description: t("products.fields.discountable.hint"),
        optional: true
      }
    ),
    /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx8(
        Form.Field,
        {
          control: form.control,
          name: "type_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs7(Form.Item, { children: [
              /* @__PURE__ */ jsx8(Form.Label, { optional: true, children: t("products.fields.type.label") }),
              /* @__PURE__ */ jsx8(Form.Control, { children: /* @__PURE__ */ jsx8(
                Combobox,
                {
                  ...field,
                  options: types.options,
                  searchValue: types.searchValue,
                  onSearchValueChange: types.onSearchValueChange,
                  fetchNextPage: types.fetchNextPage
                }
              ) }),
              /* @__PURE__ */ jsx8(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx8(
        Form.Field,
        {
          control: form.control,
          name: "collection_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs7(Form.Item, { children: [
              /* @__PURE__ */ jsx8(Form.Label, { optional: true, children: t("products.fields.collection.label") }),
              /* @__PURE__ */ jsx8(Form.Control, { children: /* @__PURE__ */ jsx8(
                Combobox,
                {
                  ...field,
                  options: collections.options,
                  searchValue: collections.searchValue,
                  onSearchValueChange: collections.onSearchValueChange,
                  fetchNextPage: collections.fetchNextPage
                }
              ) }),
              /* @__PURE__ */ jsx8(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx8(
        Form.Field,
        {
          control: form.control,
          name: "categories",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs7(Form.Item, { children: [
              /* @__PURE__ */ jsx8(Form.Label, { optional: true, children: t("products.fields.categories.label") }),
              /* @__PURE__ */ jsx8(Form.Control, { children: /* @__PURE__ */ jsx8(CategoryCombobox, { ...field }) }),
              /* @__PURE__ */ jsx8(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx8(
        Form.Field,
        {
          control: form.control,
          name: "tags",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs7(Form.Item, { children: [
              /* @__PURE__ */ jsx8(Form.Label, { optional: true, children: t("products.fields.tags.label") }),
              /* @__PURE__ */ jsx8(Form.Control, { children: /* @__PURE__ */ jsx8(
                Combobox,
                {
                  ...field,
                  options: tags.options,
                  searchValue: tags.searchValue,
                  onSearchValueChange: tags.onSearchValueChange,
                  fetchNextPage: tags.fetchNextPage
                }
              ) }),
              /* @__PURE__ */ jsx8(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "grid grid-cols-1 gap-y-4", children: /* @__PURE__ */ jsx8(
      Form.Field,
      {
        control: form.control,
        name: "sales_channels",
        render: () => {
          return /* @__PURE__ */ jsxs7(Form.Item, { children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex items-start justify-between gap-x-4", children: [
              /* @__PURE__ */ jsxs7("div", { children: [
                /* @__PURE__ */ jsx8(Form.Label, { optional: true, children: t("products.fields.sales_channels.label") }),
                /* @__PURE__ */ jsx8(Form.Hint, { children: /* @__PURE__ */ jsx8(Trans, { i18nKey: "products.fields.sales_channels.hint" }) })
              ] }),
              /* @__PURE__ */ jsx8(
                Button3,
                {
                  size: "small",
                  variant: "secondary",
                  type: "button",
                  onClick: () => onOpenChange(true),
                  children: t("actions.add")
                }
              )
            ] }),
            /* @__PURE__ */ jsx8(Form.Control, { className: "mt-0", children: fields.length > 0 && /* @__PURE__ */ jsx8(
              ChipGroup,
              {
                onClearAll: handleClearAllSalesChannels,
                onRemove: remove,
                className: "py-4",
                children: fields.map((field, index) => /* @__PURE__ */ jsx8(ChipGroup.Chip, { index, children: field.name }, field.key))
              }
            ) })
          ] });
        }
      }
    ) })
  ] });
};

// src/routes/products/product-create/components/product-create-organize-form/components/product-create-sales-channel-drawer/product-create-sales-channel-drawer.tsx
import { Button as Button4, Checkbox as Checkbox2 } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect as useEffect2, useMemo as useMemo2, useState as useState3 } from "react";
import { useTranslation as useTranslation7 } from "react-i18next";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var PAGE_SIZE = 50;
var PREFIX = "sc";
var ProductCreateSalesChannelDrawer = ({
  form
}) => {
  const { t } = useTranslation7();
  const { open, onOpenChange } = useProductCreateDetailsContext();
  const { getValues, setValue } = form;
  const [selection, setSelection] = useState3({});
  const [state, setState] = useState3([]);
  const { searchParams, raw } = useSalesChannelTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { sales_channels, count, isLoading, isError, error } = useSalesChannels(
    {
      ...searchParams
    }
  );
  useEffect2(() => {
    if (!open) {
      return;
    }
    const salesChannels = getValues("sales_channels");
    if (salesChannels) {
      setState(
        salesChannels.map((channel) => ({
          id: channel.id,
          name: channel.name
        }))
      );
      setSelection(
        salesChannels.reduce(
          (acc, channel) => ({
            ...acc,
            [channel.id]: true
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
    let addedSalesChannels = [];
    if (addedIdsSet.size > 0) {
      addedSalesChannels = sales_channels?.filter((channel) => addedIdsSet.has(channel.id)) ?? [];
    }
    setState((prev) => {
      const filteredPrev = prev.filter((channel) => value[channel.id]);
      return Array.from(/* @__PURE__ */ new Set([...filteredPrev, ...addedSalesChannels]));
    });
    setSelection(value);
  };
  const handleAdd = () => {
    setValue("sales_channels", state, {
      shouldDirty: true,
      shouldTouch: true
    });
    onOpenChange(false);
  };
  const filters = useSalesChannelTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: sales_channels ?? [],
    columns,
    count: sales_channels?.length ?? 0,
    enablePagination: true,
    enableRowSelection: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: selection,
      updater
    },
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs8("div", { className: "flex h-full flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx9("div", { className: "flex-1", children: /* @__PURE__ */ jsx9(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        filters,
        isLoading,
        layout: "fill",
        orderBy: ["name", "created_at", "updated_at"],
        queryObject: raw,
        search: true,
        pagination: true,
        count,
        prefix: PREFIX
      }
    ) }),
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-end gap-x-2 border-t px-6 py-4", children: [
      /* @__PURE__ */ jsx9(SplitView.Close, { asChild: true, children: /* @__PURE__ */ jsx9(Button4, { size: "small", variant: "secondary", type: "button", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx9(Button4, { size: "small", onClick: handleAdd, type: "button", children: t("actions.add") })
    ] })
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useSalesChannelTableColumns();
  return useMemo2(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx9(
            Checkbox2,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx9(
            Checkbox2,
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
      ...base
    ],
    [base]
  );
};

// src/routes/products/product-create/components/product-create-organize-form/product-create-organize-form.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var ProductCreateOrganizeForm = ({ form }) => {
  const [open, setOpen] = useState4(false);
  return /* @__PURE__ */ jsx10(
    ProductCreateDetailsContext.Provider,
    {
      value: { open, onOpenChange: setOpen },
      children: /* @__PURE__ */ jsxs9(SplitView, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx10(SplitView.Content, { children: /* @__PURE__ */ jsx10("div", { className: "flex flex-col items-center p-16", children: /* @__PURE__ */ jsx10("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: /* @__PURE__ */ jsx10(ProductCreateOrganizationSection, { form }) }) }) }),
        /* @__PURE__ */ jsx10(SplitView.Drawer, { children: /* @__PURE__ */ jsx10(ProductCreateSalesChannelDrawer, { form }) })
      ] })
    }
  );
};

// src/routes/products/product-create/components/product-create-variants-form/product-create-variants-form.tsx
import { useMemo as useMemo3 } from "react";
import { useWatch as useWatch3 } from "react-hook-form";
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsx as jsx11 } from "react/jsx-runtime";
var ProductCreateVariantsForm = ({
  form,
  regions,
  store,
  pricePreferences
}) => {
  const { setCloseOnEscape } = useRouteModal();
  const currencyCodes = useMemo3(
    () => store?.supported_currencies?.map((c) => c.currency_code) || [],
    [store]
  );
  const variants = useWatch3({
    control: form.control,
    name: "variants",
    defaultValue: []
  });
  const options = useWatch3({
    control: form.control,
    name: "options",
    defaultValue: []
  });
  const columns = useColumns2({
    options,
    currencies: currencyCodes,
    regions,
    pricePreferences
  });
  const variantData = useMemo3(() => {
    const ret = [];
    variants.forEach((v, i) => {
      if (v.should_create) {
        ret.push({ ...v, originalIndex: i });
      }
    });
    return ret;
  }, [variants]);
  return /* @__PURE__ */ jsx11("div", { className: "flex size-full flex-col divide-y overflow-hidden", children: /* @__PURE__ */ jsx11(
    DataGrid,
    {
      columns,
      data: variantData,
      state: form,
      onEditingChange: (editing) => setCloseOnEscape(!editing)
    }
  ) });
};
var columnHelper2 = createDataGridHelper();
var useColumns2 = ({
  options,
  currencies = [],
  regions = [],
  pricePreferences = []
}) => {
  const { t } = useTranslation8();
  return useMemo3(
    () => [
      columnHelper2.column({
        id: "options",
        header: () => /* @__PURE__ */ jsx11("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx11("span", { className: "truncate", children: options.map((o) => o.title).join(" / ") }) }),
        cell: (context) => {
          return /* @__PURE__ */ jsx11(DataGrid.ReadonlyCell, { context, children: options.map((o) => context.row.original.options[o.title]).join(" / ") });
        },
        disableHiding: true
      }),
      columnHelper2.column({
        id: "title",
        name: t("fields.title"),
        header: t("fields.title"),
        field: (context) => `variants.${context.row.original.originalIndex}.title`,
        type: "text",
        cell: (context) => {
          return /* @__PURE__ */ jsx11(DataGrid.TextCell, { context });
        }
      }),
      columnHelper2.column({
        id: "sku",
        name: t("fields.sku"),
        header: t("fields.sku"),
        field: (context) => `variants.${context.row.original.originalIndex}.sku`,
        type: "text",
        cell: (context) => {
          return /* @__PURE__ */ jsx11(DataGrid.TextCell, { context });
        }
      }),
      columnHelper2.column({
        id: "manage_inventory",
        name: t("fields.managedInventory"),
        header: t("fields.managedInventory"),
        field: (context) => `variants.${context.row.original.originalIndex}.manage_inventory`,
        type: "boolean",
        cell: (context) => {
          return /* @__PURE__ */ jsx11(DataGrid.BooleanCell, { context });
        }
      }),
      columnHelper2.column({
        id: "allow_backorder",
        name: t("fields.allowBackorder"),
        header: t("fields.allowBackorder"),
        field: (context) => `variants.${context.row.original.originalIndex}.allow_backorder`,
        type: "boolean",
        cell: (context) => {
          return /* @__PURE__ */ jsx11(DataGrid.BooleanCell, { context });
        }
      }),
      columnHelper2.column({
        id: "inventory_kit",
        name: t("fields.inventoryKit"),
        header: t("fields.inventoryKit"),
        field: (context) => `variants.${context.row.original.originalIndex}.inventory_kit`,
        type: "boolean",
        cell: (context) => {
          return /* @__PURE__ */ jsx11(
            DataGrid.BooleanCell,
            {
              context,
              disabled: !context.row.original.manage_inventory
            }
          );
        }
      }),
      ...createDataGridPriceColumns({
        currencies,
        regions,
        pricePreferences,
        getFieldName: (context, value) => {
          if (context.column.id?.startsWith("currency_prices")) {
            return `variants.${context.row.original.originalIndex}.prices.${value}`;
          }
          return `variants.${context.row.original.originalIndex}.prices.${value}`;
        },
        t
      })
    ],
    [currencies, regions, options, pricePreferences, t]
  );
};

// src/routes/products/product-create/components/product-create-form/product-create-form.tsx
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var SAVE_DRAFT_BUTTON = "save-draft-button";
var ProductCreateForm = ({
  defaultChannel,
  regions,
  store,
  pricePreferences
}) => {
  const [tab, setTab] = useState5("details" /* DETAILS */);
  const [tabState, setTabState] = useState5({
    ["details" /* DETAILS */]: "in-progress",
    ["organize" /* ORGANIZE */]: "not-started",
    ["variants" /* VARIANTS */]: "not-started",
    ["inventory" /* INVENTORY */]: "not-started"
  });
  const { t } = useTranslation9();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      ...PRODUCT_CREATE_FORM_DEFAULTS,
      sales_channels: defaultChannel ? [{ id: defaultChannel.id, name: defaultChannel.name }] : []
    },
    resolver: zodResolver(ProductCreateSchema)
  });
  const { mutateAsync, isPending } = useCreateProduct();
  const regionsCurrencyMap = useMemo4(() => {
    if (!regions?.length) {
      return {};
    }
    return regions.reduce((acc, reg) => {
      acc[reg.id] = reg.currency_code;
      return acc;
    }, {});
  }, [regions]);
  const watchedVariants = useWatch4({
    control: form.control,
    name: "variants"
  });
  const showInventoryTab = useMemo4(
    () => watchedVariants.some((v) => v.manage_inventory && v.inventory_kit),
    [watchedVariants]
  );
  const handleSubmit = form.handleSubmit(async (values, e) => {
    let isDraftSubmission = false;
    if (e?.nativeEvent instanceof SubmitEvent) {
      const submitter = e?.nativeEvent?.submitter;
      isDraftSubmission = submitter.dataset.name === SAVE_DRAFT_BUTTON;
    }
    const media = values.media || [];
    const payload = { ...values, media: void 0 };
    let uploadedMedia = [];
    try {
      if (media.length) {
        const thumbnailReq = media.find((m) => m.isThumbnail);
        const otherMediaReq = media.filter((m) => !m.isThumbnail);
        const fileReqs = [];
        if (thumbnailReq) {
          fileReqs.push(
            sdk.admin.upload.create({ files: [thumbnailReq.file] }).then((r) => r.files.map((f) => ({ ...f, isThumbnail: true })))
          );
        }
        if (otherMediaReq?.length) {
          fileReqs.push(
            sdk.admin.upload.create({
              files: otherMediaReq.map((m) => m.file)
            }).then((r) => r.files.map((f) => ({ ...f, isThumbnail: false })))
          );
        }
        uploadedMedia = (await Promise.all(fileReqs)).flat();
      }
      const { product } = await mutateAsync(
        normalizeProductFormValues({
          ...payload,
          media: uploadedMedia,
          status: isDraftSubmission ? "draft" : "published",
          regionsCurrencyMap
        })
      );
      toast.success(
        t("products.create.successToast", {
          title: product.title
        })
      );
      handleSuccess(`../${product.id}`);
    } catch (error) {
      if (isFetchError(error) && error.status === 400) {
        toast.error(error.message);
      } else {
        toast.error(t("general.error"), {
          description: error.message
        });
      }
    }
  });
  const onNext = async (currentTab) => {
    const valid = await form.trigger();
    if (!valid) {
      return;
    }
    if (currentTab === "details" /* DETAILS */) {
      setTab("organize" /* ORGANIZE */);
    }
    if (currentTab === "organize" /* ORGANIZE */) {
      setTab("variants" /* VARIANTS */);
    }
    if (currentTab === "variants" /* VARIANTS */) {
      setTab("inventory" /* INVENTORY */);
    }
  };
  useEffect3(() => {
    const currentState = { ...tabState };
    if (tab === "details" /* DETAILS */) {
      currentState["details" /* DETAILS */] = "in-progress";
    }
    if (tab === "organize" /* ORGANIZE */) {
      currentState["details" /* DETAILS */] = "completed";
      currentState["organize" /* ORGANIZE */] = "in-progress";
    }
    if (tab === "variants" /* VARIANTS */) {
      currentState["details" /* DETAILS */] = "completed";
      currentState["organize" /* ORGANIZE */] = "completed";
      currentState["variants" /* VARIANTS */] = "in-progress";
    }
    if (tab === "inventory" /* INVENTORY */) {
      currentState["details" /* DETAILS */] = "completed";
      currentState["organize" /* ORGANIZE */] = "completed";
      currentState["variants" /* VARIANTS */] = "completed";
      currentState["inventory" /* INVENTORY */] = "in-progress";
    }
    setTabState({ ...currentState });
  }, [tab]);
  return /* @__PURE__ */ jsx12(RouteFocusModal, { children: /* @__PURE__ */ jsx12(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs10(
    "form",
    {
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          if (tab !== "variants" /* VARIANTS */) {
            e.preventDefault();
            e.stopPropagation();
            onNext(tab);
          }
        }
      },
      onSubmit: handleSubmit,
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ jsxs10(
          ProgressTabs,
          {
            value: tab,
            onValueChange: async (tab2) => {
              const valid = await form.trigger();
              if (!valid) {
                return;
              }
              setTab(tab2);
            },
            className: "flex h-full flex-col overflow-hidden",
            children: [
              /* @__PURE__ */ jsx12(RouteFocusModal.Header, { children: /* @__PURE__ */ jsx12("div", { className: "-my-2 w-full border-l", children: /* @__PURE__ */ jsxs10(ProgressTabs.List, { className: "justify-start-start flex w-full items-center", children: [
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Trigger,
                  {
                    status: tabState["details" /* DETAILS */],
                    value: "details" /* DETAILS */,
                    className: "max-w-[200px] truncate",
                    children: t("products.create.tabs.details")
                  }
                ),
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Trigger,
                  {
                    status: tabState["organize" /* ORGANIZE */],
                    value: "organize" /* ORGANIZE */,
                    className: "max-w-[200px] truncate",
                    children: t("products.create.tabs.organize")
                  }
                ),
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Trigger,
                  {
                    status: tabState["variants" /* VARIANTS */],
                    value: "variants" /* VARIANTS */,
                    className: "max-w-[200px] truncate",
                    children: t("products.create.tabs.variants")
                  }
                ),
                showInventoryTab && /* @__PURE__ */ jsx12(
                  ProgressTabs.Trigger,
                  {
                    status: tabState["inventory" /* INVENTORY */],
                    value: "inventory" /* INVENTORY */,
                    className: "max-w-[200px] truncate",
                    children: t("products.create.tabs.inventory")
                  }
                )
              ] }) }) }),
              /* @__PURE__ */ jsxs10(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: [
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Content,
                  {
                    className: "size-full overflow-y-auto",
                    value: "details" /* DETAILS */,
                    children: /* @__PURE__ */ jsx12(ProductCreateDetailsForm, { form })
                  }
                ),
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Content,
                  {
                    className: "size-full overflow-y-auto",
                    value: "organize" /* ORGANIZE */,
                    children: /* @__PURE__ */ jsx12(ProductCreateOrganizeForm, { form })
                  }
                ),
                /* @__PURE__ */ jsx12(
                  ProgressTabs.Content,
                  {
                    className: "size-full overflow-y-auto",
                    value: "variants" /* VARIANTS */,
                    children: /* @__PURE__ */ jsx12(
                      ProductCreateVariantsForm,
                      {
                        form,
                        store,
                        regions,
                        pricePreferences
                      }
                    )
                  }
                ),
                showInventoryTab && /* @__PURE__ */ jsx12(
                  ProgressTabs.Content,
                  {
                    className: "size-full overflow-y-auto",
                    value: "inventory" /* INVENTORY */,
                    children: /* @__PURE__ */ jsx12(ProductCreateInventoryKitForm, { form })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx12(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx12(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx12(Button5, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx12(
            Button5,
            {
              "data-name": SAVE_DRAFT_BUTTON,
              size: "small",
              type: "submit",
              isLoading: isPending,
              className: "whitespace-nowrap",
              children: t("actions.saveAsDraft")
            }
          ),
          /* @__PURE__ */ jsx12(
            PrimaryButton,
            {
              tab,
              next: onNext,
              isLoading: isPending,
              showInventoryTab
            }
          )
        ] }) })
      ]
    }
  ) }) });
};
var PrimaryButton = ({
  tab,
  next,
  isLoading,
  showInventoryTab
}) => {
  const { t } = useTranslation9();
  if (tab === "variants" /* VARIANTS */ && !showInventoryTab || tab === "inventory" /* INVENTORY */ && showInventoryTab) {
    return /* @__PURE__ */ jsx12(
      Button5,
      {
        "data-name": "publish-button",
        type: "submit",
        variant: "primary",
        size: "small",
        isLoading,
        children: t("actions.publish")
      },
      "submit-button"
    );
  }
  return /* @__PURE__ */ jsx12(
    Button5,
    {
      type: "button",
      variant: "primary",
      size: "small",
      onClick: () => next(tab),
      children: t("actions.continue")
    },
    "next-button"
  );
};

// src/routes/products/product-create/product-create.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var ProductCreate = () => {
  const {
    store,
    isPending: isStorePending,
    isError: isStoreError,
    error: storeError
  } = useStore({
    fields: "default_sales_channel"
  });
  const {
    sales_channel,
    isPending: isSalesChannelPending,
    isError: isSalesChannelError,
    error: salesChannelError
  } = useSalesChannel(store?.default_sales_channel_id, {
    enabled: !!store?.default_sales_channel_id
  });
  const {
    regions,
    isPending: isRegionsPending,
    isError: isRegionsError,
    error: regionsError
  } = useRegions({ limit: 9999 });
  const {
    price_preferences,
    isPending: isPricePreferencesPending,
    isError: isPricePreferencesError,
    error: pricePreferencesError
  } = usePricePreferences({
    limit: 9999
  });
  const ready = !!store && !isStorePending && !!regions && !isRegionsPending && !!sales_channel && !isSalesChannelPending && !!price_preferences && !isPricePreferencesPending;
  if (isStoreError) {
    throw storeError;
  }
  if (isRegionsError) {
    throw regionsError;
  }
  if (isSalesChannelError) {
    throw salesChannelError;
  }
  if (isPricePreferencesError) {
    throw pricePreferencesError;
  }
  return /* @__PURE__ */ jsx13(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx13(
    ProductCreateForm,
    {
      defaultChannel: sales_channel,
      store,
      pricePreferences: price_preferences,
      regions
    }
  ) });
};
export {
  ProductCreate as Component
};
