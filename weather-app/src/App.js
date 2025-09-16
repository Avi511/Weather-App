import React, {useState} from "react"; 
import axios from "axios";

function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=Colombo,LK&appid=5c7e4512dbda754b125f83b6d898cb37';

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="lacation">
            <p>Sri Lanka</p>
          </div>
          <div className="temp">
            <h1>30 Celcius</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>32 Celcius</p>
            </div>
            <div className="humidity">
              <p>20 %</p>
            </div>
            <div className="wind">
              12 MPH
            </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
