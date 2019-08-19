import React, {Component} from "react"
import FordhamRoad from "./fordham-road.jpg"
import { NavLink } from 'react-router-dom';

export default class Bronx extends Component {

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
        let bronxrest = data.filter(restaurant => restaurant.borough === "Bronx")
        let cuisines = bronxrest.map(rest => {return rest.cuisine})
               
        this.setState({
            restaurants: bronxrest
        })

        cuisines.unique = function() {
            return this.filter(function (value, index, self) { 
              return self.indexOf(value) === index;
            });
          }
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

        let cuisineArray = ["Latin (Cuban, Dominican, Puerto Rican, South & Central American)", "Chinese", "Jewish/Kosher", "Delicatessen", "Pizza", "American", "Mexican", "Ice Cream, Gelato, Yogurt, Ices", "Chicken", "Mediterranean"].sort()

       
        
        return (
            <div className="bronx">
               
               

                 {this.state.cuisineChosen ?
                     <div className="center"> 
                        <h2>Great Choice!</h2>
                       <h2>You chose {this.state.cuisineName} food. </h2> 
                            <h2>Here are your options:</h2>
                                {this.renderRestaurants().map(restaurant => {return <div className="restaurants"><NavLink to="/restaurant" className="navlink-restaurant" id={restaurant.name}>{restaurant.name}</NavLink></div>})}
                                <h1> <span role="img">😈</span></h1>
                     </div>
                     : 
                <div> 
                     <h2>
                        Welcome to The Bronx! 
                        <br></br>This is the first stop on your restaurant journey.
                    </h2>
                    <img src={FordhamRoad} alt="fordham-road"></img>
                    <br></br>
                    <h3>
                    Home to many different cultures and cuisines, The Bronx has been a hub of variety for decades.
                    </h3>
                    <h3>What kind of food would you like to try?</h3>
                    <select onChange={this.handleSelectCuisine} className="options">
                    {cuisineArray.map(cuisine => <option value={cuisine}>{cuisine}</option>)}
                    </select>
                </div>
                     } 
                

            </div>
        )
    }
}