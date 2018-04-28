import axios from 'axios';
import dotenvConfiguration from '../../dotenv-configuration';

const PlayerResource = {
  getPlayer(playerLogin) {
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}`);
  },

  getInventory(playerLogin) {
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}/inventory`);
  },

  equipItem(playerLogin, itemId) {
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}/inventory/${itemId}/equip`);
  },

  unequipItem(playerLogin, itemId) {
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}/inventory/${itemId}/unequip`);
  },
};

export default PlayerResource;
