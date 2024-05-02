import { default as Title } from './Title';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ children }: {
        children: import('../../../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        controls: {
            exclude: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof Title>;
export declare const Default: Story;
