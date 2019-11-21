import React from 'react';
import { Link } from 'react-router-dom';

function SendMessage() {
    return (
        <>
            <section>
                <header>
                    <h4>Choose a Message: </h4>
                </header>
                <form>
                    <select name="message-option">
                        <option value="message1">Are today's task(s) complete?</option>
                        <option value="message2">Do you need additional asstance?</option>
                        <option value="message3">What is the ETA for completion?</option>
                        <option value="message4">Where are you?</option>
                        <option value="message5">Time for our meeting.</option>
                    </select>
                </form>
            </section>
            <section>
                <header>
                    <h4>Send personal message(optional)</h4>
                </header>
                <form>
                    <input type="text" id="message-text" placeholder="Type your message here"></input>
                    <br></br>
                    <Link to='/receive-message'><button>Send Message</button></Link>
                </form>
            </section>
  </>
            )
        };
        
export default SendMessage;