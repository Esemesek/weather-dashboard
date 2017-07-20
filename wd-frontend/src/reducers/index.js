import { combineReducers } from 'redux';

import autocomplete from './autocomplete';
import widget from './widget';

export default combineReducers({
  autocomplete,
  widget,
});
