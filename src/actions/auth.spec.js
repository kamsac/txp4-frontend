import moxios from 'moxios';
import { loginError, loginUser, receiveLogin, receiveLogout, requestLogin, requestLogout } from './auth';
import dotenvConfiguration from '../dotenv-configuration';
import { ACCESS_TOKEN } from '../resources/auth/mock';

describe('auth action creators', () => {
  test('requestLogin', () => {
    expect(requestLogin()).toMatchSnapshot();
  });

  test('receiveLogin', () => {
    const accessToken = ACCESS_TOKEN;
    expect(receiveLogin(accessToken)).toMatchSnapshot();
  });

  test('loginError', () => {
    expect(loginError()).toMatchSnapshot();
  });

  test('requestLogout', () => {
    expect(requestLogout()).toMatchSnapshot();
  });

  test('receiveLogout', () => {
    expect(receiveLogout()).toMatchSnapshot();
  });
});

test('loginUser with success', (done) => {
  moxios.install();
  localStorage.clear();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');
  const magicLinkToken = 'magicLinkToken';

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    loginUser(magicLinkToken)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: {
            token: ACCESS_TOKEN,
          },
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/auth/${magicLinkToken}`);
          expect(dispatchMock).toBeCalledWith(requestLogin());
          expect(dispatchMock).toBeCalledWith(receiveLogin(ACCESS_TOKEN));
          expect(dispatchMock).not.toBeCalledWith(loginError());
          expect(localStorage.__STORE__['accessToken']).toEqual(ACCESS_TOKEN); // eslint-disable-line

          moxios.uninstall();
          done();
        });
    });
  });
});

test('loginUser with failure', (done) => {
  moxios.install();
  localStorage.clear();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');
  const magicLinkToken = 'magicLinkToken';

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    loginUser(magicLinkToken)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      const errorMessage = 'error message';
      request
        .respondWith({
          status: 501,
          response: {
            error: errorMessage,
          },
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/auth/${magicLinkToken}`);
          expect(dispatchMock).toBeCalledWith(requestLogin());
          expect(dispatchMock).not.toBeCalledWith(receiveLogin(ACCESS_TOKEN));
          expect(dispatchMock).toBeCalledWith(loginError(errorMessage));
          expect(localStorage.__STORE__['accessToken']).not.toEqual(ACCESS_TOKEN); // eslint-disable-line

          moxios.uninstall();
          done();
        });
    });
  });
});
