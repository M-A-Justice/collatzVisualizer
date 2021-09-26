import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntegerSelection from '../styles/IntegerSubmit.style';
import {
  updateSelection,
  userInput,
  updateMinMax,
} from '../actions/index';

const IntegerSubmit = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.userInput);

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      const dataSet = [Number(input), Number(input)];
      dispatch(updateSelection(dataSet));
      dispatch(updateMinMax([dataSet[0] - 50, dataSet[1] + 50]));
      e.target.value = '';
      dispatch(userInput(''));
    }
  };

  return (
    <IntegerSelection type="number" onChange={handleChange} onKeyPress={handleSubmit} />
  );
};

export default IntegerSubmit;
