import reducers from './index';

test('@@INIT', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    scores: [],
    inventory: {
      items: [],
    },
    vendors: [],
  });
});
