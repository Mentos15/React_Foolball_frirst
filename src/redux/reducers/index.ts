  
import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { personsReducer } from "./personsReducer";
import { fetchReducer, allInfoTeamReducer } from "./fetchReducer";





export const rootReducer:any = combineReducers({
  main: mainReducer,
  persons: personsReducer,
  fetchs: fetchReducer,
  squad: allInfoTeamReducer,
});