import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

 
//intervals every 5 seconds
  async componentDidMount() { 
    try { 
      this.intervalId = setInterval(async () => { 
      fetch('http://localhost:8000/api/messages/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          messages: data
        })
      }); }, 5000);
     } catch (e) { 
       console.log(e); 
      } 
    }

onReply = (e) => {
  this.props.history.push("/response-message")
}
    
  render() {
    // const { messages } = this.state
    this.messages = this.state.messages.map((message) => 
      <div className="message-recipient" key={message.id}>
        <li>Recipient:  { message.recipient }</li>
        <li>Message:  { message.message }</li>
        <li>Date:  { message.date_published }</li>
        <button type="button" id="reply-button" onClick={this.onReply}>Reply</button>
      </div>
    )
    // console.log(this.state.messages);
    // const x = messages.map(message => 
    //  
      // )
    return (
      <>
        <h2>Previous Messages</h2>
    
     {this.messages}
      </>
        )
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
    // 
}
export default MessagesList;