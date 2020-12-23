import { SAVE_LIKE_PLAYERS_SUCCESS,DELETE_LIKE_PLAYERS_SUCCESS } from "../../consts/consts";

import { IpayLoadPlayers, IpayLoadId} from "./types"

export const saveLikePlayersSuccessAction = (payload: IpayLoadPlayers) => ({
  type: SAVE_LIKE_PLAYERS_SUCCESS,
  payload,
});

export const deleteLikePlayersSuccessAction = (payload:IpayLoadId) => ({
  type: DELETE_LIKE_PLAYERS_SUCCESS,
  payload,
});
