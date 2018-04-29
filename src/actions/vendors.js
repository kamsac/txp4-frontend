import dotenvConfiguration from '../dotenv-configuration';
import VendorsResourceMock from '../resources/vendors/mock';
import VendorsResource from '../resources/vendors';

export const RECEIVE_VENDORS = 'vendors:fetchVendorsSuccess';
export function receiveVendors(vendors) {
  return {
    type: RECEIVE_VENDORS,
    payload: { vendors },
  };
}

function fetchVendors() {
  const resource = dotenvConfiguration.API_URL ? VendorsResource : VendorsResourceMock;

  return (dispatch) => {
    resource.getVendors()
      .then((response) => {
        dispatch(receiveVendors(response.data));
      });
  };
}

export const REQUEST_VENDORS = 'vendors:requestVendors';
export function requestVendors() {
  return dispatch => dispatch(fetchVendors());
}
