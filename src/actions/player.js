import dotenvConfiguration from '../dotenv-configuration';
import PlayerResourceMock from '../resources/player/mock';
import PlayerResource from '../resources/player';

export const RECEIVE_PLAYER = 'player:receivePlayer';
export function receivePlayer(player) {
  return {
    type: RECEIVE_PLAYER,
    payload: { player },
  };
}

function fetchPlayer() {
  const resource = dotenvConfiguration.API_URL ? PlayerResource : PlayerResourceMock;

  return (dispatch) => {
    resource.getPlayer()
      .then((response) => {
        dispatch(receivePlayer(response.data));
      });
  };
}

export const REQUEST_PLAYER = 'player:requestPlayer';
export function requestPlayer() {
  return (dispatch) => {
    dispatch(fetchPlayer());
  };
}
