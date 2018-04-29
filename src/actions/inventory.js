import dotenvConfiguration from '../dotenv-configuration';
import PlayerResourceMock from '../resources/player/mock';
import PlayerResource from '../resources/player';

export const RECEIVE_INVENTORY = 'inventory:receiveItems';
export function receiveItems(items) {
  return {
    type: RECEIVE_INVENTORY,
    payload: { items },
  };
}

export const EQUIP_ITEM = 'inventory:equipItem';
export function equipItem(item) {
  return {
    type: EQUIP_ITEM,
    payload: { item },
  };
}

function fetchItems() {
  const resource = dotenvConfiguration.API_URL ? PlayerResource : PlayerResourceMock;

  return (dispatch) => {
    resource.getInventory()
      .then((response) => {
        dispatch(receiveItems(response.data.items));
      });
  };
}

export const REQUEST_INVENTORY = 'inventory:requestInventory';
export function requestItems() {
  return (dispatch) => {
    dispatch(fetchItems());
  };
}
