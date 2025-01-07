import React, { useState } from 'react';
import { Search, AlertTriangle, MapPin, ArrowUpRight } from 'lucide-react';
import Card from '../Card_Component/Card';
import styles from './Activity.module.css';

export default function Activity() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const activities = [
        {
            id: 1,
            title: 'Pinguinfütterung',
            description: 'Erleben Sie die Fütterung unserer Pinguine hautnah.',
            location: 'Pinguin-Anlage',
            date: 'Mittwoch, 02.10.2024',
            timeStart: '16:15',
            timeEnd: '16:30'
        },
        {
            id: 2,
            title: 'Elefantenpräsentation',
            description: 'Lernen Sie mehr über unsere sanften Riesen.',
            location: 'Kaeng Krachan Elefantenpark',
            date: 'Mittwoch, 02.10.2024',
            timeStart: '14:00',
            timeEnd: '14:30'
        }
    ];

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
                            <div className={styles.cardImagePlaceholder} />
                            <div className={styles.cardContent}>
                                <div className="contentTop">
                                    <h2 className={styles.cardTitle}>{activity.title}</h2>
                                    <div className={styles.cardInfo}>
                                        <AlertTriangle className={styles.alertIcon} />
                                        <p>{activity.description}</p>
                                    </div>
                                    <div className={`${styles.cardInfo} ${styles.locationInfo}`}>
                                        <MapPin className={styles.locationIcon} />
                                        <p>{activity.location}</p>
                                        <ArrowUpRight className={styles.externalLinkIcon} />
                                    </div>
                                </div>
                                <div className={styles.contentRight}>
                                    <div className={styles.datetimeInfo}>
                                        <p className={styles.date}>{activity.date}</p>
                                        <p className={styles.time}>{activity.timeStart} - {activity.timeEnd} Uhr</p>
                                    </div>
                                    <button className={styles.infoButton}>Infos</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
