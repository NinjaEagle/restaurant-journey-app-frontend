import React from 'react';
import './App.css';
import LoginPage from  './container/LoginPage';
import Home from "./container/Home"
import NavBar from "./container/NavBar";
import Bronx from "./components/Bronx"
import Queens from "./components/Queens"
import Manhattan from "./components/Manhattan"
import Brooklyn from "./components/Brooklyn"
import Staten_Island from "./components/Staten_Island"
import Last from "./components/Last"
import Scoreboard from "./components/Scoreboard"
import Profile from "./components/Profile"
import Delete from "./components/Delete"

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Restaurant from './components/Restaurant';


function App () {
 
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
                <Route path="/restaurant/:id" component={Restaurant}></Route>
                <Route path="/queens" component={Queens}></Route>
                <Route path="/manhattan" component={Manhattan}></Route>
                <Route path="/brooklyn" component={Brooklyn}></Route>
                <Route path="/statenisland" component={Staten_Island}></Route>
                <Route path="/last" component={Last}></Route>
                <Route path="/delete" component={Delete}></Route>
          </header>
        </div>
        </Router>
      );
  
}
export default App;
  
