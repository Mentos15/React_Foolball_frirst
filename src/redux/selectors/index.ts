import {IRootSelectors} from "./type"

export const getFavoriteTeams = (state:IRootSelectors) => state.main.teams;

export const getFavoritePlayers = (state:IRootSelectors) => state.persons.players;

export const getAllTeams = (state:IRootSelectors) => state.fetchs.teams;

export const getPlayers = (state:IRootSelectors) => state.squad.players;
