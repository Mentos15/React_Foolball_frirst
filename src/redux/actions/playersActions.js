import { SAVE_LIKE_PLAYERS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";

export const saveLikePlayersSuccessAction = (payload) => ({
  type: SAVE_LIKE_PLAYERS_SUCCESS,
  payload,
});

export const deleteLikePlayersSuccessAction = (payload) => ({
  type: DELETE_LIKE_PLAYERS_SUCCESS,
  payload,
});
