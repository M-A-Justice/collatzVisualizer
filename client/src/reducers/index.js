import { combineReducers } from 'redux';
import updateSelectionReducer from './updateSelection';
import userInputReducer from './userInput';
import openModalReducer from './openModal';

const allReducers = combineReducers({
  currentSelection: updateSelectionReducer,
  userInput: userInputReducer,
  openModal: openModalReducer,
});

export default allReducers;
