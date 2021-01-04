import React, { Component } from 'react'

export class TodoItems extends Component {
    render() {
        return (
            <div>
                {this.todo.props.title} 🥒
            </div>
        )
    }
}

export default TodoItems
