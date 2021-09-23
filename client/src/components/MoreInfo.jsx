import React from 'react';
import { useDispatch } from 'react-redux';
import { openModel } from '../actions';
import {
  ModalButton,
  MoreInfoText,
} from '../styles/MoreInfo.style';

const MoreInfo = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModel());
  };

  return (
    <ModalButton onClick={handleClick}>
      <MoreInfoText>More Info</MoreInfoText>
    </ModalButton>
  );
};

export default MoreInfo;
