import InventoryService from '../resources/inventory/mock';

export const REQUEST_ITEMS = 'inventory:requestItems';
export function updateItems() {
  return dispatch => {
    dispatch(fetchItems());
  }
}

function fetchItems() {
  return dispatch => {
    InventoryService.getItems((items) => {
      dispatch(receiveItems(items));
    });
  }
}

export const RECEIVE_ITEMS = 'inventory:receiveItems';
export function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items
  }
}

export const SELECT_ITEM = 'inventory:selectItem';
export function selectItem(selectedItem) {
  return {
    type: SELECT_ITEM,
    selectedItem
  }
}

export const EQUIP_ITEM = 'inventory:equipItem';
export function equipItem(item) {
  return {
    type: EQUIP_ITEM,
    item
  }
}
