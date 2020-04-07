import React from "react";

import data from "../data";
import "./styles.scss";

import Pokemon from "./Pokemon";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: data //can set this to undefined and
    }; //default Prop in Pokemon will be loaded!! Very Cool!!
  }

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
