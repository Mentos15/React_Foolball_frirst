

import FallTeams from './components/FallTeams';
import Fprofile from './components/Fprofile';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getStore } from "./redux/store";
import React, { useState, useEffect } from 'react';

function App() {
  const { store, persistor } = getStore();

  const [isVisibleProfile, setVisibleProfile] = useState(false);

  function showProfile(){
    setVisibleProfile(!isVisibleProfile);
  }

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        
        <button className="showProfile" onClick={()=>showProfile()}>Профиль</button>
        {
          isVisibleProfile? <Fprofile /> : null
        }  
        <FallTeams/>
      </PersistGate>
    </Provider>
  );
}

export default App;
