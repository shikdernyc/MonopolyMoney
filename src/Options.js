import React, {Component} from 'react'

class Options extends Component{
    addPlayer = function(event){
        
    }
    
    reset = function(event){
        
    }
    
    startingCash = function(){
        
    }
    
    render(){
        return (
            <div className="row my-5">
                <button type="button" className="btn btn-secondary col mx-5" onClick={this.addPlayer}>Add Player</button>
                <button type="button" className="btn btn-secondary col mx-5" onClick={this.reset}>Reset</button>
                <button type="button" className="btn btn-secondary col mx-5" onClick={this.startingCash}>Starting Cash</button>
            </div>
        )
    }
}

export default Options