import reducers from './index';

test('@@INIT', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    auth: {
      isFetching: false,
      jwtDecoded: null,
    },
    scores: {
      isFetching: false,
      items: [],
    },
    players: {
      isFetching: false,
      items: {},
    },
    vendors: {
      isFetching: false,
      items: [],
    },
  });
});
