import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

export default function Search({ onResults, onPexelsResults }) {
    const [keyword, setKeyword] = useState("leaf");
    const [errorMessage, setErrorMessage] = useState(""); 

    function handleResponse(response) {
        console.log("Extracted Data:", response.data);

        if (!response.data.meanings || response.data.meanings.length === 0) {
            setErrorMessage("I did not find that word, try another...");
            onResults(null);
        } else {
            setErrorMessage("");
            onResults(response.data);
        }
    }

    function handlePexelsResponse(response) {
        console.log("Pexels Data:", response.data);
        if (onPexelsResults) {
            onPexelsResults(response.data.photos);
        }
    }

    function lookup() {
        setErrorMessage("");

        let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse).catch(() => {
            setErrorMessage("I did not find that word, try another...");
            onResults(null);
        });

        let pexelsApiKey = "viui3bo1XHEp9TUeYnYjYiB94ERY0Aeb26TIyWDLlGK7V4ry4gfgqClp";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        lookup(keyword);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    useEffect(() => {
        lookup(keyword);
    }, []);

    return (
        <div className="Search">
            <span className="question">World of Words Dictionary</span>
            <form onSubmit={handleSubmit}>
                <input 
                    type="search" 
                    onChange={handleKeywordChange} 
                    placeholder="Search for a word..." 
                    autoFocus={true} 
                    className="form-control search-box" 
                />
                <div className="input group input-group-sm">
                    <input type="submit" value="Search" className="search-button" />
                </div>
            </form>

            {/* Show error if word isn't found */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
