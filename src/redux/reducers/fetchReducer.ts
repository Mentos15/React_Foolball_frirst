import { act } from "react-dom/test-utils";
import { FETCH_TEAMS_REQUEST,FETCH_TEAMS_SUCCESS, FETCH_PLAYERS_SUCCESS } from "../../consts/consts";
import {IActionTeams, IActionSquad, IStateFetchTeams, IStateFetchPersons} from "./type"

type InitStateType = {
  teams:IStateFetchTeams[];
}
type InitStateType2 = {
  players:IStateFetchPersons[];
}
const INITIAL_STATE = {
  teams: []
};

const INITIAL_STATE2 = {
  players: []
};

export const fetchReducer = (state:InitStateType = INITIAL_STATE, action: IActionTeams) => {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return {...state, teams: [action.payload.teams] };
    default:
      return state;
  }
};

export const allInfoTeamReducer = (state:InitStateType2 = INITIAL_STATE2, action:IActionSquad) => {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return {...state, players: [action.payload.squad] };

    default:
      return state;
  }
};