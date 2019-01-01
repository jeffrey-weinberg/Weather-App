import React, { Component } from 'react';
import './App.css';

class Weather extends Component {

    render() {
        return (
            <div>
                {this.props.city !== null ?
                    <div className="App">
                        <p>Location: {this.props.city}</p>
                        <p>Current Temperature: {this.props.temperature}</p>
                        <p>Humidity: {this.props.humidity}%</p>
                        <p>Description: {this.props.description}</p>
                    </div>
                : <div>Choose Your Location</div>   
                }
            </div>  
        )
    }
}

export default Weather