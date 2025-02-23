import React from "react";
import "./Photogallery.css";

export default function Photogallery({ photos }) {
    if (!photos || !Array.isArray(photos) || photos.length === 0) {
        console.log("No photos available:", photos);
        return null;
    }
    console.log("Photos received:", photos);

return (
    <section className="Photogallery">
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                        <a key={index} href={photo.src.original} target="_blank" rel="noreferrer">
                    <img src={photo.src?.landscape || photo.src?.medium || photo.src?.original} 
                    alt={photo.photographer || "Pexels Photo"} 
                    className="img-fluid" />
                    </a>
            ))}
        </div>
    </section>
);
}