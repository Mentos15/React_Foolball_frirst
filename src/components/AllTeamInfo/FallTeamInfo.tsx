
import React, {FC,useState, useEffect } from 'react';
import {saveLikePlayersSuccessAction, fetchPlayers} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {FallTeamInfoProps} from "./types"
import {useHistory} from "react-router-dom"
import { getPlayers } from "../../redux/selectors";


import '../../styles/FallTeams.css'

const FallTeamInfo: FC<FallTeamInfoProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const squad = useSelector(getPlayers)
  const [allInfo, setAllinfo] = useState<any>(squad[0]);

  
useEffect(()=>{
  dispatch(fetchPlayers(props.location.pathname.slice(9)))
},[])
  


  const saveToReduxPlayer = (players:string, id:number) =>{
    dispatch(saveLikePlayersSuccessAction({ players: players, id: id }));
  }
    
  
  const addPlayer = (players:string, id:number)=>{
    saveToReduxPlayer(players, id);
    alert("Игрок добавлен в избранное")
  };

  return (
    <>
      <button onClick={()=> history.push('/')}>На главную</button>
      <div className="squad">
      {
          allInfo.map((item:any) => {
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
  </>
  )
}
export default FallTeamInfo;