import ScoresResource from '../resources/scores/mock';

export const REQUEST_SCORES = 'scores:requestScores';
export function requestScores() {
  return (dispatch) => {
    return dispatch(fetchScores());
  }
}

function fetchScores() {
  return dispatch => {
    ScoresResource.getScores((scores) => {
      dispatch(receiveScores(scores));
    });
  }
}

export const RECEIVE_SCORES = 'scores:fetchScoresSuccess';
export function receiveScores(scores) {
  return {
    type: RECEIVE_SCORES,
    scores: scores,
  }
}
