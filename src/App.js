import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { plants } from "./plants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: plants,
      searchfield: ""
    };
  }

  onSearchChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="tc">
        <h1>My Garden</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList plants={this.state.plants} />
      </div>
    );
  }
}

export default App;
