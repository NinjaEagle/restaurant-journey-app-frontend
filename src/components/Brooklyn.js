import React, {Component} from "react"
import { NavLink } from 'react-router-dom';
import brooklyn from "./brooklyn.jpg"

export default class Brooklyn extends Component {

    state = {
        cuisineChosen: false,
        cuisineName: "",
        restaurants: [],
        cuisineList: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(data => this.getCuisines(data))
    }

    getCuisines = (data) => {
        let brooklynrest = data.filter(restaurant => restaurant.borough === "Brooklyn")
       
        let cuisines = brooklynrest.map(rest => {return rest.cuisine})
        let uniqueCuisines = [...new Set(cuisines)];
               
        this.setState({
            restaurants: brooklynrest,
            cuisineList: uniqueCuisines
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

        return (
          <div className="bronx">
            {this.state.cuisineChosen ? (
              <div className="center">
                <h2>Great Choice!</h2>
                <h2>You chose {this.state.cuisineName}</h2>
                <h2>Here are your options:</h2>
                {this.renderRestaurants().map(restaurant => {
                  return (
                    <div className="restaurants">
                      <NavLink
                        to={`/restaurant/${restaurant.id}`}
                        className="navlink-restaurant"
                        id={restaurant.score}
                      >
                        {" "}
                        {restaurant.name}
                      </NavLink>
                    </div>
                  );
                })}
                <h1>
                  {" "}
                  <span role="img" aria-label="hehe">😈</span>
                </h1>
              </div>
            ) : (
              <div>
                <h2>
                  Welcome to Brooklyn!
                  <br />This is the fourth stop on your restaurant
                  journey.
                </h2>
                <img src={brooklyn} alt="manhattan" />
                <br />
                <h3>
                  Known for its rich history and beautiful architecture,
                  Brooklyn is quickly becoming the new Manhattan.
                </h3>
                <h3>Choose a cuisine!</h3>
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