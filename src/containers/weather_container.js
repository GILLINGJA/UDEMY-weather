import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherList from '../containers/weather_list';
import WeatherDetails from '../containers/weather_details';

class WeatherContainer extends Component {
  selectView(view) {
    if(view) {
      return ( <WeatherDetails /> );
    }

    return ( <WeatherList /> );
  }

  render() {
    return <div>{this.selectView(this.props.view)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    view: state.view
  };
}

export default connect(mapStateToProps)(WeatherContainer);
