import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import LoginPage from  '../src/container/LoginPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
//   state = {
//     restaurants: [],
//   }

  // componentDidMount() {
  //   fetch('')
  //   .then(res => res.json())
  //   .then(restaurantsJSON => this.setState({
  //     restaurants: restaurantsJSON
  //   ))
  // }
  return (
      <Router>
    <div className="App">
      <header className="App-header">
            <Route path="/" component={LoginPage}></Route>
      </header>
    </div>
    </Router>
  );
}

export default App;
