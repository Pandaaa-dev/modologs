// import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <NavBar />
      <Router>
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
         </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
