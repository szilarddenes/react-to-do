import React, { Component } from 'react'

export class TodoItems extends Component {
    render() {
        return (
            <div>
                {this.props.title} 🥒
            </div>
        )
    }
}

export default TodoItems
