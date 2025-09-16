import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},LK&appid=5c7e4512dbda754b125f83b6d898cb37&units=metric`;

      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      }).catch(err => console.log(err));
    }
  }
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name ? data.name : ''}</p>
          </div>
          <div className="temp">
            <h1>{data.main ? data.main.temp : ''} °C</h1>
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].main : ''}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>{data.main ? data.main.feels_like : ''} °C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.main ? data.main.humidity : ''} %</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data.wind ? data.wind.speed : ''} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
