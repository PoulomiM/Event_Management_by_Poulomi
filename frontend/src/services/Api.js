import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export likeEvent and unlikeEvent functions
export const likeEvent = (eventId) => api.post(`/events/${eventId}/like`);
export const unlikeEvent = (eventId) => api.post(`/events/${eventId}/unlike`);

const apiService = {
  login: (credentials) => api.post('/login', credentials),
  signup: (userData) => api.post('/signup', userData),
  getEvents: () => api.get('/events'),
};

export default apiService;
