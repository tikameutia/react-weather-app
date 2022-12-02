import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form className="d-flex justify-content-center" id="search-city-form">
        <div className="me-2">
          <input
            type="search"
            className="form-control"
            placeholder="Type city name"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
