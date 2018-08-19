import React, { Component } from 'react';
import Options from './Options.js'
import Players from './Players.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      startCash: 1500,
      salary: 200,
      players: {
        // <Playername>: <PlayerObject> format
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center display-3">Monopoly Money</h1>
          <Options />
          <Players />
        </div>
      </div>
    );
  }
}

export default App;
