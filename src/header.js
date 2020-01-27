import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
    <>
        <nav role="navigation">
          <ul className="navLinks"> 
            <li><Link to='/send-message'>Start Here</Link></li>
            <li><Link to='/homepage'>Home</Link></li>
          </ul>
        </nav>
        <br></br>
        <header role="banner" id="banner">
           <h1>Team Player</h1>
        </header>
    </>
    );
};

export default header;