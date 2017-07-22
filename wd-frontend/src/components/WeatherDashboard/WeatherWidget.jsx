import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import WeatherWidgetActions from './WeatherWidgetActions';

export default class WeatherWidget extends Component {
  render() {
    return (
      <Card className='wd-weather-widget'>
        <CardHeader
          className='wd-widget-header'
          title={this.props.widget.city}
          subtitle={this.props.widget.name}/>
        <CardText>
          <article>Temperature: {this.props.widget.temperature}</article>
          <article>Pressure: {this.props.widget.pressure}</article>
          <article>Humidity: {this.props.widget.humidity}</article>
          <article>Wind Speed: {this.props.widget.windSpeed}</article>
        </CardText>
        <WeatherWidgetActions
          id={this.props.widget.id}
          city={this.props.widget.city}/>
      </Card>
    );
  }
}
