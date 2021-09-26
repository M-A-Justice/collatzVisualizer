import { combineReducers } from 'redux';
import updateSelectionReducer from './updateSelection';
import userInputReducer from './userInput';
import openModalReducer from './openModal';
import minMaxReducer from './minMax';

const allReducers = combineReducers({
  currentSelection: updateSelectionReducer,
  userInput: userInputReducer,
  openModal: openModalReducer,
  minMax: minMaxReducer,
});

export default allReducers;
