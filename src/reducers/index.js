import { combineReducers } from 'redux';
import { scoresReducer } from './scores';
import { vendorsReducer } from './vendors';
import {playerReducer} from './player';

const allReducers = combineReducers({
  scores: scoresReducer,
  player: playerReducer,
  vendors: vendorsReducer,
});

export default allReducers;