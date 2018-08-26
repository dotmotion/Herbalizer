import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import { plants } from "./plants";

const App = () => {
  return (
    <div className="tc">
      <h1>My Garden</h1>
      <SearchBox />
      <CardList plants={plants} />
    </div>
  );
};

export default App;
