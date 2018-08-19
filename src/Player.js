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
            <div className="card text-center bg-light shadow rounded">
                <h2 className="display-2">{name}</h2>
                <h3>${balance}</h3>
                <div class="card-body">
                    <CashMenu />
                </div>
            </div>
        ) 
    }
}

export default Player