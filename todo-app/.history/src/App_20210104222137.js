import './App.css';
import React, { Component } from 'react'

import Todos from './components/Todos'

class App extends Component {
  state = {
   
    todos: [
      {
        id: '1',
        title: 'eat a 🍌',
        date: Date.now().to,
        completed: false
      },
      {
        id: '2',
        title: 'eat a 🍅',
        date: Date.now().to,
        completed: false
      },
      {
        id: '3',
        title: 'eat a 🥦',
        date: Date.now().to,
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Appp 🌶</h1>
        < Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
