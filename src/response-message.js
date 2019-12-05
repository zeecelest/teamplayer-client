import React from 'react';
import { Link } from 'react-router-dom';


class ResponseMessage extends React.Component {
    sendMessage(message) {
    
        let data = {
                // recipient: e.target.recipient.value,
                message 
                
            };
    
            fetch(`http://localhost:8000/api/messages/`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
    
            }) 
            .then(res => {
                this.props.history.push("/send-message")
            })
            
        }
        render() {
    return (
        <>
            <section>
                <div className="messageReceived">
                    <h3>Message Received</h3>
                </div>
            </section>
            <section>
                <header>
                    <h3>Respond: </h3>
                </header>
                <div className="responseButtons">
                    <Link to="/send-message">
                     <button id="turquoise-button">Message Received Successfully</button>
                     <button id="green-button">Yes</button>
                     <button id="red-button">No</button>
                     <button id="yellow-button">Almost done</button>
                     <button id="blue-button">I need additional assistance</button>
                     <button id="purple-button">Project complete</button>
                     <button id="pink-button">On lunch</button>
                     <button id="lightblue-button">Meeting needed</button>
                     <button id="lightgreen-button">On break</button>
                     <button id="lavender-button">In a meeting</button>
                     <button id="orange-button">Running Late</button>
                   </Link>
                </div>
            </section>
            <section>
                <header>
                    <h3>Write a message</h3>
                </header>
                <form>
                    <input type="text" id="message-text" placeholder="(optional)"></input>
                <br></br>
                    <Link to="/send-message"><button id="send-button">Send Message</button></Link>
                </form>
            </section>
            </>
            )
        };
    }

export default ResponseMessage;