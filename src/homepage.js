import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return ( 
    <>
    <section>
      <header>
        <h3>Team Player</h3>
      </header>
      <p>Team Player makes it easier for managers to communicate with their team by
      simplifying the process.  With "Team-Player" the manager can send a message
      to a team member and the team member can respond simply by selecting a colored
        and labeled response.</p>
    </section>

<section>
<header>
  <h3>Fast and easy way to communicate with your team!</h3>
 </header>
  <p className="screenShots">[<em> placeholder for screenshot of sendMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of receiveMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of responseButton page </em>]</p>
</section>
<Link to='/send-message'><button>Get Started</button></Link>
</>
  );
}

export default Homepage;
   
