import React from "react";

const SearchBox = (searchField, searchChange) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        type="search"
        className=""
        placeholder="Search Plants"
      />
    </div>
  );
};

export default SearchBox;
