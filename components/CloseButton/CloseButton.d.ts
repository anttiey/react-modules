import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    close: () => void;
}
declare const CloseButton: ({ close, ...rest }: CloseButtonProps) => import("react/jsx-runtime").JSX.Element;
export default CloseButton;
