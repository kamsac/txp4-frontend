import { scoresReducer } from './scores';
import { inventoryReducer } from './inventory';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  scores: scoresReducer,
  inventory: inventoryReducer,
});

export default allReducers;