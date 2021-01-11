export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = `${Math.round(data.main.temp - 273.15)}°C`
    this.fahrenheit = `${Math.round((data.main.temp - 273.15) * 9 / 5 + 32)}°F`
    this.imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }



  get Template() {
    return /*html*/`
    <img src="${this.imgUrl}" id="weather-image" ></img>
    <span id="weather-type" >${this.fahrenheit}</span>
    `
  }
}