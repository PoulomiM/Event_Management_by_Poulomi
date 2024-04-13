import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
                <img src="./Assests/logo.png" alt="Logo" className="logo-img" />
            </Link>

            {/* Search bar */}
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Search for events" aria-label="Search" i="fas fa-search" />
                </div>
                <div className="input-group ml-lg-3">
                    <input className="form-control" type="search" placeholder="Search for location" aria-label="Search" i="fas fa-map-marker-alt" />
                </div>
            </form>

            {/* Collapsible toggle button for smaller screens */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation links */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-event">Create Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/liked-events">Liked Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


