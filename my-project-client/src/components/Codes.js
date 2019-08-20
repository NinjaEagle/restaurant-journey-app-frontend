import React, {Component} from "react"

export default class Codes extends Component {

    componentDidMount() {
        fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(this.renderCodes)
    }

    renderCodes = (data) => {
        let codes = data.map(data => {return data.code})

        console.log(codes)

        codes.unique = function() {
            return this.filter(function (value, index, self) { 
              return self.indexOf(value) === index;
            });
          }

          console.log(codes.unique())
    }

    renderOutcomes = () => {
        if (this.props.restaurant.code === "04M") {
            return <div className="outcome"> You seem okay...hopefully the roach you saw crawling on the wall didn't get in your food.</div>
        } else if (this.props.restaurant.code === "04N") {
            return <div className="outcome"> By the time you were done eating you stopped noticing all the buzzing around your ears.</div>
        }
        else if (this.props.restaurant.code === "04L" || this.props.restaurant.code === "04K") {
            return <div className="outcome"> Did you just see something move out of the corner of your eye? Nah, probably not. I'm sure you'll be fine.</div>
        }
        else if (this.props.restaurant.score > 0 && this.props.restaurant.score < 10) {
            return <div className="outcome">You did well! Congratulations, you didn't get sick.</div>
        } else if (this.props.restaurant.score > 10 && this.props.restaurant.score < 28) {
            return <div className="outcome"> Hmm. You seem fine. Might be too early to tell though... </div>
        } else if (this.props.restaurant.score > 27) {
            return <div className="outcome"> BIG yikes. You couldn't have chosen a worse place to eat. Enjoy the rest of your life. </div>
        } else if (this.props.restaurant.score === null) {
            return <div className="outcome">You did well! Congratulations, you didn't get sick.</div>
        }
    }

    render() {
        return (
            <div className="outcome-div">
                   <h3>
                   {this.renderOutcomes()}
                    </h3> 
                    <h3> Violation: <br></br>{this.props.restaurant.violation}</h3>
                    <h2>Sickness Score: {this.props.restaurant.score} </h2>
            </div>
        )
    }
}