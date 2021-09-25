import styled from 'styled-components';
import { CloseCircle } from '@styled-icons/ionicons-outline';

export const BackgroundBlur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(196, 196, 196, 22%);
  backdrop-filter: blur(3px);
`;

export const ModalMain = styled.div`
`;

export const ModalCloseContainer = styled.a`
`;

export const ModalCloseIcon = styled(CloseCircle)`
  cursor: pointer
  height: 5%;
  width: 5%;
`;

export const ModalBody = styled.div`
`;

export const ModalText = styled.p`
`;

export const NoDisplay = styled.div`
  display: none;
  z-index: 100;
`;
