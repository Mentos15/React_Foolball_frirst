import { SAVE_LIKE_TEAMS_SUCCESS,SAVE_LIKE_PLAYERS_SUCCESS,
  DELETE_LIKE_TEAMS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";

export const saveLikeTeamsSuccessAction = (payload) => ({
  type: SAVE_LIKE_TEAMS_SUCCESS,
  payload,
});

export const deleteLikeTeamsSuccessAction = (payload) => ({
  type: DELETE_LIKE_TEAMS_SUCCESS,
  payload,
});

