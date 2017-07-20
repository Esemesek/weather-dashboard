export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const REFRESH_WIDGET = 'REFRESH_WIDGET';

export const ADD_WIDGET_REQUEST = 'ADD_WIDGET_REQUEST';
export const ADD_WIDGET_FAILURE = 'ADD_WIDGET_FAILURE';
export const ADD_WIDGET_SUCCESS = 'ADD_WIDGET_SUCCESS';

const addWidgetRequest = () => ({
  type: ADD_WIDGET_REQUEST,
});

const addWidgetFailure = (error) => ({
  type: ADD_WIDGET_FAILURE,
  error,
});

const addWidgetSuccess = (response) => ({
  type: ADD_WIDGET_SUCCESS,
  response,
});

export const addWidget = (city) => (dispatch) => {
  dispatch(addWidgetRequest());

  return fetch(`/server/weather/${city}`)
    .then(res => res.json())
    .then(json => dispatch(addWidgetSuccess(json)))
    .catch(err => dispatch(addWidgetFailure(err)));
}
