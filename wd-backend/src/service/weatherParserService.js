class WeatherParserService {
  static parse = (rawData) => ({
    city: rawData.name,
    name: rawData.weather[0].main,
    description: rawData.weather[0].description,
    temperature: rawData.main.temp,
    pressure: rawData.main.pressure,
    humidity: rawData.main.humidity,
    windSpeed: rawData.wind.speed,
  });
}

export default WeatherParserService;
