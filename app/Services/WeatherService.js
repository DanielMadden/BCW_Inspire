import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";
import { displayService } from "./DisplayService.js";

class WeatherService {
  async getWeather() {
    console.log("getting weather...")
    try {
      let res = await api.get('weather');
      ProxyState.weather = new Weather(res.data);
      this.ready()
    } catch (error) {
      console.error("Could not retrieve data from weather API")

      this.ready()
    }
  }

  ready() {
    displayService.status.weather = true;
  }
}

const weatherService = new WeatherService();
export default weatherService;