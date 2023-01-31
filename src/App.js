import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Matheus Alves</code>
        </p>

        <a
          className="App-link"
          href="https://instagram.com/matheus.o.i"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>


        <a
          className="App-link"
          href="https://github.com/sergiomatheuss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        
        <a
          className="App-link"
          href="https://www.linkedin.com/in/sergio-matheus-976826186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
