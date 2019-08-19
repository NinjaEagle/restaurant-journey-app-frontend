import React, {Component} from "react"



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
                Your goal is to make it through all five boroughs without depleting your health.
                <br></br>
                Choose each restaurant wisely!
                <br></br>
                <button className="start-button">Start</button>
            </div>
        )
    }



}