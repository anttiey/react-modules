import { ModalProps, ModalFooterProps } from './Modal.type';
import { StrictPropsWithChildren } from '../types/common';

export declare const ModalHeader: ({ children }: StrictPropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const ModalBody: ({ children }: StrictPropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const ModalFooter: ({ children, direction }: StrictPropsWithChildren<ModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
export declare const ModalMain: ({ isOpen, close, children, position, size, backdropType, shadow, animation, }: StrictPropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element | null;
