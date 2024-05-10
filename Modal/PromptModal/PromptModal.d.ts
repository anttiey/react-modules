import { ModalProps } from '../../types/common';

export interface PromptModalProps extends ModalProps {
    headerText: string;
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirm: () => void;
}
declare const PromptModal: ({ headerText, inputValue, onInputChange, onConfirm, ...modalProps }: PromptModalProps) => import("react/jsx-runtime").JSX.Element;
export default PromptModal;
