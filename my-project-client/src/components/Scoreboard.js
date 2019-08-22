import React, { Component } from 'react';
import {NavLink} from "react-router-dom"

class Score extends Component {
    state = {
        users:[],
    }
    componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => this.setState({
            users: data
        }))
    }

    renderUsers = () =>{
        let sorted = this.state.users.sort((a,b) => (a["score"] > b["score"])? 1:-1)
        return sorted.map(user => {

          const score = () => {
            if (user.score >= 80) {
              return user.score + " (DECEASED)"
            }
            else {
              return user.score
            }
          }
          
        return (
          <div className="userdiv">
            <span className="user">
              {user.username}: {score()}
            </span>
          </div>
        );});
    }
    


    render() {
        return (
          <div className="leaderboard">
            <h1>Leaderboard</h1>
            <h2>Healthiest Players:</h2>
            {this.renderUsers()}
          
          <h3>Ashamed of your score? Want it removed from the leaderboard? <br></br>
          Click the button below to send a request.</h3>
          <NavLink to="/delete" className="next-borough">Delete Me From Leaderboard</NavLink>
          </div>
        );
    }
}

export default Score;