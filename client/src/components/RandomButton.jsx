import React from 'react';
import { useDispatch } from 'react-redux';
import { datatype } from 'faker';
import collatz from '../../../server/scripts/script';
import {
  updateSelection,
} from '../actions/index';
import {
  Button,
  Text,
} from '../styles/RandomButton.style';

const RandomButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const random = datatype.number();
    const series = collatz(random);
    const data = [random, series];

    dispatch(updateSelection(data));
    // Post result of function to api
  };

  return (
    <Button onClick={handleClick}>
      <Text>Generate a random number</Text>
    </Button>
  );
};

export default RandomButton;
