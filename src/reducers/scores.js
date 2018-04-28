import {RECEIVE_SCORES} from '../actions/scores';

const initialState = [];

export function scoresReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_SCORES:
      return [...action.payload.scores];
    default:
      return state;
  }
}
