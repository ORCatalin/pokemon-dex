import Axios from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';

const instance = Axios.create();
const axios = setupCache(instance, {
  storage: buildWebStorage(localStorage),
});

export default axios;
