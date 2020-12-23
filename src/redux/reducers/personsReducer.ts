import { SAVE_LIKE_PLAYERS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";
import {IStatePersons, IPayloadPersons} from "./type"

type InitStateType = {
  players:IStatePersons[];
}
const INITIAL_STATE = {
  players: []
};

export const personsReducer = (state:InitStateType = INITIAL_STATE, action:IPayloadPersons) => {
  switch (action.type) {
    case SAVE_LIKE_PLAYERS_SUCCESS:
      return {...state, players: [...state.players, action.payload] };
    case DELETE_LIKE_PLAYERS_SUCCESS:
      return {...state , players : [...state.players.filter(el => el.id !== action.payload.id)]};
    default:
      return state;
  }
};