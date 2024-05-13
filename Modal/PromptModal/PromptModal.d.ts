import { ModalProps } from '../types/Modal.type';

export interface PromptModalProps extends ModalProps {
    headerText: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirm: () => void;
}
declare const PromptModal: ({ headerText, primaryButtonText, secondaryButtonText, inputValue, onInputChange, onConfirm, ...modalProps }: PromptModalProps) => import("react/jsx-runtime").JSX.Element;
export default PromptModal;
