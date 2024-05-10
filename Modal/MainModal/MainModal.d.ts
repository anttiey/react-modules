import { StrictPropsWithChildren, ModalProps } from '../../types/common';

declare const MainModal: ({ isOpen, close, children, position, size, backdropType, shadow, animation, }: StrictPropsWithChildren<ModalProps>) => import('../../../../node_modules/react').ReactPortal | null;
export default MainModal;
