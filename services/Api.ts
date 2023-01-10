import axios from 'axios';
import { useRouter } from 'next/router';

const ApiService = {
  _401interceptor: null || 0,

  customRequest(data: object) {
    return axios(data);
  },

  init(baseURL: string | undefined) {
    axios.defaults.baseURL = baseURL;
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        console.log(err);
      }
    );
  },

  unmount401Interceptor() {
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
