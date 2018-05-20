import dotenvConfiguration from '../dotenv-configuration';
import PlayerResourceMock from '../resources/players/mock';
import PlayerResource from '../resources/players';

export const INVENTORY_REQUEST = 'INVENTORY_REQUEST';
export const INVENTORY_SUCCESS = 'INVENTORY_SUCCESS';
export const INVENTORY_FAILURE = 'INVENTORY_FAILURE';
export const EQUIP_REQUEST = 'EQUIP_REQUEST';
export const EQUIP_SUCCESS = 'EQUIP_SUCCESS';
export const EQUIP_FAILURE = 'EQUIP_FAILURE';

export function requestInventory(playerLogin) {
  return {
    type: INVENTORY_REQUEST,
    payload: {
      isFetching: true,
      playerLogin,
    },
  };
}

export function receiveInventory(playerLogin, inventory) {
  return {
    type: INVENTORY_SUCCESS,
    payload: {
      isFetching: false,
      playerLogin,
      inventory,
    },
  };
}

export function inventoryError(playerLogin) {
  return {
    type: INVENTORY_FAILURE,
    payload: {
      isFetching: false,
      playerLogin,
    },
  };
}

export function requestEquipItem(playerLogin, item) {
  return {
    type: EQUIP_REQUEST,
    payload: {
      isFetching: true,
      playerLogin,
      item,
    },
  };
}

export function receiveEquipItem(playerLogin, inventory) {
  return {
    type: EQUIP_SUCCESS,
    payload: {
      isFetching: false,
      playerLogin,
      inventory,
    },
  };
}

export function equipItemError(playerLogin) {
  return {
    type: EQUIP_FAILURE,
    payload: {
      isFetching: false,
      playerLogin,
    },
  };
}

export function loadPlayerInventory(playerLogin) {
  return (dispatch) => {
    dispatch(requestInventory(playerLogin));

    const resource = dotenvConfiguration.API_URL ? PlayerResource : PlayerResourceMock;
    resource.getInventory(playerLogin)
      .then((response) => {
        dispatch(receiveInventory(playerLogin, response.data.inventory));
      })
      .catch(() => {
        dispatch(inventoryError(playerLogin));
      });
  };
}

export function equipItem(playerLogin, item) {
  return (dispatch) => {
    dispatch(requestEquipItem(playerLogin, item));

    const resource = dotenvConfiguration.API_URL ? PlayerResource : PlayerResourceMock;
    resource.equipItem(playerLogin, item.id)
      .then((response) => {
        dispatch(receiveEquipItem(playerLogin, response.data.inventory));
      })
      .catch(() => {
        dispatch(equipItemError(playerLogin));
      });
  };
}
