import Axios from 'axios';

console.log(process.env.VUE_APP_HOST_TO_API);

const axios = Axios.create({
  baseURL: process.env.VUE_APP_HOST_TO_API,
});

export default axios;
