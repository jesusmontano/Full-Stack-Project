import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const Splash = () => (
    <header className="splash">
        <div className="navbar">
            <div className="logo-and-title">
                <img className="seatgeek-logo" src="seatgeek_logo.png" alt="" />
                <h1 className="seatnerd-text">SeatNerd</h1>
            </div>
            <GreetingContainer />
        </div>
        <div className="intro-splash-tagline">
            <p>Life's an event.</p>
            <p>We have the tickets.</p>
        </div>
    </header>
)

export default Splash;