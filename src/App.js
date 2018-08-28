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

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredPlants = this.state.plants.filter(plant => {
      return plant.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>My Garden</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList plants={filteredPlants} />
      </div>
    );
  }
}

export default App;
