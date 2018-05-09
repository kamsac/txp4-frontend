import axios from 'axios/index';
import dotenvConfiguration from '../../dotenv-configuration';

const AuthResource = {
  login(magicLinkToken) {
    return axios.get(`${dotenvConfiguration.API_URL}/auth/${magicLinkToken}`);
  },
};

export default AuthResource;
