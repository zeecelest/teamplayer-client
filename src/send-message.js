import React from 'react';

function SendMessage() {
    return (
        <>
        <section>
                <header>
                    <h4>Choose a Member: </h4>
                </header>
                <form>
                    <select name="member-option">
                        <option value="member1">Member 1</option>
                        <option value="member2">Member 2</option>
                        <option value="member3">Member 3</option>
                        <option value="member4">Member 4</option>
                        <option value="member5">Member 5</option>
                    </select>
                </form>
            </section>
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
                    <button type="submit" class="js-sendMessage-button">Send Message</button>
                </form>
            </section>
  </>
            )
        };
        
export default SendMessage;