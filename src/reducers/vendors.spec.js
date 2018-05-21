import vendorsReducer from './vendors';
import {
  VENDORS_REQUEST,
  VENDORS_SUCCESS,
  VENDORS_FAILURE,
  requestVendors,
  receiveVendors,
  vendorsError,
} from '../actions/vendors';
import { VENDORS } from '../resources/vendors/mock';

test(`${VENDORS_REQUEST}`, () => {
  const vendors = VENDORS;
  const previousState = {
    isFetching: false,
    items: vendors,
  };
  const expectedState = {
    isFetching: true,
    items: vendors,
  };

  const action = requestVendors();
  const state = vendorsReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${VENDORS_SUCCESS}`, () => {
  const vendors = VENDORS;
  const previousState = {
    isFetching: true,
    items: [],
  };
  const expectedState = {
    isFetching: false,
    items: vendors,
  };

  const action = receiveVendors(vendors);
  const state = vendorsReducer(previousState, action);

  expect(state).toEqual(expectedState);
});

test(`${VENDORS_FAILURE}`, () => {
  const vendors = VENDORS;
  const previousState = {
    isFetching: true,
    items: vendors,
  };
  const expectedState = {
    isFetching: false,
    items: vendors,
  };

  const action = vendorsError();
  const state = vendorsReducer(previousState, action);

  expect(state).toEqual(expectedState);
});
