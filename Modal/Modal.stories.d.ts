import { Modal } from '..';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (({ isOpen, close, children, position, size, backdropType, shadow, animation, }: import('../types/common').StrictPropsWithChildren<import('./Modal.type').ModalProps>) => import("react/jsx-runtime").JSX.Element | null) & {
        Title: ({ children }: {
            children: import('../../../node_modules/react').ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Button: ({ text, mode, size, ...rest }: import('../components/Button/Button').ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
        CloseButton: ({ close }: import('../components/CloseButton/CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
        Header: ({ children }: {
            children: import('../../../node_modules/react').ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Body: ({ children }: {
            children: import('../../../node_modules/react').ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Footer: ({ children, direction }: import('../types/common').StrictPropsWithChildren<import('./Modal.type').ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    decorators: ((Story: import('@storybook/types').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        isOpen: boolean;
        close: () => void;
        position?: import('./Modal.type').Position | undefined;
        backdropType?: import('./Modal.type').BackDropType | undefined;
        size?: import('../types/common').Size | undefined;
        shadow?: boolean | undefined;
        animation?: boolean | undefined;
        children: import('../../../node_modules/react').ReactNode;
    }>) => import("react/jsx-runtime").JSX.Element)[];
    argTypes: {
        position: {
            options: string[];
            control: {
                type: "select";
            };
        };
        size: {
            options: string[];
            control: {
                type: "select";
            };
        };
        backdropType: {
            options: string[];
            control: {
                type: "select";
            };
        };
        shadow: {
            control: {
                type: "boolean";
            };
        };
        animation: {
            control: {
                type: "boolean";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof Modal>;
export declare const Default: Story;
export declare const Top: Story;
export declare const Center: Story;
export declare const Bottom: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
