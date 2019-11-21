import React from 'react';


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
                    <button type="submit" id="green-button">Yes</button>
                    <button type="submit" id="red-button">No</button>
                    <button type="submit" id="yellow-button">On My Way</button>
                    <button type="submit" id="orange-button">Running Late</button>
                    <button type="submit" id="blue-button">I have a ride</button>
                    <button type="submit" id="purple-button">I'm staying after school</button>
                    <button type="submit" id="pink-button">Sleeping over</button>
                    <button type="submit" id="lightblue-button">I called Mom </button>
                    <button type="submit" id="lightgreen-button">I called Dad</button>
                    <button type="submit" id="lavender-button">I'm locked out</button>
                    <button type="submit" id="white-button">I lost my key</button>
                    <button type="submit" id="brown-button">I found my key</button>
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