
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

import './FallTeams.css'

export default function FallTeamInfo(props) {

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
