import { all, takeLatest } from "redux-saga/effects";
import { create } from "../../services/api";
import {
  FETCH_TEAMS_REQUEST,
  FETCH_PLAYERS_REQUEST
} from "../../consts/consts";
import { fetchTeams, fetchPlayers } from "./mockSaga";

export const rootSaga = function* root() {
  const api = create();

  yield all([
    takeLatest(FETCH_TEAMS_REQUEST, fetchTeams, api),
    takeLatest(FETCH_PLAYERS_REQUEST, fetchPlayers, api),
  ]);
};