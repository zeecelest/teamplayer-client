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
    fetch('http://localhost:8000/api/messages')
    .then(response => response.json())
    .then(data => {
      this.setState({
        messages: data
      })
    })
  }

  render() {
    const { messages } = this.state
    console.log(this.state);
    const x = messages.map(message => 
      <div className="message-recipient">
        <li>{message.recipient}</li>
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