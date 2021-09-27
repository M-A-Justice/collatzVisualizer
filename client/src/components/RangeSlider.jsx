import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import SliderContainer from '../styles/RangeSlider.style';
import { updateSelection } from '../actions';
// import collatz from '../../../server/scripts/script';

const RangeSlider = () => {
  const dispatch = useDispatch();
  const selection = useSelector((state) => state.currentSelection);
  const minMax = useSelector((state) => state.minMax);

  // const keys = Object.keys(selection); // []
  // let sorted; // undefined

  // if (keys.length > 1) {
  //   sorted = keys.sort((a, b) => Number(a) - Number(b));
  // }

  // let sliderValues; // undefined

  // if (sorted === undefined) {
  //   sliderValues = [0, 0];
  // } else {
  //   sliderValues = [Number(sorted[0]), Number(sorted[sorted.length - 1])];
  // }

  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    // newValue is an array of values

    // const result = collatz(newValue);
    // const key = `${newValue}`;

    // if (selection[key] === undefined) {
    //   selection[key] = result;
    //   dispatch(updateSelection(selection));
    // }

    if (activeThumb === 0) {
      dispatch(updateSelection([newValue[0], selection[1]]));
    } else {
      dispatch(updateSelection([selection[0], newValue[1]]));
    }
  };

  return (
    <SliderContainer>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        value={selection}
        valueLabelDisplay="auto"
        min={minMax[0]}
        max={minMax[1]}
        orientation="vertical"
        size="small"
        onChange={handleChange}
      />
    </SliderContainer>
  );
};

export default RangeSlider;
