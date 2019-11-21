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
                        <option value="message1">Message 1</option>
                        <option value="message2">Message 2</option>
                        <option value="message3">Message 3</option>
                        <option value="message4">Message 4</option>
                        <option value="message5">Message 5</option>
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