import { ModalProps } from '../../types/common';

export interface AlertModalProps extends ModalProps {
    headerText: string;
    bodyText: string;
}
declare const AlertModal: ({ headerText, bodyText, ...modalProps }: AlertModalProps) => import("react/jsx-runtime").JSX.Element;
export default AlertModal;
