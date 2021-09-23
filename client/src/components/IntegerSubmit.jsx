import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntegerSelection from '../styles/IntegerSubmit.style';
import collatz from '../../../server/scripts/script';
import {
  updateSelection,
  userInput,
} from '../actions/index';

const IntegerSubmit = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.userInput);

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      const dataSet = [input, collatz(input)];
      dispatch(updateSelection(dataSet));
      e.target.value = '';
      dispatch(userInput(''));
    }
    // post new input to api
  };

  return (
    <IntegerSelection type="number" onChange={handleChange} onKeyPress={handleSubmit} />
  );
};

export default IntegerSubmit;
