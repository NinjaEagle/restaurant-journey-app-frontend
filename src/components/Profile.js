import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        users: [],
        username: '',
    };

    componentDidMount() {
        // fetch("http://localhost:3000/users")
        fetch("https://restaurant-journey-backend.herokuapp.com/users")
            .then(res => res.json())
            .then(data => this.setState({ users: data}))
    }

    renderUsers = () => {
      let sorted = this.state.users.sort((a, b) =>
        a["score"] < b["score"] ? 1 : -1
      );
        return sorted.map(user => {
          // console.log(user)
          return(
          <div className="usercard">
            <div className="ui card">
              <div className="content">
                <div className="header">{user.username}</div>
                <div className="meta">
                  <span className="date">Joined in 2020</span>
                </div>
                <div className="description">
                  {user.username}'s favorite food is {user.favorite_food}
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i aria-hidden="true" className="user-icon" />
                    Score: {user.score}
                </a>
              </div>
            </div>
          </div>)
          });
        }
 
    render() {
    return (
      <div className="profile-cards">
        {
            this.renderUsers()
        } 
      </div>
    );}
}