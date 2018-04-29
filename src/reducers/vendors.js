import { RECEIVE_VENDORS } from '../actions/vendors';

const initialState = [];

export default function vendorsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_VENDORS:
      return [...action.payload.vendors];
    default:
      return state;
  }
}
