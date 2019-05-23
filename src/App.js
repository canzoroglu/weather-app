import React, { Component } from 'react';
import Form from "./Components/form";
import Result from "./Components/result";
import Footer from "./Components/footer";
import './App.css';

class App extends Component {
  state = {
    city: "",
    data: []
  }
  handleChange = (value) => {
    this.setState({city: value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let city = this.state.city;
    fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(response => response.json()).then(dat => {
      fetch(`https://www.metaweather.com/api/location/${dat[0].woeid}`)
      .then(res => res.json()).then(veri => {
        this.setState(state => ({
          data: veri.consolidated_weather
        }));
      });
    });

    e.target.firstElementChild.value = "";
  }
  render() {
    return (
      <div id="app-main" className="container text-center mt-5">
        <h1 className="mb-4">Weather App</h1>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <Result city={this.state.city} data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
