import axios from 'axios';
import dotenvConfiguration from '../../dotenv-configuration';

const VendorsResource = {
  getVendors() {
    return axios.get(`${dotenvConfiguration.API_URL}/vendors`);
  },
};

export default VendorsResource;
