import axios from 'axios';
import dotenvConfiguration from '../../dotenv-configuration';

const InventoryResource = {
  getItems(userLogin) {
    return axios.get(`${dotenvConfiguration.API_URL}/${userLogin}/items`);
  },

  equipItem(item) {
    return axios.get(`${dotenvConfiguration.API_URL}/`);
  },
};

export default InventoryResource;
