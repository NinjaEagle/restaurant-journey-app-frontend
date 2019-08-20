import React, {Component} from "react"
import { NavLink } from 'react-router-dom';


export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="welcome">
                Welcome to Restaurant Journey!
                <div className="footer">
                    Try not to get sick!
                </div>
                </div>
                <br></br>
                Your goal is to make it through all five boroughs without depleting your health.
                <br></br>
                <br></br>
                Choose each restaurant wisely!
                <br></br>
                <br></br>
                <br></br>
                <NavLink to="/bronx" className="start-button"> Start </NavLink>
            </div>
        )
    }



}