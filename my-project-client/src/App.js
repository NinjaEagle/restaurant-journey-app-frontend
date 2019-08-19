import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import LoginPage from  '../src/container/LoginPage';
import Home from "../src/container/Home"
import NavBar from "./container/NavBar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
      <Router>
    <div className="App">
      <header className="App-header">

            <NavBar component={NavBar}/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={LoginPage}></Route>
      </header>
    </div>
    </Router>
  );
}

export default App;
