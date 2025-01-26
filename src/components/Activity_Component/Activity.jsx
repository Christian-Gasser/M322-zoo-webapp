import React, { useEffect, useState } from 'react';
import { Search, AlertTriangle, MapPin, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../Card_Component/Card';
import styles from './Activity.module.css';
import { getActivityList, getActivityListForActivity, getActivityTitle } from '../../service/activity.service.js';
import { getFormattedDate, getFormattedTime } from '../../service/dayjs.service.js';


export default function Activity() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();

    const { activityId } = useParams();

    useEffect(() => {
        getActivities();
    }, [searchQuery, dateFrom, dateTo]);

    function getActivities() {
        setActivities(activityId ? getActivityListForActivity(parseInt(activityId), dateFrom, dateTo) : getActivityList(searchQuery, dateFrom, dateTo));
    }


    return (
        <>
            <Card flex className={`alignItemsCenter w100 justifyContentBetween`}>
                {
                    activityId ? <div className={styles.backButtonContainer}>
                        <button className={styles.backButton} onClick={() => navigate(-1)}>
                            <ArrowLeft />
                        </button>
                        <h3>{getActivityTitle(activityId)}</h3>
                    </div>
                        :
                        <div className={styles.searchBar}>
                            <Search className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Suchen..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                }
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
                {activities.length > 0 ? activities.map((activity) => (
                    <Card key={`${activity.activityId}-${activity.executionId}`}>
                        <div className={styles.activityContainer}>
                            <div className={styles.cardImagePlaceholder}>
                                <img
                                    src={activity.imageUrl}
                                    alt={activity.title}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.mainContent}>
                                <div className={styles.titleRow}>
                                    <h2 className={styles.cardTitle}>{activity.title}</h2>
                                    <div className={styles.datetimeInfo}>
                                        <p className={styles.date}>{getFormattedDate(activity.startDate)}</p>
                                        <p className={styles.time}>{getFormattedTime(activity.startDate)} - {getFormattedTime(activity.endDate)} Uhr</p>
                                    </div>
                                </div>
                                <div className={styles.cardInfo}>
                                    <AlertTriangle className={styles.alertIcon} />
                                    <p>{activity.info}</p>
                                </div>
                                <div className={styles.locationInfo}>
                                    <MapPin className={styles.locationIcon} />
                                    <p>{activity.location.name}</p>
                                    <ArrowUpRight
                                        className={styles.externalLinkIcon}
                                        onClick={() => navigate(`/map?location=${encodeURIComponent(activity.location.name)}`)}
                                    />
                                </div>
                                <button
                                    className={styles.infoButton}
                                    onClick={() => navigate(`/activities/${activity.activityId}/${activity.executionId}`)}
                                >
                                    Infos
                                </button>
                            </div>
                        </div>
                    </Card>
                )
                ) : <p>Keine Aktivitäten gefunden</p>}
            </div>
        </>
    );
}
