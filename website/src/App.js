import logo from './react-icons.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://Havy23Reactjs.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="test-link"
        >
          Hello World!
        </a>
      </header>
    </div>
  );
}

export default App;
