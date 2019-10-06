import React, {Component} from "react"
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

    render() {

        const link = {
            width: '100px',
            padding: '12px',
            margin: '6px 6px 6px',
            background: 'teal',
            textDecoration: 'none',
            color: 'white',
          }

        return (
          <div className="navbar">
            <div className="buttons">
              <span className="title">Restaurant Journey</span>
              <NavLink to="/login" style={link}>
                Login
              </NavLink>
              <NavLink to="/" style={link}>
                Home
              </NavLink>

              <NavLink to="/leaderboard" style={link}>
                Leaderboard
              </NavLink>

              <NavLink to="/profile" style={link}>
                Players
              </NavLink>
            </div>
          </div>
        );
    }
}