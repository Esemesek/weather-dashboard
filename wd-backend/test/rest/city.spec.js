import express from 'express';
import request from 'supertest';
import { expect } from 'chai';
import { stub } from 'sinon';

import cityRouter from '../../src/rest/city';
import CityService from '../../src/service/cityService';

const CITY_NAME = 'SomeCity';
const CITIES = ['Wroclaw', 'Swidnica'];
const app = express();

describe('City router', () => {
  let app;
  let autocompleteStub;

  beforeEach(() => {
    app = express();
    app.use('/', cityRouter.router);
  });

  it('should provide autocomplete endpoint', (done) => {
    autocompleteStub = stub(cityRouter.cityService, 'cityAutocomplete')
      .withArgs(CITY_NAME)
      .onFirstCall().returns(CITIES);

    request(app)
      .get(`/autocomplete/${CITY_NAME}`)
      .expect(200)
      .end((err, res) => {
        expect(autocompleteStub.called).to.be.true;
        expect(res.body).to.be.deep.equal(CITIES);
        done();
      });
  });
});
