import { default as Input } from './Input';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ ...rest }: import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Default: Story;
