import { VENDORS_FAILURE, VENDORS_REQUEST, VENDORS_SUCCESS } from '../actions/vendors';

const initialState = {
  isFetching: false,
  items: [],
};

export default function vendorsReducer(state = initialState, action) {
  switch (action.type) {
    case VENDORS_REQUEST: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    case VENDORS_SUCCESS: {
      const { isFetching, vendors } = action.payload;
      return Object.assign({}, state, {
        isFetching,
        items: vendors,
      });
    }
    case VENDORS_FAILURE: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    default:
      return state;
  }
}

export function getIsVendorsFetching(state) {
  return state.vendors.isFetching;
}

export function getVendors(state) {
  return state.vendors.items;
}
