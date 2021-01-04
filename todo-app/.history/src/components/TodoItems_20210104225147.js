import React, { Component } from 'react'

export class TodoItems extends Component {
    render() {
        return (
            <div>
                {this.props.todo.title} 
            </div>
        )
    }
}

export default TodoItems
