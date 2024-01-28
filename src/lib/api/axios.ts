import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API = {
  URL: import.meta.env.VITE_WEATHER_API_URL,
  KEY: import.meta.env.VITE_WEATHER_API_KEY,
};

export const axiosConfig = (): AxiosRequestConfig => {
  return {
    baseURL: API.URL,
    headers: {
      'Content-Type': 'application/json',
      'WEATHER-API-KEY': API.KEY,
    },
  };
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig());

// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.headers[API.KEY_HEADER_NAME] = API.KEY_HEADER_VALUE;
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
