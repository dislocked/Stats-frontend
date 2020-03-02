import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import Db from "./Pages/Db"
import Profile from "./Pages/Profile"

function App(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Db} />
          <Route path="/players" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;