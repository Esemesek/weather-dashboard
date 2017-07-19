export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';

const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  error,
});

const fetchWeatherSuccess = (response) => ({
  type: FETCH_WEATHER_SUCCESS,
  response,
});

export const fetchWeather = (city) => (dispatch) => {
  dispatch(fetchWeatherRequest());
}
