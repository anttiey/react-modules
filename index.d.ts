export declare const Modal: (({ isOpen, close, children, position, size, backdropType, shadow, animation, }: import('./types/common').StrictPropsWithChildren<import('./types/common').ModalProps>) => import('../../node_modules/react').ReactPortal | null) & {
    Title: ({ children }: {
        children: import('../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Input: ({ ...rest }: import('../../node_modules/react').InputHTMLAttributes<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
    Button: ({ text, mode, size, ...rest }: import('./components/Button/Button').ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
    CloseButton: ({ close, ...rest }: import('./components/CloseButton/CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ children, ...rest }: import('./types/common').StrictPropsWithChildren<import('../../node_modules/react').HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, ...rest }: import('./types/common').StrictPropsWithChildren<import('../../node_modules/react').HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, align, direction, ...rest }: import('./types/common').StrictPropsWithChildren<import('./components/ModalLayout/ModalLayout').ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
};
export { default as AlertModal } from './Modal/AlertModal/AlertModal';
export { default as ConfirmModal } from './Modal/ConfirmModal/ConfirmModal';
export { default as PromptModal } from './Modal/PromptModal/PromptModal';
