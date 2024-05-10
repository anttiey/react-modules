import { default as ConfirmModal } from './ConfirmModal';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ headerText, bodyText, onConfirm, ...modalProps }: import('./ConfirmModal').ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof ConfirmModal>;
export declare const Default: Story;
