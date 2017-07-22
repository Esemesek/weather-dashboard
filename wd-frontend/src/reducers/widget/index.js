import uuid from 'uuid/v4';

import * as widgetActions from '../../actions/widget';
import * as addReductors from './add';
import * as removeReductors from './remove';
import * as refreshReductors from './refresh';

const DEFAULT_STATE = {
  widgets: []
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
    default:
      return state;
  }
}
