import {EQUIP_ITEM, RECEIVE_ITEMS, SELECT_ITEM} from '../actions/inventory';

const initialValue = {
  items: [],
  selectedItem: null,
};

export function inventoryReducer(state = initialValue, action) {
  switch(action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        items: action.items,
      });

    case SELECT_ITEM:
      return Object.assign({}, state, {
        selectedItem: action.selectedItem,
      });

    case EQUIP_ITEM:
      const interpolatedItems = [...state.items]
        .map((inventoryItem) => {
          if (inventoryItem.equipRegion === action.item.equipRegion) {
            inventoryItem.isEquipped = false;
          }

          if (inventoryItem === action.item) {
            inventoryItem.isEquipped = true;
          }

          return inventoryItem;
        });

      return Object.assign({}, state, {
        items: interpolatedItems
      });
    default:
      return state;
  }
}
