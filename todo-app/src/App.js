import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
const { v4: uuidv4 } = require('uuid');

class App extends Component {

  state = {
    eata: 'eat a',
    todos: [
      {
        id: uuidv4(),
        title: 'eat a 🍌',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'eat a 🍅',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'eat a 🥦',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  delItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo =>
        todo.id !== id
      )]
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }


  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            < Header />
            < AddTodo addTodo={this.addTodo} />
            < Todos todos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
