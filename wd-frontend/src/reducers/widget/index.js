import * as widgetActions from '../../actions/widget';
import * as addReductors from './add';
import * as refreshReductors from './refresh';
import removeReductors from './remove';
import alertReductors from './alert';

const DEFAULT_STATE = {
  alert: {
    open: false,
    message: '',
  },
  list: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case widgetActions.ADD_WIDGET_REQUEST:
      return addReductors.addWidgetRequest(state);
    case widgetActions.ADD_WIDGET_SUCCESS:
      return addReductors.addWidgetSuccess(state, action);
    case widgetActions.ADD_WIDGET_FAILURE:
      return addReductors.addWidgetFailure(state, action);
    case widgetActions.REMOVE_WIDGET:
      return removeReductors.removeWidget(state, action);
    case widgetActions.REFRESH_WIDGET_REQUEST:
      return refreshReductors.refreshWidgetRequest(state);
    case widgetActions.REFRESH_WIDGET_SUCCESS:
      return refreshReductors.refreshWidgetSuccess(state, action);
    case widgetActions.REFRESH_WIDGET_FAILURE:
      return refreshReductors.refreshWidgetFailure(state, action);
    case widgetActions.CLOSE_WIDGET_ALERT:
      return alertReductors.closeWidgetAlert(state);
    default:
      return state;
  }
};
