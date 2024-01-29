import axiosInstance from './axios';
import { AddressDTO, ResponseDTO, WeatherForecastDTO } from './dto';

const getForecast = async (address: AddressDTO) => {
  const queryParams = new URLSearchParams(Object.entries(address)).toString();
  const resp = await axiosInstance.get<ResponseDTO<WeatherForecastDTO>>(
    `/v1/weatherforecast/?${queryParams}`
  );

  return resp;
};

export const api = {
  getForecast,
};
