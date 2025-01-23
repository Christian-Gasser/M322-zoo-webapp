import React, { useState } from 'react';
import { Search, AlertTriangle, MapPin, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card_Component/Card';
import styles from './Activity.module.css';
import activitiesData from './activities.json';
import pinguinImage from '../images/pinguin.jpg';
import elefantImage from '../images/elefant.jpg';

export default function Activity() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const navigate = useNavigate();

    const { activities } = activitiesData;

    const getImageForActivity = (id) => {
        switch(id) {
            case 1:
                return pinguinImage;
            case 2:
                return elefantImage;
            default:
                return null;
        }
    };

    return (
        <>
            <Card flex className={`alignItemsCenter w100 justifyContentBetween`}>
                <div className={styles.searchBar}>
                    <Search className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Suchen..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={`${styles.dateRange} msAuto`}>
                    <div className={styles.dateField}>
                        <label>Von:</label>
                        <input
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                        />
                    </div>
                    <div className={styles.dateField}>
                        <label>Bis:</label>
                        <input
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                        />
                    </div>
                </div>
            </Card>

            <div className={styles.activitiesList}>
                {activities.map((activity) => (
                    <Card key={activity.id}>
                        <div className={styles.activityContainer}>
                            <div className={styles.cardImagePlaceholder}>
                                <img 
                                    src={getImageForActivity(activity.id)} 
                                    alt={activity.title}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.mainContent}>
                                <div className={styles.titleRow}>
                                    <h2 className={styles.cardTitle}>{activity.title}</h2>
                                    <div className={styles.datetimeInfo}>
                                        <p className={styles.date}>{activity.date}</p>
                                        <p className={styles.time}>{activity.timeStart} - {activity.timeEnd} Uhr</p>
                                    </div>
                                </div>
                                <div className={styles.cardInfo}>
                                    <AlertTriangle className={styles.alertIcon} />
                                    <p>{activity.description}</p>
                                </div>
                                <div className={styles.locationInfo}>
                                    <MapPin className={styles.locationIcon} />
                                    <p>{activity.location}</p>
                                    <ArrowUpRight className={styles.externalLinkIcon} />
                                </div>
                                <button 
                                    className={styles.infoButton}
                                    onClick={() => navigate(`/details/${activity.id}`)}
                                >
                                    Infos
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
