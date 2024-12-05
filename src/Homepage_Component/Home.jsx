import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mapImage from './zoo_map.png';
import zooShow from './zoo_show.jpg';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    return (
        <>
            <div id="homepage-title-div">
                <h3 id="h3">Willkommen auf der Webseite des</h3>
                <h1 id="h1">Zoo Züri<span className="highlight-text">ch</span></h1>
            </div>
            <div id="homepage-seperator"/>
            
            <div className="cards-container">
                <div className="nav-card" onClick={() => navigateToPage('/activity')}>
                    <div className="card-image">
                        <img src={zooShow} alt="Zoo Activities" className="card-img" />
                    </div>
                    <div className="card-footer">
                        <span>Aktivitäten</span>
                        <ArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="nav-card" onClick={() => navigateToPage('/map')}>
                    <div className="card-image">
                        <img src={mapImage} alt="Zoo Map" className="card-img" />
                    </div>
                    <div className="card-footer">
                        <span>Zooplan</span>
                        <ArrowRight className="arrow-icon" />
                    </div>
                </div>
            </div>
        </>
    );
}
