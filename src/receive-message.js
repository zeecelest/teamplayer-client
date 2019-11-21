import React from 'react';
import { Link } from 'react-router-dom';

function ReceiveMessage() {
    return (
        <>
            <section>
                <header>
                    <h4>Response</h4>
                </header>
                <p>[ placeholder for the responseAlert]</p>
            </section>
            <section>
                <Link to='/send-message'><button>Respond</button></Link>
                <Link to='/member-account'><button>Ok</button></Link>
            </section>
        </>
    )
};

export default ReceiveMessage;