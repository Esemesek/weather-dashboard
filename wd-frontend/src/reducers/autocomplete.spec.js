import { expect } from 'chai';

import reducer from './autocomplete';
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from '../actions/autocomplete'

const CITIES = ['Wroclaw', 'Swidnica'];
const ERROR = 'error';
const DEFAULT_STATE = { cities: [] };
const FETCHING_STATE = {
  autocompleteStatus: {
    isFetching: true,
  },
  cities: [],
};

describe('Autocomplete reducer', () => {
  it(`should handle ${FETCH_CITIES_REQUEST}`, () => {
    expect(reducer(DEFAULT_STATE, {
      type: FETCH_CITIES_REQUEST,
    })).to.be.deep.equal(FETCHING_STATE);
  });

  it(`should handle ${FETCH_CITIES_SUCCESS}`, () => {
    const expectedState = {
      autocompleteStatus: {
        isFetching: false,
        success: true,
      },
      cities: CITIES,
    };

    expect(reducer(FETCHING_STATE, {
      type: FETCH_CITIES_SUCCESS,
      response: CITIES,
    })).to.be.deep.equal(expectedState);
  });

  it(`should handle ${FETCH_CITIES_FAILURE}`, () => {
    const expectedState = {
      autocompleteStatus: {
        isFetching: false,
        success: false,
        error: ERROR,
      },
      cities: [],
    };

    expect(reducer(FETCHING_STATE, {
      type: FETCH_CITIES_FAILURE,
      error: ERROR,
    })).to.be.deep.equal(expectedState);
  });
});
