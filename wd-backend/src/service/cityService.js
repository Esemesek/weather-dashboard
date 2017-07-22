import citiesJson from '../../city.list.json';
import Logger from '../logger';

class CityService {
  cities = [];

  constructor() {
    this.cities = this.buildCityList();
  }

  getCityByName = name => this.cities.find(city => city === name);

  cityAutocomplete = search => this.cities.filter(city => city.includes(search));

  buildCityList = () => {
    Logger.info('Building city list');
    return this.cities = citiesJson.map(city => city.name);
  }
}

export default new CityService();
