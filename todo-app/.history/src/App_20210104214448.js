import './App.css';
import React, { Component, fragment } from 'react'

import Todos from './components/Todos'

class App extends Component {
  state = {
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
    Ò
    return (
      <div className="App">
        <h1>App 🌶</h1>
        < Todos />
      </div>
    );
  }
}

export default App;
