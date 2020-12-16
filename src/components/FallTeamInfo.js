
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import {saveLikePlayersSuccessAction} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritePlayers } from "../redux/selectors";

import '../styles/FallTeams.css'

export default function FallTeamInfo(props) {

  const dispatch = useDispatch();
  // const favoritePlayers = useSelector(getFavoritePlayers);
  // const [favoritPlayer, setFavoritPlayer] = useState(favoritePlayers);

  const saveToReduxPlayer = (players, id) =>{
    dispatch(saveLikePlayersSuccessAction({ players: players, id: id }));
  }
    
  
  const addPlayer = (players, id)=>{
    saveToReduxPlayer(players, id);
  };


  let renderBody = null;
  
    renderBody = (
      <div className="squad">
        {
          props.allInfo.squad.map((item) => {
            return (
              <div key={item.id} className="playerDiv">
                <div className="firstRow">
                  <div className="firstColumn">
                    <div className="playerPhoto"></div>
                  </div>
                  <div className="secondColumn">
                    <div className="playerPosition">Position:  { item.position? item.position : "Нет информации"}</div>
                    <div className="playerNationality">Nationality: { item.nationality? item.nationality : "Нет информации"}</div>
                    <div className="playerRole">Role: { item.role? item.role: "Нет информации"}</div>
                  </div>
                </div>
                <div className="secondRow">
                  <div className="playerName">Name: { item.name? item.name: "Нет информации"}</div>
                  <button className="addUserLike" onClick={() => addPlayer(item.name, item.id)}>Добавить в избранное</button> 
                </div>
              </div>
            )
          })

        }
      </div>
    )
  return (
    <>
      {renderBody}
    </>
  )
}
