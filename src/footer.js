import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to='/member-account'>Return to Account</Link>
            <Link to='/homepage'>Home</Link>
        </footer>
    );
};

export default Footer;