import React, {Component} from "react"
import { NavLink } from 'react-router-dom';
import Restaurant from "../components/Restaurant"
import statenisland from "./statenisland.jpeg"

export default class Staten_Island extends Component {


    state = {
        cuisineChosen: false,
        cuisineName: "",
        restaurants: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(data => this.getCuisines(data))
    }

    getCuisines = (data) => {
        let statenrest = data.filter(restaurant => restaurant.borough === "Staten Island")
        let cuisines = statenrest.map(rest => {return rest.cuisine})
               
        this.setState({
            restaurants: statenrest
        })

        cuisines.unique = function() {
            return this.filter(function (value, index, self) { 
              return self.indexOf(value) === index;
            });
          }

          console.log(cuisines.unique())
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

        let cuisineArray = ["Ice Cream, Gelato, Yogurt, Ices", "Pizza/Italian", "Italian", "Chinese", "American", "Indian", "Hamburgers"]
        
        return (
            <div className="bronx">
               

                 {this.state.cuisineChosen ?
                     <div className="center"> 
                        <h2>Great Choice!</h2>
                       <h2>You chose {this.state.cuisineName} food. </h2> 
                            <h2>Here are your options:</h2>
                                {this.renderRestaurants().map(restaurant => {return <div className="restaurants"><NavLink to={`/restaurant/${restaurant.id}`} className="navlink-restaurant" id={restaurant.name}> {restaurant.name}</NavLink></div>})}
                                <h1> <span role="img">😈</span></h1>
                     </div>
                     : 
                    <div> 
                     <h2>
                        Welcome to Staten Island! <h4>Did you forget it was a borough?</h4>
                        This is the last stop on your restaurant journey!
                    </h2>
                    <img src={statenisland} alt="staten-island"></img>
                    <br></br>
                    <h3>
                    Staten Island is...a place.
                    </h3>
                    <h3>What kind of food would you like to try?</h3>
                    <select onChange={this.handleSelectCuisine} className="options">
                    {cuisineArray.map(cuisine => <option value={cuisine}>{cuisine}</option>)}
                    </select>
                </div>
                     } 
                

            </div>

            
        ) //return


    } //render




    // top level
}