import { Modal } from '../..';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: (({ isOpen, close, children, position, size, backdropType, shadow, animation, }: import('../../types/common').StrictPropsWithChildren<import('../../types/common').ModalProps>) => import('../../../../node_modules/react').ReactPortal | null) & {
        Title: ({ children }: {
            children: import('../../../../node_modules/react').ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Input: ({ ...rest }: import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
        Button: ({ text, mode, size, ...rest }: import('../../components/Button/Button').ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
        CloseButton: ({ close, ...rest }: import('../../components/CloseButton/CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
        Header: ({ children, ...rest }: import('../../types/common').StrictPropsWithChildren<import('../../../../node_modules/react').HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
        Body: ({ children, ...rest }: import('../../types/common').StrictPropsWithChildren<import('../../../../node_modules/react').HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
        Footer: ({ children, align, direction, ...rest }: import('../../types/common').StrictPropsWithChildren<import('../../components/ModalLayout/ModalLayout').ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    decorators: ((Story: import('@storybook/types').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        isOpen: boolean;
        close: () => void;
        position?: import('../../types/common').Position | undefined;
        backdropType?: import('../../types/common').BackDropType | undefined;
        size?: import('../../types/common').Size | undefined;
        shadow?: boolean | undefined;
        animation?: boolean | undefined;
        children: import('../../../../node_modules/react').ReactNode;
    }>) => import("react/jsx-runtime").JSX.Element)[];
    argTypes: {
        position: {
            options: string[];
            control: {
                type: "radio";
            };
        };
        size: {
            options: string[];
            control: {
                type: "radio";
            };
        };
        backdropType: {
            options: string[];
            control: {
                type: "radio";
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
