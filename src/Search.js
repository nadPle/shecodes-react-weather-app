import React from "react";

import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <div className="Flex">
        <form id="EnterCityForm">
          <div className="search-bar">
            <input
              className="search-input"
              type="search"
              placeholder="Enter a city"
              id="EnteredCity"
              autocomplete="off"
            />
            <input
              type="submit"
              value="search"
              className="search-icon material-symbols-outlined"
            />{" "}
          </div>
        </form>
        <button id="CurrentLocationButton" title="Use current location">
          <span class="material-symbols-outlined">location_searching</span>
        </button>
      </div>
    </div>
  );
}

export default Search;
