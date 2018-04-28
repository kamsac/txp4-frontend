import {inventoryReducer} from './inventory';
import {RECEIVE_PLAYER} from '../actions/player';
import {EQUIP_ITEM, RECEIVE_INVENTORY, REQUEST_INVENTORY} from '../actions/inventory';

const initialState = {
  login: '',
  nick: '',
  inventory: {
    items: []
  }
};

export function playerReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PLAYER:
      return Object.assign({}, state, action.payload);

    case REQUEST_INVENTORY:
    case RECEIVE_INVENTORY:
    case EQUIP_ITEM:
      const inventory = inventoryReducer(state.inventory, action);
      return Object.assign({}, state, { inventory });

    default:
      return state;
  }
}
