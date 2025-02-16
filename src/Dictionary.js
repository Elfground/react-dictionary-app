import React from "react";
import "./Dictionary.css";

export default function Dictionary({ results }) {
    if (!results || Object.keys(results).length === 0) {
        return <p>No results found.</p>;
    }
    
    return (
        <div className="Dictionary">
            <h2>{results.word}</h2>
            {results.meanings && results.meanings.map((meaning, index) => (
                <div key={index}>
                    <h4>{meaning.partOfSpeech}</h4>
                    <p>{meaning.definitions[0].definition}</p>
                </div>
            ))}
        </div>
    );
}