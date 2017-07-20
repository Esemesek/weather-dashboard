import express from 'express';
import fetch from 'node-fetch';

import config from '../../application.config.json';
import Logger from '../logger';
import CityService from '../service/cityService';
import WeatherParserService from '../service/weatherParserService';

const router = express.Router();

const makeWeatherRequestUrl = (city) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.appId}`;

const getWeather = (city) => 
  fetch(makeWeatherRequestUrl(city))
    .then(res => res.json())
    .catch(err => {
      throw new Error(err);
    });

router.get('/:city', async (request, response) => {
  Logger.info(`Get weather for ${request.params.city}`);

  try {
    response.json(
      WeatherParserService.parse(
        await getWeather(request.params.city),
      ),
    );
  } catch (e) {
    response.sendStatus(503);
  }
});

export default router;
