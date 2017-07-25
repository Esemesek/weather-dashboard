import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';

import {
  REFRESH_WIDGET_REQUEST,
  REFRESH_WIDGET_SUCCESS,
  REFRESH_WIDGET_FAILURE,
  refreshWidget,
} from './refresh';

const CITY_NAME = 'SomeCity';
const WIDGET_ID = '123';
const WEATHER_URL = `/server/weather/${CITY_NAME}`;
const WEATHER_MOCK = { city: CITY_NAME, description: 'Some random description' };
const ERROR = 'error';
const mockStore = configureMockStore([thunk]);

describe('Refresh action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch success actions', () => {
    fetchMock.get(WEATHER_URL, WEATHER_MOCK);

    const expectedActions = [
      { type: REFRESH_WIDGET_REQUEST },
      { type: REFRESH_WIDGET_SUCCESS, response: WEATHER_MOCK, id: WIDGET_ID },
    ];

    const store = mockStore();

    return store.dispatch(refreshWidget(WIDGET_ID, CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    });
  });

  it('should dispatch failure actions', () => {
    fetchMock.get(WEATHER_URL, {
      status: 500,
      throws: ERROR,
    });

    const expectedActions = [
      { type: REFRESH_WIDGET_REQUEST },
      { type: REFRESH_WIDGET_FAILURE, error: ERROR },
    ];

    const store = mockStore();

    return store.dispatch(refreshWidget(WIDGET_ID, CITY_NAME)).then(() => {
      expect(store.getActions()).to.be.deep.equal(expectedActions);
    });
  });
});
