import { EQUIP_ITEM, RECEIVE_INVENTORY } from '../actions/inventory';

const initialState = {
  items: [],
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_INVENTORY:
      return Object.assign({}, state, {
        items: action.payload.items,
      });

    case EQUIP_ITEM: {
      const interpolatedItems = [...state.items]
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

      return Object.assign({}, state, {
        items: interpolatedItems,
      });
    }
    default:
      return state;
  }
}
