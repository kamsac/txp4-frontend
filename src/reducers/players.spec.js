import playerReducer from './players';
import { PLAYER_SUCCESS, receivePlayer } from '../actions/players';

test(PLAYER_SUCCESS, () => {
  const previousState = {
    isFetching: false,
    items: {},
  };
  const playerApiResponse = {
    login: 'someLogin',
    nick: 'someNick',
    inventory: {
      items: [],
    },
  };
  const expectedState = {
    isFetching: false,
    items: {
      someLogin: {
        login: 'someLogin',
        nick: 'someNick',
        inventory: {
          isFetching: false,
          value: {
            items: [],
          },
        },
      },
    },
  };
  const action = receivePlayer(playerApiResponse);
  const state = playerReducer(previousState, action);
  expect(state).toEqual(expectedState);
});
