import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

import { removeWidget } from '../../actions/widget';

class WeatherWidget extends Component {
  removeWidget = () => {
    this.props.deleteWidget(this.props.widget.id);
  }

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
          <IconButton
            tooltip='Delete'
            tooltipPosition='top-center'
            touch={true}
            onClick={this.removeWidget}>
            <Delete/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteWidget: id => dispatch(removeWidget(id)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(WeatherWidget);
