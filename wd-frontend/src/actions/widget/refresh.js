export const REFRESH_WIDGET_REQUEST = 'REFRESH_WIDGET_REQUEST';
export const REFRESH_WIDGET_SUCCESS = 'REFRESH_WIDGET_SUCCESS';
export const REFRESH_WIDGET_FAILURE = 'REFRESH_WIDGET_FAILURE';

const refreshWidgetRequest = () => ({
  type: REFRESH_WIDGET_REQUEST,
});

const refreshWidgetSuccess = (id, response) => ({
  type: REFRESH_WIDGET_SUCCESS,
  response,
  id,
});

const refreshWidgetFailure = error => ({
  type: REFRESH_WIDGET_FAILURE,
  error,
});

export const refreshWidget = (id, city) => (dispatch) => {
  dispatch(refreshWidgetRequest());

  return fetch(`/server/weather/${city}`)
    .then(res => res.json())
    .then(json => dispatch(refreshWidgetSuccess(id, json)))
    .catch(err => dispatch(refreshWidgetFailure(err)));
};
