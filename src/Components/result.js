import React from "react";

const Result = props => {
  if (props.data.length === 0) {
    return null;
  } else {
    let results = props.data.map(day => {
      let imgSrc = `https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`;
      return (
        <div key={day.id} className="card">
          <img className="card-img-top mx-auto" src={imgSrc} alt={day.weather_state_name}/>
          <div className="card-body">
            <p className="card-text">{day.applicable_date}</p>
            <p className="card-text">Max: {Math.round(day.max_temp)}</p>
            <p className="card-text">Min: {Math.round(day.min_temp)}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="mt-4 mx-auto w-75">
        <h3>Weather Conditions for {props.city}</h3>
        <p className="small">Data are from <a href="https://www.metaweather.com/api/">Metaweather</a></p>
        <div id="results-div" className="d-flex justify-content-center mt-4">
          {results}
        </div>
      </div>
    );
  }
}

export default Result;
