import React from 'react';
import { Link } from 'react-router-dom';
import MessagesList from './messagesList';

class SendMessage extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let data = {
            message: e.target.sentMessage.value,
            recipient: e.target.sentMessage.value,
            
        };

        fetch(`http://localhost:8000/api/messages?username=${localStorage.username}`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        }) 
        .then(res => {
            console.log(res)
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
                   <Link to="/receive-message"><button>Send Message</button></Link>
                </form>
                <MessagesList />
            </section>
        </>
            )
        }
    } 

export default SendMessage;
    