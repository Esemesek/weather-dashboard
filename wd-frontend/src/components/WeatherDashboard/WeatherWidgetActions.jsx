import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete';
import { CardActions } from 'material-ui/Card';

import { removeWidget, refreshWidget } from '../../actions/widget';

export class WeatherWidgetActions extends Component {
  removeWidget = () => {
    this.props.remove(this.props.id);
  }

  refreshWidget = () => {
    this.props.refresh(this.props.id, this.props.city);
  }

  render() {
    return (
      <CardActions>
        <IconButton
          tooltip='Refresh'
          tooltipPosition='top-center'
          touch={true}
          onClick={this.refreshWidget}>
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  remove: id => dispatch(removeWidget(id)),
  refresh: (id, city) => dispatch(refreshWidget(id, city)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(WeatherWidgetActions);
