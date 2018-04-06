import { combineReducers } from 'redux';
import { scoresReducer } from './scores';
import { inventoryReducer } from './inventory';
import { vendorsReducer } from './vendors';

const allReducers = combineReducers({
  scores: scoresReducer,
  inventory: inventoryReducer,
  vendors: vendorsReducer,
});

export default allReducers;