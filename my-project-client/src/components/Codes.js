import React, {Component} from "react"

export default class Codes extends Component {

    componentDidMount() {
        fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(this.renderCodes)
    }

    renderCodes = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}