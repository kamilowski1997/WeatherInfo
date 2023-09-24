import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { StyledMainStack } from './HomePage.styled';
import CheckCurrentWeatherForm from '../../components/CheckCurrentWeatherForm/CheckCurrentWeatherForm';
import { enCommon } from '../../consts/locales/en';
import { Weather } from '../../utils/types';
import WeatherList from '../../components/WeatherList/WeatherList';

const HomePage = () => {
  const [weatherList, setWeatherList] = useState<Weather[]>([]);

  return (
    <Container>
      <StyledMainStack spacing={2}>
        <Typography variant="h3">{enCommon.HomeHeaderText}</Typography>
        <Typography variant="body1">{enCommon.AboutWeatherCheckForm}</Typography>
        <CheckCurrentWeatherForm setWeatherList={setWeatherList} />
        <WeatherList weatherList={weatherList} />
      </StyledMainStack>
    </Container>
  );
};

export default HomePage;
