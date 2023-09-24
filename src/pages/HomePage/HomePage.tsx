import React from 'react';
import { Container, Typography } from '@mui/material';
import { StyledMainStack } from './HomePage.styled';
import CheckCurrentWeatherForm from '../../components/CheckCurrentWeatherForm/CheckCurrentWeatherForm';
import { enCommon } from '../../consts/locales/en';

const HomePage = () => {
  return (
    <Container>
      <StyledMainStack>
        <Typography variant="h3">{enCommon.HomeHeaderText}</Typography>
        <Typography variant="subtitle1">{enCommon.AboutWeatherCheckForm}</Typography>
        <CheckCurrentWeatherForm />
      </StyledMainStack>
    </Container>
  );
};

export default HomePage;
