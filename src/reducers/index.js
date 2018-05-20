import { combineReducers } from 'redux';
import scoresReducer from './scores';
import vendorsReducer from './vendors';
import playersReducer from './players';
import authReducer from './auth';

const allReducers = combineReducers({
  auth: authReducer,
  scores: scoresReducer,
  players: playersReducer,
  vendors: vendorsReducer,
});

export default allReducers;
