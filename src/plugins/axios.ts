import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
  baseURL: process.env.VUE_APP_HOST_TO_API,
});

axios.interceptors.request.use(
  (config) => {
    config.paramsSerializer = (params) => qs.stringify(params, {
      skipNulls: true,
      arrayFormat: 'brackets',
    });

    return config;
  },

  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.message),
);

export default axios;
