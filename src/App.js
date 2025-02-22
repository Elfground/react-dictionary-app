import React, { useState } from "react";
import './App.css';
import Search from "./Search";
import Dictionary from "./Dictionary";

export default function App() {
  const [results, setResults] = useState({});

  function handleSearchResults(data) {
    setResults(data);
}

  return (
    <div className="App">
      <div className="container">
      <h1>World of Words Dictionary</h1>
      <header>
    </header>
    <main>
      <div className="search-component">
      <Search onResults={handleSearchResults} />
      </div>
      <div className="dictionary-component">
      <Dictionary results={results}/>
      </div>
    </main>
    <footer>
      Made by <a href="https://github.com/Elfground" rel="noreferrer">Monica Alvmarken</a>, open-sourced on <a href="https://github.com/Elfground/react-dictionary-app" rel="noreferrer">GitHub</a> and hosted on <a href="https://world-word-app.netlify.app/" rel="noreferrer">Netlify</a>
    </footer>
    </div>
  </div>
  );
}

