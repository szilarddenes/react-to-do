import React, {Component} from 'react'

class Todos extends Component{
    render(){
        return(
           this.props.todos.map((todo)=>(
               <i class="fas fa-h3    "></i>
           ))
        )
    }
}

export default Todos