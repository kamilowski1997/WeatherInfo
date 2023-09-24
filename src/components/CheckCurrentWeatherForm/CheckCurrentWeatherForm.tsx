import { Button, CircularProgress, FormHelperText, Stack } from '@mui/material';
import React, { useState } from 'react';
import { enCommon } from '../../consts/locales/en';
import { Weather } from '../../utils/types';
import GeolocationAPIService from '../../services/HTTPService/GeolocationAPIService';
import WeatherAPIService from '../../services/HTTPService/WeatherAPIService';
import { StyledTextField } from './CheckCurrentWeatherForm.styled';

type Props = {
  setWeatherList: React.Dispatch<React.SetStateAction<Weather[]>>;
};

const CheckCurrentWeatherForm = ({ setWeatherList }: Props) => {
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState(' ');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) {
      return;
    }
    error && setError(' ');

    setLoading(true);
    try {
      const cityGeolocationRes = await GeolocationAPIService.getCityGeolocation(cityName);

      if (cityGeolocationRes.data?.results?.length) {
        const cityGeolocation = {
          name: cityGeolocationRes.data.results[0].name,
          latitude: cityGeolocationRes.data.results[0].latitude,
          longitude: cityGeolocationRes.data.results[0].longitude,
        };

        const cityWeatherRes = await WeatherAPIService.getCurrentTemperature(
          cityGeolocation.latitude,
          cityGeolocation.longitude,
        );

        if (cityWeatherRes.data?.current_weather) {
          const cityWeather = {
            cityName: cityGeolocation.name,
            date: cityWeatherRes.data.current_weather.time,
            temperature: cityWeatherRes.data.current_weather.temperature,
          };

          setWeatherList((current) => {
            localStorage.setItem('weatherList', JSON.stringify([cityWeather, ...current]));
            return [cityWeather, ...current];
          });
        }
      }
    } catch (error) {
      setError(enCommon.CheckCurrentWeatherForm.errorMessage);
    }

    setLoading(false);
  };

  return (
    <Stack>
      <form onSubmit={onSubmit}>
        <Stack direction="row" spacing={1}>
          <StyledTextField
            required
            label={enCommon.CheckCurrentWeatherForm.CityName}
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={loading && <CircularProgress size={'24px'} color="inherit" />}
          >
            {'Submit'}
          </Button>
        </Stack>
        <FormHelperText error>{error}</FormHelperText>
      </form>
    </Stack>
  );
};

export default CheckCurrentWeatherForm;
