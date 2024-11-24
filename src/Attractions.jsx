import { useNavigate } from 'react-router-dom';
import Header from "./Header_Component/Header";
import Footer from './Footer_Component/Footer';

export default function Attractions() {
    const navigate = useNavigate();

    const activities = [
        {
            id: 1,
            title: "Penguin Feeding",
            description: "Watch our adorable penguins during their feeding time."
        },
        {
            id: 2,
            title: "Elephant Show",
            description: "Learn about these magnificent creatures in our daily show."
        }
    ];

    const handleActivityClick = (activityId) => {
        navigate(`/details/${activityId}`);
    };

    return (
        <>
            <Header />
            <div className="attractions-container">
                <h1>Zoo Activities</h1>
                <div className="activities-grid">
                    {activities.map(activity => (
                        <div
                            key={activity.id}
                            className="activity-card"
                            onClick={() => handleActivityClick(activity.id)}
                        >
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
