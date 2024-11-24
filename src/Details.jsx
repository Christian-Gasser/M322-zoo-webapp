import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header_Component/Header";
import Footer from './Footer_Component/Footer';

export default function Details() {
    const { activityId } = useParams();

    return (
        <>
            <Header/>
            <div className="details-container">
                {activityId ? (
                    <div className="activity-details">
                        <h2>Activity Details for {activityId}</h2>
                    </div>
                ) : (
                    <div className="general-details">
                        <h2>Zoo Details</h2>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
