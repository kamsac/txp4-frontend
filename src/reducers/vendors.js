import {RECEIVE_VENDORS} from '../actions/vendors';

const initialValue = [];

export function vendorsReducer(state = initialValue, action) {
  switch(action.type) {
    case RECEIVE_VENDORS:
      return [...action.vendors];
    default:
      return state;
  }
}
