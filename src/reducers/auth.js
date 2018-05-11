import jwtDecode from 'jwt-decode';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/auth';

function getDefaultJwtDecoded() {
  if (!localStorage.getItem('accessToken')) {
    return null;
  }
  return jwtDecode(localStorage.getItem('accessToken'));
}

export default function authReducer(
  state = {
    isFetching: false,
    jwtDecoded: getDefaultJwtDecoded(),
  },
  action = {
    type: 'nothing',
  },
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        jwtDecoded: action.payload.jwtDecoded,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        jwtDecoded: action.payload.jwtDecoded,
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        jwtDecoded: action.payload.jwtDecoded,
      });
    default:
      return state;
  }
}

export function getIsUserAuthenticated(state) {
  return !!state.auth.jwtDecoded && !!state.auth.jwtDecoded.login;
}

export function getUserLogin(state) {
  return state.auth.jwtDecoded ? state.auth.jwtDecoded.login : null;
}

export function getUserNick(state) {
  return state.auth.jwtDecoded ? state.auth.jwtDecoded.nick : null;
}

export function getIsFetchingLogin(state) {
  return state.auth.isFetching;
}
