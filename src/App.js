import React, { Component } from 'react';
import Form from "./Components/form";
import Result from "./Components/result";
import Footer from "./Components/footer";
import './App.css';

class App extends Component {
  state = {
    city: "",
    data: [],
    cityTitle: ""
  }
  handleChange = (value) => {
    this.setState({city: value});
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    let city = this.state.city;
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
    const url = `${CROSS_DOMAIN}/https://www.metaweather.com/api/location`
    const response = await fetch(`${url}/search/?query=${city}`);
    const cityData = await response.json();
    const cityDetailedResponse = await fetch(`${url}/${cityData[0].woeid}`);
    const result = await cityDetailedResponse.json();
    this.setState(state => ({
      data: result.consolidated_weather
    }))
    this.setState({cityTitle: cityData[0].title});
  }
  render() {
    return (
      <div id="app-main" className="container text-center mt-5">
        <h1 className="mb-4">Weather App</h1>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <Result city={this.state.cityTitle} data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
