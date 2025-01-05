import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Location data for different categories
const locations = {
    Attraktionen: [
        { position: [47.386506, 8.575515], name: "Haupteingang" },
        { position: [47.387200, 8.575800], name: "Masoala Regenwald" },
        { position: [47.386800, 8.575200], name: "Zoolino" }
    ],
    Tiere: [
        { position: [47.386900, 8.575600], name: "Elefantenpark" },
        { position: [47.387100, 8.575400], name: "Löwengehege" },
        { position: [47.386700, 8.575900], name: "Pinguinanlage" }
    ],
    Besuchereinrichtungen: [
        { position: [47.386400, 8.575300], name: "Restaurant Pantanal" },
        { position: [47.386800, 8.575700], name: "Zoo Shop" },
        { position: [47.386600, 8.575100], name: "Toiletten" }
    ]
};

export default function Map() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const zooPosition = [47.386506, 8.575515];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.mapWrapper}>
            <div className={styles.mapHeader}>
                <h1>Zooplan</h1>
                <div className={styles.dropdown}>
                    <button 
                        type="button"
                        className={styles.attractionsButton}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {selectedCategory || "Auswählen"}
                    </button>
                    {isDropdownOpen && (
                        <ul className={`${styles.dropdownMenu} ${styles.show}`}>
                            {Object.keys(locations).map((category) => (
                                <li 
                                    key={category}
                                    className={styles.dropdownItem}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={styles.mapContainer}>
                <MapContainer 
                    center={zooPosition} 
                    zoom={16} 
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {selectedCategory && locations[selectedCategory].map((location, index) => (
                        <Marker 
                            key={index} 
                            position={location.position}
                        >
                            <Popup>
                                {location.name}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
