import React from 'react';
import { Weather } from '../../utils/types';
import WeatherListComponent from '../WeatherListComponent/WeatherListComponent';
import { Stack } from '@mui/material';
import { mapWeatherListToDisplayWeatherList } from '../../utils/weatherList';

type Props = {
  weatherList: Weather[];
};

const WeatherList = ({ weatherList }: Props) => {
  return (
    <Stack spacing={2} marginTop={'24px'}>
      {mapWeatherListToDisplayWeatherList(weatherList).map((weather, index) => (
        <WeatherListComponent key={index} weather={weather} />
      ))}
    </Stack>
  );
};

export default WeatherList;
