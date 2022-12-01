import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <div class="input-group">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Type city name"
          />
        </div>
        <button type="button" class="btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
