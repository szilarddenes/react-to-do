import React, {Component} from 'react'

class Todos extends Component{
    render(){
        
        console.log(this.props.todos)
        return(
            <div>
            <h1>todo</h1>
            </div>
        )
    }
}

export default Todos