
import '../styles/profile.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteTeams, getFavoritePlayers } from "../redux/selectors";
import {deleteLikeTeamsSuccessAction, deleteLikePlayersSuccessAction} from "../redux/actions";


export default function Fprofile() {
  const favoriteTeams = useSelector(getFavoriteTeams);
  const [favoritTeam, setFavoritTeam] = useState(favoriteTeams);

  const favoritePlayers = useSelector(getFavoritePlayers);
  const [favoritPlayers, setFavoritPlayers] = useState(favoritePlayers);

  const dispatch = useDispatch();


  const deleteToReduxTeam = (id) =>{
    dispatch(deleteLikeTeamsSuccessAction({id: id }));
  }

  const deleteToReduxPlayer = (id) =>{
    dispatch(deleteLikePlayersSuccessAction({id: id }));
  }


  return (
    <div className="profile">
      <div className="column-info">
        <div className="photoUser"></div>
        <div className="userName">Виталий</div>
      </div>
      <div className="column-favorite-teams">
        <ul>
          <p>Избранные команды</p>
          {          
            favoriteTeams.map((team) =>{
              return(
                <li key={team.id}>{team.teams} <button onClick={() => deleteToReduxTeam(team.id)}>Удалить</button></li>
              )              
            })
          }
          
        </ul>
      </div>
      <div className="column-favorite-players">
      <ul>
          <p>Избранные игроки</p>
          {
            
            favoritePlayers.map((player) =>{
              return(
                <li key={player.id}>{player.players} <button onClick={() => deleteToReduxPlayer(player.id)}>Удалить</button></li>
              )
              
            })
          }
        </ul>
      </div>
    </div>
  )
}
