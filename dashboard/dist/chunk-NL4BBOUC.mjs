// src/components/utilities/i18n/i18n.tsx
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// src/i18n/translations/en.json
var en_default = {
  $schema: "./$schema.json",
  general: {
    ascending: "Ascending",
    descending: "Descending",
    add: "Add",
    start: "Start",
    end: "End",
    open: "Open",
    close: "Close",
    apply: "Apply",
    range: "Range",
    search: "Search",
    of: "of",
    results: "results",
    pages: "pages",
    next: "Next",
    prev: "Prev",
    is: "is",
    timeline: "Timeline",
    success: "Success",
    warning: "Warning",
    tip: "Tip",
    error: "Error",
    select: "Select",
    selected: "Selected",
    enabled: "Enabled",
    disabled: "Disabled",
    expired: "Expired",
    active: "Active",
    revoked: "Revoked",
    new: "New",
    modified: "Modified",
    removed: "Removed",
    admin: "Admin",
    store: "Store",
    details: "Details",
    items_one: "{{count}} item",
    items_other: "{{count}} items",
    countSelected: "{{count}} selected",
    countOfTotalSelected: "{{count}} of {{total}} selected",
    plusCount: "+ {{count}}",
    plusCountMore: "+ {{count}} more",
    areYouSure: "Are you sure?",
    noRecordsFound: "No records found",
    typeToConfirm: "Please type {val} to confirm:",
    noResultsTitle: "No results",
    noResultsMessage: "Try changing the filters or search query",
    noSearchResults: "No search results",
    noSearchResultsFor: "No search results for <0>'{{query}}'</0>",
    noRecordsTitle: "No records",
    noRecordsMessage: "There are no records to show",
    unsavedChangesTitle: "Are you sure you want to leave this form?",
    unsavedChangesDescription: "You have unsaved changes that will be lost if you exit this form.",
    includesTaxTooltip: "Prices in this column are tax inclusive.",
    excludesTaxTooltip: "Prices in this column are tax exclusive.",
    noMoreData: "No more data"
  },
  json: {
    header: "JSON",
    numberOfKeys_one: "{{count}} key",
    numberOfKeys_other: "{{count}} keys",
    drawer: {
      header_one: "JSON <0>\xB7 {{count}} key</0>",
      header_other: "JSON <0>\xB7 {{count}} keys</0>",
      description: "View the JSON data for this object."
    }
  },
  metadata: {
    header: "Metadata",
    numberOfKeys_one: "{{count}} key",
    numberOfKeys_other: "{{count}} keys",
    edit: {
      header: "Edit Metadata",
      description: "Edit the metadata for this object.",
      successToast: "Metadata was successfully updated.",
      actions: {
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row"
      },
      labels: {
        key: "Key",
        value: "Value"
      },
      complexRow: {
        label: "Some rows are disabled",
        description: "This object contains non-primitive metadata, such as arrays or objects, that can't be edited here. To edit the disabled rows, use the API directly.",
        tooltip: "This row is disabled because it contains non-primitive data."
      }
    }
  },
  validation: {
    mustBeInt: "The value must be a whole number.",
    mustBePositive: "The value must be a positive number."
  },
  actions: {
    save: "Save",
    saveAsDraft: "Save as draft",
    duplicate: "Duplicate",
    publish: "Publish",
    create: "Create",
    delete: "Delete",
    remove: "Remove",
    revoke: "Revoke",
    cancel: "Cancel",
    forceConfirm: "Force confirm",
    continueEdit: "Continue edit",
    enable: "Enable",
    disable: "Disable",
    undo: "Undo",
    complete: "Complete",
    viewDetails: "View details",
    back: "Back",
    close: "Close",
    showMore: "Show more",
    continue: "Continue",
    continueWithEmail: "Continue with Email",
    addReason: "Add Reason",
    addNote: "Add Note",
    reset: "Reset",
    confirm: "Confirm",
    edit: "Edit",
    addItems: "Add items",
    download: "Download",
    clearAll: "Clear all",
    apply: "Apply",
    add: "Add",
    select: "Select",
    browse: "Browse",
    logout: "Logout",
    hide: "Hide",
    export: "Export",
    import: "Import"
  },
  operators: {
    in: "In"
  },
  app: {
    search: {
      label: "Search",
      allAreas: "All areas",
      navigation: "Navigation",
      openResult: "Open result",
      placeholder: "Jump to or find anything..."
    },
    keyboardShortcuts: {
      pageShortcut: "Jump to",
      settingShortcut: "Settings",
      commandShortcut: "Commands",
      then: "then",
      navigation: {
        goToOrders: "Orders",
        goToProducts: "Products",
        goToCollections: "Collections",
        goToCategories: "Categories",
        goToCustomers: "Customers",
        goToCustomerGroups: "Customer Groups",
        goToInventory: "Inventory",
        goToReservations: "Reservations",
        goToPriceLists: "Price Lists",
        goToPromotions: "Promotions",
        goToCampaigns: "Campaigns"
      },
      settings: {
        goToSettings: "Settings",
        goToStore: "Store",
        goToUsers: "Users",
        goToRegions: "Regions",
        goToTaxRegions: "Tax Regions",
        goToSalesChannels: "Sales Channels",
        goToProductTypes: "Product Types",
        goToLocations: "Locations",
        goToPublishableApiKeys: "Publishable API Keys",
        goToSecretApiKeys: "Secret API Keys",
        goToWorkflows: "Workflows",
        goToProfile: "Profile",
        goToReturnReasons: "Return reasons"
      }
    },
    menus: {
      user: {
        documentation: "Documentation",
        changelog: "Changelog",
        shortcuts: "Shortcuts",
        profileSettings: "Profile settings",
        theme: {
          label: "Theme",
          dark: "Dark",
          light: "Light",
          system: "System"
        }
      },
      store: {
        label: "Store",
        storeSettings: "Store settings"
      },
      actions: {
        logout: "Log out"
      }
    },
    nav: {
      accessibility: {
        title: "Navigation",
        description: "Navigation menu for the dashboard."
      },
      common: {
        extensions: "Extensions"
      },
      main: {
        store: "Store",
        storeSettings: "Store settings"
      },
      settings: {
        header: "Settings",
        general: "General",
        developer: "Developer",
        myAccount: "My Account"
      }
    }
  },
  dataGrid: {
    columns: {
      view: "View",
      resetToDefault: "Reset to default",
      disabled: "Changing which columns are visible is disabled."
    },
    shortcuts: {
      label: "Shortcuts",
      commands: {
        undo: "Undo",
        redo: "Redo",
        copy: "Copy",
        paste: "Paste",
        edit: "Edit",
        delete: "Delete",
        clear: "Clear",
        moveUp: "Move up",
        moveDown: "Move down",
        moveLeft: "Move left",
        moveRight: "Move right",
        moveTop: "Move to top",
        moveBottom: "Move to bottom",
        selectDown: "Select down",
        selectUp: "Select up",
        selectColumnDown: "Select column down",
        selectColumnUp: "Select column up",
        focusToolbar: "Focus toolbar",
        focusCancel: "Focus cancel"
      }
    },
    errors: {
      fixError: "Fix error",
      count_one: "{{count}} error",
      count_other: "{{count}} errors"
    }
  },
  filters: {
    date: {
      today: "Today",
      lastSevenDays: "Last 7 days",
      lastThirtyDays: "Last 30 days",
      lastNinetyDays: "Last 90 days",
      lastTwelveMonths: "Last 12 months",
      custom: "Custom",
      from: "From",
      to: "To"
    },
    compare: {
      lessThan: "Less than",
      greaterThan: "Greater than",
      exact: "Exact",
      range: "Range",
      lessThanLabel: "less than {{value}}",
      greaterThanLabel: "greater than {{value}}",
      andLabel: "and"
    },
    addFilter: "Add filter"
  },
  errorBoundary: {
    badRequestTitle: "400 - Bad request",
    badRequestMessage: "The request could not be understood by the server due to malformed syntax.",
    notFoundTitle: "404 - There is no page at this address",
    notFoundMessage: "Check the URL and try again, or use the search bar to find what you are looking for.",
    internalServerErrorTitle: "500 - Internal server error",
    internalServerErrorMessage: "An unexpected error occurred on the server. Please try again later.",
    defaultTitle: "An error occurred",
    defaultMessage: "An unexpected error occurred while rendering this page.",
    noMatchMessage: "The page you are looking for does not exist.",
    backToDashboard: "Back to dashboard"
  },
  addresses: {
    shippingAddress: {
      header: "Shipping Address",
      editHeader: "Edit Shipping Address",
      editLabel: "Shipping address",
      label: "Shipping address"
    },
    billingAddress: {
      header: "Billing Address",
      editHeader: "Edit Billing Address",
      editLabel: "Billing address",
      label: "Billing address",
      sameAsShipping: "Same as shipping address"
    },
    contactHeading: "Contact",
    locationHeading: "Location"
  },
  email: {
    editHeader: "Edit Email",
    editLabel: "Email",
    label: "Email"
  },
  transferOwnership: {
    header: "Transfer Ownership",
    label: "Transfer ownership",
    details: {
      order: "Order details",
      draft: "Draft details"
    },
    currentOwner: {
      label: "Current owner",
      hint: "The current owner of the order."
    },
    newOwner: {
      label: "New owner",
      hint: "The new owner to transfer the order to."
    },
    validation: {
      mustBeDifferent: "The new owner must be different from the current owner.",
      required: "New owner is required."
    }
  },
  sales_channels: {
    availableIn: "Available in <0>{{x}}</0> of <1>{{y}}</1> sales channels"
  },
  products: {
    domain: "Products",
    list: {
      noRecordsMessage: "Create your first product to start selling."
    },
    create: {
      header: "General",
      tabs: {
        details: "Details",
        organize: "Organize",
        variants: "Variants",
        inventory: "Inventory kits"
      },
      errors: {
        variants: "Please select at least one variant.",
        options: "Please create at least one option.",
        uniqueSku: "SKU must be unique."
      },
      inventory: {
        heading: "Inventory kits",
        label: "Add inventory items to the variant's inventory kit.",
        itemPlaceholder: "Select inventory item",
        quantityPlaceholder: "How many of these are needed for the kit?"
      },
      variants: {
        header: "Variants",
        subHeadingTitle: "Yes, this is a product with variants",
        subHeadingDescription: "When unchecked, we will create a default variant for you",
        optionTitle: {
          placeholder: "Size"
        },
        optionValues: {
          placeholder: "Small, Medium, Large"
        },
        productVariants: {
          label: "Product variants",
          hint: "This ranking will affect the variants' order in your storefront.",
          alert: "Add options to create variants.",
          tip: "Variants left unchecked won't be created. You can always create and edit variants afterwards but this list fits the variations in your product options."
        },
        productOptions: {
          label: "Product options",
          hint: "Define the options for the product, e.g. color, size, etc."
        }
      },
      successToast: "Product {{title}} was successfully created."
    },
    export: {
      header: "Export Product List",
      description: "Export the product list to a CSV file.",
      success: {
        title: "We are processing your export",
        description: "Exporting data may take a few minutes. We will notify you when we are done."
      },
      filters: {
        title: "Filters",
        description: "Apply filters in the table overview to adjust this view"
      },
      columns: {
        title: "Columns",
        description: "Customize the exported data to meet specific needs"
      }
    },
    import: {
      header: "Import Product List",
      uploadLabel: "Import Products",
      uploadHint: "Drag and drop a CSV file or click to upload",
      description: "Import products by providing a CSV file in a pre-defined format",
      template: {
        title: "Unsure about how to arrange your list?",
        description: "Download the template below to ensure you are following the correct format."
      },
      upload: {
        title: "Upload a CSV file",
        description: "Through imports you can add or update products. To update existing products you must use the existing handle and ID, to update existing variants you must use the existing ID. You will be asked for confirmation before we import products.",
        preprocessing: "Preprocessing...",
        productsToCreate: "Products will be created",
        productsToUpdate: "Products will be updated"
      },
      success: {
        title: "We are processing your import",
        description: "Importing data may take a while. We will notify you when we are done."
      }
    },
    deleteWarning: "You are about to delete the product {{title}}. This action cannot be undone.",
    variants: "Variants",
    attributes: "Attributes",
    editProduct: "Edit Product",
    editAttributes: "Edit Attributes",
    editOptions: "Edit Options",
    editPrices: "Edit prices",
    media: {
      label: "Media",
      editHint: "Add media to the product to showcase it in your storefront.",
      makeThumbnail: "Make thumbnail",
      uploadImagesLabel: "Upload images",
      uploadImagesHint: "Drag and drop images here or click to upload.",
      invalidFileType: "'{{name}}' is not a supported file type. Supported file types are: {{types}}.",
      failedToUpload: "Failed to upload the added media. Please try again.",
      deleteWarning_one: "You are about to delete {{count}} image. This action cannot be undone.",
      deleteWarning_other: "You are about to delete {{count}} images. This action cannot be undone.",
      deleteWarningWithThumbnail_one: "You are about to delete {{count}} image including the thumbnail. This action cannot be undone.",
      deleteWarningWithThumbnail_other: "You are about to delete {{count}} images including the thumbnail. This action cannot be undone.",
      thumbnailTooltip: "Thumbnail",
      galleryLabel: "Gallery",
      downloadImageLabel: "Download current image",
      deleteImageLabel: "Delete current image",
      emptyState: {
        header: "No media yet",
        description: "Add media to the product to showcase it in your storefront.",
        action: "Add media"
      }
    },
    discountableHint: "When unchecked, discounts will not be applied to this product.",
    noSalesChannels: "Not available in any sales channels",
    variantCount_one: "{{count}} variant",
    variantCount_other: "{{count}} variants",
    deleteVariantWarning: "You are about to delete the variant {{title}}. This action cannot be undone.",
    productStatus: {
      draft: "Draft",
      published: "Published",
      proposed: "Proposed",
      rejected: "Rejected"
    },
    fields: {
      title: {
        label: "Title",
        hint: "Give your product a short and clear title.<0/>50-60 characters is the recommended length for search engines."
      },
      subtitle: {
        label: "Subtitle"
      },
      handle: {
        label: "Handle",
        tooltip: "The handle is used to reference the product in your storefront. If not specified, the handle will be generated from the product title."
      },
      description: {
        label: "Description",
        hint: "Give your product a short and clear description.<0/>120-160 characters is the recommended length for search engines."
      },
      discountable: {
        label: "Discountable",
        hint: "When unchecked, discounts will not be applied to this product"
      },
      type: {
        label: "Type"
      },
      collection: {
        label: "Collection"
      },
      categories: {
        label: "Categories"
      },
      tags: {
        label: "Tags"
      },
      sales_channels: {
        label: "Sales channels",
        hint: "This product will only be available in the default sales channel if left untouched."
      },
      countryOrigin: {
        label: "Country of origin"
      },
      material: {
        label: "Material"
      },
      width: {
        label: "Width"
      },
      length: {
        label: "Length"
      },
      height: {
        label: "Height"
      },
      weight: {
        label: "Weight"
      },
      options: {
        label: "Product options",
        hint: "Options are used to define the color, size, etc. of the product",
        add: "Add option",
        optionTitle: "Option title",
        optionTitlePlaceholder: "Color",
        variations: "Variations (comma-separated)",
        variantionsPlaceholder: "Red, Blue, Green"
      },
      variants: {
        label: "Product variants",
        hint: "Variants left unchecked won't be created, This ranking will affect how the variants are ranked in your frontend."
      },
      mid_code: {
        label: "Mid code"
      },
      hs_code: {
        label: "HS code"
      }
    },
    variant: {
      edit: {
        header: "Edit Variant",
        success: "Product variant edited sucessfully"
      },
      create: {
        header: "Variant details"
      },
      deleteWarning: "Are you sure you want to delete this variant?",
      pricesPagination: "1 - {{current}} of {{total}} prices",
      tableItemAvailable: "{{availableCount}} available",
      tableItem_one: "{{availableCount}} available at {{locationCount}} location",
      tableItem_other: "{{availableCount}} available at {{locationCount}} locations",
      inventory: {
        notManaged: "Not managed",
        manageItems: "Manage inventory items",
        notManagedDesc: "Inventory is not managed for this variant. Turn on \u2018Manage Inventory\u2019 to track the variant's inventory.",
        manageKit: "Manage inventory kit",
        navigateToItem: "Go to inventory item",
        actions: {
          inventoryItems: "Go to inventory item",
          inventoryKit: "Show inventory items"
        },
        inventoryKit: "Inventory Kit",
        inventoryKitHint: "Does this variant consist of several inventory items?",
        validation: {
          itemId: "Please select inventory item.",
          quantity: "Quantity is required. Please input a positive number."
        },
        header: "Stock & Inventory",
        editItemDetails: "Edit item details",
        manageInventoryLabel: "Manage inventory",
        manageInventoryHint: "When enabled, we'll change the inventory quantity for you when orders and returns are created.",
        allowBackordersLabel: "Allow backorders",
        allowBackordersHint: "When enabled, customers can purchase the variant even if there's no available quantity.",
        toast: {
          levelsBatch: "Inventory levels updated.",
          update: "Inventory item updated successfully.",
          updateLevel: "Inventory level updated successfully.",
          itemsManageSuccess: "Inventory items sucessfully updated."
        }
      }
    },
    options: {
      header: "Options",
      edit: {
        header: "Edit Option",
        successToast: "Option {{title}} was successfully updated."
      },
      create: {
        header: "Create Option",
        successToast: "Option {{title}} was successfully created."
      },
      deleteWarning: "You are about to delete the product option: {{title}}. This action cannot be undone."
    },
    organization: {
      header: "Organize",
      edit: {
        header: "Edit Organization",
        toasts: {
          success: "Successfully updated the organization of {{title}}."
        }
      }
    },
    toasts: {
      delete: {
        success: {
          header: "Product deleted",
          description: "{{title}} was successfully deleted."
        },
        error: {
          header: "Failed to delete product"
        }
      }
    }
  },
  collections: {
    domain: "Collections",
    subtitle: "Organize products into collections.",
    createCollection: "Create Collection",
    createCollectionHint: "Create a new collection to organize your products.",
    createSuccess: "Collection created successfully.",
    editCollection: "Edit Collection",
    handleTooltip: "The handle is used to reference the collection in your storefront. If not specified, the handle will be generated from the collection title.",
    deleteWarning: "You are about to delete the collection {{title}}. This action cannot be undone.",
    removeSingleProductWarning: "You are about to remove the product {{title}} from the collection. This action cannot be undone.",
    removeProductsWarning_one: "You are about to remove {{count}} product from the collection. This action cannot be undone.",
    removeProductsWarning_other: "You are about to remove {{count}} products from the collection. This action cannot be undone.",
    products: {
      list: {
        noRecordsMessage: "There are no products in the collection."
      },
      add: {
        successToast_one: "Product was successfully added to the collection.",
        successToast_other: "Products were successfully added to the collection."
      },
      remove: {
        successToast_one: "Product was successfully removed from the collection.",
        successToast_other: "Products were successfully removed from the collection."
      }
    }
  },
  categories: {
    domain: "Categories",
    subtitle: "Organize products into categories, and manage those categories' ranking and hierarchy.",
    create: {
      header: "Create Category",
      hint: "Create a new category to organize your products.",
      tabs: {
        details: "Details",
        organize: "Organize Ranking"
      },
      successToast: "Category {{name}} was successfully created."
    },
    edit: {
      header: "Edit Category",
      description: "Edit the category to update its details.",
      successToast: "Category was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the category {{name}}. This action cannot be undone.",
      successToast: "Category {{name}} was successfully deleted."
    },
    products: {
      add: {
        disabledTooltip: "The product is already in this category.",
        successToast_one: "Added {{count}} product to the category.",
        successToast_other: "Added {{count}} products to the category."
      },
      remove: {
        confirmation_one: "You are about to remove {{count}} product from the category. This action cannot be undone.",
        confirmation_other: "You are about to remove {{count}} products from the category. This action cannot be undone.",
        successToast_one: "Removed {{count}} product from the category.",
        successToast_other: "Removed {{count}} products from the category."
      },
      list: {
        noRecordsMessage: "There are no products in the category."
      }
    },
    organize: {
      header: "Organize",
      action: "Edit ranking"
    },
    fields: {
      visibility: {
        label: "Visibility",
        internal: "Internal",
        public: "Public"
      },
      status: {
        label: "Status",
        active: "Active",
        inactive: "Inactive"
      },
      path: {
        label: "Path",
        tooltip: "Show the full path of the category."
      },
      children: {
        label: "Children"
      },
      new: {
        label: "New"
      }
    }
  },
  inventory: {
    domain: "Inventory",
    subtitle: "Manage your inventory items",
    reserved: "Reserved",
    available: "Available",
    locationLevels: "Locations",
    associatedVariants: "Associated variants",
    manageLocations: "Manage locations",
    deleteWarning: "You are about to delete an inventory item. This action cannot be undone.",
    editItemDetails: "Edit item details",
    create: {
      title: "Create Inventory Item",
      details: "Details",
      availability: "Availability",
      locations: "Locations",
      attributes: "Attributes",
      requiresShipping: "Requires shipping",
      requiresShippingHint: "Does the inventory item require shipping?",
      successToast: "Inventory item was successfully created."
    },
    reservation: {
      header: "Reservation of {{itemName}}",
      editItemDetails: "Edit reservation",
      lineItemId: "Line item ID",
      orderID: "Order ID",
      description: "Description",
      location: "Location",
      inStockAtLocation: "In stock at this location",
      availableAtLocation: "Available at this location",
      reservedAtLocation: "Reserved at this location",
      reservedAmount: "Reserve amount",
      create: "Create reservation",
      itemToReserve: "Item to reserve",
      quantityPlaceholder: "How much do you want to reserve?",
      descriptionPlaceholder: "What type of reservation is this?",
      successToast: "Reservation was successfully created.",
      updateSuccessToast: "Reservation was successfully updated.",
      deleteSuccessToast: "Reservation was successfully deleted.",
      errors: {
        noAvaliableQuantity: "Stock location doesn't have available quantity.",
        quantityOutOfRange: "Minimum quantity is 1 and maximum quantity is {{max}}"
      }
    },
    toast: {
      updateLocations: "Locations updated successfully.",
      updateLevel: "Inventory level updated successfully.",
      updateItem: "Inventory item updated successfully."
    }
  },
  giftCards: {
    domain: "Gift Cards",
    editGiftCard: "Edit Gift Card",
    createGiftCard: "Create Gift Card",
    createGiftCardHint: "Manually create a gift card that can be used as a payment method in your store.",
    selectRegionFirst: "Select a region first",
    deleteGiftCardWarning: "You are about to delete the gift card {{code}}. This action cannot be undone.",
    balanceHigherThanValue: "The balance cannot be higher than the original amount.",
    balanceLowerThanZero: "The balance cannot be negative.",
    expiryDateHint: "Countries have different laws regarding gift card expiry dates. Make sure to check local regulations before setting an expiry date.",
    regionHint: "Changing the region of the gift card will also change its currency, potentially affecting its monetary value.",
    enabledHint: "Specify if the gift card is enabled or disabled.",
    balance: "Balance",
    currentBalance: "Current balance",
    initialBalance: "Initial balance",
    personalMessage: "Personal message",
    recipient: "Recipient"
  },
  customers: {
    domain: "Customers",
    list: {
      noRecordsMessage: "Your customers will show up here."
    },
    create: {
      header: "Create Customer",
      hint: "Create a new customer and manage their details.",
      successToast: "Customer {{email}} was successfully created."
    },
    groups: {
      label: "Customer groups",
      remove: 'Are you sure you want to remove the customer from "{{name}}" customer group?',
      removeMany: "Are you sure you want to customer from following customer groups: {{groups}}?",
      alreadyAddedTooltip: "The customer is already in this customer group.",
      list: {
        noRecordsMessage: "This customer doesn't belong to any group."
      },
      add: {
        success: "Customer added to: {{groups}}.",
        list: {
          noRecordsMessage: "Please create a customer group first."
        }
      }
    },
    edit: {
      header: "Edit Customer",
      emailDisabledTooltip: "The email address cannot be changed for registered customers.",
      successToast: "Customer {{email}} was successfully updated."
    },
    delete: {
      title: "Delete Customer",
      description: "You are about to delete the customer {{email}}. This action cannot be undone.",
      successToast: "Customer {{email}} was successfully deleted."
    },
    fields: {
      guest: "Guest",
      registered: "Registered",
      groups: "Groups"
    },
    registered: "Registered",
    guest: "Guest"
  },
  customerGroups: {
    domain: "Customer Groups",
    subtitle: "Organize customers into groups. Groups can have different promotions and prices.",
    create: {
      header: "Create Customer Group",
      hint: "Create a new customer group to segment your customers.",
      successToast: "Customer group {{name}} was successfully created."
    },
    edit: {
      header: "Edit Customer Group",
      successToast: "Customer group {{name}} was successfully updated."
    },
    delete: {
      title: "Delete Customer Group",
      description: "You are about to delete the customer group {{name}}. This action cannot be undone.",
      successToast: "Customer group {{name}} was successfully deleted."
    },
    customers: {
      alreadyAddedTooltip: "The customer has already been added to the group.",
      add: {
        successToast_one: "Customer was successfully added to the group.",
        successToast_other: "Customers were successfully added to the group.",
        list: {
          noRecordsMessage: "Create a customer first."
        }
      },
      remove: {
        title_one: "Remove customer",
        title_other: "Remove customers",
        description_one: "You are about to remove {{count}} customer from the customer group. This action cannot be undone.",
        description_other: "You are about to remove {{count}} customers from the customer group. This action cannot be undone."
      },
      list: {
        noRecordsMessage: "This group doesn't have customers."
      }
    }
  },
  orders: {
    domain: "Orders",
    claim: "Claim",
    exchange: "Exchange",
    return: "Return",
    cancelWarning: "You are about to cancel the order {{id}}. This action cannot be undone.",
    onDateFromSalesChannel: "{{date}} from {{salesChannel}}",
    list: {
      noRecordsMessage: "Your orders will show up here."
    },
    summary: {
      requestReturn: "Request return",
      allocateItems: "Allocate items",
      editOrder: "Edit order",
      editOrderContinue: "Continue order edit",
      inventoryKit: "Consists of {{count}}x inventory items"
    },
    payment: {
      title: "Payments",
      isReadyToBeCaptured: "Payment {{id}} is ready to be captured.",
      totalPaidByCustomer: "Total paid by customer",
      capture: "Capture payment",
      refund: "Refund",
      markAsPaid: "Mark as paid",
      statusLabel: "Payment status",
      statusTitle: "Payment Status",
      status: {
        notPaid: "Not paid",
        authorized: "Authorized",
        partiallyAuthorized: "Partially authorized",
        awaiting: "Awaiting",
        captured: "Captured",
        partiallyRefunded: "Partially refunded",
        partiallyCaptured: "Partially captured",
        refunded: "Refunded",
        canceled: "Canceled",
        requiresAction: "Requires action"
      },
      capturePayment: "Payment of {{amount}} will be captured.",
      capturePaymentSuccess: "Payment of {{amount}} successfully captured",
      markAsPaidPayment: "Payment of {{amount}} will be marked as paid.",
      markAsPaidPaymentSuccess: "Payment of {{amount}} successfully marked as paid",
      createRefund: "Create Refund",
      refundPaymentSuccess: "Refund of amount {{amount}} successful",
      createRefundWrongQuantity: "Quantity should be a number between 1 and {{number}}",
      refundAmount: "Refund {{ amount }}",
      paymentLink: "Copy payment link for {{ amount }}",
      selectPaymentToRefund: "Select payment to refund"
    },
    edits: {
      title: "Edit order",
      confirm: "Confirm Edit",
      confirmText: "You are about to confirm an Order Edit. This action cannot be undone.",
      cancel: "Cancel Edit",
      currentItems: "Current items",
      currentItemsDescription: "Adjust item quantity or remove.",
      addItemsDescription: "You can add new items to the order.",
      addItems: "Add items",
      amountPaid: "Amount paid",
      newTotal: "New total",
      differenceDue: "Difference due",
      create: "Edit Order",
      currentTotal: "Current total",
      noteHint: "Add an internal note for the edit",
      cancelSuccessToast: "Order edit canceled",
      createSuccessToast: "Order edit request created",
      activeChangeError: "There is already active order change on the order (return, claim, exchange etc.). Please finish or cancel the change before editing the order.",
      panel: {
        title: "Order edit requested",
        titlePending: "Order edit pending"
      },
      toast: {
        canceledSuccessfully: "Order edit cancelled",
        confirmedSuccessfully: "Order edit confirmed"
      },
      validation: {
        quantityLowerThanFulfillment: "Cannot set quantity to be less then or equal to fulfilled quantity"
      }
    },
    returns: {
      create: "Create Return",
      confirm: "Confirm Return",
      confirmText: "You are about to confirm a Return. This action cannot be undone.",
      inbound: "Inbound",
      outbound: "Outbound",
      sendNotification: "Send notification",
      sendNotificationHint: "Notify customer about return.",
      returnTotal: "Return total",
      inboundTotal: "Inbound total",
      refundAmount: "Refund amount",
      outstandingAmount: "Outstanding amount",
      reason: "Reason",
      reasonHint: "Choose why the customer want to return items.",
      note: "Note",
      noInventoryLevel: "No inventory level",
      noInventoryLevelDesc: "The selected location does not have an inventory level for the selected items. The return can be requested but can\u2019t be received until an inventory level is created for the selected location.",
      noteHint: "You can type freely if you want to specify something.",
      location: "Location",
      locationHint: "Choose which location you want to return the items to.",
      inboundShipping: "Return shipping",
      inboundShippingHint: "Choose which method you want to use.",
      returnableQuantityLabel: "Returnable quantity",
      refundableAmountLabel: "Refundable amount",
      returnRequestedInfo: "{{requestedItemsCount}}x items return requested",
      returnReceivedInfo: "{{requestedItemsCount}}x items return received",
      itemReceived: "Items received",
      returnRequested: "Return requested",
      damagedItemReceived: "Damaged items received",
      damagedItemsReturned: "{{quantity}}x damaged items returned",
      activeChangeError: "There is an active order change in progress on this order. Please finish or discard the change first.",
      cancel: {
        title: "Cancel Return",
        description: "Are you sure you want to cancel the return request?"
      },
      placeholders: {
        noReturnShippingOptions: {
          title: "No return shipping options found",
          hint: "No return shipping options were created for the location. You can create one at <LinkComponent>Location & Shipping</LinkComponent>."
        },
        outboundShippingOptions: {
          title: "No outbound shipping options found",
          hint: "No outbound shipping options were created for the location. You can create one at <LinkComponent>Location & Shipping</LinkComponent>."
        }
      },
      receive: {
        action: "Receive items",
        receiveItems: "{{ returnType }} {{ id }}",
        restockAll: "Restock all items",
        itemsLabel: "Items received",
        title: "Receive items for #{{returnId}}",
        sendNotificationHint: "Notify customer about received return.",
        inventoryWarning: "Please note that we will automatically adjust the inventory levels based on your input above.",
        writeOffInputLabel: "How many of the items are damaged?",
        toast: {
          success: "Return received successfully.",
          errorLargeValue: "Quantity is greater than requested item quantity.",
          errorNegativeValue: "Quantity cannot be a negative value.",
          errorLargeDamagedValue: "Damaged items quantity + non damaged received quantity exceeds total item quantity on the return. Please decrease quantity of non damaged items."
        }
      },
      toast: {
        canceledSuccessfully: "Return canceled successfully",
        confirmedSuccessfully: "Return confirmed successfully"
      },
      panel: {
        title: "Return initiated",
        description: "There is an open return request to be completed"
      }
    },
    claims: {
      create: "Create Claim",
      confirm: "Confirm Claim",
      confirmText: "You are about to confirm a Claim. This action cannot be undone.",
      manage: "Manage Claim",
      outbound: "Outbound",
      outboundItemAdded: "{{itemsCount}}x added through claim",
      outboundTotal: "Outbound total",
      outboundShipping: "Outbound shipping",
      outboundShippingHint: "Choose which method you want to use.",
      refundAmount: "Estimated difference",
      activeChangeError: "There is an active order change on this order. Please finish or discard the previous change.",
      actions: {
        cancelClaim: {
          successToast: "Claim was successfully canceled."
        }
      },
      cancel: {
        title: "Cancel Claim",
        description: "Are you sure you want to cancel the claim?"
      },
      tooltips: {
        onlyReturnShippingOptions: "This list will consist of only return shipping options."
      },
      toast: {
        canceledSuccessfully: "Claim canceled successfully",
        confirmedSuccessfully: "Claim confirmed successfully"
      },
      panel: {
        title: "Claim initiated",
        description: "There is an open claim request to be completed"
      }
    },
    exchanges: {
      create: "Create Exchange",
      manage: "Manage Exchange",
      confirm: "Confirm Exchange",
      confirmText: "You are about to confirm an Exchange. This action cannot be undone.",
      outbound: "Outbound",
      outboundItemAdded: "{{itemsCount}}x added through exchange",
      outboundTotal: "Outbound total",
      outboundShipping: "Outbound shipping",
      outboundShippingHint: "Choose which method you want to use.",
      refundAmount: "Estimated difference",
      activeChangeError: "There is an active order change on this order. Please finish or discard the previous change.",
      actions: {
        cancelExchange: {
          successToast: "Exchange was successfully canceled."
        }
      },
      cancel: {
        title: "Cancel Exchange",
        description: "Are you sure you want to cancel the exchange?"
      },
      tooltips: {
        onlyReturnShippingOptions: "This list will consist of only return shipping options."
      },
      toast: {
        canceledSuccessfully: "Exchange canceled successfully",
        confirmedSuccessfully: "Exchange confirmed successfully"
      },
      panel: {
        title: "Exchange initiated",
        description: "There is an open exchange request to be completed"
      }
    },
    reservations: {
      allocatedLabel: "Allocated",
      notAllocatedLabel: "Not allocated"
    },
    allocateItems: {
      action: "Allocate items",
      title: "Allocate order items",
      locationDescription: "Choose which location you want to allocate from.",
      itemsToAllocate: "Items to allocate",
      itemsToAllocateDesc: "Select the number of items you wish to allocate",
      search: "Search items",
      consistsOf: "Consists of {{num}}x inventory items",
      requires: "Requires {{num}} per variant",
      toast: {
        created: "Items successfully allocated"
      },
      error: {
        quantityNotAllocated: "There are unallocated items."
      }
    },
    shipment: {
      title: "Mark fulfillment shipped",
      trackingNumber: "Tracking number",
      addTracking: "Add tracking number",
      sendNotification: "Send notification",
      sendNotificationHint: "Notify the customer about this shipment.",
      toastCreated: "Shipment created successfully."
    },
    fulfillment: {
      cancelWarning: "You are about to cancel a fulfillment. This action cannot be undone.",
      markAsDeliveredWarning: "You are about to mark fulfillment as delivered. This action cannot be undone.",
      unfulfilledItems: "Unfulfilled Items",
      statusLabel: "Fulfillment status",
      statusTitle: "Fulfillment Status",
      fulfillItems: "Fulfill items",
      awaitingFulfillmentBadge: "Awaiting fulfillment",
      requiresShipping: "Requires shipping",
      number: "Fulfillment #{{number}}",
      itemsToFulfill: "Items to fulfill",
      create: "Create Fulfillment",
      available: "Available",
      inStock: "In stock",
      markAsShipped: "Mark as shipped",
      markAsDelivered: "Mark as delivered",
      itemsToFulfillDesc: "Choose items and quantities to fulfill",
      locationDescription: "Choose which location you want to fulfill items from.",
      sendNotificationHint: "Notify customers about the created fulfillment.",
      methodDescription: "Choose a different shipping method from the one customer selected",
      error: {
        wrongQuantity: "Only one item is available for fulfillment",
        wrongQuantity_other: "Quantity should be a number between 1 and {{number}}",
        noItems: "No items to fulfill."
      },
      status: {
        notFulfilled: "Not fulfilled",
        partiallyFulfilled: "Partially fulfilled",
        fulfilled: "Fulfilled",
        partiallyShipped: "Partially shipped",
        shipped: "Shipped",
        delivered: "Delivered",
        partiallyDelivered: "Partially delivered",
        partiallyReturned: "Partially returned",
        returned: "Returned",
        canceled: "Canceled",
        requiresAction: "Requires action"
      },
      toast: {
        created: "Fulfillment created successfully",
        canceled: "Fulfillment successfully canceled",
        fulfillmentShipped: "Cannot cancel an already shipped fulfillment",
        fulfillmentDelivered: "Fulfillment marked as delivered successfully"
      },
      trackingLabel: "Tracking",
      shippingFromLabel: "Shipping from",
      itemsLabel: "Items"
    },
    refund: {
      title: "Create Refund",
      sendNotificationHint: "Notify customers about the created refund.",
      systemPayment: "System payment",
      systemPaymentDesc: "One or more of your payments is a system payment. Be aware, that captures and refunds are not handled by Medusa for such payments.",
      error: {
        amountToLarge: "Cannot refund more than the original order amount.",
        amountNegative: "Refund amount must be a positive number.",
        reasonRequired: "Please select a refund reason."
      }
    },
    customer: {
      contactLabel: "Contact",
      editEmail: "Edit email",
      transferOwnership: "Transfer ownership",
      editBillingAddress: "Edit billing address",
      editShippingAddress: "Edit shipping address"
    },
    activity: {
      header: "Activity",
      showMoreActivities_one: "Show {{count}} more activity",
      showMoreActivities_other: "Show {{count}} more activities",
      comment: {
        label: "Comment",
        placeholder: "Leave a comment",
        addButtonText: "Add comment",
        deleteButtonText: "Delete comment"
      },
      events: {
        common: {
          toReturn: "To return",
          toSend: "To send"
        },
        placed: {
          title: "Order placed",
          fromSalesChannel: "from {{salesChannel}}"
        },
        canceled: {
          title: "Order canceled"
        },
        payment: {
          awaiting: "Awaiting payment",
          captured: "Payment captured",
          canceled: "Payment canceled",
          refunded: "Payment refunded"
        },
        fulfillment: {
          created: "Items fulfilled",
          canceled: "Fulfillment canceled",
          shipped: "Items shipped",
          delivered: "Items delivered",
          items_one: "{{count}} item",
          items_other: "{{count}} items"
        },
        return: {
          created: "Return #{{returnId}} requested",
          canceled: "Return #{{returnId}} canceled",
          received: "Return #{{returnId}} received",
          items_one: "{{count}} item returned",
          items_other: "{{count}} items returned"
        },
        note: {
          comment: "Comment",
          byLine: "by {{author}}"
        },
        claim: {
          created: "Claim #{{claimId}} requested",
          canceled: "Claim #{{claimId}} canceled",
          itemsInbound: "{{count}} item to return",
          itemsOutbound: "{{count}} item to send"
        },
        exchange: {
          created: "Exchange #{{exchangeId}} requested",
          canceled: "Exchange #{{exchangeId}} canceled",
          itemsInbound: "{{count}} item to return",
          itemsOutbound: "{{count}} item to send"
        },
        edit: {
          requested: "Order edit #{{editId}} requested",
          confirmed: "Order edit #{{editId}} confirmed"
        }
      }
    }
  },
  draftOrders: {
    domain: "Draft Orders",
    deleteWarning: "You are about to delete the draft order {{id}}. This action cannot be undone.",
    paymentLinkLabel: "Payment link",
    cartIdLabel: "Cart ID",
    markAsPaid: {
      label: "Mark as paid",
      warningTitle: "Mark as Paid",
      warningDescription: "You are about to mark the draft order as paid. This action cannot be undone, and collecting payment will not be possible later."
    },
    status: {
      open: "Open",
      completed: "Completed"
    },
    create: {
      createDraftOrder: "Create Draft Order",
      createDraftOrderHint: "Create a new draft order to manage the details of an order before it is placed.",
      chooseRegionHint: "Choose region",
      existingItemsLabel: "Existing items",
      existingItemsHint: "Add existing products to the draft order.",
      customItemsLabel: "Custom items",
      customItemsHint: "Add custom items to the draft order.",
      addExistingItemsAction: "Add existing items",
      addCustomItemAction: "Add custom item",
      noCustomItemsAddedLabel: "No custom items added yet",
      noExistingItemsAddedLabel: "No existing items added yet",
      chooseRegionTooltip: "Choose a region first",
      useExistingCustomerLabel: "Use existing customer",
      addShippingMethodsAction: "Add shipping methods",
      unitPriceOverrideLabel: "Unit price override",
      shippingOptionLabel: "Shipping option",
      shippingOptionHint: "Choose the shipping option for the draft order.",
      shippingPriceOverrideLabel: "Shipping price override",
      shippingPriceOverrideHint: "Override the shipping price for the draft order.",
      sendNotificationLabel: "Send notification",
      sendNotificationHint: "Send a notification to the customer when the draft order is created."
    },
    validation: {
      requiredEmailOrCustomer: "Email or customer is required.",
      requiredItems: "At least one item is required.",
      invalidEmail: "Email must be a valid email address."
    }
  },
  stockLocations: {
    domain: "Locations & Shipping",
    list: {
      description: "Manage your store's stock locations and shipping options."
    },
    create: {
      header: "Create Stock Location",
      hint: "A stock location is a physical site where products are stored and shipped from.",
      successToast: "Location {{name}} was successfully created."
    },
    edit: {
      header: "Edit Stock Location",
      viewInventory: "View inventory",
      successToast: "Location {{name}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the stock location {{name}}. This action cannot be undone."
    },
    fulfillmentProviders: {
      header: "Fulfillment Providers",
      shippingOptionsTooltip: "This dropdown will only consist of providers enabled for this location. Add them to the location if the dropdown is disabled.",
      label: "Connected fulfillment providers",
      connectedTo: "Connected to {{count}} of {{total}} fulfillment providers",
      noProviders: "This Stock Location is not connected to any fulfillment providers.",
      action: "Connect Providers",
      successToast: "Fulfillment providers for stock location were successfully updated."
    },
    fulfillmentSets: {
      pickup: {
        header: "Pickup"
      },
      shipping: {
        header: "Shipping"
      },
      disable: {
        confirmation: "Are you sure that you want to disable {{name}}? This will delete all associated service zones and shipping options, and cannot be undone.",
        pickup: "Pickup was successfully disabled.",
        shipping: "Shipping was successfully disabled."
      },
      enable: {
        pickup: "Pickup was successfully enabled.",
        shipping: "Shipping was successfully enabled."
      }
    },
    sidebar: {
      header: "Shipping Configuration",
      shippingProfiles: {
        label: "Shipping Profiles",
        description: "Group products by shipping requirements"
      },
      shippingOptionTypes: {
        label: "Shipping Option Types",
        description: "Group options based on characteristic"
      }
    },
    salesChannels: {
      header: "Sales Channels",
      label: "Connected sales channels",
      connectedTo: "Connected to {{count}} of {{total}} sales channels",
      noChannels: "The location is not connected to any sales channels.",
      action: "Connect sales channels",
      successToast: "Sales channels were successfully updated."
    },
    shippingOptions: {
      create: {
        shipping: {
          header: "Create Shipping Option for {{zone}}",
          hint: "Create a new shipping option to define how products are shipped from this location.",
          label: "Shipping options",
          successToast: "Shipping option {{name}} was successfully created."
        },
        returns: {
          header: "Create a Return Option for {{zone}}",
          hint: "Create a new return option to define how products are returned to this location.",
          label: "Return options",
          successToast: "Return option {{name}} was successfully created."
        },
        tabs: {
          details: "Details",
          prices: "Prices"
        },
        action: "Create option"
      },
      delete: {
        confirmation: "You are about to delete the shipping option {{name}}. This action cannot be undone.",
        successToast: "Shipping option {{name}} was successfully deleted."
      },
      edit: {
        header: "Edit Shipping Option",
        action: "Edit option",
        successToast: "Shipping option {{name}} was successfully updated."
      },
      pricing: {
        action: "Edit prices"
      },
      fields: {
        count: {
          shipping_one: "{{count}} shipping option",
          shipping_other: "{{count}} shipping options",
          returns_one: "{{count}} return option",
          returns_other: "{{count}} return options"
        },
        priceType: {
          label: "Price type",
          options: {
            fixed: {
              label: "Fixed",
              hint: "The shipping option's price is fixed and does not change based on the order's contents."
            },
            calculated: {
              label: "Calculated",
              hint: "The shipping option's price is calculated by the fulfillment provider during checkout."
            }
          }
        },
        enableInStore: {
          label: "Enable in store",
          hint: "Whether customers can use this option during checkout."
        },
        provider: "Fulfillment provider",
        profile: "Shipping profile"
      }
    },
    serviceZones: {
      create: {
        headerPickup: "Create Service Zone for Pickup from {{location}}",
        headerShipping: "Create Service Zone for Shipping from {{location}}",
        action: "Create service zone",
        successToast: "Service zone {{name}} was successfully created."
      },
      edit: {
        header: "Edit Service Zone",
        successToast: "Service zone {{name}} was successfully updated."
      },
      delete: {
        confirmation: "You are about to delete the service zone {{name}}. This action cannot be undone.",
        successToast: "Service zone {{name}} was successfully deleted."
      },
      manageAreas: {
        header: "Manage Areas for {{name}}",
        action: "Manage areas",
        label: "Areas",
        hint: "Select the geographical areas that the service zone covers.",
        successToast: "Areas for {{name}} were successfully updated."
      },
      fields: {
        noRecords: "There are no service zones to add shipping options to.",
        tip: "A service zone is a collection of geographical zones or areas. It's used to restrict available shipping options to a defined set of locations."
      }
    }
  },
  shippingProfile: {
    domain: "Shipping Profiles",
    subtitle: "Group products with similar shipping requirements into profiles.",
    create: {
      header: "Create Shipping Profile",
      hint: "Create a new shipping profile to group products with similar shipping requirements.",
      successToast: "Shipping profile {{name}} was successfully created."
    },
    delete: {
      title: "Delete Shipping Profile",
      description: "You are about to delete the shipping profile {{name}}. This action cannot be undone.",
      successToast: "Shipping profile {{name}} was successfully deleted."
    },
    tooltip: {
      type: "Enter shipping profile type, for example: Heavy, Oversized, Freight-only, etc."
    }
  },
  taxRegions: {
    domain: "Tax Regions",
    list: {
      hint: "Manage what you charge your customers when they shop from different countries and regions."
    },
    delete: {
      confirmation: "You are about to delete a tax region. This action cannot be undone.",
      successToast: "The tax region was successfully deleted."
    },
    create: {
      header: "Create Tax Region",
      hint: "Create a new tax region to define tax rates for a specific country.",
      errors: {
        rateIsRequired: "Tax rate is required when creating a default tax rate.",
        nameIsRequired: "Name is required when creating a default tax rate."
      },
      successToast: "The tax region was successfully created."
    },
    province: {
      header: "Provinces",
      create: {
        header: "Create Province Tax Region",
        hint: "Create a new tax region to define tax rates for a specific province."
      }
    },
    state: {
      header: "States",
      create: {
        header: "Create State Tax Region",
        hint: "Create a new tax region to define tax rates for a specific state."
      }
    },
    stateOrTerritory: {
      header: "States or Territories",
      create: {
        header: "Create State/Territory Tax Region",
        hint: "Create a new tax region to define tax rates for a specific state/territory."
      }
    },
    county: {
      header: "Counties",
      create: {
        header: "Create County Tax Region",
        hint: "Create a new tax region to define tax rates for a specific county."
      }
    },
    region: {
      header: "Regions",
      create: {
        header: "Create Region Tax Region",
        hint: "Create a new tax region to define tax rates for a specific region."
      }
    },
    department: {
      header: "Departments",
      create: {
        header: "Create Department Tax Region",
        hint: "Create a new tax region to define tax rates for a specific department."
      }
    },
    territory: {
      header: "Territories",
      create: {
        header: "Create Territory Tax Region",
        hint: "Create a new tax region to define tax rates for a specific territory."
      }
    },
    prefecture: {
      header: "Prefectures",
      create: {
        header: "Create Prefecture Tax Region",
        hint: "Create a new tax region to define tax rates for a specific prefecture."
      }
    },
    district: {
      header: "Districts",
      create: {
        header: "Create District Tax Region",
        hint: "Create a new tax region to define tax rates for a specific district."
      }
    },
    governorate: {
      header: "Governorates",
      create: {
        header: "Create Governorate Tax Region",
        hint: "Create a new tax region to define tax rates for a specific governorate."
      }
    },
    canton: {
      header: "Cantons",
      create: {
        header: "Create Canton Tax Region",
        hint: "Create a new tax region to define tax rates for a specific canton."
      }
    },
    emirate: {
      header: "Emirates",
      create: {
        header: "Create Emirate Tax Region",
        hint: "Create a new tax region to define tax rates for a specific emirate."
      }
    },
    sublevel: {
      header: "Sublevels",
      create: {
        header: "Create Sublevel Tax Region",
        hint: "Create a new tax region to define tax rates for a specific sublevel."
      }
    },
    taxOverrides: {
      header: "Overrides",
      create: {
        header: "Create Override",
        hint: "Create a tax rate that overrides the default tax rates for selected conditions."
      },
      edit: {
        header: "Edit Override",
        hint: "Edit the tax rate that overrides the default tax rates for selected conditions."
      }
    },
    taxRates: {
      create: {
        header: "Create Tax Rate",
        hint: "Create a new tax rate to define the tax rate for a region.",
        successToast: "Tax rate was successfully created."
      },
      edit: {
        header: "Edit Tax Rate",
        hint: "Edit the tax rate to define the tax rate for a region.",
        successToast: "Tax rate was successfully updated."
      },
      delete: {
        confirmation: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
        successToast: "Tax rate was successfully deleted."
      }
    },
    fields: {
      isCombinable: {
        label: "Combinable",
        hint: "Whether this tax rate can be combined with the default rate from the tax region.",
        true: "Combinable",
        false: "Not combinable"
      },
      defaultTaxRate: {
        label: "Default tax rate",
        tooltip: "The default tax rate for this region. An example is the standard VAT rate for a country or region.",
        action: "Create default tax rate"
      },
      taxRate: "Tax rate",
      taxCode: "Tax code",
      targets: {
        label: "Targets",
        hint: "Select the targets that this tax rate will apply to.",
        options: {
          product: "Products",
          productCollection: "Product collections",
          productTag: "Product tags",
          productType: "Product types",
          customerGroup: "Customer groups"
        },
        operators: {
          in: "in",
          on: "on",
          and: "and"
        },
        placeholders: {
          product: "Search for products",
          productCollection: "Search for product collections",
          productTag: "Search for product tags",
          productType: "Search for product types",
          customerGroup: "Search for customer groups"
        },
        tags: {
          product: "Product",
          productCollection: "Product collection",
          productTag: "Product tag",
          productType: "Product type",
          customerGroup: "Customer group"
        },
        modal: {
          header: "Add targets"
        },
        values_one: "{{count}} value",
        values_other: "{{count}} values",
        numberOfTargets_one: "{{count}} target",
        numberOfTargets_other: "{{count}} targets",
        additionalValues_one: "and {{count}} more value",
        additionalValues_other: "and {{count}} more values",
        action: "Add target"
      },
      sublevels: {
        labels: {
          province: "Province",
          state: "State",
          region: "Region",
          stateOrTerritory: "State/Territory",
          department: "Department",
          county: "County",
          territory: "Territory",
          prefecture: "Prefecture",
          district: "District",
          governorate: "Governorate",
          emirate: "Emirate",
          canton: "Canton",
          sublevel: "Sublevel code"
        },
        placeholders: {
          province: "Select province",
          state: "Select state",
          region: "Select region",
          stateOrTerritory: "Select state/territory",
          department: "Select department",
          county: "Select county",
          territory: "Select territory",
          prefecture: "Select prefecture",
          district: "Select district",
          governorate: "Select governorate",
          emirate: "Select emirate",
          canton: "Select canton"
        },
        tooltips: {
          sublevel: "Enter the ISO 3166-2 code for the sublevel tax region.",
          notPartOfCountry: "{{province}} does not appear to be part of {{country}}. Please double-check if this is correct."
        },
        alert: {
          header: "Sublevel regions are disabled for this tax region",
          description: "Sublevel regions are disabled for this region by default. You can enable them to create sublevel regions like provinces, states, or territories.",
          action: "Enable sublevel regions"
        }
      },
      noDefaultRate: {
        label: "No default rate",
        tooltip: "This tax region does not have a default tax rate. If there is a standard rate, such as a country's VAT, please add it to this region."
      }
    }
  },
  promotions: {
    domain: "Promotions",
    sections: {
      details: "Promotion Details"
    },
    tabs: {
      template: "Type",
      details: "Details",
      campaign: "Campaign"
    },
    fields: {
      type: "Type",
      value_type: "Value Type",
      value: "Value",
      campaign: "Campaign",
      allocation: "Allocation",
      addCondition: "Add condition",
      clearAll: "Clear all",
      amount: {
        tooltip: "Select the currency code to enable setting the amount"
      },
      conditions: {
        rules: {
          title: "Who can use this code?",
          description: "Which customer is allowed to use the promotion code? Promotion code can be used by all customers if left untouched."
        },
        "target-rules": {
          title: "What items will the promotion be applied to?",
          description: "The promotion will be applied to items that match the following conditions."
        },
        "buy-rules": {
          title: "What needs to be in the cart to unlock the promotion?",
          description: "If these conditions match, we enable the promotion on the target items."
        }
      }
    },
    tooltips: {
      campaignType: "The currency code must be selected in the promotion to set a spend budget."
    },
    errors: {
      requiredField: "Required field",
      promotionTabError: "Fix errors in Promotion Tab before proceeding"
    },
    toasts: {
      promotionCreateSuccess: "Promotion ({{code}}) was successfully created."
    },
    create: {},
    edit: {
      title: "Edit Promotion Details",
      rules: {
        title: "Edit usage conditions"
      },
      "target-rules": {
        title: "Edit item conditions"
      },
      "buy-rules": {
        title: "Edit buy rules"
      }
    },
    campaign: {
      header: "Campaign",
      edit: {
        header: "Edit Campaign",
        successToast: "Successfully updated the campaign of the promotion."
      },
      actions: {
        goToCampaign: "Go to campaign"
      }
    },
    campaign_currency: {
      tooltip: "This is the promotion's currency. Change it from the Details tab."
    },
    form: {
      required: "Required",
      and: "AND",
      selectAttribute: "Select Attribute",
      campaign: {
        existing: {
          title: "Existing Campaign",
          description: "Add promotion to an existing campaign.",
          placeholder: {
            title: "No existing campaigns",
            desc: "You can create one to track multiple promotions and set budget limits."
          }
        },
        new: {
          title: "New Campaign",
          description: "Create a new campaign for this promotion."
        },
        none: {
          title: "Without Campaign",
          description: "Proceed without associating promotion with campaign"
        }
      },
      status: {
        title: "Status"
      },
      method: {
        code: {
          title: "Promotion code",
          description: "Customers must enter this code at checkout"
        },
        automatic: {
          title: "Automatic",
          description: "Customers will see this promotion at checkout"
        }
      },
      max_quantity: {
        title: "Maximum Quantity",
        description: "Maximum quantity of items this promotion applies to."
      },
      type: {
        standard: {
          title: "Standard",
          description: "A standard promotion"
        },
        buyget: {
          title: "Buy Get",
          description: "Buy X get Y promotion"
        }
      },
      allocation: {
        each: {
          title: "Each",
          description: "Applies value on each item"
        },
        across: {
          title: "Across",
          description: "Applies value across items"
        }
      },
      code: {
        title: "Code",
        description: "The code your customers will enter during checkout."
      },
      value: {
        title: "Promotion Value"
      },
      value_type: {
        fixed: {
          title: "Promotion Value",
          description: "The amount to be discounted. eg. 100"
        },
        percentage: {
          title: "Promotion Value",
          description: "The percentage to discount off the amount. eg. 8%"
        }
      }
    },
    deleteWarning: "You are about to delete the promotion {{code}}. This action cannot be undone.",
    createPromotionTitle: "Create Promotion",
    type: "Promotion type",
    conditions: {
      add: "Add condition",
      list: {
        noRecordsMessage: "Add a condition to restrict what items the promotion applies to."
      }
    }
  },
  campaigns: {
    domain: "Campaigns",
    details: "Campaign details",
    status: {
      active: "Active",
      expired: "Expired",
      scheduled: "Scheduled"
    },
    delete: {
      title: "Are you sure?",
      description: "You are about to delete the campaign '{{name}}'. This action cannot be undone.",
      successToast: "Campaign '{{name}}' was successfully created."
    },
    edit: {
      header: "Edit Campaign",
      successToast: "Campaign '{{name}}' was successfully updated."
    },
    configuration: {
      header: "Configuration",
      edit: {
        header: "Edit Campaign Configuration",
        description: "Edit the configuration of the campaign.",
        successToast: "Campaign configuration was successfully updated."
      }
    },
    create: {
      hint: "Create a promotional campaign.",
      header: "Create Campaign",
      successToast: "Campaign '{{name}}' was successfully created."
    },
    fields: {
      name: "Name",
      identifier: "Identifier",
      start_date: "Start date",
      end_date: "End date",
      total_spend: "Budget spent",
      total_used: "Budget used",
      budget_limit: "Budget limit",
      campaign_id: {
        hint: "Only campaigns with the same currency code as the promotion are shown in this list."
      }
    },
    budget: {
      create: {
        hint: "Create a budget for the campaign.",
        header: "Campaign Budget"
      },
      details: "Campaign budget",
      fields: {
        type: "Type",
        currency: "Currency",
        limit: "Limit",
        used: "Used"
      },
      type: {
        spend: {
          title: "Spend",
          description: "Set a limit on the total discounted amount of all promotion usages."
        },
        usage: {
          title: "Usage",
          description: "Set a limit on how many times the promotion can be used."
        }
      },
      edit: {
        header: "Edit Campaign Budget"
      }
    },
    promotions: {
      remove: {
        title: "Remove promotion from campaign",
        description: "You are about to remove {{count}} promotion(s) from the campaign. This action cannot be undone."
      },
      alreadyAdded: "This promotion has already been added to the campaign.",
      alreadyAddedDiffCampaign: "This promotion has already been added to a different campaign ({{name}}).",
      currencyMismatch: "Currency of the promotion and campaign doesn't match",
      toast: {
        success: "Successfully added {{count}} promotion(s) to campaign"
      },
      add: {
        list: {
          noRecordsMessage: "Create a promotion first."
        }
      },
      list: {
        noRecordsMessage: "There are no promotions in the campaign."
      }
    },
    deleteCampaignWarning: "You are about to delete the campaign {{name}}. This action cannot be undone.",
    totalSpend: "<0>{{amount}}</0> <1>{{currency}}</1>"
  },
  priceLists: {
    domain: "Price Lists",
    subtitle: "Create sales or override prices for specific conditions.",
    delete: {
      confirmation: "You are about to delete the price list {{title}}. This action cannot be undone.",
      successToast: "Price list {{title}} was successfully deleted."
    },
    create: {
      header: "Create Price List",
      subheader: "Create a new price list to manage the prices of your products.",
      tabs: {
        details: "Details",
        products: "Products",
        prices: "Prices"
      },
      successToast: "Price list {{title}} was successfully created.",
      products: {
        list: {
          noRecordsMessage: "Create a product first."
        }
      }
    },
    edit: {
      header: "Edit Price List",
      successToast: "Price list {{title}} was successfully updated."
    },
    configuration: {
      header: "Configuration",
      edit: {
        header: "Edit Price List Configuration",
        description: "Edit the configuration of the price list.",
        successToast: "Price list configuration was successfully updated."
      }
    },
    products: {
      header: "Products",
      actions: {
        addProducts: "Add products",
        editPrices: "Edit prices"
      },
      delete: {
        confirmation_one: "You are about to delete the prices for {{count}} product in the price list. This action cannot be undone.",
        confirmation_other: "You are about to delete the prices for {{count}} products in the price list. This action cannot be undone.",
        successToast_one: "Successfully deleted prices for {{count}} product.",
        successToast_other: "Successfully deleted prices for {{count}} products."
      },
      add: {
        successToast: "Prices were successfully added to the price list."
      },
      edit: {
        successToast: "Prices were successfully updated."
      }
    },
    fields: {
      priceOverrides: {
        label: "Price overrides",
        header: "Price Overrides"
      },
      status: {
        label: "Status",
        options: {
          active: "Active",
          draft: "Draft",
          expired: "Expired",
          scheduled: "Scheduled"
        }
      },
      type: {
        label: "Type",
        hint: "Choose the type of price list you want to create.",
        options: {
          sale: {
            label: "Sale",
            description: "Sale prices are temporary price changes for products."
          },
          override: {
            label: "Override",
            description: "Overrides are usually used to create customer-specific prices."
          }
        }
      },
      startsAt: {
        label: "Price list has a start date?",
        hint: "Schedule the price list to activate in the future."
      },
      endsAt: {
        label: "Price list has an expiry date?",
        hint: "Schedule the price list to deactivate in the future."
      },
      customerAvailability: {
        header: "Choose customer groups",
        label: "Customer availability",
        hint: "Choose which customer groups the price list should be applied to.",
        placeholder: "Search for customer groups",
        attribute: "Customer groups"
      }
    }
  },
  profile: {
    domain: "Profile",
    manageYourProfileDetails: "Manage your profile details.",
    fields: {
      languageLabel: "Language",
      usageInsightsLabel: "Usage insights"
    },
    edit: {
      header: "Edit Profile",
      languageHint: "The language you want to use in the admin dashboard. This doesn't change the language of your store.",
      languagePlaceholder: "Select language",
      usageInsightsHint: "Share usage insights and help us improve Medusa. You can read more about what we collect and how we use it in our <0>documentation</0>."
    },
    toast: {
      edit: "Profiles changes saved"
    }
  },
  users: {
    domain: "Users",
    editUser: "Edit User",
    inviteUser: "Invite User",
    inviteUserHint: "Invite a new user to your store.",
    sendInvite: "Send invite",
    pendingInvites: "Pending Invites",
    deleteInviteWarning: "You are about to delete the invite for {{email}}. This action cannot be undone.",
    resendInvite: "Resend invite",
    copyInviteLink: "Copy invite link",
    expiredOnDate: "Expired on {{date}}",
    validFromUntil: "Valid from <0>{{from}}</0> - <1>{{until}}</1>",
    acceptedOnDate: "Accepted on {{date}}",
    inviteStatus: {
      accepted: "Accepted",
      pending: "Pending",
      expired: "Expired"
    },
    roles: {
      admin: "Admin",
      developer: "Developer",
      member: "Member"
    },
    deleteUserWarning: "You are about to delete the user {{name}}. This action cannot be undone.",
    invite: "Invite"
  },
  store: {
    domain: "Store",
    manageYourStoresDetails: "Manage your store's details",
    editStore: "Edit store",
    defaultCurrency: "Default currency",
    defaultRegion: "Default region",
    swapLinkTemplate: "Swap link template",
    paymentLinkTemplate: "Payment link template",
    inviteLinkTemplate: "Invite link template",
    currencies: "Currencies",
    addCurrencies: "Add currencies",
    enableTaxInclusivePricing: "Enable tax inclusive pricing",
    disableTaxInclusivePricing: "Disable tax inclusive pricing",
    removeCurrencyWarning_one: "You are about to remove {{count}} currency from your store. Ensure that you have removed all prices using the currency before proceeding.",
    removeCurrencyWarning_other: "You are about to remove {{count}} currencies from your store. Ensure that you have removed all prices using the currencies before proceeding.",
    currencyAlreadyAdded: "The currency has already been added to your store.",
    edit: {
      header: "Edit Store"
    },
    toast: {
      update: "Store successfully updated",
      currenciesUpdated: "Currencies updated successfully",
      currenciesRemoved: "Removed currencies from the store successfully",
      updatedTaxInclusivitySuccessfully: "Tax inclusive pricing updated successfully"
    }
  },
  regions: {
    domain: "Regions",
    subtitle: "A region is an area that you sell products in. It can cover multipe countries, and has different tax rates, providers, and currency.",
    createRegion: "Create Region",
    createRegionHint: "Manage tax rates and providers for a set of countries.",
    addCountries: "Add countries",
    editRegion: "Edit Region",
    countriesHint: "Add the countries included in this region.",
    deleteRegionWarning: "You are about to delete the region {{name}}. This action cannot be undone.",
    removeCountriesWarning_one: "You are about to remove {{count}} country from the region. This action cannot be undone.",
    removeCountriesWarning_other: "You are about to remove {{count}} countries from the region. This action cannot be undone.",
    removeCountryWarning: "You are about to remove the country {{name}} from the region. This action cannot be undone.",
    automaticTaxesHint: "When enabled, taxes will only be calculated at checkout based on the shipping address.",
    taxInclusiveHint: "When enabled, prices in the region will be tax inclusive.",
    providersHint: " Add which payment providers are available in this region.",
    shippingOptions: "Shipping Options",
    deleteShippingOptionWarning: "You are about to delete the shipping option {{name}}. This action cannot be undone.",
    return: "Return",
    outbound: "Outbound",
    priceType: "Price Type",
    flatRate: "Flat Rate",
    calculated: "Calculated",
    list: {
      noRecordsMessage: "Create a region for the areas that you sell in."
    },
    toast: {
      delete: "Region deleted successfully",
      edit: "Region edit saved",
      create: "Region created successfully",
      countries: "Region countries updated successfully"
    },
    shippingOption: {
      createShippingOption: "Create Shipping Option",
      createShippingOptionHint: "Create a new shipping option for the region.",
      editShippingOption: "Edit Shipping Option",
      fulfillmentMethod: "Fulfillment Method",
      type: {
        outbound: "Outbound",
        outboundHint: "Use this if you are creating a shipping option for sending products to the customer.",
        return: "Return",
        returnHint: "Use this if you are creating a shipping option for the customer to return products to you."
      },
      priceType: {
        label: "Price Type",
        flatRate: "Flat rate",
        calculated: "Calculated"
      },
      availability: {
        adminOnly: "Admin only",
        adminOnlyHint: "When enabled, the shipping option will only be available in the admin dashboard, and not in the storefront."
      },
      taxInclusiveHint: "When enabled, the shipping option's price will be tax inclusive.",
      requirements: {
        label: "Requirements",
        hint: "Specify the requirements for the shipping option."
      }
    }
  },
  taxes: {
    domain: "Tax Regions",
    domainDescription: "Manage your tax region",
    countries: {
      taxCountriesHint: "Tax settings apply to the listed countries."
    },
    settings: {
      editTaxSettings: "Edit Tax Settings",
      taxProviderLabel: "Tax provider",
      systemTaxProviderLabel: "System Tax Provider",
      calculateTaxesAutomaticallyLabel: "Calculate taxes automatically",
      calculateTaxesAutomaticallyHint: "When enabled, tax rates will be calculated automatically and applied to carts. When disabled, taxes must be manually computed at checkout. Manual taxes are recommended for usage with third-party tax providers.",
      applyTaxesOnGiftCardsLabel: "Apply taxes on gift cards",
      applyTaxesOnGiftCardsHint: "When enabled, taxes will be applied to gift cards at checkout. In some countries, tax regulations require the application of taxes to gift cards upon purchase.",
      defaultTaxRateLabel: "Default tax rate",
      defaultTaxCodeLabel: "Default tax code"
    },
    defaultRate: {
      sectionTitle: "Default Tax Rate"
    },
    taxRate: {
      sectionTitle: "Tax Rates",
      createTaxRate: "Create Tax Rate",
      createTaxRateHint: "Create a new tax rate for the region.",
      deleteRateDescription: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
      editTaxRate: "Edit Tax Rate",
      editRateAction: "Edit rate",
      editOverridesAction: "Edit overrides",
      editOverridesTitle: "Edit Tax Rate Overrides",
      editOverridesHint: "Specify the overrides for the tax rate.",
      deleteTaxRateWarning: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
      productOverridesLabel: "Product overrides",
      productOverridesHint: "Specify the product overrides for the tax rate.",
      addProductOverridesAction: "Add product overrides",
      productTypeOverridesLabel: "Product type overrides",
      productTypeOverridesHint: "Specify the product type overrides for the tax rate.",
      addProductTypeOverridesAction: "Add product type overrides",
      shippingOptionOverridesLabel: "Shipping option overrides",
      shippingOptionOverridesHint: "Specify the shipping option overrides for the tax rate.",
      addShippingOptionOverridesAction: "Add shipping option overrides",
      productOverridesHeader: "Products",
      productTypeOverridesHeader: "Product Types",
      shippingOptionOverridesHeader: "Shipping Options"
    }
  },
  locations: {
    domain: "Locations",
    editLocation: "Edit location",
    addSalesChannels: "Add sales channels",
    noLocationsFound: "No locations found",
    selectLocations: "Select locations that stock the item.",
    deleteLocationWarning: "You are about to delete the location {{name}}. This action cannot be undone.",
    removeSalesChannelsWarning_one: "You are about to remove {{count}} sales channel from the location.",
    removeSalesChannelsWarning_other: "You are about to remove {{count}} sales channels from the location.",
    toast: {
      create: "Location created sucessfully",
      update: "Location updated sucessfully",
      removeChannel: "Sales channel removed sucessfully"
    }
  },
  reservations: {
    domain: "Reservations",
    subtitle: "Manage the reserved quantity of inventory items.",
    deleteWarning: "You are about to delete a reservation. This action cannot be undone."
  },
  salesChannels: {
    domain: "Sales Channels",
    subtitle: "Manage the online and offline channels you sell products on.",
    createSalesChannel: "Create Sales Channel",
    createSalesChannelHint: "Create a new sales channel to sell your products on.",
    enabledHint: "Specify whether the sales channel is enabled.",
    removeProductsWarning_one: "You are about to remove {{count}} product from {{sales_channel}}.",
    removeProductsWarning_other: "You are about to remove {{count}} products from {{sales_channel}}.",
    addProducts: "Add Products",
    editSalesChannel: "Edit sales channel",
    productAlreadyAdded: "The product has already been added to the sales channel.",
    deleteSalesChannelWarning: "You are about to delete the sales channel {{name}}. This action cannot be undone.",
    toast: {
      create: "Sales channel created successfully",
      update: "Sales channel updated successfully",
      delete: "Sales channel deleted successfully"
    },
    products: {
      list: {
        noRecordsMessage: "There are no products in the sales channel."
      },
      add: {
        list: {
          noRecordsMessage: "Create a product first."
        }
      }
    }
  },
  apiKeyManagement: {
    domain: {
      publishable: "Publishable API Keys",
      secret: "Secret API Keys"
    },
    subtitle: {
      publishable: "Manage API keys used in the storefront to limit the scope of requests to specific sales channels.",
      secret: "Manage API keys used to authenticate admin users in admin applications."
    },
    status: {
      active: "Active",
      revoked: "Revoked"
    },
    type: {
      publishable: "Publishable",
      secret: "Secret"
    },
    create: {
      createPublishableHeader: "Create Publishable API Key",
      createPublishableHint: "Create a new publishable API key to limit the scope of requests to specific sales channels.",
      createSecretHeader: "Create Secret API Key",
      createSecretHint: "Create a new secret API key to access the Medusa API as an authenticated admin user.",
      secretKeyCreatedHeader: "Secret Key Created",
      secretKeyCreatedHint: "Your new secret key has been generated. Copy and securely store it now. This is the only time it will be displayed.",
      copySecretTokenSuccess: "Secret key was copied to clipboard.",
      copySecretTokenFailure: "Failed to copy secret key to clipboard.",
      successToast: "API key was successfully created."
    },
    edit: {
      header: "Edit API Key",
      successToast: "API key {{title}} was successfully updated."
    },
    salesChannels: {
      successToast_one: "{{count}} sales channel was successfully added to the API key.",
      successToast_other: "{{count}} sales channels were successfully added to the API key.",
      alreadyAddedTooltip: "The sales channel has already been added to the API key.",
      list: {
        noRecordsMessage: "There are no sales channels in the publishable API key's scope."
      }
    },
    delete: {
      warning: "You are about to delete the API key {{title}}. This action cannot be undone.",
      successToast: "API key {{title}} was successfully deleted."
    },
    revoke: {
      warning: "You are about to revoke the API key {{title}}. This action cannot be undone.",
      successToast: "API key {{title}} was successfully revoked."
    },
    addSalesChannels: {
      list: {
        noRecordsMessage: "Create a sales channel first."
      }
    },
    removeSalesChannel: {
      warning: "You are about to remove the sales channel {{name}} from the API key. This action cannot be undone.",
      warningBatch_one: "You are about to remove {{count}} sales channel from the API key. This action cannot be undone.",
      warningBatch_other: "You are about to remove {{count}} sales channels from the API key. This action cannot be undone.",
      successToast: "Sales channel was successfully removed from the API key.",
      successToastBatch_one: "{{count}} sales channel was successfully removed from the API key.",
      successToastBatch_other: "{{count}} sales channels were successfully removed from the API key."
    },
    actions: {
      revoke: "Revoke API key",
      copy: "Copy API key",
      copySuccessToast: "API key was copied to clipboard."
    },
    table: {
      lastUsedAtHeader: "Last Used At",
      createdAtHeader: "Revoked At"
    },
    fields: {
      lastUsedAtLabel: "Last used at",
      revokedByLabel: "Revoked by",
      revokedAtLabel: "Revoked at",
      createdByLabel: "Created by"
    }
  },
  returnReasons: {
    domain: "Return Reasons",
    subtitle: "Manage reasons for returned items.",
    calloutHint: "Manage the reasons to categorize returns.",
    editReason: "Edit Return Reason",
    create: {
      header: "Add Return Reason",
      subtitle: "Specify the most common reasons for returns.",
      hint: "Create a new return reason to categorize returns.",
      successToast: "Return reason {{label}} was successfully created."
    },
    edit: {
      header: "Edit Return Reason",
      subtitle: "Edit the value of the return reason.",
      successToast: "Return reason {{label}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the return reason {{label}}. This action cannot be undone.",
      successToast: "Return reason {{label}} was successfully deleted."
    },
    fields: {
      value: {
        label: "Value",
        placeholder: "wrong_size",
        tooltip: "The value should be a unique identifier for the return reason."
      },
      label: { label: "Label", placeholder: "Wrong size" },
      description: {
        label: "Descriptions",
        placeholder: "Customer received the wrong size"
      }
    }
  },
  login: {
    forgotPassword: "Forgot password? - <0>Reset</0>",
    title: "Welcome to Medusa",
    hint: "Sign in to access the account area"
  },
  invite: {
    title: "Welcome to Medusa",
    hint: "Create you account below",
    backToLogin: "Back to login",
    createAccount: "Create account",
    alreadyHaveAccount: "Already have an account? - <0>Log in</0>",
    emailTooltip: "Your email cannot be changed. If you would like to use another email, a new invite must be sent.",
    invalidInvite: "The invite is invalid or has expired.",
    successTitle: "Your account has is registered",
    successHint: "Get started with Medusa Admin right away.",
    successAction: "Start Medusa Admin",
    invalidTokenTitle: "Your invite token is invalid",
    invalidTokenHint: "Try requesting a new invite link.",
    passwordMismatch: "Passwords do not match",
    toast: {
      accepted: "Invite successfully accepted"
    }
  },
  resetPassword: {
    title: "Reset password",
    hint: "Enter your email below, and we will send you instructions on how to reset your password.",
    email: "Email",
    sendResetInstructions: "Send reset instructions",
    backToLogin: "You can always go back - <0>Log in</0>",
    newPasswordHint: "Choose a new password below.",
    invalidTokenTitle: "Your reset token is invalid",
    invalidTokenHint: "Try requesting a new reset link.",
    expiredTokenTitle: "Your reset token has expired",
    goToResetPassword: "Go to Reset Password",
    resetPassword: "Reset password",
    tokenExpiresIn: "Token expires in <0>{{time}}</0> minutes",
    successfulRequest: "We have sent you an email with instructions on how to reset your password. If you don't receive an email, please check your spam folder or try again."
  },
  workflowExecutions: {
    domain: "Workflows",
    subtitle: "View and keep track of workflow executions in your Medusa application.",
    transactionIdLabel: "Transaction ID",
    workflowIdLabel: "Workflow ID",
    progressLabel: "Progress",
    stepsCompletedLabel_one: "{{completed}} of {{count}} step",
    stepsCompletedLabel_other: "{{completed}} of {{count}} steps",
    list: {
      noRecordsMessage: "No workflows have been executed, yet."
    },
    history: {
      sectionTitle: "History",
      runningState: "Running...",
      awaitingState: "Awaiting",
      failedState: "Failed",
      skippedState: "Skipped",
      skippedFailureState: "Skipped (Failure)",
      definitionLabel: "Definition",
      outputLabel: "Output",
      compensateInputLabel: "Compensate input",
      revertedLabel: "Reverted",
      errorLabel: "Error"
    },
    state: {
      done: "Done",
      failed: "Failed",
      reverted: "Reverted",
      invoking: "Invoking",
      compensating: "Compensating",
      notStarted: "Not started"
    },
    transaction: {
      state: {
        waitingToCompensate: "Waiting to compensate"
      }
    },
    step: {
      state: {
        skipped: "Skipped",
        skippedFailure: "Skipped (Failure)",
        dormant: "Dormant",
        timeout: "Timeout"
      }
    }
  },
  productTypes: {
    domain: "Product Types",
    subtitle: "Organize your products into types.",
    create: {
      header: "Create Product Type",
      hint: "Create a new product type to categorize your products.",
      successToast: "Product type {{value}} was successfully created."
    },
    edit: {
      header: "Edit Product Type",
      successToast: "Product type {{value}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the product type {{value}}. This action cannot be undone.",
      successToast: "Product type {{value}} was successfully deleted."
    },
    fields: {
      value: "Value"
    }
  },
  productTags: {
    domain: "Product Tags",
    create: {
      header: "Create Product Tag",
      subtitle: "Create a new product tag to categorize your products.",
      successToast: "Product tag {{value}} was successfully created."
    },
    edit: {
      header: "Edit Product Tag",
      subtitle: "Edit the value of the product tag.",
      successToast: "Product tag {{value}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the product tag {{value}}. This action cannot be undone.",
      successToast: "Product tag {{value}} was successfully deleted."
    },
    fields: {
      value: "Value"
    }
  },
  notifications: {
    domain: "Notifications",
    emptyState: {
      title: "No notifications",
      description: "You don't have any notifications at the moment, but once you do they will live here."
    },
    accessibility: {
      description: "notifications about Medusa activities will be listed here."
    }
  },
  errors: {
    serverError: "Server error - Try again later.",
    invalidCredentials: "Wrong email or password"
  },
  statuses: {
    scheduled: "Scheduled",
    expired: "Expired",
    active: "Active",
    enabled: "Enabled",
    disabled: "Disabled"
  },
  labels: {
    productVariant: "Product Variant",
    prices: "Prices",
    available: "Available",
    inStock: "In stock",
    added: "Added",
    removed: "Removed"
  },
  fields: {
    amount: "Amount",
    refundAmount: "Refund amount",
    name: "Name",
    default: "Default",
    lastName: "Last Name",
    firstName: "First Name",
    title: "Title",
    customTitle: "Custom title",
    manageInventory: "Manage inventory",
    inventoryKit: "Has inventory kit",
    inventoryItems: "Inventory items",
    inventoryItem: "Inventory item",
    requiredQuantity: "Required quantity",
    description: "Description",
    email: "Email",
    password: "Password",
    repeatPassword: "Repeat Password",
    confirmPassword: "Confirm Password",
    newPassword: "New Password",
    repeatNewPassword: "Repeat New Password",
    categories: "Categories",
    shippingMethod: "Shipping method",
    configurations: "Configurations",
    conditions: "Conditions",
    category: "Category",
    collection: "Collection",
    discountable: "Discountable",
    handle: "Handle",
    subtitle: "Subtitle",
    item: "Item",
    qty: "qty.",
    limit: "Limit",
    tags: "Tags",
    type: "Type",
    reason: "Reason",
    none: "none",
    all: "all",
    search: "Search",
    percentage: "Percentage",
    sales_channels: "Sales Channels",
    customer_groups: "Customer Groups",
    product_tags: "Product Tags",
    product_types: "Product Types",
    product_collections: "Product Collections",
    status: "Status",
    code: "Code",
    value: "Value",
    disabled: "Disabled",
    dynamic: "Dynamic",
    normal: "Normal",
    years: "Years",
    months: "Months",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    totalRedemptions: "Total Redemptions",
    countries: "Countries",
    paymentProviders: "Payment Providers",
    refundReason: "Refund Reason",
    fulfillmentProviders: "Fulfillment Providers",
    fulfillmentProvider: "Fulfillment Provider",
    providers: "Providers",
    availability: "Availability",
    inventory: "Inventory",
    optional: "Optional",
    note: "Note",
    automaticTaxes: "Automatic Taxes",
    taxInclusivePricing: "Tax inclusive pricing",
    currency: "Currency",
    address: "Address",
    address2: "Apartment, suite, etc.",
    city: "City",
    postalCode: "Postal Code",
    country: "Country",
    state: "State",
    province: "Province",
    company: "Company",
    phone: "Phone",
    metadata: "Metadata",
    selectCountry: "Select country",
    products: "Products",
    variants: "Variants",
    orders: "Orders",
    account: "Account",
    total: "Order Total",
    paidTotal: "Total captured",
    totalExclTax: "Total excl. tax",
    subtotal: "Subtotal",
    shipping: "Shipping",
    outboundShipping: "Outbound Shipping",
    returnShipping: "Return Shipping",
    tax: "Tax",
    created: "Created",
    key: "Key",
    customer: "Customer",
    date: "Date",
    order: "Order",
    fulfillment: "Fulfillment",
    provider: "Provider",
    payment: "Payment",
    items: "Items",
    salesChannel: "Sales Channel",
    region: "Region",
    discount: "Discount",
    role: "Role",
    sent: "Sent",
    salesChannels: "Sales Channels",
    product: "Product",
    createdAt: "Created",
    updatedAt: "Updated",
    revokedAt: "Revoked at",
    true: "True",
    false: "False",
    giftCard: "Gift Card",
    tag: "Tag",
    dateIssued: "Date issued",
    issuedDate: "Issued date",
    expiryDate: "Expiry date",
    price: "Price",
    priceTemplate: "Price {{regionOrCurrency}}",
    height: "Height",
    width: "Width",
    length: "Length",
    weight: "Weight",
    midCode: "MID code",
    hsCode: "HS code",
    ean: "EAN",
    upc: "UPC",
    inventoryQuantity: "Inventory quantity",
    barcode: "Barcode",
    countryOfOrigin: "Country of origin",
    material: "Material",
    thumbnail: "Thumbnail",
    sku: "SKU",
    managedInventory: "Managed inventory",
    allowBackorder: "Allow backorder",
    inStock: "In stock",
    location: "Location",
    quantity: "Quantity",
    variant: "Variant",
    id: "ID",
    parent: "Parent",
    minSubtotal: "Min. Subtotal",
    maxSubtotal: "Max. Subtotal",
    shippingProfile: "Shipping Profile",
    summary: "Summary",
    details: "Details",
    label: "Label",
    rate: "Rate",
    requiresShipping: "Requires shipping",
    unitPrice: "Unit price",
    startDate: "Start date",
    endDate: "End date",
    draft: "Draft",
    values: "Values"
  },
  dateTime: {
    years_one: "Year",
    years_other: "Years",
    months_one: "Month",
    months_other: "Months",
    weeks_one: "Week",
    weeks_other: "Weeks",
    days_one: "Day",
    days_other: "Days",
    hours_one: "Hour",
    hours_other: "Hours",
    minutes_one: "Minute",
    minutes_other: "Minutes",
    seconds_one: "Second",
    seconds_other: "Seconds"
  }
};

// src/i18n/translations/index.ts
var translations_default = {
  en: {
    translation: en_default
  }
};

// src/i18n/config.ts
var defaultI18nOptions = {
  debug: process.env.NODE_ENV === "development",
  detection: {
    caches: ["cookie", "localStorage", "header"],
    lookupCookie: "lng",
    lookupLocalStorage: "lng",
    order: ["cookie", "localStorage", "header"]
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: translations_default,
  supportedLngs: Object.keys(translations_default)
};

// src/components/utilities/i18n/i18n.tsx
var I18n = () => {
  if (i18n.isInitialized) {
    return null;
  }
  i18n.use(
    new LanguageDetector(null, {
      lookupCookie: "lng",
      lookupLocalStorage: "lng"
    })
  ).use(initReactI18next).init(defaultI18nOptions);
  return null;
};

export {
  i18n,
  I18n
};
