import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntegerSelection from '../styles/IntegerSubmit.style';
// import collatz from '../../../server/scripts/script';
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
      // const results = collatz(Number(input));
      // const key = `${input}`;
      // const dataObj = {};
      // dataObj[key] = results;
      const dataSet = [Number(input), Number(input)];

      dispatch(updateSelection(dataSet));
      dispatch(updateMinMax([Number(input) - 50, Number(input) + 50]));
      e.target.value = '';
      dispatch(userInput(''));
    }
  };

  return (
    <IntegerSelection type="number" onChange={handleChange} onKeyPress={handleSubmit} />
  );
};

export default IntegerSubmit;
