import React, { Component } from 'react';
import Options from './Options.js'
import Players from './Players.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      startingBalance: 1500,
      salary: 200,
      players: [
          // Stored in a {name: name, balance: balance} format
        ]
    }
    this.addPlayer = this.addPlayer.bind(this)
  }
  
  addPlayer(playerName){
    const newPlayer = {
      name: playerName,
      balance: this.state.startingBalance
    }
    let currentPlayers = this.state.players.slice()
    currentPlayers.push(newPlayer)
    this.setState({players: currentPlayers})
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center display-3">Monopoly Money</h1>
          <Options startingBalance={this.state.startingBalance} addPlayer={this.addPlayer}/>
          <Players />
        </div>
      </div>
    );
  }
}

export default App;
