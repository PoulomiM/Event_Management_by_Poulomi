import React, { useState } from 'react';
import { likeEvent, unlikeEvent } from '../services/Api'; // Import API functions

const EventCard = ({ event }) => {
    const [liked, setLiked] = useState(event?.is_liked || false);

    // Function to handle liking an event
    const handleLike = async () => {
        try {
            await likeEvent(event.id);
            // Update the liked state to true
            setLiked(true);
        } catch (error) {
            console.error('Like error:', error.response?.data); // Handle like error
        }
    };

    // Function to handle unliking an event
    const handleUnlike = async () => {
        try {
            await unlikeEvent(event.id);
            // Update the liked state to false
            setLiked(false);
        } catch (error) {
            console.error('Unlike error:', error.response?.data); // Handle unlike error
        }
    };

    return (
        <div className="event-card">
            {event && (
                <>
                    <img src={event.image} alt={event.event_name} className="event-image" />
                    <h3>{event.event_name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                    {/* Render the heart icon based on the liked state */}
                    <button onClick={liked ? handleUnlike : handleLike}>
                        {liked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                </>
            )}
        </div>
    );
};

export default EventCard;


