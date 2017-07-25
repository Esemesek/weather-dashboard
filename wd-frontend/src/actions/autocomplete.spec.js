import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';

import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
  fetchCities,
} from './autocomplete';

const CITY_NAME = 'SomeCity';
const AUTOCOMPLETE_URL = `/server/city/autocomplete/${CITY_NAME}`;
const CITY_LIST = ['Wroclaw', 'Swidnica'];
const ERROR = 'error';
const mockStore = configureMockStore([thunk]);

describe('Autocomplete actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dipatch success actions', () => {
    fetchMock.get(AUTOCOMPLETE_URL, CITY_LIST)

    const expectedActions = [
      { type: FETCH_CITIES_REQUEST },
      { type: FETCH_CITIES_SUCCESS, response: CITY_LIST },
    ];

    const store = mockStore();

    return store.dispatch(fetchCities(CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    })
  });

  it('should dispatch failure actions', () => {
    fetchMock.get(AUTOCOMPLETE_URL, {
      status: 500,
      throws: ERROR,
    });

    const expectedActions = [
      { type: FETCH_CITIES_REQUEST },
      { type: FETCH_CITIES_FAILURE, error: ERROR },
    ];

    const store = mockStore();

    return store.dispatch(fetchCities(CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    });
  });
});
