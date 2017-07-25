import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete';
import { CardActions } from 'material-ui/Card';
import PropTypes from 'prop-types';

import { removeWidget, refreshWidget } from '../../actions/widget';

export class WeatherWidgetActions extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  };

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

  removeWidget = () => {
    this.props.remove(this.props.id);
  }

  refreshWidget = () => {
    this.props.refresh(this.props.id, this.props.city);
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
