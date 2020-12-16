  
import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { personsReducer } from "./personsReducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  persons: personsReducer,
});