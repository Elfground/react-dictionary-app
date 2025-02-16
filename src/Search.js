import React from "react";
import "./Search.css"

export default function Search() {
    return (
        <div className="Search">
        <form>
            <input type="search" placeholder="Search for a word..." className="form-control search-box" />
            <div className="input group input-group-sm">
            <input type="submit" value="Search" className="search-button" />
            </div>
            </form>
        </div>
    );
}