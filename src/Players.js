import React, {Component} from 'react'
import Player from './Player.js'

class Players extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let {players} = this.props
        let playerList = players.map(({name, balance}, index)=>(
                <Player name={name} balance={balance}/>
            ))
        
        return(
            <div>
                <div class="card-columns">
                    {playerList}
                </div>
            </div>
        )
    }
}

export default Players