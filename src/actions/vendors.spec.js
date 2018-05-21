import moxios from 'moxios';
import { requestVendors, receiveVendors, vendorsError, loadVendors } from './vendors';
import dotenvConfiguration from '../dotenv-configuration';
import { VENDORS } from '../resources/vendors/mock';

test('requestVendors', () => {
  expect(requestVendors()).toMatchSnapshot();
});

test('receiveVendors', () => {
  expect(receiveVendors(VENDORS)).toMatchSnapshot();
});

test('vendorsError', () => {
  expect(vendorsError()).toMatchSnapshot();
});

test('loadVendors success', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    loadVendors()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: VENDORS,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/vendors`);
          expect(dispatchMock).toBeCalledWith(requestVendors());
          expect(dispatchMock).toBeCalledWith(receiveVendors(VENDORS));
          expect(dispatchMock).not.toBeCalledWith(vendorsError(VENDORS));
          moxios.uninstall();
          done();
        });
    });
  });
});

test('loadVendors failure', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    loadVendors()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 500,
          response: VENDORS,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/vendors`);
          expect(dispatchMock).toBeCalledWith(requestVendors());
          expect(dispatchMock).not.toBeCalledWith(receiveVendors(VENDORS));
          expect(dispatchMock).toBeCalledWith(vendorsError(VENDORS));
          moxios.uninstall();
          done();
        });
    });
  });
});
