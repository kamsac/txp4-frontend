import {
  INVENTORY_REQUEST,
  INVENTORY_SUCCESS,
  INVENTORY_FAILURE,
  EQUIP_REQUEST,
  EQUIP_SUCCESS,
  EQUIP_FAILURE,
} from '../actions/inventory';

const initialState = {
  isFetching: false,
  value: {
    items: [],
  },
};

function interpolateItems(state, action) {
  return [...state.value.items]
    .map((item) => {
      const newItem = Object.assign({}, item);
      if (item.equipRegion === action.payload.item.equipRegion) {
        newItem.isEquipped = false;
      }

      if (item.id === action.payload.item.id) {
        newItem.isEquipped = true;
      }

      return newItem;
    });
}

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case INVENTORY_REQUEST: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    case INVENTORY_SUCCESS: {
      const { isFetching, inventory } = action.payload;
      return Object.assign({}, state, {
        isFetching,
        value: inventory,
      });
    }
    case INVENTORY_FAILURE: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    case EQUIP_REQUEST: {
      const { isFetching } = action.payload;
      const interpolatedItems = interpolateItems(state, action);
      return Object.assign({}, state, {
        isFetching,
        value: {
          items: interpolatedItems,
        },
      });
    }
    case EQUIP_SUCCESS: {
      const { isFetching, inventory } = action.payload;
      return Object.assign({}, state, {
        isFetching,
        value: inventory,
      });
    }
    case EQUIP_FAILURE: {
      const { isFetching } = action.payload;
      return Object.assign({}, state, {
        isFetching,
      });
    }
    default:
      return state;
  }
}

export function getPlayerInventory(state, playerLogin) {
  if (
    state.players &&
    state.players.items &&
    state.players.items[playerLogin] &&
    state.players.items[playerLogin].inventory
  ) {
    return state.players.items[playerLogin].inventory.value;
  }

  return null;
}

export function getPlayerInventoryItems(state, playerLogin) {
  if (
    state.players &&
    state.players.items &&
    state.players.items[playerLogin] &&
    state.players.items[playerLogin].inventory &&
    state.players.items[playerLogin].inventory.value
  ) {
    return state.players.items[playerLogin].inventory.value.items;
  }

  return null;
}
