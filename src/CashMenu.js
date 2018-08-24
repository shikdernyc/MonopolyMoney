import React, {Component} from 'react'

class CashMenu extends Component{
    constructor(props){
        super(props)
        this.setBalance = props.setBalance
    }
    
    handleAmount(event){
        // TODO: Update state to hold current value
        let elm = event.target
    }

    
    handleAddAmount(event){
        let amount = parseInt(document.getElementById('amount').value)
        this.setBalance(this.props.currentBalance + amount)
        event.target.value = ""
    }
    
    handleRemoveAmount(event){
        let amount = parseInt(document.getElementById('amount').value)
        this.setBalance(this.props.currentBalance - amount)
        event.target.value = ""
    }
    
    handleTransferAmount(event){
        
    }
    
    giveSalary(event){
        
    }
    
    render(){
        // let {players} = this.props
        
        return(
            <div className="container">
                <div className="row">
                    <input type="text" className="form-control col mx-2 my-2" id="amount" placeholder="$500"/>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-success col mx-2 my-2" onClick={this.handleAddAmount.bind(this)}>Add</button>
                    <button type="button" className="btn btn-danger col mx-2 my-2" onClick={this.handleRemoveAmount.bind(this)}>Remove</button>
                </div>
                <div className="row">
                    <select class="form-control col mx-2 my-2">
                        {/*TODO: Populate with playerList*/}
                      <option>Player 1</option>
                      <option>Player 2</option>
                      <option>Player 3</option>
                      <option>Player 4</option>
                      <option>Player 5</option>
                    </select>
                    <button type="button" className="btn btn-info col mx-2 my-2" onClick={this.handleTransferAmount}>Transfer</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-success col mx-2 my-2" onClick={this.giveSalary}>Give Salary</button>
                </div>
            </div>
        )
    }
}

export default CashMenu