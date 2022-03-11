import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const rootReducers = combineReducers({
  weatherInfo: weatherReducer,
});

export default rootReducers;
