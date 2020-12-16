import React, { useState, useEffect } from 'react';
import {saveLikeTeamsSuccessAction} from "../redux/actions";
import '../styles/FallTeams.css'
import FallTeamsInfo from './FallTeamInfo';
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteTeams, getFavoritPlayers } from "../redux/selectors";



export default  function FallTeams() {

  
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);
  // const favoriteTeams = useSelector(getFavoriteTeams);
  // const [favoritTeam, setFavoritTeam] = useState(favoriteTeams);

  const [isVisibleInfo, SetVisible] = useState(false);

  const [allInfo, setAllinfo] = useState({});
  
  
  const  loadAllInfo = async(teamId)=>{
    const allInfo = await fetch(`https://api.football-data.org/v2/teams/${teamId}`, {
    method: 'GET',
    headers: {
        "X-Auth-Token": "f71cc937e0304e22b362fd72d75649e1"
    }
  })
  .then((allInfo) => {
    return allInfo.json();
  })
  .then((data) =>{
    setAllinfo(data);
    SetVisible(true);
  })
}

  function handleOnclick(key){ 
    loadAllInfo(key);
    
    return <FallTeamsInfo id={key}/> 
  }
  

  const loadData = async()=>{
      const allTeams = await fetch("https://api.football-data.org/v2/teams ", {
      method: 'GET',
      headers: {
          "X-Auth-Token": "f71cc937e0304e22b362fd72d75649e1"
      }
    })
    .then((allTeams) => {
      return allTeams.json();
    })
    .then((data) =>{
      setTeams(data.teams);
    })
  }
  
  const saveToReduxTeam = (team, id) =>{
    dispatch(saveLikeTeamsSuccessAction({ teams: team, id: id }));
  }
    
  
  const addTeam = (team, id)=>{
    // setFavoritTeam(team,id);
    saveToReduxTeam(team, id);
  };

  useEffect(() => {
    loadData();
    // console.log(favoritTeam);
  },[]);

return(
  <div className="teams">

    {
       teams.map((item) => {
        return (
            <div key={item.id} className="team">
              <div className="name">{item.name}</div>
              <div className="photoTeam">
                <img src={item.crestUrl}></img>
              </div>
              <div>
                <button className="viewMore" onClick={()=>handleOnclick(item.id)}>Подробнее</button>
                <button className="addFavoritTeam" onClick={() => addTeam(item.name, item.id)}>Добавить в избранное</button>
              </div>
            </div>
        )
      })
    }
    {
      isVisibleInfo? <FallTeamsInfo allInfo = {allInfo}/> : null
    }
    
  </div>
  )
}
