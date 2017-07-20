import express from 'express';

import Logger from '../logger';
import CityService from '../service/cityService';

const router = express.Router();

router.get('/autocomplete/:city', (request, response) => {
  Logger.info(`City autocomplete: ${request.params.city}`);
  response.json(CityService.cityAutocomplete(request.params.city));
});

export default router;
