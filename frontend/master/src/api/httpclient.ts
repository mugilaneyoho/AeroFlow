import axios from "axios";
import { ClearLocalStorage, GetLocalStorage } from "../utils/SecureStorage";


const Axios = axios.create({
 baseURL: "http://localhost:3000",

  timeout: 500000,
  headers: { "Content-Type": "application/json" },
});

Axios.interceptors.request.use(
  (config) => {
    const token = GetLocalStorage("af_a_tk");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
       ClearLocalStorage();
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
