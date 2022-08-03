import axios from "axios";
import { Toast } from "vant";
const baseURL = "http://localhost:8080";
import store from "@/store";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {},
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = store.state.user.token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.data && response.data.err == 0) {
      return response.data;
    }

    if (response.data && response.data.err == 1) {
      Toast.fail(response.data.msg);
      return null;
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
