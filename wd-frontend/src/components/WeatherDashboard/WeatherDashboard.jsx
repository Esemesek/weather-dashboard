import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import WeatherWidget from './WeatherWidget';
import WeatherDashboardAlert from './WeatherDashboardAlert';

export class WeatherDashboard extends Component {
  renderWidgets = () => this.props.widgets.map((widget, index) => 
    <WeatherWidget key={index} widget={widget}/>);

  render() {
    return (
      <div>
        <Paper>
          <div className='wd-weather-dashboard'>
              {this.renderWidgets()}
          </div>
        </Paper>
        <WeatherDashboardAlert/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  widgets: state.widget.list || [],
});

export default connect(
  mapStateToProps,
)(WeatherDashboard);
