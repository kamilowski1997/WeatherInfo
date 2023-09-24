import axios from 'axios';

const baseURL = 'https://api.open-meteo.com/v1';

class WeatherAPIService {
  private axios = axios.create({ baseURL });

  getCurrentTemperature = (latitude: string, longitude: string) =>
    this.axios.get(`/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
}

export default new WeatherAPIService();
