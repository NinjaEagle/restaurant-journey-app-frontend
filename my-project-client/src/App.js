import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import LoginPage from  '../src/container/LoginPage';
import Home from "../src/container/Home"
import NavBar from "./container/NavBar";
import Bronx from "./components/Bronx"
import Scoreboard from "./components/Scoreboard"
import Profile from "./components/Profile"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Restaurant from './components/Restaurant';



function App() {

  return (
      <Router>
    <div className="App">
      <header className="App-header">

            <NavBar component={NavBar}/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/bronx" component={Bronx}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/leaderboard" component={Scoreboard}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/restaurant" component={Restaurant}></Route>
      </header>
    </div>
    </Router>
  );
}

export default App;
