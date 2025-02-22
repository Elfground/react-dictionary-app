import React from "react";
import "./Dictionary.css";

export default function Dictionary({ results }) {
    if (!results || Object.keys(results).length === 0) {
        return <p>No results found.</p>;
    }
// Create a map for the first definition of each Part of Speech
const uniquePartOfSpeech = new Map();
const additionalDefinitions = [];

results.meanings.forEach((meaning) => {
    if (!uniquePartOfSpeech.has(meaning.partOfSpeech)) {
        // Store one definition per Part of Speech first
        uniquePartOfSpeech.set(meaning.partOfSpeech, meaning);
    } else {
        // If we already have a definition of this Part of Speech, save it for later
        additionalDefinitions.push(meaning);
    }
});

// Choose up to three definitions
let selectedDefinitions = Array.from(uniquePartOfSpeech.values()).slice(0, 3);

// If there are fewer than three, fill up with definitions from the same Part of Speech
if (selectedDefinitions.length < 3) {
    const missingCount = 3 - selectedDefinitions.length;
    selectedDefinitions = [...selectedDefinitions, ...additionalDefinitions.slice(0, missingCount)];
}

return (
    <div className="Dictionary">
        <h1>{results.word}</h1>
        {results.phonetic && <h3>/{results.phonetic}/</h3>}

        {selectedDefinitions.map((meaning, index) => (
            <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                <p><strong>Definition:</strong> {meaning.definition}</p>
                
                {meaning.example && (
                    <p><em>Example:</em> "{meaning.example}"</p>
                )}

                {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ")}</p>
                )}
            </div>
        ))}
    </div>
);
}