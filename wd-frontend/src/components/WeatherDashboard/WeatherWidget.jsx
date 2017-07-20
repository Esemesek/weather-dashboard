import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

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
        <CardActions>
          <IconButton tooltip='Refresh' tooltipPosition='top-center' touch={true}>
            <Refresh/>
          </IconButton>
          <IconButton tooltip='Delete' tooltipPosition='top-center' touch={true}>
            <Delete/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
