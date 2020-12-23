import { FC,useState, useEffect } from 'react';
import * as React from 'react'
import {saveLikeTeamsSuccessAction, fetchTeams} from "../../redux/actions";
import { getFavoritePlayers,getAllTeams } from "../../redux/selectors";
import '../../styles/FallTeams.css'
import FallTeamsInfo from '../AllTeamInfo/FallTeamInfo';
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom"

import {Iteams} from "./type"




const FallTeams = () => {
  const dispatch = useDispatch();
  const allTeams = useSelector(getAllTeams)
  const [teams, setTeams] = useState<any>(allTeams[0]);

  
  const saveToReduxTeam = (team: string, id: number) =>{
    dispatch(saveLikeTeamsSuccessAction({ teams: team, id: id }));
  }
    
  
  const addTeam = (team: string, id: number)=>{
    saveToReduxTeam(team, id);
    alert("Команда добавлена в избранное")
  };

  useEffect(() => {
    dispatch(fetchTeams())
  },[]);

return(
  <>
  <NavLink className="showProfile" to="/profile">Профиль</NavLink>
  <div className="teams">
    
    {
       teams.map((item: Iteams) => {
        return (
            <div key={item.id} className="team">
              <div className="name">{item.name}</div>
              <div className="photoTeam">
                <img src={item.crestUrl}></img>
              </div>
              <div>
                
                <div className="viewMore"><NavLink to={"/players/"+item.id}>Подробнее</NavLink></div>
                <button className="addFavoritTeam" onClick={() => addTeam(item.name, item.id)}>Добавить в избранное</button>
              </div>
            </div>
        )
      })
    }
  </div>
  </>
  )
}
export default FallTeams