import express from 'express';
import fetch from 'node-fetch';

import config from '../../application.config.json';
import Logger from '../logger';
import CityService from '../service/cityService';
import WeatherParserService from '../service/weatherParserService';

class WeatherRouter {
  static build = () => new WeatherRouter().router;

  router = express.Router();

  constructor() {
    this.router.get('/:city', this.getWeatherForCity);
  }

  getWeatherForCity = async (request, response) => {
    Logger.info(`Get weather for ${request.params.city}`);

    try {
      response.json(
        WeatherParserService.parse(
          await this.getWeather(request.params.city),
        ),
      );
    } catch (e) {
      response.sendStatus(503);
    }
  }

  getWeather = city => 
    fetch(this.makeWeatherRequestUrl(city))
      .then(res => res.json())
      .catch(err => {
        throw new Error(err);
      });

  makeWeatherRequestUrl = city => `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.appId}`;
}

export default WeatherRouter.build();
