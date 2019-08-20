import React, { Component } from 'react';

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
        let sorted = this.state.users.sort((a,b) => (a["score"] < b["score"])? 1:-1)
        return sorted.map(user => {

          const score = () => {
            if (user.score > 75) {
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
            <h2>Sickest Players:</h2>
            {this.renderUsers()}
        
          </div>
        );
    }
}

export default Score;