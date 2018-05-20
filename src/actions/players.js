import dotenvConfiguration from '../dotenv-configuration';
import PlayerResourceMock from '../resources/players/mock';
import PlayerResource from '../resources/players';

export const PLAYER_SUCCESS = 'PLAYER_SUCCESS';
export const PLAYER_REQUEST = 'PLAYER_REQUEST';
export const PLAYER_FAILURE = 'PLAYER_FAILURE';

export function requestPlayer() {
  return {
    type: PLAYER_REQUEST,
    payload: {
      isFetching: true,
    },
  };
}

export function receivePlayer(player) {
  return {
    type: PLAYER_SUCCESS,
    payload: {
      isFetching: false,
      player,
    },
  };
}

export function playerError() {
  return {
    type: PLAYER_FAILURE,
    payload: {
      isFetching: false,
    },
  };
}

export function loadPlayer(playerLogin) {
  return (dispatch) => {
    dispatch(requestPlayer());

    const resource = dotenvConfiguration.API_URL ? PlayerResource : PlayerResourceMock;

    resource.getPlayer(playerLogin)
      .then((response) => {
        dispatch(receivePlayer(response.data.player));
      })
      .catch(() => {
        dispatch(playerError());
      });
  };
}
