import React from 'react';
import Card from '../Card_Component/Card';
import FAQ from '../FAQ_Component/FAQ';
import Rating from '../Rating_Component/Rating';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertTriangle, MapPin, ArrowUpRight, ArrowLeft } from 'lucide-react';
import styles from './Details.module.css';
import activitiesData from '../Activity_Component/activities.json';
import pinguinImage from '../images/pinguin.jpg';
import elefantImage from '../images/elefant.jpg';
import monkeyImage from '../images/monkey.jpg';
import lionImage from '../images/loin.jpg';

const activities = activitiesData.activities;

export default function Details() { 
    const { id } = useParams();
    const navigate = useNavigate();
    const attraction = activities.find(act => act.id === parseInt(id));
    
    if (!attraction) {
        return <div>Activity not found</div>;
    }

    const getImageForActivity = (id) => {
        switch(parseInt(id)) {
            case 1:
                return pinguinImage;
            case 2:
                return elefantImage;
            case 3:
                return monkeyImage;
            case 4:
                return lionImage;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                <ArrowLeft />
            </button>
            <div className={styles.detailList}>
                <Card>
                    <div className={styles.cardContent}>
                        <div className={styles.cardImagePlaceholder}>
                            <img 
                                src={getImageForActivity(id)} 
                                alt={attraction.title}
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <AlertTriangle className={styles.alertIcon} />
                            <p>{attraction.description}</p>
                        </div>
                        <div className={`${styles.cardInfo} ${styles.locationInfo}`}>
                            <MapPin className={styles.locationIcon} />
                            <p>{attraction.location}</p>
                            <ArrowUpRight className={styles.externalLinkIcon} />
                        </div>
                        <hr />
                        <div className={styles.datetimeInfo}>
                            <p className={styles.date}>{attraction.date}</p>
                            <p className={styles.time}>{attraction.timeStart} - {attraction.timeEnd} Uhr</p>
                        </div>
                        <div className={styles.alert}>
                            <p className={styles.alertText}>15min vorher benachrichtigen:</p>
                            <label className={styles.switch}>
                                <input type="checkbox" id="toggleSwitch" />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <button className={styles.button}>Andere Durchführung auswählen</button>
                    </div>
                </Card>
                <div className={styles.content}>
                    <Rating rating={attraction.rating} />
                    <h2>{attraction.title}</h2>
                    <div className={styles.description}>
                        <p>{attraction.description}</p>
                    </div>
                    <FAQ faq={attraction.faq} />
                </div>
            </div>
        </div>
    );
}
