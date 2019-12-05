import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to='/homepage'><button id="home">Home</button></Link>
            <p>Created by Zee Celest</p>
            <p>Copyright 2019</p>
        </footer>
    );
};

export default Footer;