import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';
import ViewReducer from './reducer_view';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  view: ViewReducer
});

export default rootReducer;
