import './App.css';
import logo from "./favicon-dictionary.png"

export default function App() {
  return (
    <div className="App">
      <header>
      <h1>World of Words Dictionary</h1>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        
    </header>
    <footer>
      Made by <a href="https://github.com/Elfground" rel="noreferrer">Monica Alvmarken</a>, open-sourced on <a href="https://github.com/Elfground/react-dictionary-app" rel="noreferrer">GitHub</a>
    </footer>
    </div>
  );
}

