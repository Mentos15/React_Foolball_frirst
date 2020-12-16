import { SAVE_LIKE_PLAYERS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";

const INITIAL_STATE = {
  players: []
};

export const personsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_LIKE_PLAYERS_SUCCESS:
      return {...state, players: [...state.players, action.payload] };
    case DELETE_LIKE_PLAYERS_SUCCESS:
      return {...state , players : [...state.players.filter(el => el.id !== action.payload.id)]};
    default:
      return state;
  }
};