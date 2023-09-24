import axios from 'axios';

const baseURL = 'https://geocoding-api.open-meteo.com/v1/search';

class GeolocationAPIService {
  private axios = axios.create({ baseURL });

  getCityGeolocation = (cityName: string) => this.axios.get(`/?name=${cityName}`);
}

export default new GeolocationAPIService();
