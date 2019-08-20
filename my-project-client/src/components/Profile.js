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
        users: []
    };

    componentDidMount() {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => this.setState({ users: data}))
       
    }

    createCards =() => {
       
    }
    renderUsers = () => {
        let sorted = this.state.users.sort((a, b) =>
            a["score"] < b["score"] ? 1 : -1
        );
        return sorted.map(user => {
            return (
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
              </div>
            );
        })
    };

    render() {
        console.log(this.state.users)
    return (
        <div>{this.renderUsers()}</div>
    )}
}
// class FormExampleSubcomponentControl extends Component {
//   state = {}

//   handleChange = (e, { value }) => this.setState({ value })

//   render() {
//     const { value } = this.state
//     return (
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Input fluid label='First name' placeholder='First name' />
//           <Form.Input fluid label='Last name' placeholder='Last name' />
//           <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
//         </Form.Group>
        
//         <Form.TextArea label='About' placeholder='Tell us more about you...' />
//         <Form.Checkbox label='I agree to the Terms and Conditions' />
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }
// }

// export default FormExampleSubcomponentControl

//  const CardExampleCard = () => (
//   <Card>
//     <Image src='https://i.ytimg.com/vi/CndoZQtu9fw/hqdefault.jpg' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Kevin</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2019</span>
//       </Card.Meta>
//       <Card.Description>
//         Kevin is a musician living in New York.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         100000 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )

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