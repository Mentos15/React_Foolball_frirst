
import '../../styles/profile.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteTeams, getFavoritePlayers } from "../../redux/selectors";
import {deleteLikeTeamsSuccessAction, deleteLikePlayersSuccessAction} from "../../redux/actions";
import {useHistory} from "react-router-dom"


const  Fprofile = () => {
  const history = useHistory();
  const favoriteTeams = useSelector(getFavoriteTeams);
  const [favoritTeam, setFavoritTeam] = useState(favoriteTeams);

  const favoritePlayers = useSelector(getFavoritePlayers);
  const [favoritPlayers, setFavoritPlayers] = useState(favoritePlayers);

  const dispatch = useDispatch();


  const deleteToReduxTeam = (id:number) =>{
    dispatch(deleteLikeTeamsSuccessAction({id: id }));
  }

  const deleteToReduxPlayer = (id:number) =>{
    dispatch(deleteLikePlayersSuccessAction({id: id }));
  }


  return (
    <>
      <button onClick={()=> history.push('/')}>На главную</button>
      <div className="profile">
        <div className="column-info">
          <div className="photoUser"></div>
          <div className="userName">Виталий</div>
        </div>
        <div className="column-favorite-teams">
          <ul>
            <p>Избранные команды</p>
            {          
              favoriteTeams.map((team:any) =>{
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
              
              favoritePlayers.map((player:any) =>{
                return(
                  <li key={player.id}>{player.players} <button onClick={() => deleteToReduxPlayer(player.id)}>Удалить</button></li>
                )
                
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Fprofile;
