import moxios from 'moxios';
import { fetchVendors, receiveVendors } from './vendors';
import dotenvConfiguration from '../dotenv-configuration';
import { VENDORS } from '../resources/vendors/mock';

test('receiveVendors', () => {
  expect(receiveVendors(VENDORS)).toMatchSnapshot();
});

test('fetchVendors', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchVendors()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: VENDORS,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/vendors`);
          expect(dispatchMock).toBeCalledWith(receiveVendors(VENDORS));
          moxios.uninstall();
          done();
        });
    });
  });
});

test('fetchVendors mock', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchVendors()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: VENDORS,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/vendors`);
          expect(dispatchMock).toBeCalledWith(receiveVendors(VENDORS));
          moxios.uninstall();
          done();
        });
    });
  });
});
