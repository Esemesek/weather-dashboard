import express from 'express';

import Logger from '../logger';
import CityService from '../service/cityService';

class CityRouter {
  static build = () => new CityRouter().router;

  router = express.Router();

  constructor() {
    this.router.get('/autocomplete/:city', this.getAutocompleteCity);
  }

  getAutocompleteCity = (request, response) => {
    Logger.info(`City autocomplete: ${request.params.city}`);
    response.json(CityService.cityAutocomplete(request.params.city));
  }
}

export default CityRouter.build();
