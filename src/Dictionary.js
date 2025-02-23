import React from "react";
import "./Dictionary.css";

export default function Dictionary({ results }) {
    if (!results || Object.keys(results).length === 0) {
        return <p>No results found.</p>;
    }

    // Skapa en Map för att lagra en definition per Part of Speech
    const uniquePartOfSpeech = new Map();
    const additionalDefinitions = [];

    results.meanings.forEach((meaning) => {
        if (!uniquePartOfSpeech.has(meaning.partOfSpeech)) {
            uniquePartOfSpeech.set(meaning.partOfSpeech, meaning);
        } else {
            additionalDefinitions.push(meaning);
        }
    });

    // Välj upp till tre definitioner
    let selectedDefinitions = Array.from(uniquePartOfSpeech.values()).slice(0, 3);

    // Om det finns färre än tre, fyll på med fler definitioner från samma ordklass
    if (selectedDefinitions.length < 3) {
        const missingCount = 3 - selectedDefinitions.length;
        selectedDefinitions = [...selectedDefinitions, ...additionalDefinitions.slice(0, missingCount)];
    }

    return (
        <div className="Dictionary">
            <div className="word-and-phonetic">
            <h1 className="text-capitalize">{results.word}</h1>
            {results.phonetic && <span className="phonetic">Phonetic: /{results.phonetic}/</span>}
            </div>
            <div className="row gx-2">
                {selectedDefinitions.map((meaning, index) => (
                    <div key={index} className="meaning-container col">
                        {/* Checkbox för att toggla "Läs mer" */}
                        <input type="checkbox" id={`expand-${index}`} className="expand-toggle" />
                        
                        {/* Definition-box */}
                        <div className="definition-box">
                            <h4 className="text-capitalize">{meaning.partOfSpeech}</h4>
                            <p>{meaning.definition}</p>

                            {meaning.example && (
                                <p><em>Example:</em> "{meaning.example}"</p>
                            )}
                        </div>

                        {/* "Läs mer" label */}
                        <label htmlFor={`expand-${index}`} className="expand-button">
                            Read more
                        </label>

                        {/* Synonymer i en separat box */}
                        {meaning.synonyms && meaning.synonyms.length > 0 && (
                            <div className="synonyms-box">
                                <h5>Synonyms:</h5>
                                {meaning.synonyms.join(", ")}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
