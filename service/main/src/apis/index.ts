import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: "https://api.dsm-repo.com",
  timeout: 3000,
});

instance.interceptors.request.use(
  async function (config) {
    config.headers = {
      'X-Not-Using-Xquare-Auth': 'true'
    };
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
