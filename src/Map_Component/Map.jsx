import React from 'react';
import Header from '../Header_Component/Header';
import Footer from '../Footer_Component/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function Map() {
    // Zoo Zürich coordinates
    const zooPosition = [47.386506, 8.575515];

    return (
        <>
            <div className="map-wrapper">
                <div className="map-header">
                    <h1>Zooplan</h1>
                    <button className="attractions-button">Attraktionen</button>
                </div>
                <div className="map-container">
                    <MapContainer 
                        center={zooPosition} 
                        zoom={16} 
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={zooPosition}>
                            <Popup>
                                Zoo Zürich
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}
