import { SCORES_FAILURE, SCORES_REQUEST, SCORES_SUCCESS } from '../actions/scores';

const initialState = {
  isFetching: false,
  items: [],
};

export default function scoresReducer(state = initialState, action) {
  switch (action.type) {
    case SCORES_REQUEST: {
      const { isFetching } = action.payload;

      return Object.assign({}, state, {
        isFetching,
      });
    }
    case SCORES_SUCCESS: {
      const { isFetching, scores } = action.payload;
      return Object.assign({}, state, {
        isFetching,
        items: scores,
      });
    }
    case SCORES_FAILURE: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    default:
      return state;
  }
}

export function getScores(state) {
  return state.scores.items;
}
