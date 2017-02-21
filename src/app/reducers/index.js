import {combineReducers} from 'redux';
import WeatherReducer from "./reducer-data";

const allReducers = combineReducers({
	weather: WeatherReducer
});

export default allReducers