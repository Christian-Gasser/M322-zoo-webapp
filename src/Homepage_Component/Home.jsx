import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mapImage from './zoo_map.png';
import zooShow from './zoo_show.jpg';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const goToActivities = () => {
        navigate('/activities');
    };

    const renderAnimatedText = () => {
        const text = 'Zoo Zürich';
        return text.split('').map((letter, index) => (
            <span 
                key={index} 
                className="wave-letter"
                style={{ 
                    animationDelay: `${index * 0.06}s`,
                    ...(letter === ' ' && { marginRight: '1rem' })
                }}
            >
                {letter}
            </span>
        ));
    };

    return (
        <>
            <div id="homepage-title-div">
                <h3 id="h3">Willkommen auf der Webseite des</h3>
                <h1 id="h1">
                    <span className="wave-text">
                        {renderAnimatedText()}
                    </span>
                </h1>
            </div>
            <div id="homepage-seperator"/>
            
            <div className="cards-container">
                <div className="nav-card" onClick={() => navigate('/activity')}>
                    <div className="card-image">
                        <img src={zooShow} alt="Zoo Activities" className="card-img" />
                    </div>
                    <div className="card-footer">
                        <span>Aktivitäten</span>
                        <ArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="nav-card" onClick={() => navigate('/map')}>
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

export default Home;
