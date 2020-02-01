import React from 'react';
import MessagesList from './messagesList';

class SendMessage extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        let data = {
            recipient: e.target.recipient.value,
            message: e.target.sentMessage.value
            
            
        };

        fetch(`https://localhost:8000/api/messages/`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        }) 
        .then(res => {
            this.props.history.push("/response-message")
        })
        
    }

   

    render() {
        return (
        <>
            <section>
                <header>
                    <h4>Send a message</h4>
                </header>
                <form onSubmit={this.onSubmit}>
                    <h3>Recipient</h3>
                    <input type="text" name="recipient" id="recipient" placeholder="i.e. John" required></input>
                    <h3>Message</h3>
                    <input type="text" name="sentMessage" id="message-text" placeholder="Type your message here" required></input>
                    <br></br>
                   <button type='submit' id="send-button">Send Message</button>
                </form>
                <MessagesList {...this.props}/>
            </section>
        </>
            )
        }
    } 

export default SendMessage;
    