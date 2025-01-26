import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState([47.386506, 8.575515]);
    const [mapZoom, setMapZoom] = useState(16);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const locationName = queryParams.get('location');
        
        if (locationName) {
            // Find the location in all categories
            for (const category of Object.values(locations)) {
                const foundLocation = category.find(loc => loc.name === locationName);
                if (foundLocation) {
                    setSelectedLocation(foundLocation);
                    setMapCenter(foundLocation.position);
                    setMapZoom(18);
                    // Find which category this location belongs to
                    const categoryName = Object.keys(locations).find(key =>
                        locations[key].includes(foundLocation)
                    );
                    setSelectedCategory(categoryName);
                    break;
                }
            }
        }
    }, [location]);

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
                    center={mapCenter}
                    zoom={mapZoom}
                    scrollWheelZoom={true}
                    maxZoom={20}
                    key={`${mapCenter[0]}-${mapCenter[1]}-${mapZoom}`}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom={20}
                        maxNativeZoom={19}
                    />
                    {selectedLocation && (
                        <Marker
                            position={selectedLocation.position}
                            icon={new L.Icon({
                                iconUrl: require('leaflet/dist/images/marker-icon.png'),
                                iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                                shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41],
                                className: 'selected-marker'
                            })}
                            eventHandlers={{
                                add: (e) => {
                                    const marker = e.target;
                                    const icon = marker.getElement();
                                    if (icon) {
                                        icon.style.filter = 'hue-rotate(120deg)'; // This will make the marker green
                                        icon.classList.add('selected-marker');
                                    }
                                }
                            }}
                        >
                            <Popup>
                                {selectedLocation.name}
                            </Popup>
                        </Marker>
                    )}
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
