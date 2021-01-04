import React, { Component } from 'react'
import TodoItems from './TodoItems'

class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo) => (
                <>
                    < TodoItems key={todos.id} todo={todo}/>
                </>
            ))
        )
    }
}

export default Todos