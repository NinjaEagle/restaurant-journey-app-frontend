import React, { Component } from 'react'
import anime from "animejs/lib/anime.es.js";
import { Card, Icon, Image, Form } from 'semantic-ui-react';

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];
export default class Profile extends Component {
    state = {
        users: [],
        username: '',
    };

    // componentDidMount() {
    //     fetch("http://localhost:3000/users")
    //         .then(res => res.json())
    //         .then(data => this.setState({ users: data}))
       
    // }
    componentDidMount() {
        fetch("http://localhost:3000/profile",{
         headers: {
        Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileData => {
        this.setState({username: profileData.username})
      })
    }

    renderUsers = () => {
        return (
          <div className="usercard">
            <div class="ui card">
              <div class="content">
                <div class="header">{this.state.username}</div>
                <div class="meta">
                  <span class="date">Joined in 2019</span>
                </div>
                <div class="description">
                  {this.state.username}'s favorite food is {}
                </div>
              </div>
              <div class="extra content">
                <a>
                  <i aria-hidden="true" class="user-icon" />
                    Score: {}
                </a>
              </div>
            </div>
          </div>
        );
        }

    render() {
        console.log(!!this.state.username)
    return (
      <div>
        {this.state.username
          ? 
            this.renderUsers()
          : ("Getting your stuff...")} 
      </div>
    );}
}

 // let sorted = this.state.users.sort((a, b) =>
        //     a["score"] < b["score"] ? 1 : -1
        // );
// return sorted.map(user => {

// export default CardExampleCard

{/* <div class="ui card">
        <div class="image">
            <img src="https://i.ytimg.com/vi/CndoZQtu9fw/hqdefault.jpg" />
        </div>
        <div class="content">
            <div class="header">Kevin</div>
            <div class="meta">
            <span class="date">
                Joined in 2019
            </span>
            </div>
            <div class="description">
            Kevin is a musician living in New
            York.
            </div>
        </div>
        <div class="extra content">
            <a>
            <i
                aria-hidden="true"
                class="user icon"
            />
            100000 Friends
            </a>
        </div>
        </div> */}