import React from 'react';
import Card from '../Card_Component/Card';
import FAQ from '../FAQ_Component/FAQ';
import Rating from '../Rating_Component/Rating';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertTriangle, MapPin, ArrowUpRight, ArrowLeft } from 'lucide-react';
import styles from './Details.module.css';
import { getDetails } from '../service/activity.service';
import { getFormattedDate, getFormattedTime } from '../service/dayjs.service';


export default function Details() {
    const { activityId, executionId } = useParams();
    const navigate = useNavigate();
    const activity = getDetails(parseInt(activityId), parseInt(executionId));

    if (!activity) {
        return <div>Aktivität nicht gefunden</div>;
    }

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
                                src={activity.imageUrl}
                                alt={activity.title}
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <AlertTriangle className={styles.alertIcon} />
                            <p>{activity.info}</p>
                        </div>
                        <div className={`${styles.cardInfo} ${styles.locationInfo}`}>
                            <MapPin className={styles.locationIcon} />
                            <p>{activity.location.name}</p>
                            <ArrowUpRight className={styles.externalLinkIcon}
                                onClick={() => navigate(`/map?location=${encodeURIComponent(activity.location.name)}`)}
                            />
                        </div>
                        <hr />
                        <div className={styles.datetimeInfo}>
                            <p className={styles.date}>{getFormattedDate(activity.startDate)}</p>
                            <p className={styles.time}>{getFormattedTime(activity.startDate)} - {getFormattedTime(activity.endDate)} Uhr</p>
                        </div>
                        <div className={styles.alert}>
                            <p className={styles.alertText}>15min vorher benachrichtigen:</p>
                            <label className={styles.switch}>
                                <input type="checkbox" id="toggleSwitch" />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <button
                            className={styles.button}
                            onClick={() => navigate(`/activities/${activity.activityId}`)}
                        >Andere Durchführung auswählen</button>
                    </div>
                </Card>
                <div className={styles.content}>
                    <Rating rating={activity.rating} />
                    <h2>{activity.title}</h2>
                    <div className={styles.description}>
                        <p>{activity.description}</p>
                    </div>
                    <FAQ faq={activity.faq} />
                </div>
            </div>
        </div>
    );
}
