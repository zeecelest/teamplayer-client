import React from 'react';
import { Link } from 'react-router-dom';



class Homepage extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
      // localStorage.username = e.target.username.value;
      this.props.history.push("/send-message")
    }


  render() {

  return ( 
    <>
    <section>
    <div className="about">
      <p>"Team Player" makes it easier for you to communicate with your team by
      simplifying the process.  With "Team Player" you can send a message
      to a team member and the team member can respond simply by selecting a colored
      and labeled response.</p>
    </div>
    <div className="leader-description">
      <p>Leaders will be able to:</p>
        <ul>
          <li>Send messages to team members.</li>
          <li>Receive quick preselected responsed.</li>
          <li>Get quick updates or status of progress.</li>
          <li>and more!</li>
        </ul>
    </div>  
    <div className="member-description"> 
      <p>Team members will be able to: </p>
        <ul>
          <li>Provide up to date responses.</li>
          <li>Request further assistance.</li>
          <li>and more!</li>
        </ul>
    </div> 
    </section>

<section>
<header>
  <h3>Fast and easy way to communicate with your team!</h3>
 </header>
  <p className="screenShots">[<em> placeholder for screenshot of sendMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of receiveMessage page </em>]</p>
  <p className="screenShots">[<em> placeholder for screenshot of responseButton page </em>]</p>
</section>
<form onSubmit={this.onSubmit}>
                    {/* <h3>Enter a username to get started.</h3>
                    <input type="text" name="username" id="username" placeholder="i.e. John" required></input> */}
                    <Link to='/send-message'><button id="get-started">Get Started</button></Link>
                </form>
{/* <button>Get Started</button> */}
</>
  );
}
}
export default Homepage;
   
