import { StrictPropsWithChildren } from '../../types/common';
import { ModalProps } from '../types/Modal.type';

declare const MainModal: ({ isOpen, close, children, position, size, backdropType, shadow, animation, }: StrictPropsWithChildren<ModalProps>) => import('../../../../node_modules/react').ReactPortal | null;
export default MainModal;
