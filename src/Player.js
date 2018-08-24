import React, {Component} from 'react'
import CashMenu from './CashMenu'

class Player extends Component{
    constructor(props){
        super(props)
        this.name = props.name
        this.setPlayerBalance = props.setPlayerBalance
        this.setBalance = this.setBalance.bind(this)
    }
    
    sendPlayerMoney(playerName, amount){
        // TODO: 
    }

    setBalance(balance){
        this.setPlayerBalance(this.name, balance)
    }
    
    render(){
        let {name, balance} = this.props
        return(
            <div className="card text-center bg-light shadow rounded">
                <h2 className="display-2">{name}</h2>
                <h3>${balance}</h3>
                <div class="card-body">
                    <CashMenu currentBalance={balance} setBalance={this.setBalance} />
                </div>
            </div>
        ) 
    }
}

export default Player