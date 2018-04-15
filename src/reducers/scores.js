import {RECEIVE_SCORES} from '../actions/scores';

const initialValue = [];

export function scoresReducer(state = initialValue, action) {
  switch(action.type) {
    case RECEIVE_SCORES:
      return [...action.payload.scores];
    default:
      return state;
  }
}
