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

    componentDidMount() {
        fetch("http://localhost:3000/users")
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
            <div class="ui card">
              <div class="content">
                <div class="header">{user.username}</div>
                <div class="meta">
                  <span class="date">Joined in 2019</span>
                </div>
                <div class="description">
                  {user.username}'s favorite food is {user.favorite_food}
                </div>
              </div>
              <div class="extra content">
                <a>
                  <i aria-hidden="true" class="user-icon" />
                    Score: {user.score}
                </a>
              </div>
            </div>
          </div>)
          });
        }
 
    render() {
        // console.log(!!this.state.username)
    return (
      <div>
        {
            this.renderUsers()
        } 
      </div>
    );}
}

 // let sorted = this.state.users.sort((a, b) =>
        //     a["score"] < b["score"] ? 1 : -1
        // );
// return sorted.map(user => {

// export default CardExampleCard

//  componentDidMount() {
//         fetch("http://localhost:3000/profile",{
//          headers: {
//         Authorization: localStorage.token
//         }
//       })
//       .then(res => res.json())
//       .then(profileData => {
//         this.setState({username: profileData.username})
//       })
//     }


//     render() {
//         console.log(!!this.state.username)
//     return (
//       <div>
//         {this.state.username
//           ? 
//             this.renderUsers()
//           : ("Getting your stuff...")} 
//       </div>
//     );}