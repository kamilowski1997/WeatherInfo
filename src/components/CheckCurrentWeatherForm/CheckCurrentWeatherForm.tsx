import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { enCommon } from '../../consts/locales/en';

const CheckCurrentWeatherForm = () => {
  const [cityName, setCityName] = useState('');

  const onSubmit = () => {
    alert(cityName);
  };

  return (
    <Stack>
      <Stack direction="row">
        <TextField
          required
          label={enCommon.CheckCurrentWeatherForm.CityName}
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button onClick={onSubmit}>{'Submit'}</Button>
      </Stack>
    </Stack>
  );
};

export default CheckCurrentWeatherForm;
