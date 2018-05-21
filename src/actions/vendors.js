import dotenvConfiguration from '../dotenv-configuration';
import VendorsResourceMock from '../resources/vendors/mock';
import VendorsResource from '../resources/vendors';

export const VENDORS_REQUEST = 'VENDORS_REQUEST';
export const VENDORS_SUCCESS = 'VENDORS_SUCCESS';
export const VENDORS_FAILURE = 'VENDORS_FAILURE';

export function requestVendors() {
  return {
    type: VENDORS_REQUEST,
    payload: {
      isFetching: true,
    },
  };
}

export function receiveVendors(vendors) {
  return {
    type: VENDORS_SUCCESS,
    payload: {
      isFetching: false,
      vendors,
    },
  };
}

export function vendorsError() {
  return {
    type: VENDORS_FAILURE,
    payload: {
      isFetching: false,
    },
  };
}

export function loadVendors() {
  const resource = dotenvConfiguration.API_URL ? VendorsResource : VendorsResourceMock;

  return (dispatch) => {
    dispatch(requestVendors());

    resource.getVendors()
      .then((response) => {
        dispatch(receiveVendors(response.data));
      })
      .catch(() => {
        dispatch(vendorsError());
      });
  };
}
