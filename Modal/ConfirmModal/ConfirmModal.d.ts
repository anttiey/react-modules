import { ModalProps } from '../types/Modal.type';

export interface ConfirmModalProps extends ModalProps {
    headerText: string;
    bodyText: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onConfirm: () => void;
}
declare const ConfirmModal: ({ headerText, bodyText, primaryButtonText, secondaryButtonText, onConfirm, ...modalProps }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
