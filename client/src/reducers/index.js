import { combineReducers } from 'redux';
import updateSelectionReducer from './updateSelection';

const allReducers = combineReducers({
  currentSelection: updateSelectionReducer,
});

export default allReducers;
