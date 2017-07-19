import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

injectTapEventPlugin();

const AppContainer = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<AppContainer/>, document.getElementById('wd-app'));
