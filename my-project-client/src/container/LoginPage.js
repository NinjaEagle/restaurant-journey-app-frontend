import React, { Component } from 'react'; 
import anime from "animejs/lib/anime.es.js";
import "../style.scss";
class LoginPage extends Component {

    state ={
        username: '',
        password: ''
    }
    
    handleLogin = (event) => {
       this.setState({
           [event.target.name]:event.target.value
       })
    }
    componentDidMount() {
        anime({
          targets: ".title,",
          opacity: [0, 100],
          delay: 500,
          easing: "easeInOutExpo",
          duration: 3000
        });
    }

    handleSubmit = (e) => {
      console.log("I'm submitting")
        e.preventDefault();
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data =>{ console.log(data)
        if (data.token)  {
          localStorage.token = data.token
          this.props.redirect('profile')
        }})
        }
    

    render() {
        // console.log(this.state.username)
        return (
          <div>
            <h1 class="title">NYC Restaurant Journey</h1>
            <form>
              <br />
              Username:
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleLogin}
              />
              <br />
              Password:
              <input
                name="password"
                type="text"
                value={this.state.password}
                onChange={this.handleLogin}
              />
              <br />
              <button
                onClick={this.handleSubmit}
                name="submit"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        );
    }
}

export default LoginPage;