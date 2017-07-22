import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import { closeWidgetAlert } from '../../actions/widget';

export class WeatherDashboardAlert extends Component {
  handleCloseRequest = () => {
    this.props.closeAlert();
  }

  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={2000}
        onRequestClose={this.handleCloseRequest}/>
    );
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
