import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

let _fahrenheit = true

function _drawWeather() {
  document.getElementById("weather").innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  swapDisplay() {
    _fahrenheit ? _fahrenheit = false : _fahrenheit = true;
    document.getElementById("weather-type").innerText = _fahrenheit ? ProxyState.weather.fahrenheit : ProxyState.weather.celsius
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
