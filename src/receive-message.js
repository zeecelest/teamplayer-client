import React from 'react';
import { Link } from 'react-router-dom';

function ReceiveMessage() {
    return (
        <>
            <section>
                <header>
                    <h4>Message Received</h4>
                </header>
                <p>[ placeholder for the responseAlert]</p>
            </section>
            <section>
                <Link to='/response-message'><button>Respond</button></Link>
                <Link to='/send-message'><button>Got it!</button></Link>
            </section>
        </>
    )
};

export default ReceiveMessage;