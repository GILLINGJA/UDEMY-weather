import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import WeatherDetails from '../containers/weather_details';

const detailedView = true;

const components = {
  list: WeatherList,
  details: WeatherDetails
};

export default class App extends Component {
  render() {
    let selectView = 'list';

    if(detailedView) {
      selectView = 'details';
    }

    const SelectedComponent = components[selectView];

    return (
      <div>
        <SearchBar />
        <SelectedComponent />
      </div>
    );
  }
}
