import React from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <SearchEngine />
      <h1>Jakarta</h1>
      <div className="d-flex justify-content-around align-item-center">
        <div className="col-auto">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="light rain"
            width="150"
          />
        </div>
        <div className="col-auto">
          <div className="temp">24º</div>
          <div className="temp-desc">Light Rain</div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <i className="fa-solid fa-wind"></i>
        </div>
        <div className="col-auto">
          <div>Wind Speed</div>
          <div>22 km/h</div>
        </div>
      </div>
    </div>
  );
}
