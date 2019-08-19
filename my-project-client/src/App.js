import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from  '../container/LoginPage';
import Restaurants from '../container/Restaurants';
import Borough from '../components/Borough'
import Scoreboard from '../components/Scoreboard'

function App() {
  state = {
    restaurants: [],
  }

  componentDidMount() {
    fetch('')
    .then(res => res.json())
    .then(restaurantsJSON => this.setState({
      restaurants: restaurantsJSON
    ))
  }
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <Borough data={this.state.restaurants}/>
        <Score />
      </header>
    </div>
  );
}

export default App;
