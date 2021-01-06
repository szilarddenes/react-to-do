import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class TodoItems extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#fff500',
            padding: ' 0.0rem',
            borderBottom: '1px #ccc dotted'
        }
    }



    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button className="btn" style={btnStyle} onClick={this.props.delItem.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// Button Style
const btnStyle = {
    background: 'black',
    color: '#fff ',
    fontWeight: '800',
    padding: '5px 10px',
    borderRadius: '50%',
    border: 'none',
    float: 'right',
    marginRight: '2rem',
    cursor: 'pointer'
}

// PropTypes
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItems
