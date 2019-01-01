import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';

const API_KEY = '2d907c8630839681d0229ddcd97e3cef'
class App extends Component {
  state = {
    temperature: null,
    city: null,
    humidity: null,
    description: null
  }
  fetchWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const state = e.target.elements.state.value;
    const call_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}${country}&APPID=${API_KEY}`);
    const data = await call_api.json();
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].main
    })
    console.log(this.state.humidity)
  }
  render() {
    return (
      <div className="App">
        <h1>How's The Weather?</h1>
        <form onSubmit={this.fetchWeather}>
          <input type='text' name='city' placeholder='City?'/>
          <input type='text' name='state' placeholder='State?' />
          <input type='text' name='country' placeholder='Country?'/>
          <button>Get Weather</button>
        </form>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
