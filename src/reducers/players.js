import inventoryReducer from './inventory';
import { PLAYER_FAILURE, PLAYER_REQUEST, PLAYER_SUCCESS } from '../actions/players';
import {
  INVENTORY_REQUEST,
  INVENTORY_FAILURE,
  INVENTORY_SUCCESS,
  EQUIP_REQUEST,
  EQUIP_SUCCESS,
  EQUIP_FAILURE,
} from '../actions/inventory';

const initialState = {
  isFetching: false,
  items: {},
};

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_REQUEST: {
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    }
    case PLAYER_SUCCESS: {
      const { isFetching, player } = action.payload;
      return Object.assign({}, state, {
        isFetching,
        items: Object.assign({}, state.items, {
          [player.login]: {
            login: player.login,
            nick: player.nick,
            inventory: {
              isFetching: false,
              value: player.inventory,
            },
          },
        }),
      });
    }
    case PLAYER_FAILURE: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }

    case INVENTORY_REQUEST:
    case INVENTORY_SUCCESS:
    case INVENTORY_FAILURE:
    case EQUIP_REQUEST:
    case EQUIP_SUCCESS:
    case EQUIP_FAILURE: {
      const { playerLogin } = action.payload;

      const nextState = Object.assign({}, state);

      if (!nextState.items[playerLogin]) {
        nextState.items[playerLogin] = {};
      }

      const inventory = inventoryReducer(nextState.items[playerLogin].inventory, action);
      nextState.items[playerLogin].inventory = inventory;
      return nextState;
    }
    default:
      return state;
  }
}

export function getPlayer(state, playerLogin) {
  if (
    state.players &&
    state.players.items
  ) {
    return state.players.items[playerLogin];
  }

  return null;
}

export function getPlayerNick(state, playerLogin) {
  if (
    state.players &&
    state.players.items &&
    state.players.items[playerLogin]
  ) {
    return state.players.items[playerLogin].nick;
  }

  return null;
}
