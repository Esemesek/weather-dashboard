export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';

const fetchCitiesRequest = () => ({
  type: FETCH_CITIES_REQUEST,
});

const fetchCitiesFailure = (error) => ({
  type: FETCH_CITIES_FAILURE,
  error,
});

const fetchCitiesSuccess = (response) => ({
  type: FETCH_CITIES_SUCCESS,
  response,
});

const cities = [
  'Wrocław',
  'Świdnica',
  'Warszawa',
  'Poznań',
  'Kalisz',
  'Jelenia Góra',
];

export const fetchCities = (query) => (dispatch) => {
  dispatch(fetchCitiesRequest());

  return dispatch(fetchCitiesSuccess(
    cities.filter(c => c.includes(query)),
  ));
}
