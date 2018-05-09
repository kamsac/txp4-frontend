import reducers from './index';

test('@@INIT', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    auth: {
      isFetching: false,
      jwtDecoded: null,
    },
    scores: [],
    player: {
      login: '',
      nick: '',
      inventory: {
        items: [],
      },
    },
    vendors: [],
  });
});
