import axios from 'axios';

const ApiService = {
  customRequest(data: object) {
    return axios(data);
  },

  init(baseURL: string | undefined) {
    axios.defaults.baseURL = baseURL;
  },
};

export default ApiService;
