import React, {Component} from "react"
import FordhamRoad from "./fordham-road.jpg"
import { NavLink } from 'react-router-dom';

export default class Bronx extends Component {

    state = {
        cuisineChosen: false,
        cuisineName: "",
        restaurants: [],
        cuisineList: [],
        score: 0
    }

    componentDidMount() {
        // fetch("http://localhost:3000/restaurants")
        fetch("https://restaurant-journey-backend.herokuapp.com/restaurants")
        .then(response => response.json())
        .then(data => this.getCuisines(data))
    }

    getCuisines = (data) => {
        let bronxrest = data.filter(restaurant => restaurant.borough === "Bronx")
        console.log(bronxrest)
        let cuisines = bronxrest.map(rest => {return rest.cuisine});
        let uniqueCuisines = [...new Set(cuisines)]; 
        this.setState({
            restaurants: bronxrest,
            cuisineList: uniqueCuisines,
            
        })
    }

    handleSelectCuisine = (e) => {
        
        this.setState({
            cuisineChosen: true,
            cuisineName: e.target.value
        })
    }

    renderRestaurants = () => {
        return this.state.restaurants.filter(rest => rest.cuisine === this.state.cuisineName)
    }

    render() {
       let sortedCuisines= this.state.cuisineList.sort();
        console.log(this.state)
        return (
          <div className="bronx">
            {this.state.cuisineChosen ? (
              <div className="center">
                <h2>Great Choice!</h2>
                <h2>You chose {this.state.cuisineName} </h2>
                <h2>Here are your options:</h2>
                {this.renderRestaurants().map(restaurant => {
                  return (
                    <div className="restaurants">
                      <NavLink
                        to={`/restaurant/${restaurant.id}`}
                        className="navlink-restaurant"
                        id={restaurant.score}
                      >
          
                        {restaurant.name}
                      </NavLink>
                    </div>
                  );
                })}
                <h1>
                  <span role="img" aria-label="hehe">😈</span>
                </h1>
              </div>
            ) : (
              <div>
                <h2>
                  Welcome to The Bronx!
                  <br />This is the first stop on your restaurant
                  journey.
                </h2>
                <img src={FordhamRoad} alt="fordham-road" />
                <br />
                <h3>
                  Home to many different cultures and cuisines, The
                  Bronx has been a hub of variety for decades.
                </h3>
                <h3>What kind of food would you like to try?</h3>
                <select
                  onChange={this.handleSelectCuisine}
                  className="options"
                >
                  <option value="none">Select an option</option>
                  {sortedCuisines.map(cuisine => (
                    <option value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        );
    }
}