import { DisplayWeather } from '../../utils/types';
import { Stack, Typography } from '@mui/material';
import { StyledMainPaper } from './WeatherListComponent.styled';
import * as dayjs from 'dayjs';

type Props = {
  weather: DisplayWeather;
};

const WeatherListComponent = ({ weather }: Props) => {
  return (
    <StyledMainPaper>
      <Stack spacing={1}>
        <Typography variant="h6" fontWeight={500}>
          {weather.cityName}
        </Typography>
        <Typography variant="body1" fontWeight={500}>{`${weather.temperature} °C`}</Typography>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="body2" fontWeight={400}>
            {dayjs(weather.date).format('YYYY-MM-DD HH:mm')}
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            {`searched: ${weather.searchedTimes} time(s)`}
          </Typography>
        </Stack>
      </Stack>
    </StyledMainPaper>
  );
};

export default WeatherListComponent;
