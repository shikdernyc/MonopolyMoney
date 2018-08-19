import React, {Component} from 'react'

class Options extends Component{
    addPlayer = function(event){
        
    }
    
    reset = function(event){
        
    }
    
    startingCash = function(){
        
    }
    
    render(){
        const addPlayerModal =
            <div class="input-group mb-3">
              <input type="text" className="form-control" placeholder="Player Name" aria-describedby="addPlayer"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="addPlayer">Add</button>
              </div>
            </div>

        const startingBalance = 
            <div class="input-group mb-3">
              <input type="number" className="form-control" aria-describedby="startingBalance" placeholder={'$ ' + this.props.startingBalance}/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="startingBalance">Set</button>
              </div>
            </div>

        return (
            <div className="my-4">
                {/*<div className="row">
                    <button type="button" className="btn btn-secondary col mx-3" onClick={this.addPlayer}>Add Player</button>
                    <button type="button" className="btn btn-secondary col mx-3" onClick={this.reset}>Reset</button>
                    <button type="button" className="btn btn-secondary col mx-3" onClick={this.startingCash}>Starting Balance</button>
                </div>
                */}
                <div className="row my-3">
                    <div className="col">
                        {addPlayerModal}
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-secondary col" onClick={this.reset}>Reset</button>
                    </div>                    
                    <div className="col">
                        {startingBalance}
                    </div>
                </div>
            </div>
        )
    }
}

export default Options