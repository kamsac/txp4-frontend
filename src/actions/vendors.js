import VendorsResource from '../resources/vendors/mock';

export const REQUEST_VENDORS = 'vendors:requestVendors';
export function requestVendors() {
  return dispatch => {
    return dispatch(fetchVendors());
  }
}

function fetchVendors() {
  return dispatch => {
    VendorsResource.getVendors((vendors) => {
      dispatch(receiveVendors(vendors));
    });
  }
}

export const RECEIVE_VENDORS = 'vendors:fetchVendorsSuccess';
export function receiveVendors(vendors) {
  return {
    type: RECEIVE_VENDORS,
    payload: { vendors },
  }
}
