import * as DrawerPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
declare const Drawer: {
    (props: React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Root>): React.JSX.Element;
    displayName: string;
} & {
    Body: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Close: React.ForwardRefExoticComponent<Omit<DrawerPrimitives.DialogCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<DrawerPrimitives.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        overlayProps?: Omit<Omit<DrawerPrimitives.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> | undefined;
        portalProps?: DrawerPrimitives.DialogPortalProps | undefined;
    } & React.RefAttributes<HTMLDivElement>>;
    Description: React.ForwardRefExoticComponent<Omit<DrawerPrimitives.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Footer: {
        ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
        displayName: string;
    };
    Header: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<DrawerPrimitives.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<DrawerPrimitives.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
};
export { Drawer };
//# sourceMappingURL=drawer.d.ts.map