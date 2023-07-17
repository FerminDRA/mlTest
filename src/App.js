import logo from './logo.svg';
import './App.css';
import Boton from './components/apiButton';
import Tensorf from './components/tensor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>New code</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Tensorf></Tensorf>
          <Boton></Boton>
        </div>
      </header>
    </div>
  );
}

export default App;
