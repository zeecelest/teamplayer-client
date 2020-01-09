import React from 'react';
// import { Link } from 'react-router-dom';


class ResponseMessage extends React.Component {
    sendMessage(message) {
        console.log(message)
        let data = {
            recipient: "reply",
            message
            // replyFor: this.props.location.state.messageid.value

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
                        
                            <button id="turquoise-button" type="button" onClick={() => this.sendMessage('Message Received Successfully')}>Message Received Successfully</button>
                            <button id="green-button" onClick={() => this.sendMessage('Yes')}>Yes</button>
                            <button id="red-button" onClick={() => this.sendMessage('No')}>No</button>
                            <button id="yellow-button" onClick={() => this.sendMessage('Almost done')}>Almost done</button>
                            <button id="blue-button">I need additional assistance</button>
                            <button id="purple-button">Project complete</button>
                            <button id="pink-button">On lunch</button>
                            <button id="lightblue-button">Meeting needed</button>
                            <button id="lightgreen-button">On break</button>
                            <button id="lavender-button">In a meeting</button>
                            <button id="orange-button">Running Late</button>
                       
                    </div>
                </section>
                <section>
                    <header>
                        <h3>Write a message</h3>
                    </header>
                    <form>
                        <input type="text" id="message-text" placeholder="(optional)"></input>
                        <br></br>
                        <button type="submit" id="send-button">Send Message</button>
                    </form>
                </section>
            </>
        )
    };
}

export default ResponseMessage;