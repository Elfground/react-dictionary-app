import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Search.css"

export default function Search({ onResults }) {
    const [keyword, setKeyword] = useState("leaf");


    function handleResponse(response) {
        console.log("Extracted Data:", response.data);
        onResults(response.data);
    }

    const lookup = useCallback((word) => {
        let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        lookup(keyword);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

    useEffect(() => {
        lookup(keyword);
    }, [lookup, keyword]);

    return (
        <div className="Search">
            <span className="question">What do you want to know?</span>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="form-control search-box" />
            <div className="input group input-group-sm">
            <input type="submit" value="Search" className="search-button" />
            </div>
            </form>
        </div>
    );
}