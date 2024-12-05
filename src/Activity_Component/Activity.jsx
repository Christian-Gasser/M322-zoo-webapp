import React, { useState } from 'react';
import { Search, AlertTriangle, MapPin, ArrowUpRight } from 'lucide-react';
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
            <div className="activity-container">
                <div className="search-section">
                    <div className="search-bar">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Suchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="date-range">
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

                <div className="activities-list">
                    {activities.map(activity => (
                        <div key={activity.id} className="activity-card">
                            <div className="card-image-placeholder"></div>
                            
                            <div className="card-content">
                                <h3 className="card-title">{activity.title}</h3>
                                <div className="card-description">
                                    <AlertTriangle className="alert-icon" />
                                    <p>Here is a information about that activity.</p>
                                </div>
                                <div className="card-location">
                                    <MapPin className="location-icon" />
                                    <p>{activity.location}</p>
                                    <ArrowUpRight className="external-link-icon" />
                                </div>
                            </div>

                            <div className="card-right">
                                <div className="card-datetime">
                                    <p className="date">{activity.date}</p>
                                    <p className="time">{activity.timeStart} - {activity.timeEnd} Uhr</p>
                                </div>
                                <button className="info-button">Infos</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
