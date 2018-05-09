import jwtDecode from 'jwt-decode';
import dotenvConfiguration from '../dotenv-configuration';
import AuthResource from '../resources/auth';
import AuthResourceMock from '../resources/auth/mock';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    payload: {
      isFetching: true,
    },
  };
}

export function receiveLogin(accessToken) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      jwtDecoded: jwtDecode(accessToken),
    },
  };
}

export function loginError() {
  return {
    type: LOGIN_FAILURE,
    payload: {
      isFetching: false,
      jwtDecoded: null,
    },
  };
}

export function loginUser(magicLinkToken) {
  const resource = dotenvConfiguration.API_URL ? AuthResource : AuthResourceMock;

  return (dispatch) => {
    dispatch(requestLogin());

    resource.login(magicLinkToken)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('accessToken', token);
        dispatch(receiveLogin(token));
      })
      .catch(() => {
        dispatch(loginError());
      });
  };
}

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    payload: {},
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      jwtDecoded: null,
    },
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());

    localStorage.removeItem('accessToken');

    dispatch(receiveLogout());
  };
}
