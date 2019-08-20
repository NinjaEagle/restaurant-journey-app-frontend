import React, { Component } from 'react';
import Codes from "../components/Codes"
import { NavLink } from 'react-router-dom';

class Restaurant extends Component {

    state={
        restaurant: [],
        borough: "",
        score: 0
    }

    componentDidMount() {
        let urlArray = document.URL.split("/")
        let id = parseInt(urlArray[urlArray.length - 1])

        fetch(`http://localhost:3000/restaurants/${id}`)
        .then(response => response.json())
        .then(data => this.showData(data))
    }

    showData = (data) => {

        if (data.borough === "Bronx") {
            
            this.setState({
                restaurant: data,
                borough: data.borough, 
                score: this.state.data.score 
            })
        } else {
            this.setState({
                restaurant: data,
                borough: data.borough, 
                score: this.props.score + data.score 
            })
        }
    }

    findNextBorough = () => {
        if (this.state.borough === "Bronx") {
            return <NavLink to="/queens" score={this.state.restaurant.score} className="next-borough"> Next Borough </NavLink>
        }  else if (this.state.borough === "Queens") {
           return <NavLink to="/manhattan" score={this.state.restaurant.score} className="next-borough"> Next Borough </NavLink>
         } else if (this.state.borough === "Manhattan") {
            return <NavLink to="/brooklyn" score={this.state.restaurant.score} className="next-borough"> Next Borough </NavLink>
        } else if (this.state.borough === "Brooklyn") {
            return <NavLink to="/statenisland" score={this.state.restaurant.score} className="next-borough"> Next Borough </NavLink>
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="restaurant">
                <div className="restaurant-page"><h1>
                    Welcome to {this.state.restaurant.name}!
                </h1> </div>
                    <br></br>
                   <h2>Here's how you did:</h2> 
                    <Codes restaurant={this.state.restaurant}/>

                    <div>
                        <h2>
                            Total Score: {this.state.restaurant.score}
                        </h2>
                    {this.findNextBorough()}
                    </div>
            </div>
        );
    }
}

export default Restaurant;