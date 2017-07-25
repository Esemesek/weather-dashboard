import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

import { closeWidgetAlert } from '../../actions/widget';

export class WeatherDashboardAlert extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    closeAlert: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={4000}
        onRequestClose={this.handleCloseRequest}/>
    );
  }

  handleCloseRequest = () => {
    this.props.closeAlert();
  }
}

const mapStateToProps = (state) => ({
  open: state.widget.alert.open,
  message: state.widget.alert.message,
});

const mapDispatchToProps = (dispatch) => ({
  closeAlert: () => dispatch(closeWidgetAlert()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherDashboardAlert)
