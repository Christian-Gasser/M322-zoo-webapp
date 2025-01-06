import React from 'react';
import Card from '../Card_Component/Card';
import FAQ from '../FAQ_Component/FAQ';
import Rating from '../Rating_Component/Rating';
import { useParams } from 'react-router-dom';
import { AlertTriangle, MapPin, ArrowUpRight } from 'lucide-react';
import styles from './Details.module.css';

const testdata = {
    title: 'Elefantenschwimmen',
    description: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', 'At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'],
    rating: {
        stars: 4.2,
        raters: 45
    },
    faq: [
        {
            question: 'This is a question?',
            answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            question: 'This is a question?',
            answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            question: 'This is a question?',
            answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        }
    ],
    executions: [
        {
            id: 1,
            place: 'Elefantenhaus',
            info: 'info',
            date: 'Mittwoch, 02.10.2024',
            startTime: '16:15',
            endTime: '16:30'
        },
        {
            id: 2,
            place: 'Elefantenhaus',
            info: 'info',
            date: 'Mittwoch, 02.10.2024',
            startTime: '16:15',
            endTime: '16:30'
        },
        {
            id: 3,
            place: 'Elefantenhaus',
            info: 'info',
            date: 'Mittwoch, 02.10.2024',
            startTime: '16:15',
            endTime: '16:30'
        }
    ]
};

const attraction = testdata;

export default function Details() {
    /* const { attractionId } = useParams(); */

    return (
        <div className={styles.detailList}>
            <Card className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardImagePlaceholder}></div>
                    <div className={styles.cardInfo}>
                        <AlertTriangle className={styles.alertIcon} />
                        <p>Info</p>
                    </div>
                    <div className={`${styles.cardInfo} ${styles.locationInfo}`}>
                        <MapPin className={styles.locationIcon} />
                        <p>location</p>
                        <ArrowUpRight className={styles.externalLinkIcon} />
                    </div>
                    <hr></hr>
                    <div className={styles.datetimeInfo}>
                        <p className={styles.date}>Mittwoch, 02.10.2024</p>
                        <p className={styles.time}>16:15 - 16:30 Uhr</p>
                    </div>
                    <div className={styles.alert}>
                        <p className={styles.alertText}>15min vorher Benachrichtigen:</p>
                        <div className={styles.switch}>
                            <input type="checkbox" id="toggleSwitch" />
                            <span className={styles.slider}></span>
                        </div>
                    </div>
                    <button className={styles.button}>Andere Durchführung auswählen</button>
                </div>
            </Card>
            <div className={styles.content}>
                <Rating rating={attraction.rating} />
                <h2>{attraction.title}</h2>
                <div className={styles.description}>
                    {
                        attraction.description.map((p, index) => {
                            return (
                                <p key={index}>{p}</p>
                            );
                        })
                    }
                </div>
                <FAQ faq={attraction.faq} />
            </div>
        </div>
    );
}
