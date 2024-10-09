import * as FocusModalPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
/**
 * @prop defaultOpen - Whether the modal is opened by default.
 * @prop open - Whether the modal is opened.
 * @prop onOpenChange - A function to handle when the modal is opened or closed.
 */
interface FocusModalRootProps extends React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Root> {
}
declare const FocusModal: {
    (props: FocusModalRootProps): React.JSX.Element;
    displayName: string;
} & {
    Trigger: React.ForwardRefExoticComponent<Omit<FocusModalPrimitives.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Title: React.ForwardRefExoticComponent<Omit<FocusModalPrimitives.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<FocusModalPrimitives.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
    Content: React.ForwardRefExoticComponent<Omit<FocusModalPrimitives.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        overlayProps?: Omit<Omit<FocusModalPrimitives.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> | undefined;
        portalProps?: FocusModalPrimitives.DialogPortalProps | undefined;
    } & React.RefAttributes<HTMLDivElement>>;
    Header: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Body: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Close: React.ForwardRefExoticComponent<FocusModalPrimitives.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
    Footer: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { FocusModal };
//# sourceMappingURL=focus-modal.d.ts.map