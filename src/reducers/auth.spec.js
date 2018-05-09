import jwtDecode from 'jwt-decode';
import authReducer from './auth';
import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS,
  requestLogin, receiveLogin, loginError, requestLogout, receiveLogout,
} from '../actions/auth';
import { ACCESS_TOKEN } from '../resources/auth/mock';

test(`${LOGIN_REQUEST}`, () => {
  const previousState = {
    isFetching: false,
    jwtDecoded: null,
  };

  const expectedState = {
    isFetching: true,
    jwtDecoded: null,
  };

  const state = authReducer(previousState, requestLogin());

  expect(state).toEqual(expectedState);
});

test(`${LOGIN_SUCCESS}`, () => {
  const previousState = {
    isFetching: true,
    jwtDecoded: null,
  };

  const expectedState = {
    isFetching: false,
    jwtDecoded: jwtDecode(ACCESS_TOKEN),
  };

  const state = authReducer(previousState, receiveLogin(ACCESS_TOKEN));

  expect(state).toEqual(expectedState);
});

test(`${LOGIN_FAILURE}`, () => {
  const previousState = {
    isFetching: true,
    jwtDecoded: jwtDecode(ACCESS_TOKEN),
  };

  const expectedState = {
    isFetching: false,
    jwtDecoded: null,
  };

  const state = authReducer(previousState, loginError());

  expect(state).toEqual(expectedState);
});

test(`${LOGOUT_REQUEST}`, () => {
  const previousState = {
    isFetching: false,
    jwtDecoded: jwtDecode(ACCESS_TOKEN),
  };

  const expectedState = {
    isFetching: false,
    jwtDecoded: jwtDecode(ACCESS_TOKEN),
  };

  const state = authReducer(previousState, requestLogout());

  expect(state).toEqual(expectedState);
});

test(`${LOGOUT_SUCCESS}`, () => {
  const previousState = {
    isFetching: false,
    jwtDecoded: jwtDecode(ACCESS_TOKEN),
  };

  const expectedState = {
    isFetching: false,
    jwtDecoded: null,
  };

  const state = authReducer(previousState, receiveLogout());

  expect(state).toEqual(expectedState);
});

