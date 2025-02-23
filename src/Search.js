import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css"

export default function Search({ onResults, onPexelsResults }) {
    const [keyword, setKeyword] = useState("leaf");
    
    function handleResponse(response) {
        console.log("Extracted Data:", response.data);
        onResults(response.data);
    }
    function handlePexelsResponse(response) {
        console.log("Pexels Data:", response.data);
        if (onPexelsResults) {
        onPexelsResults(response.data.photos);
    }
}

    function lookup() {
         // API documentation: https://dictionaryapi.dev/
        let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "viui3bo1XHEp9TUeYnYjYiB94ERY0Aeb26TIyWDLlGK7V4ry4gfgqClp";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        lookup(keyword);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }
    //eslint-disable-next-line
    useEffect(() => {
        lookup(keyword);
    }, []);

    return (
        <div className="Search">
            <span className="question">World of Words Dictionary</span>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="form-control search-box" />
            <div className="input group input-group-sm">
            <input type="submit" value="Search" className="search-button" />
            </div>
            </form>
        </div>
    );
}