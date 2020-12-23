import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_TEAMS_FAILED,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_REQUEST,
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILED
} from "../../consts/consts";
import {IFetchPlayersSaga} from "./type"

export function* fetchTeams(api:any) {
  try {
    const response = yield call(api.getTeams);
    if (response.ok) {
      yield put({
        type: FETCH_TEAMS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_TEAMS_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_TEAMS_FAILED, payload: error });
  }
}

export function* fetchPlayers(api:any, action:IFetchPlayersSaga) {
  try {
    const response = yield call(api.getPlayers,action.teamId);
    if (response.ok) {
      yield put({
        type: FETCH_PLAYERS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_PLAYERS_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_PLAYERS_FAILED, payload: error });
  }
}