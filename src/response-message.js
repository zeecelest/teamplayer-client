import React from 'react';
import { Link } from 'react-router-dom';


function ResponseMessage() {
    return (
    <>
            <section>
                <header>
                    <h3>Message Received:</h3>
                </header>
                <div class="messageAlert">
                    <p>[ placeholder for alert pop up of message sent ]</p>
                </div>
            </section>
            <section>
                <header>
                    <h3>Respond: </h3>
                </header>
                <div class="responseButtons">
                    <Link to="/receive-message">
                     <button id="green-button">Yes</button>
                     <button id="red-button">No</button>
                     <button id="yellow-button">Almost done</button>
                     <button id="orange-button">Running Late</button>
                     <button id="blue-button">I need additional assistance</button>
                     <button id="purple-button">Project complete</button>
                     <button id="pink-button">On lunch</button>
                     <button id="lightblue-button">Meeting needed</button>
                     <button id="lightgreen-button">On break</button>
                     <button id="lavender-button">In a meeting</button>
                   </Link>
                </div>
            </section>
            <section>
                <header>
                    <h3>Write a message(optional)</h3>
                </header>
                <form>
                    <input type="text" id="message-text" placeholder="Type your message here"></input>
                <br></br>
                    <button type="submit" class="js-sendMessage-button">Send Message</button>
                </form>
            </section>
            </>
            )
        };

export default ResponseMessage;