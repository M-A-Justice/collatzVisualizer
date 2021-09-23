import { combineReducers } from 'redux';
import updateSelectionReducer from './updateSelection';
import userInputReducer from './userInput';

const allReducers = combineReducers({
  currentSelection: updateSelectionReducer,
  userInput: userInputReducer,
});

export default allReducers;
