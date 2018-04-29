import vendorsReducer from './vendors';
import { RECEIVE_VENDORS } from '../actions/vendors';

test(`${RECEIVE_VENDORS}`, () => {
  const vendors = [
    {
      id: 'aaa',
      name: 'Super',
      color: '#8f0',
    },
    {
      id: 'bbb',
      name: 'Safe',
      color: '#f80',
    },
    {
      id: 'ccc',
      name: 'Heavy',
      color: '#800',
    },
    {
      id: 'ddd',
      name: 'Light',
      color: '#08f',
    },
  ];

  const previousState = [];

  const action = {
    type: RECEIVE_VENDORS,
    payload: {
      vendors,
    },
  };

  const state = vendorsReducer(previousState, action);

  const expectedState = vendors;

  expect(state).toEqual(expectedState);
});
