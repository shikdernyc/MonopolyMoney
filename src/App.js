import React, { Component } from 'react';
import Options from './Options.js'
import Players from './Players.js'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props){
    super(props);
    this.defaultState = {
      startingBalance: 1500,
      salary: 200,
      players: [
          // Dummy Data
          {
            name: "Player 1",
            balance: 1500
          },
          {
            name: "Player 2",
            balance: 1500
          }
        ]
    }
    this.state = this.defaultState
    this.addPlayer = this.addPlayer.bind(this)
    this.reset = this.reset.bind(this)
    this.setPlayerBalance = this.setPlayerBalance.bind(this)
  }

  setPlayerBalance(playerName, newBalance){
    let newPlayers = this.state.players.slice()
    let player = newPlayers.find(function(player){return player.name===playerName})
    player.balance = newBalance
    console.log(player)
    this.setState({players: newPlayers})
  }

  // Options
  reset(){
    this.setState(this.defaultState)
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
          <Options startingBalance={this.state.startingBalance} addPlayer={this.addPlayer} reset={this.reset}/>
          <Players players={this.state.players} setPlayerBalance={this.setPlayerBalance}/>
        </div>
      </div>
    );
  }
}

export default App;
