import { default as CloseButton } from './CloseButton';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ close }: import('./CloseButton').CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof CloseButton>;
export declare const Default: Story;
