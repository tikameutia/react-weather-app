import React from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>React Weather App</h1>
      <SearchEngine />
    </div>
  );
}
