import { StrictPropsWithChildren } from '../../types/common';
import { HTMLAttributes } from '../../../../node_modules/react';

export type Align = 'left' | 'center' | 'right';
export type Direction = 'row' | 'column';
export interface ModalFooterProps extends HTMLAttributes<HTMLElement> {
    align?: Align;
    direction?: Direction;
}
export declare const ModalHeader: ({ children, ...rest }: StrictPropsWithChildren<HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
export declare const ModalBody: ({ children, ...rest }: StrictPropsWithChildren<HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
export declare const ModalFooter: ({ children, align, direction, ...rest }: StrictPropsWithChildren<ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
