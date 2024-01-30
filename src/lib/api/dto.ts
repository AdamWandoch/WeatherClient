export interface AddressDTO {
  Number: number;
  Street: string;
  City: string;
  State: string;
  ZipCode: number;
}

type Dictionary = { [key: string]: string[] };

export interface ResponseDTO<T> {
  responseData: T;
  errors: Dictionary;
}

export interface WeatherForecastDTO {
  periods: PeriodDTO[];
}

export interface PeriodDTO {
  number: number;
  name: string;
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  relativeHumidity: HumidityDTO;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface HumidityDTO {
  value: number;
}
