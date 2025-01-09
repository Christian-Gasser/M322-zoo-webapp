import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import './LeafletStyles.css';
import L from 'leaflet';
import locations from './locations.json';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
                    maxZoom={20}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom={20}
                        maxNativeZoom={19}
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
