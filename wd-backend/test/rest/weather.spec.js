import express from 'express';
import request from 'supertest';
import proxyquire from 'proxyquire';
import { expect } from 'chai';

const WEATHER = {
  CITY: 'SomeRandomCity',
  DESCRIPTION: 'There are alot of cloud out there',
  NAME: 'Cloudy',
  TEMPERATURE: 200,
  PRESSURE: 1000,
  HUMIDITY: 80,
  WIND_SPEED: 3,
};

const RAW_WEATHER_INFO = {
  name: WEATHER.CITY,
  weather: [{
    main: WEATHER.NAME,
    description: WEATHER.DESCRIPTION,
  }],
  main: {
    temp: WEATHER.TEMPERATURE,
    pressure: WEATHER.PRESSURE,
    humidity: WEATHER.HUMIDITY,
  },
  wind: {
    speed: WEATHER.WIND_SPEED,
  }
};

const PARSED_WEATHER_INFO = {
  city: WEATHER.CITY,
  description: WEATHER.DESCRIPTION,
  humidity: WEATHER.HUMIDITY,
  name: WEATHER.NAME,
  pressure: WEATHER.PRESSURE,
  temperature: WEATHER.TEMPERATURE,
  windSpeed: WEATHER.WIND_SPEED,
};

const APP_ID = '1234';
const API_DOMAIN = 'http://api.openweathermap.org';
const API_URL = `/data/2.5/weather?q=${WEATHER.CITY}&appid=${APP_ID}`;
const nodeFetchStub = { 'node-fetch': () => Promise.resolve({ json: () => RAW_WEATHER_INFO })};

describe('Weather router', () => {
  let app;
  let weatherRouter;

  beforeEach(() => {
    weatherRouter = proxyquire('../../src/rest/weather', nodeFetchStub);
    weatherRouter.default.appId = APP_ID;
    app = express();
    app.use('/', weatherRouter.default.router);
  });

  it('should provide weather endpoint', (done) => {
    request(app)
      .get(`/${WEATHER.CITY}`)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.deep.equal(PARSED_WEATHER_INFO);
        done();
      });
  });
});
