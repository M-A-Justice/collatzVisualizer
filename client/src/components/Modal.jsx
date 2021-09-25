import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../actions';
import {
  BackgroundBlur,
  ModalMain,
  ModalBody,
  ModalText,
  NoDisplay,
  ModalCloseContainer,
  ModalCloseIcon,
} from '../styles/Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.openModal);
  const closer = useRef(null);

  const handleClick = (e) => {
    const { target } = e;

    if (closer.current.contains(target)) {
      dispatch(openModal());
    } else if (target.className.includes('close')) {
      dispatch(openModal());
    }
  };

  if (showModal === true) {
    return (
      <BackgroundBlur className="close" onClick={handleClick}>
        <ModalMain>
          <ModalCloseContainer ref={closer} className="close" href="#">
            <ModalCloseIcon />
          </ModalCloseContainer>
          <ModalBody>
            <ModalText>This is information on the Collatz Conjecture</ModalText>
          </ModalBody>
        </ModalMain>
      </BackgroundBlur>
    );
  }
  return (
    <NoDisplay />
  );
};

export default Modal;
