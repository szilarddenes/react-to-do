import './App.css';
import React, { Component } from 'react'

import Todos from './components/Todos'

class App extends Component {
  state = {
    eata: 'eat a',
    todos: [
      {
        id: '1',
        title: 'eat a 🍌',
        completed: false
      },
      {
        id: '2',
        title: 'eat a 🍅',
        completed: false
      },
      {
        id: '3',
        title: 'eat a 🥦',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Appp 🌶</h1>
        < Todos todos={this.state.todos} todos={this.state.eata} />
      </div>
    );
  }
}

export default App;
