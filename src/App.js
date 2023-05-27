import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';
import Private from './Private';
import NotFound from './NotFound';
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Private cmp={HomePage} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route>
            <Private cmp={NotFound} />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
