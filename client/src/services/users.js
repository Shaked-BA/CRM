import axios from 'axios';

axios.defaults.withCredentials = true;
const api = axios.create({baseURL: process.env.REACT_APP_SERVERURL});

  export const getUser = (setUserId) => {
    api
      .get('/users')
      .then((response) => { setUserId(response.data.id); })
      .catch((error) => { console.log(error); });
};
