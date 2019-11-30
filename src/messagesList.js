import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    // Promise.all([
      fetch(`http://localhost:8000/api/messages?username=${localStorage.username}`)
      // fetch(`http://localhost:8000/api/message?received_message=${localStorage.received_message}`)
    // ])
    .then(response => response.json())
    .then(data => {
      this.setState({
        messages: data
      })
    })
  }

  render() {
    const { messages } = this.state
    const x = messages.map(message =>
      <div className="messages-list" key={message.id}>
        <li><h3>Recipient:</h3>{message.recipient} <h3>Message:</h3>{message.message}<h3> Date:</h3>{message.date_published}</li>
      </div>
      )
    return (
      <>
      {x}
      </>
        )
      }
    }

    // function readableReviewCount(number) {
    //   switch(number) {
    //     case 0:
    //       return 'no messages yet'
        
    //     default:
    //       return `you have ${number} messages`
    //   }
    // }

    // function truncate(text) {
    //   const words = text.split('')

    //   if (words.length > 10) {
    //     return words.slice(0, 10).join(' ') + '...'
    //   }
    //   return text
    // }

export default MessagesList;