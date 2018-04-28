import {EQUIP_ITEM, RECEIVE_ITEMS} from '../actions/inventory';

const initialValue = {
  items: [],
};

export function inventoryReducer(state = initialValue, action) {
  switch(action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        items: action.payload.items,
      });

    case EQUIP_ITEM:
      const interpolatedItems = [...state.items]
        .map((inventoryItem) => {
          if (inventoryItem.equipRegion === action.payload.item.equipRegion) {
            inventoryItem.isEquipped = false;
          }

          if (inventoryItem.id === action.payload.item.id) {
            inventoryItem.isEquipped = true;
          }

          return inventoryItem;
        });

      return Object.assign({}, state, {
        items: interpolatedItems,
      });
    default:
      return state;
  }
}
