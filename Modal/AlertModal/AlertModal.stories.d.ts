import { default as AlertModal } from './AlertModal';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ headerText, bodyText, ...modalProps }: import('./AlertModal').AlertModalProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof AlertModal>;
export declare const Default: Story;
