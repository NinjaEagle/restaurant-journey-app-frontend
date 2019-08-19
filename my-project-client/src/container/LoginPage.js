import React, { Component } from 'react';

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    HandleLogin = (e) => {
        console.log(e.target.value)
        this.setState({

            [e.target.name]: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)

        fetch("http://localhost:3000/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            <div>
                <form onChange={this.HandleLogin}>
                    Username: <input name="username" type="text" value={this.state.username}></input>
                    <br></br>
                    Password: <input name="password" type="password" value={this.state.password}></input>
                    <br></br>
                    <button onClick={this.handleSubmit} name ="submit" type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;