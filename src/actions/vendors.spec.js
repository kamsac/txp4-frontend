import moxios from 'moxios';
import { requestVendors, receiveVendors, vendorsError, loadVendors, fetchVendors } from './vendors';
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

describe('fetchVendors', () => {
  test('with success', (done) => {
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
            expect(dispatchMock).toBeCalledWith(requestVendors());
            expect(dispatchMock).toBeCalledWith(receiveVendors(VENDORS));
            expect(dispatchMock).not.toBeCalledWith(vendorsError(VENDORS));
            moxios.uninstall();
            done();
          });
      });
    });
  });

  test('with failure', (done) => {
    moxios.install();
    dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');

    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      fetchVendors()(dispatchMock);
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
});

describe('loadVendors', () => {
  it('should fetch vendors', () => {
    const state = {
      vendors: {
        isFetching: false,
        items: [],
      },
    };
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn().mockReturnValue(state);
    loadVendors()(dispatchMock, getStateMock);
    // expect(dispatchMock).toBeCalledWith(fetchVendors());
    expect(dispatchMock).toBeCalled();
  });

  it('should not be called when vendors are fetching', () => {
    const state = {
      vendors: {
        isFetching: true,
        items: [],
      },
    };
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn().mockReturnValue(state);
    loadVendors()(dispatchMock, getStateMock);
    expect(dispatchMock).not.toBeCalled();
  });

  it('should not be called when vendors are already loaded', () => {
    const someVendors = VENDORS;
    const state = {
      vendors: {
        isFetching: true,
        items: someVendors,
      },
    };
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn().mockReturnValue(state);
    loadVendors()(dispatchMock, getStateMock);
    expect(dispatchMock).not.toBeCalled();
  });
});
