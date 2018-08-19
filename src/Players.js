import React, {Component} from 'react'
import Player from './Player.js'

class Players extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <div class="card-columns">
                    <Player name="Player1" balance={1500}/>
                    <Player name="Player2" balance={1500}/>
                </div>
            </div>
        )
    }
}

export default Players