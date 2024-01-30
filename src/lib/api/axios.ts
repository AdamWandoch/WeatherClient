import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  HttpStatusCode,
} from 'axios';
import { handleErrorStatus } from '../util';

const API = {
  URL: import.meta.env.VITE_WEATHER_API_URL,
  KEY: import.meta.env.VITE_WEATHER_API_KEY,
  KEY_HEADER_NAME: import.meta.env.VITE_WEATHER_API_KEY_HEADER_NAME,
};

export const axiosConfig = (): AxiosRequestConfig => {
  return {
    baseURL: API.URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig());

axiosInstance.interceptors.request.use((config) => {
  config.headers[API.KEY_HEADER_NAME] = API.KEY;
  return config;
});

export const handledErrorCodes = [
  HttpStatusCode.UnprocessableEntity,
  HttpStatusCode.InternalServerError,
  HttpStatusCode.Unauthorized,
];

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 422 || error.response.status === 500) {
    if (handledErrorCodes.includes(error.response.status)) {
      handleErrorStatus(error.response.data.errors, error.response.status);
    }
  }
);

export default axiosInstance;
