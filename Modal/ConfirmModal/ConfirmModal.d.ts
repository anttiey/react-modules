import { ModalProps } from '../../types/common';

export interface ConfirmModalProps extends ModalProps {
    headerText: string;
    bodyText: string;
    onConfirm: () => void;
}
declare const ConfirmModal: ({ headerText, bodyText, onConfirm, ...modalProps }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
