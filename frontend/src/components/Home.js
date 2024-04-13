import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
    // Sample event data
    const [events, setEvents] = useState([
        { id: 1, name: 'Yoga Class', location: 'New Delhi', liked: false },
        { id: 2, name: 'Marathon in New Delhi', location: 'New Delhi', liked: false },
        { id: 3, name: 'Concert in Central Park', location: 'New York', liked: false },
        { id: 4, name: 'Food Festival', location: 'London', liked: false },
    ]);

    // Function to toggle like status of an event
    const toggleLike = (id) => {
        setEvents(events.map(event => {
            if (event.id === id) {
                return { ...event, liked: !event.liked };
            }
            return event;
        }));
    };

    // Function to handle share event
    const shareEvent = async (id, name) => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Check out this event!',
                    text: `Join me for ${name}`,
                    url: window.location.href,
                });
            } else {
                // Fallback if Web Share API is not supported
                alert('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <div className="home-container">
            <div className="hero-image">
                <img src="./Assests/home.webp" alt="Logo" className="logo-img" />
                <button className="find-event-btn">Find Your Next Event</button>
            </div>
            <div className="event-list">
                {events.map(event => (
                    <div className="event" key={event.id}>
                        <img src={`./Assests/image${event.id}.jpg`} alt={`Event ${event.id}`} />
                        <div className="event-details">
                            <p className="event-name">{event.name}</p>
                            <p className="event-location">{event.location}</p>
                        </div>
                        <div className="buttons">
                            <button className={event.liked ? "like-button liked" : "like-button"} onClick={() => toggleLike(event.id)}>
                                <i className="fas fa-heart"></i>
                            </button>
                            <button className="share-button" onClick={() => shareEvent(event.id, event.name)}>
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;



