import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mapImage from './zoo_map.png';
import zooShow from './zoo_show.jpg';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();

    const renderAnimatedText = () => {
        const text = 'Zoo Zürich';
        return text.split('').map((letter, index) => (
            <span 
                key={index} 
                className={styles.waveLetter}
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
            <div className={styles.homepageTitleDiv}>
                <h3 className={styles.h3}>Willkommen auf der Webseite des</h3>
                <h1 className={styles.h1}>
                    <span className={styles.waveText}>
                        {renderAnimatedText()}
                    </span>
                </h1>
            </div>
            <div className={styles.homepageSeperator}/>
            
            <div className={styles.cardsContainer}>
                <div className={styles.navCard} onClick={() => navigate('/activities')}>
                    <div className={styles.cardImage}>
                        <img src={zooShow} alt="Zoo Activities" className={styles.cardImg} />
                    </div>
                    <div className={styles.cardFooter}>
                        <span>Aktivitäten</span>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                </div>

                <div className={styles.navCard} onClick={() => navigate('/map')}>
                    <div className={styles.cardImage}>
                        <img src={mapImage} alt="Zoo Map" className={styles.cardImg} />
                    </div>
                    <div className={styles.cardFooter}>
                        <span>Zooplan</span>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
