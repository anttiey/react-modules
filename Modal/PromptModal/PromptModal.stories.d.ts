import { default as PromptModal } from './PromptModal';
import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ headerText, inputValue, onInputChange, onConfirm, ...modalProps }: import('./PromptModal').PromptModalProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof PromptModal>;
export declare const Default: Story;
