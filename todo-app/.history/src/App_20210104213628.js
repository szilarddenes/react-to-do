import './App.css';
import fragment from 'react'
import Todos from './components/Todos'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>App 🌶</h1>
        < Todos />
      </div>
    );
  }
}

export default App;