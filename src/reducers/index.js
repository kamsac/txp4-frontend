import { combineReducers } from 'redux';
import scoresReducer from './scores';
import vendorsReducer from './vendors';
import playerReducer from './player';
import authReducer from './auth';

const allReducers = combineReducers({
  auth: authReducer,
  scores: scoresReducer,
  player: playerReducer,
  vendors: vendorsReducer,
});

export default allReducers;
