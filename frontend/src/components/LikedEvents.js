import React, { useState, useEffect } from 'react';
import EventCard from '../components/Eventcard'; 
import { getLikedEvents } from '../services/Api'; 

const LikedEvents = () => {
    const [likedEvents, setLikedEvents] = useState([]);

    useEffect(() => {
        fetchLikedEvents();
    }, []);

    const fetchLikedEvents = async () => {
        try {
            const response = await getLikedEvents();
            setLikedEvents(response.data); 
        } catch (error) {
            console.error('Error fetching liked events:', error);
        }
    };

    return (
        <div className="liked-events-container">
            <h2>Liked Events</h2>
            <div className="event-list">
                {likedEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default LikedEvents;
