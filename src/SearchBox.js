import React from "react";
import leaf from "./leaf.svg";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <form class="search-container tc">
      <input
        id="search-box"
        type="text"
        class="search-box"
        name="q"
        onChange={searchChange}
      />
      <label for="search-box">
        <span>
          <img src={leaf} className="search-icon" alt="search" />
        </span>
      </label>
      <input type="submit" id="search-submit" />
    </form>
  );
};

export default SearchBox;
