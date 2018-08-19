import React, {Component} from 'react'

class CashMenu extends Component{
    constructor(){
        
    }
    
    handleAmount(event){
        // TODO: Update state to hold current value
        let elm = event.target
    }
    
    handleAddAmount(event){
        
    }
    
    handleRemoveAmount(event){
        
    }
    
    handleTransferAmount(event){
        
    }
    
    giveSalary(event){
        
    }
    
    render(){
        let {players} = this.props
        
        return(
            <div>
                <input type="text" class="form-control" id="amount" onChange={this.handleAmount} placeholder="$500"/>
                <div className="row">
                    <button type="button" className="btn btn-secondary col mx-5" onClick={this.handleAddAmount}>Add</button>
                    <button type="button" className="btn btn-secondary col mx-5" onClick={this.reset}>Remove</button>
                </div>
                <div className="row">
                  <div class="form-group col">
                    <label>Players</label>
                    <select class="form-control">
                      <option>Player 1</option>
                      <option>Player 2</option>
                      <option>Player 3</option>
                      <option>Player 4</option>
                      <option>Player 5</option>
                    </select>
                  </div>                    
                  <button type="button" className="btn btn-secondary col mx-5" onClick={this.handleTransferAmount}>Send</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-secondary col mx-5" onClick={this.giveSalary}>Give Salary</button>
                </div>
            </div>
        )
    }
}

export default CashMenu