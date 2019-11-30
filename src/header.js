import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <>
        <nav role="navigation">
          <ul className="navLinks"> 
            <li>"A great place to manage your team!"</li>
            <li>Start Here<Link to='/send-message'></Link></li>
            <li>Home<Link to='/homepage'></Link></li>
          </ul>
        </nav>
        <header role="banner" id="banner">
            <h1>Team Player</h1>
        </header>
    </>
    );
};

export default Header;