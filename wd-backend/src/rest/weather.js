import express from 'express';
import fetch from 'node-fetch';

import config from '../../application.config.json';
import Logger from '../logger';
import WeatherParserService from '../service/weatherParserService';

class WeatherRouter {
  router = express.Router();

  constructor() {
    this.router.get('/:city', this.getWeatherForCity);
  }

  setAppId = appId => this.appId = appId;

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

  makeWeatherRequestUrl = city => `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appId}`;
}

class WeatherRouterBuilder {
  constructor() {
    this.instance = new WeatherRouter();
  }

  setAppId = (appId) => {
    this.instance.setAppId(appId);
    return this;
  }

  build = () => this.instance;
}

export default new WeatherRouterBuilder()
  .setAppId(config.appId)
  .build();
