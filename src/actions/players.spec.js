import { receivePlayer } from './players';

test('receivePlayer', () => {
  const somePlayer = {
    login: 'someLogin',
    nick: 'someNick',
    inventory: {
      items: [],
    },
  };
  expect(receivePlayer(somePlayer)).toMatchSnapshot();
});
