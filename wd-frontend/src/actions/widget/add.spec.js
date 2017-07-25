import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';

import {
  ADD_WIDGET_REQUEST,
  ADD_WIDGET_SUCCESS,
  ADD_WIDGET_FAILURE,
  addWidget,
} from './add'

const CITY_NAME = 'SomeCity';
const WEATHER_URL = `/server/weather/${CITY_NAME}`;
const WEATHER_MOCK = { city: CITY_NAME, description: 'Some description' };
const ERROR = 'error';
const mockStore = configureMockStore([thunk]);

describe('Add actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch success actions', () => {
    fetchMock.get(WEATHER_URL, WEATHER_MOCK);

    const expectedActions = [
      { type: ADD_WIDGET_REQUEST },
      { type: ADD_WIDGET_SUCCESS, response: WEATHER_MOCK },
    ];

    const store = mockStore();

    return store.dispatch(addWidget(CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    });
  });

  it('should dispach failure actions', () => {
    fetchMock.get(WEATHER_URL, {
      status: 500,
      throws: ERROR,
    });

    const expectedActions = [
      { type: ADD_WIDGET_REQUEST },
      { type: ADD_WIDGET_FAILURE, error: ERROR },
    ];

    const store = mockStore();

    return store.dispatch(addWidget(CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    });
  });
});
