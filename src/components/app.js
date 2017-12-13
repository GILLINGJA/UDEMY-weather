import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ToggleView from '../containers/toggle_view';
import WeatherContainer from '../containers/weather_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ToggleView currentView={false} />
        <WeatherContainer />
      </div>
    );
  }
}
