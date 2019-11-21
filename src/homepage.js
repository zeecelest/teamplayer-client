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
      <Link to='/signup'><button>Sign Up Here</button></Link>
    </section>

<section>
<header>
  <h3>Fast and easy way to "Check-In" with your child!</h3>
 </header>
  <p className="screenShots">[<em> placeholder for screenshot of sendMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of receiveMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of responseButton page </em>]</p>
</section>
<section>
<header>
  <h4>Login</h4>
</header>
<form className="login-form">
  <div>
    <label>User name</label>
    <input placeholder="User name" type="text" name="user-name" id="user-name" required />
  </div>
  <button type="submit" className="js-loginButton">Login</button>
</form>
</section>
</>
  );
}

// class startButton extends React.Component {
//     render () {
//         return (
//             <button
//                 className='js-startButton'
//                 onClick={this.props.handleClick}>Sign Up
//             </button>
//         )
//     }
// }

export default Homepage;
    // startButton
