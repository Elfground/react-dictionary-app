import './App.css';
import logo from "./favicon-dictionary.png"
import Search from "./Search";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>World of Words Dictionary</h1>
      <header>
    </header>
    <main>
      <div className="search-component">
      <Search />
      </div>
      <div className="dictionary-component">
      <Dictionary />
      </div>
    </main>
    <footer>
      Made by <a href="https://github.com/Elfground" rel="noreferrer">Monica Alvmarken</a>, open-sourced on <a href="https://github.com/Elfground/react-dictionary-app" rel="noreferrer">GitHub</a>
    </footer>
    </div>
    </div>
  );
}

