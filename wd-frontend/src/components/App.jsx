import React, { Component } from 'react';

import DashboardToolbar from './DashboardToolbar';
import WeatherDashboard from './WeatherDashboard';

export default class App extends Component {
  render() {
    return (
      <section>
        <DashboardToolbar/>
        <WeatherDashboard/>
      </section>
    );
  }
}
