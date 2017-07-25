import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

import WeatherWidget from './WeatherWidget';
import WeatherDashboardAlert from './WeatherDashboardAlert';

export class WeatherDashboard extends Component {
  static propTypes = {
    widgets: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <Paper>
          {this.renderContent()}
        </Paper>
        <WeatherDashboardAlert/>
      </div>
    );
  }

  renderContent = () => {
    if (!this.props.widgets.length) {
      return this.renderNoWidgetsMsg();
    }

    return this.renderWidgetPanel();
  }

  renderNoWidgetsMsg = () => (
    <div className='wd-center-label'>
      <h1>There are no widgets :C</h1>
    </div>
  );

  renderWidgetPanel = () => (
    <div className='wd-weather-dashboard'>
      {this.renderWidgets()}
    </div>
  );

  renderWidgets = () => this.props.widgets.map((widget, index) => <WeatherWidget key={index} widget={widget}/>);
}

const mapStateToProps = (state) => ({
  widgets: state.widget.list,
});

export default connect(
  mapStateToProps,
)(WeatherDashboard);
