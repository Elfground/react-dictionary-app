import React, { useState } from "react";
import './App.css';
import Search from "./Search";
import Dictionary from "./Dictionary";
import Photogallery from "./Photogallery";

export default function App() {
  const [results, setResults] = useState({});
  const [photos, setPhotos] = useState([])

  function handleSearchResults(data) {
    setResults(data);
}

function handlePexelsResults(data) {
  setPhotos(data); // Saves the images from Pexels
}

  return (
    <div className="App">
      <div className="container">
      <header>
    </header>
    <main>
      <div className="search-component">
      <Search onResults={handleSearchResults} onPexelsResults={handlePexelsResults} />
      </div>
      <div className="dictionary-component">
      <Dictionary results={results}/>
      </div>
      <Photogallery photos={photos} />
    </main>
    <footer>
      Made by <a href="https://github.com/Elfground" rel="noreferrer">Monica Alvmarken</a>, open-sourced on <a href="https://github.com/Elfground/react-dictionary-app" rel="noreferrer">GitHub</a> and hosted on <a href="https://world-word-app.netlify.app/" rel="noreferrer">Netlify</a>
    </footer>
    </div>
  </div>
  );
}

