import { message } from 'antd';
import axiosInstance from './axios';
import { AddressDTO, ResponseDTO, WeatherForecastDTO } from './dto';

const getForecast = async (address: AddressDTO) => {
  const queryParams = new URLSearchParams(Object.entries(address)).toString();
  try {
    const resp = await axiosInstance.get<ResponseDTO<WeatherForecastDTO>>(
      `/v1/weatherforecast/?${queryParams}`
    );

    return resp;
  } catch (error) {
    message.error('API not responding');
  }
};

export const api = {
  getForecast,
};
