import React, {Component} from 'react'
import CashMenu from './CashMenu'

class Player extends Component{
    constructor(props){
        super(props)
    }
    
    sendPlayerMoney(playerName, amount){
        // TODO: 
    }
    
    render(){
        let {name, balance} = this.props
        return(
            <div class="card">
                <h3 className="display-2">{name}</h3>
                <h2 className="display-1">{balance}</h2>
                <div class="card-body">
                    <CashMenu />
                </div>
            </div>
        ) 
    }
}

export default Player