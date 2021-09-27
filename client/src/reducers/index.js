import { combineReducers } from 'redux';
import updateSelectionReducer from './updateSelection';
import userInputReducer from './userInput';
import openModalReducer from './openModal';
import minMaxReducer from './minMax';
import collatzMinMaxReducer from './collatzMinMax';
import selectedCollatzReducer from './selectedCollatz';

const allReducers = combineReducers({
  currentSelection: updateSelectionReducer,
  userInput: userInputReducer,
  openModal: openModalReducer,
  minMax: minMaxReducer,
  collatzMinMax: collatzMinMaxReducer,
  selectedCollatz: selectedCollatzReducer,
});

export default allReducers;
