import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class Last extends Component {
    state = {
        username: "",
        favoriteFood: "",
        userAdded: false,
        score: Math.floor(Math.random() * 200) + 20
    };

    handleChange = (e) => {
    if (e.target.className === "username") {
        this.setState({
        username: e.target.value
        });
    } else {
        this.setState({
        favoriteFood: e.target.value
        });
    }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accepts: "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            score: this.state.score,
            favorite_food: this.state.favoriteFood,
            password_digest: ""
          })
        })
          .then(response => response.json())
          .then(data => this.setState({ userAdded: true, score: data.score }));
    };

    addUser = () => {
    if (this.state.userAdded === true) {
        return (
        <div><br></br>
            <h3>You've been added to the leaderboard!</h3>{" "}
            <NavLink to="/leaderboard" className="next-borough">
            Click to see the leaderboard
            </NavLink>{" "}
        </div>
        );
    } else {
        return null;
    }
    };

    showOutcome = () => {
    if (this.state.score > 80) {
        return (
        <div>
            <h1>Sorry, but you have passed away. 😔</h1>
            <h3>
            Enter a username to be immortalized on our
            leaderboard.
            </h3>
        </div>
        );
    } else if (this.state.score <=79 && this.state.score >= 50) {
        return (
        <div>
            <h1>Wow, you almost didn't make it!</h1>
            <h3>
            You don't look well, but enter a username so we can
            all remember this miracle.
            </h3>
        </div>
        );
    } else {
        return (
        <div>
            <h1>
            You made it just fine! Have you played this game
            before?
            </h1>
            <h3>
            Enter a username to be added to the leaderboard:
            </h3>
        </div>
        );
    }
    };

    render() {
        console.log(this.state)
        return (
            <div className="bronx">
            <br></br>
            {this.showOutcome()}
            <form onChange={this.handleChange}>
                <input
                value={this.state.username}
                className="username"
                type="text"
                ></input>
                <h3>What's your favorite food?</h3>
                <input
                value={this.state.favorite_food}
                className="favorite_food"
                type="text"
                ></input>
                <br></br>
                <br></br>
                <button
                onClick={this.handleSubmit}
                className="next-borough"
                >
                {" "}
                Submit
                </button>
            </form>
            {this.addUser()}
        </div>
    );
    }
}