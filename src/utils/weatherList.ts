import { DisplayWeather, Weather } from './types';
import { uniqBy, countBy } from 'lodash';

export const mapWeatherListToDisplayWeatherList = (weatherList: Weather[]): DisplayWeather[] => {
  const countArray = countBy(weatherList, 'cityName');

  return uniqBy(weatherList, 'cityName').map((weather) => ({
    searchedTimes: countArray[weather.cityName],
    ...weather,
  }));
};
