import React, { useState } from "react";
import axios from "axios";
import "./Search.css"

export default function Search({ onResults }) {
    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log("Extracted Data:", response.data[0]);
        onResults(response.data[0]);
    }

    function lookup(event) {
        // API documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        lookup();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

    return (
        <div className="Search">
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="form-control search-box" />
            <div className="input group input-group-sm">
            <input type="submit" value="Search" className="search-button" />
            </div>
            </form>
        </div>
    );
}