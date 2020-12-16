import { SAVE_LIKE_TEAMS_SUCCESS, SAVE_LIKE_PLAYERS_SUCCESS,
  DELETE_LIKE_TEAMS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";

const INITIAL_STATE = {
  teams: []
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_LIKE_TEAMS_SUCCESS:
      return {...state, teams: [...state.teams, action.payload] };
    case DELETE_LIKE_TEAMS_SUCCESS:
      return {...state , teams : [...state.teams.filter(el => el.id !== action.payload.id)]};
    default:
      return state;
  }
};