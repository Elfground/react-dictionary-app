import React, { useState } from "react";
import "./Search.css"

export default function Search() {
    let [keyword, setKeyword] = useState("");
    function lookup(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }


    return (
        <div className="Search">
        <form onSubmit={lookup}>
            <input type="search" onChange={handleKeywordChange} placeholder="Search for a word..." autoFocus={true} className="form-control search-box" />
            <div className="input group input-group-sm">
            <input type="submit" value="Search" className="search-button" />
            </div>
            </form>
        </div>
    );
}