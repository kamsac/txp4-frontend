import scoresReducer from './scores';
import { RECEIVE_SCORES } from '../actions/scores';

test(`${RECEIVE_SCORES}`, () => {
  const scores = [
    {
      player: {
        login: 'lymak',
        nick: 'lymak',
      },
      points: 4242,
    },
    {
      player: {
        login: 'kibes',
        nick: 'kibes',
      },
      points: 3232,
    },
    {
      player: {
        login: 'tomek',
        nick: 'tomek',
      },
      points: 2416,
    },
  ];

  const previousState = [];

  const action = {
    type: RECEIVE_SCORES,
    payload: {
      scores,
    },
  };

  const state = scoresReducer(previousState, action);

  const expectedState = scores;

  expect(state).toEqual(expectedState);
});
