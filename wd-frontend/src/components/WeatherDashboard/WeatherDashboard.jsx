import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import WeatherWidget from './WeatherWidget';

export class WeatherDashboard extends Component {
  renderWidgets = () => this.props.widgets.map((widget, index) => 
    <WeatherWidget key={index} widget={widget}/>);

  render() {
    return (
      <Paper>
        <div className='wd-weather-dashboard'>
            {this.renderWidgets()}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  widgets: state.widget.widgets,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherDashboard);
