import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from  '../container/LoginPage';
import RestaurantSelection from '../container/RestaurantSelection';
import Score from '../components/Score'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <RestaurantSelection />
        <Score />
      </header>
    </div>
  );
}

export default App;
