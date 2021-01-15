// import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home/Home'
// import Dev from './Components/Dev/Dev'
import NavBar from './Components/NavBar/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <Router>
          <Switch>
            <Route exact path='/modologs/'>
                <Home />
            </Route>
         </Switch>
      </Router>
      </>
  );
}

export default App;
