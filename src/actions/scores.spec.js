import { receiveScores } from './scores';

test('receiveScores', () => {
  const scores = [
    {
      player: {
        login: 'lymak',
        nickname: 'lymak',
      },
      points: 4242,
    },
    {
      player: {
        login: 'kibes',
        nickname: 'kibes',
      },
      points: 3232,
    },
    {
      player: {
        login: 'tomek',
        nickname: 'tomek',
      },
      points: 2416,
    },
  ];

  expect(receiveScores(scores)).toMatchSnapshot();
});
