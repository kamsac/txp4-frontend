import reducers from './index';

test('@@INIT', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
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
