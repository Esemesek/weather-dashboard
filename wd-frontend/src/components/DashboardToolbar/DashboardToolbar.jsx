import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';

import { fetchCities } from '../../actions/autocomplete';
import { addWidget } from '../../actions/widget';

export class DashboardToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
    }
  }

  handleUpdateInput = (value) => {
    this.props.citiesCompletion(value);
    this.setState({ cityName: value });
  }

  handleAddWidget = () => {
    this.props.addWidget(this.state.cityName);
    this.setState({ cityName: ''});
  }

  render() {
    return (
      <Paper className='wd-toolbar'>
        <AutoComplete
          hintText='Type city...'
          dataSource={this.props.cities}
          searchText={this.state.cityName}
          onUpdateInput={this.handleUpdateInput}
          maxSearchResults={10}/>
        <FloatingActionButton
          mini={true}
          onClick={this.handleAddWidget}>
          <ContentAdd/>
        </FloatingActionButton>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.autocomplete.cities || [],
});

const mapDispatchToProps = (dispatch) => ({
  citiesCompletion: (search) => dispatch(fetchCities(search)),
  addWidget: (name) => dispatch(addWidget(name)), 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardToolbar);
