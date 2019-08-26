import React, {Component} from "react" 
import {NavLink} from "react-router-dom"

export default class Delete extends Component {

    state = {
        username: "",
        users: [],
        userNotFound: false,
        deleted: false
    }

    componentDidMount() {
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }

    handleUsername = (e) => {

        this.setState({
            username: e.target.value
        })

    }

    deleted = () => {
        if (this.state.deleted === true) {

        return <div>
            <h2>
                You have been deleted from the Leaderboard.
            </h2>
            <NavLink to="/leaderboard" className="next-borough" >Return To Leaderboard</NavLink>
        </div>

        }
    }
    
    deleteUser = (e) => {
        e.preventDefault()
        
        let user = this.state.users.filter(user => user["username"] === this.state.username)
      

        if (user.length === 0) {
           this.setState({userNotFound: true})
        } else {
            
            const sendUser = (user) => {
                this.makeFetch(user)
            }

            sendUser(user)
        }   

    }

    makeFetch = (user) => {


        this.setState({deleted: true})

        fetch(`http://localhost:3000/users/${user[0].id}`, {
            method: "DELETE",
            body: JSON.stringify({user})

        }).then(response => response.json())
        .then(this.deleted)
    }

   

    noUser = () => { 
        if (this.state.userNotFound === true) {
         return <h2>Sorry, no users with that username were found.</h2>
         }
     }   

    render() {

        return (

            <div className="bronx">
                <br></br>
                <h1>Delete Me From The Leaderboard!</h1>
                <br></br>
                    <form>
                        <h3>Sorry to see you go, better luck next time!</h3>
                        <h3>Enter Username:</h3> 
                        <input onChange={this.handleUsername} className="username" value={this.state.username} type="text"></input>
                        <h3></h3>
                        <button onClick={this.deleteUser} className="next-borough">Delete Me</button>
                    {this.noUser()}
                    </form>
                    {this.deleted()}
            </div>
        )
    }
}