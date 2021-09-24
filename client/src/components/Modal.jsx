import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModel } from '../actions';
import {
  BackgroundBlur,
  ModalMain,
  ModalClose,
  ModalBody,
  NoDisplay,
} from '../styles/Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.openModal);

  const handleClick = () => {
    dispatch(openModel());
  };

  if (showModal === true) {
    return (
      <BackgroundBlur onClick={handleClick}>
        <ModalMain>
          <ModalClose onClick={handleClick} />
          <ModalBody>This is information on the Collatz Conjecture</ModalBody>
        </ModalMain>
      </BackgroundBlur>
    );
  }
  return (
    <NoDisplay />
  );
};

export default Modal;
