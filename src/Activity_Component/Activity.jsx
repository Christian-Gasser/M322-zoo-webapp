import React, { useState } from 'react';
import { Search, AlertTriangle, MapPin, ArrowUpRight } from 'lucide-react';
import Card from '../Card_Component/Card';
import './Activity.css';

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
            <Card flex>
                <div className="d-flex flex-wrap align-items-center w-100 justify-content-between">
                    <div className="search-bar">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Suchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="date-range ms-auto">
                        <div className="date-field">
                            <label>Von:</label>
                            <input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                            />
                        </div>
                        <div className="date-field">
                            <label>Bis:</label>
                            <input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </Card>

            <div className="activities-list">
                {activities.map((activity) => (
                    <Card key={activity.id}>
                        <div className="activity-container">
                            <div className="card-image-placeholder" />
                            <div className="card-content">
                                <div className="content-top">
                                    <h2 className="card-title">{activity.title}</h2>
                                    <div className="card-info">
                                        <AlertTriangle className="alert-icon" />
                                        <p>{activity.description}</p>
                                    </div>
                                    <div className="card-info location-info">
                                        <MapPin className="location-icon" />
                                        <p>{activity.location}</p>
                                        <ArrowUpRight className="external-link-icon" />
                                    </div>
                                </div>
                                <div className="content-right">
                                    <div className="datetime-info">
                                        <p className="date">{activity.date}</p>
                                        <p className="time">{activity.timeStart} - {activity.timeEnd} Uhr</p>
                                    </div>
                                    <button className="info-button">Infos</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
