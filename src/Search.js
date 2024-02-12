import React from "react";

import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <div className="Flex">
        <form id="EnterCityForm">
          <input
            type="search"
            placeholder="Enter your city here"
            id="EnteredCity"
            autocomplete="off"
          />
          <input type="submit" value="Search" />
        </form>
        <button id="CurrentLocationButton">Use current location</button>
      </div>
    </div>
  );
}

export default Search;
