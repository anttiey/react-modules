import { ModalProps } from '../types/Modal.type';

export interface AlertModalProps extends ModalProps {
    headerText: string;
    bodyText: string;
    buttonText?: string;
}
declare const AlertModal: ({ headerText, bodyText, buttonText, ...modalProps }: AlertModalProps) => import("react/jsx-runtime").JSX.Element;
export default AlertModal;
