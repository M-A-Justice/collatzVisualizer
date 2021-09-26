import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import SliderContainer from '../styles/RangeSlider.style';
import { updateSelection } from '../actions';

const RangeSlider = () => {
  const dispatch = useDispatch();
  const selection = useSelector((state) => state.currentSelection);
  const minMax = useSelector((state) => state.minMax);

  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

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
