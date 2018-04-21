import dotenvConfiguration from '../dotenv-configuration';
import ScoresResourceMock from '../resources/scores/mock';
import ScoresResource from '../resources/scores';

export const REQUEST_SCORES = 'scores:requestScores';
export function requestScores() {
  return dispatch => {
    return dispatch(fetchScores());
  }
}

function fetchScores() {
  const resource = dotenvConfiguration.API_URL ? ScoresResource : ScoresResourceMock;

  return dispatch => {
    resource.getScores()
      .then((response) => {
        dispatch(receiveScores(response.data));
      });
  }
}

export const RECEIVE_SCORES = 'scores:fetchScoresSuccess';
export function receiveScores(scores) {
  return {
    type: RECEIVE_SCORES,
    payload: { scores },
  }
}
