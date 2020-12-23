import { SAVE_LIKE_TEAMS_SUCCESS,
  DELETE_LIKE_TEAMS_SUCCESS,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_REQUEST,
  FETCH_PLAYERS_REQUEST,
  FETCH_TEAMS_FAILED } from "../../consts/consts";

import { create } from "../../services/api";
import { IpayLoadTeams, IpayLoadId} from "./types"

export const saveLikeTeamsSuccessAction = (payload:IpayLoadTeams) => ({
  type: SAVE_LIKE_TEAMS_SUCCESS,
  payload,
});

export const deleteLikeTeamsSuccessAction = (payload: IpayLoadId) => ({
  type: DELETE_LIKE_TEAMS_SUCCESS,
  payload,
});




export const fetchTeams = () => ({

    type:FETCH_TEAMS_REQUEST
});

export const fetchPlayers = (teamId:number) => ({ 
    type:FETCH_PLAYERS_REQUEST,
    teamId
});