export declare const Modal: (({ isOpen, close, children, position, size, backdropType, shadow, animation, }: import('./types/common').StrictPropsWithChildren<import('./Modal/Modal.type').ModalProps>) => import("react/jsx-runtime").JSX.Element | null) & {
    Title: ({ children }: {
        children: import('../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Button: ({ text, mode, size, ...rest }: import('./components/Button/Button').ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: ({ close }: import('./components/CloseButton/CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ children }: {
        children: import('../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children }: {
        children: import('../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, direction }: import('./types/common').StrictPropsWithChildren<import('./Modal/Modal.type').ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
};
