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
    fetch('http://localhost:8000/api/messages/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        messages: data
      })
    })
  }

  render() {
    // const { messages } = this.state
    this.messages = this.state.messages.map((recipient, message) => 
      <div className="message-recipient">
        <li>{ message.recipient }</li>
        <li>{ message.message }</li>
        <li>{ message.date_published }</li>
      </div>
    )
    // console.log(this.state.messages);
    // const x = messages.map(message => 
    //  
      // )
    return (
      <>
     {this.messages}
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