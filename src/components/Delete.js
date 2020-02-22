import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Delete extends Component {
  state = {
    username: "",
    users: [],
    userNotFound: false,
    deleted: false
  };

  componentDidMount() {
    // fetch("http://localhost:3000/users")
    fetch("https://restaurant-journey-backend.herokuapp.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  deleted = () => {
    if (this.state.userNotFound === true) {
      return (
        <h2>
          Sorry, no users with that username were found. Reenter username again!
        </h2>
      );
    } else if (this.state.deleted === true) {
      return (
        <div>
          <h2>You have been deleted from the Leaderboard.</h2>
          <NavLink to="/leaderboard" className="next-borough">
            Return To Leaderboard
          </NavLink>
        </div>
      );
    }
  };

  noUser = () => {
    if (this.state.userNotFound === true) {
      return (
        <h2>
          Sorry, no users with that username were found. Reenter username again!
        </h2>
      );
    }
  };

  deleteUser = e => {
    e.preventDefault();
    this.setState({ userNotFound: false });
    let user = this.state.users.filter(
      user => user["username"] === this.state.username
    );
    if (user.length === 0) {
      this.setState({ userNotFound: true });
    } else {
      const sendUser = user => {
        this.makeFetch(user);
      };
      sendUser(user);
    }
  };

  makeFetch = user => {
    const userId = user[0].id;
    fetch(
      // "https://restaurant-journey-backend.herokuapp.com/users/"+${user[0].id},
      `https://restaurant-journey-backend.herokuapp.com/users/${userId}`,
      {
        method: "DELETE",
        body: JSON.stringify({ user })
      }
    )
      // .then(res => res.json())
      .then(() => {
        const updatedUsers = this.state.users.filter(aUser => {
          return aUser.id !== user.id;
        });
        this.setState({ deleted: true, users: updatedUsers });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div className="bronx">
        <br></br>
        <h1>Delete Me From The Leaderboard!</h1>
        <br></br>
        <form>
          <h3>Sorry to see you go, better luck next time!</h3>
          <h3>Enter Username:</h3>
          <input
            onChange={this.handleUsername}
            className="username"
            value={this.state.username}
            type="text"
          ></input>

          <button onClick={this.deleteUser} className="next-borough">
            Delete Me
          </button>
        </form>
        {this.deleted()}
      </div>
    );
  }
}
