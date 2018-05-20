import dotenvConfiguration from '../dotenv-configuration';
import ScoresResourceMock from '../resources/scores/mock';
import ScoresResource from '../resources/scores';

export const SCORES_REQUEST = 'SCORES_REQUEST';
export const SCORES_SUCCESS = 'SCORES_SUCCESS';
export const SCORES_FAILURE = 'SCORES_FAILURE';

export function requestScores() {
  return {
    type: SCORES_REQUEST,
    payload: {
      isFetching: true,
    },
  };
}

export function receiveScores(scores) {
  return {
    type: SCORES_SUCCESS,
    payload: {
      isFetching: false,
      scores,
    },
  };
}

export function scoresError() {
  return {
    type: SCORES_FAILURE,
    payload: {
      isFetching: false,
    },
  };
}

export function loadScores() {
  const resource = dotenvConfiguration.API_URL ? ScoresResource : ScoresResourceMock;

  return (dispatch) => {
    dispatch(requestScores());

    resource.getScores()
      .then((response) => {
        dispatch(receiveScores(response.data));
      })
      .catch(() => {
        dispatch(scoresError());
      });
  };
}
