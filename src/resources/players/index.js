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
    const accessToken = localStorage.getItem('accessToken');
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}/inventory/${itemId}/equip`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  unequipItem(playerLogin, itemId) {
    const accessToken = localStorage.getItem('accessToken');
    return axios.get(`${dotenvConfiguration.API_URL}/players/${playerLogin}/inventory/${itemId}/unequip`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default PlayerResource;
