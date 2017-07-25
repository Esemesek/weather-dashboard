import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

import WeatherWidgetActions from './WeatherWidgetActions';

export default class WeatherWidget extends Component {
  static propTypes = {
    widget: PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { widget } = this.props;

    return (
      <Card className='wd-weather-widget'>
        <CardHeader
          className='wd-widget-header'
          title={widget.city}
          subtitle={widget.name}/>
        <CardText>
          <article>Temperature: {widget.temperature}</article>
          <article>Pressure: {widget.pressure}</article>
          <article>Humidity: {widget.humidity}</article>
          <article>Wind Speed: {widget.windSpeed}</article>
        </CardText>
        <WeatherWidgetActions
          id={widget.id}
          city={widget.city}/>
      </Card>
    );
  }
}
