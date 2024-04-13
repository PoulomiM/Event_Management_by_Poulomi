import React, { useState } from 'react';
import './CreateEvents.css'; 

const CreateEvents = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        time: '',
        location: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Reset form data after submission
        setFormData({
            eventName: '',
            date: '',
            time: '',
            location: '',
            image: ''
        });
    };

    return (
        <div className="create-events-container">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvents;
