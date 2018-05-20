import scoresReducer from './scores';
import {
  SCORES_REQUEST,
  SCORES_SUCCESS,
  SCORES_FAILURE,
  requestScores,
  receiveScores,
  scoresError,
} from '../actions/scores';

test(`${SCORES_REQUEST}`, () => {
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
  const previousState = {
    isFetching: false,
    items: scores,
  };
  const expectedState = {
    isFetching: true,
    items: scores,
  };

  const action = requestScores();
  const state = scoresReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${SCORES_SUCCESS}`, () => {
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
  const previousState = {
    isFetching: true,
    items: [],
  };
  const expectedState = {
    isFetching: false,
    items: scores,
  };

  const action = receiveScores(scores);
  const state = scoresReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${SCORES_FAILURE}`, () => {
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
  const previousState = {
    isFetching: true,
    items: scores,
  };
  const expectedState = {
    isFetching: false,
    items: scores,
  };

  const action = scoresError();
  const state = scoresReducer(previousState, action);

  expect(state).toEqual(expectedState);
});
