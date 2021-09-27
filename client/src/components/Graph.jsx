import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import collatz from '../../../server/scripts/script';
import {
  collatzMinMax,
  updateSelectedCollatz,
} from '../actions/index';

const Graph = () => {
  const dispatch = useDispatch();
  const selectedRange = useSelector((state) => state.currentSelection);
  const minMaxRange = useSelector((state) => state.minMax);
  const collatzRange = useSelector((state) => state.collatzMinMax);
  const d3Container = useRef(null);

  const sortedKeys = Object.keys(collatzRange).sort((a, b) => Number(a) - Number(b));
  const [first, last] = minMaxRange;

  if (first !== Number(sortedKeys[0]) && last !== Number(sortedKeys[sortedKeys.length - 1])) {
    const minMaxCollatz = {};

    for (let i = minMaxRange[0]; i < minMaxRange[1]; i += 1) {
      minMaxCollatz[`${i}`] = collatz(i);
    }
    dispatch(collatzMinMax(minMaxCollatz));
    // post results to api
  }

  useEffect(
    () => {
      const selectedCollatz = {};

      for (let i = selectedRange[0]; i < selectedRange[1]; i += 1) {
        selectedCollatz[`${i}`] = collatzRange[`${i}`];
      }

      dispatch(updateSelectedCollatz(selectedCollatz));

      // d3 code .....
    },
    [],
  );

  return (
    <svg
      className="d3-component"
      width={400}
      height={200}
      ref={d3Container}
    />
  );
};

export default Graph;
