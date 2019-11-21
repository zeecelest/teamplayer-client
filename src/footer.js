import React from 'react';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <footer role="content info">
            <Link to='/member-account'>Return to Account</Link>
            <Link to='/homepage'>Home</Link>
        </footer>
    );
};