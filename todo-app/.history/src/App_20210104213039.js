import { render } from '@testing-library/react';
import './App.css';
// import fragment from 'react'
import Todos from './components/Todos'

function App() {

  render(){
  return (
    <div className="App">
     <h1>App 🌶</h1>
     < Todos/>
    </div>
  )
}
}

export default App;
