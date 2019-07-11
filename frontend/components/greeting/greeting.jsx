import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="login-button" onClick={() => openModal('login')}>Log In</button>
            &nbsp;&nbsp;
      <button className="signup-button" onClick={() => openModal('signup')}>Sign Up</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <button className="header-button-account"><Link to={"/account"} style={{ textDecoration: 'none', color: 'white' }}>Account</Link></button>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;