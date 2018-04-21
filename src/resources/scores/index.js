import axios from 'axios';
import dotenvConfiguration from '../../dotenv-configuration';

const ScoresResource = {
  getScores() {
    return axios.get(`${dotenvConfiguration.API_URL}/scores`);
  },
};

export default ScoresResource;
