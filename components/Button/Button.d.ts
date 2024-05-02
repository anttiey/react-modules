import { Size } from '../../types/common';
import { ButtonHTMLAttributes } from '../../../../node_modules/react';

type ButtonMode = 'primary' | 'secondary';
export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    mode?: ButtonMode;
    size?: Size;
}
declare const Button: ({ text, mode, size, ...rest }: ModalButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
