import {playerReducer} from './player';
import {RECEIVE_PLAYER, receivePlayer} from '../actions/player';

const any = null;

test(RECEIVE_PLAYER, () => {
  const previousPlayer = {
    login: '',
    nick: '',
    inventory: any,
  };
  const expectedPlayer = {
    login: 'someLogin',
    nick: 'someNick',
    inventory: any,
  };
  const action = receivePlayer(expectedPlayer);
  const state = playerReducer(previousPlayer, action);
  expect(state).toEqual(expectedPlayer);
});