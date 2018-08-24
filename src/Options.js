import React, {Component} from 'react'

class Options extends Component{
      constructor(props){
        super(props)
        console.log(props)
        this.addPlayer = props.addPlayer
        this.reset = props.reset
    }
    
    handleAddPlayer(event){
        event.preventDefault()
        const newPlayerElm = document.getElementById('newPlayerName')
        this.addPlayer(newPlayerElm.value)
        newPlayerElm.value = ""
    }
    
    handleReset(event){
        console.log('handling reset')
        this.reset()
    }
    
    startingCash(){
        
    }
    
    render(){
        const addPlayerModal =
            <div class="input-group mb-3">
              <input type="text" className="form-control" id="newPlayerName" placeholder="Player Name" aria-describedby="addPlayer"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="addPlayer" onClick={this.handleAddPlayer.bind(this)}>Add</button>
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
                <div className="row my-3 shadow">
                    <div className="col">
                        {addPlayerModal}
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-secondary col" onClick={this.handleReset.bind(this)}>Reset</button>
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