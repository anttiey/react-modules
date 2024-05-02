import { default as Button } from './Button';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ text, mode, size, ...rest }: import('./Button').ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        mode: {
            control: {
                type: "select";
            };
            options: string[];
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
