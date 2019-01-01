import axios from 'axios';
import store from '@/store/store';

export default() => axios.create({
  // baseURL: 'http://localhost:8081/',
  // baseURL: 'https://dizzytap.herokuapp.com/',
  // eslint-disable-next-line no-undef
  baseURL: `${__API_URL__}`,
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
});
