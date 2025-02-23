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
        <h3>Related Images</h3>
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                    <img key={index}  src={photo.src?.landscape || photo.src?.medium || photo.src?.original} 
                    alt={photo.photographer || "Pexels Photo"} 
                    className="photo" />
            ))}
        </div>
    </section>
);
}