import React, { Component } from 'react'
import anime from "animejs/lib/anime.es.js";
import { Card, Icon, Image } from 'semantic-ui-react'
export default class Profile extends Component {
    componentDidMount() {
    anime({
        targets: ".title,",
        opacity: [0, 100],
        delay: 500,
        easing: "easeInOutExpo",
        duration: 3000
    });
    }

    render() {
    return (
        <div class="ui card">
    <div class="image"><img src="https://i.ytimg.com/vi/CndoZQtu9fw/hqdefault.jpg" /></div>
    <div class="content">
        <div class="header">Kevin</div>
        <div class="meta"><span class="date">Joined in 2019</span></div>
        <div class="description">Kevin is a musician living in New York.</div>
    </div>
    <div class="extra content">
        <a>
        <i aria-hidden="true" class="user icon"></i>
        100000 Friends
        </a>
    </div>
    </div>
    );
    }
}

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