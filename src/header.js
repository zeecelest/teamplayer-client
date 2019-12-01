import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <>
        <nav role="navigation">
          <ul className="navLinks"> 
            <li>Start Here<Link to='/send-message'></Link></li>
            <li>Home<Link to='/homepage'></Link></li>
          </ul>
        </nav>
        <br></br>
        <header role="banner" id="banner">
            <h1>Team Player</h1>
        </header>
    </>
    );
};

export default Header;