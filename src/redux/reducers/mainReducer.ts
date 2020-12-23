import { SAVE_LIKE_TEAMS_SUCCESS,
  DELETE_LIKE_TEAMS_SUCCESS } from "../../consts/consts";
import {IPayloadMain, IStateMain} from "./type"

type InitStateType = {
  teams:IStateMain[]
}

const INITIAL_STATE:InitStateType = {
  teams: []
};

export const mainReducer = (state:InitStateType = INITIAL_STATE, action:IPayloadMain) => {
  switch (action.type) {
    case SAVE_LIKE_TEAMS_SUCCESS:
      return {...state, teams: [...state.teams, action.payload] };
    case DELETE_LIKE_TEAMS_SUCCESS:
      return {...state , teams : [...state.teams.filter(el => el.id !== action.payload.id)]};
    default:
      return state;
  }
};