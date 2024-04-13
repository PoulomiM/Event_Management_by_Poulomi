import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateEvents from './components/CreateEvents';
import EventCard  from './components/Eventcard';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Auth0Provider
      domain="dev-0fuh2qxye4x83omf.us.auth0.com"
      clientId="DVnBsaO51nBKTS6WnqkbpKPiaCSRB83R"
      redirectUri={window.location.origin}
    >
      <Router>
        <Navbar />
        <EventCard />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-events" component={CreateEvents} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;


