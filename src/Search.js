import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css"

export default function Search({ onResults }) {
    const [keyword, setKeyword] = useState("leaf");
    
    function handleResponse(response) {
        console.log("Extracted Data:", response.data);
        onResults(response.data);
    }

    function lookup() {
         // API documentation: https://dictionaryapi.dev/
        let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
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
        const apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);
    }, []);

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