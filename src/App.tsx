

import FallTeams from './components/AllTeams/FallTeams';
import Fprofile from './components/Profile/Fprofile';
import FallTeamInfo from "./components/AllTeamInfo/FallTeamInfo"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {getSagaStore } from "./redux/sagaStore";
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {route} from "./consts/routes"

function App() {
  const { store, persistor } = getSagaStore();
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        
        <BrowserRouter >
        <Switch>
          <Route component={FallTeams} path="/" exact/>
          <Route component={Fprofile} path="/profile"/>
          <Route component={FallTeamInfo} path="/players"/>
        </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
