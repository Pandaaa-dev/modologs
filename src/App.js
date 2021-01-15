// import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
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
            <Route exact path='/'>
                <Home />
            </Route>
            {/* <Route exact path='/dev'>
              <Dev />
            </Route>  */}
         </Switch>
      </Router>
      </>
  );
}

export default App;
