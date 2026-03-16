import axios from 'axios';
import { ClearLocalStorage, GetLocalStorage } from '../utils/helpers';
import store from '../store/store';
import { logout } from '../features/login/reducer/authSlice';
import { sessionModalHandler } from '../utils/sessionModalHandler';

const Axios = axios.create({
	baseURL: "http://localhost:3000",
	// baseURL: "http://localhost:3002",
	// baseURL: "http://localhost:3008",


	timeout: 500000,
	headers: {
		'Content-Type': 'application/json',
	},
});

Axios.interceptors.request.use(
  (config) => {
    const token = GetLocalStorage("AuthToken");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {

    if (!error.response) {
      ClearLocalStorage();
      store.dispatch(logout());
      sessionModalHandler.open();
      return error;
    }

    if (error.response && error.response.status === 401) {
       ClearLocalStorage();
       store.dispatch(logout())
       sessionModalHandler.open()
       return error?.response
    }
    else if (error.response && error.response.status === 400) {
      return(error?.response);
    }
    else if (error.response && error.response.status === 403) {
      return(error?.response);
    }
    else{
      return error
    }
  }
);

class HttpClient {
  async get(url: string, params?: any) {
    const response = await Axios.get(url, { params });
    return response.data;
  }

  async post(url: string, data?: any, params?: any) {
    const response = await Axios.post(url, data, { params });
    return response.data;
  }

  async put(url: string, data?: any) {
    const response = await Axios.put(url, data);
    return response.data;
  }

  async delete(url: string, params?: any) {
    const response = await Axios.delete(url, { params });
    return response.data;
  }
}

export default new HttpClient();
